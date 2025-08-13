#!/bin/bash

# ===================================================================
# SERVICES DUARTE - Script de Instalación Automática
# ===================================================================

echo "🚀 Iniciando instalación de SERVICES DUARTE..."
echo "=================================================="

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar mensajes
show_message() {
    echo -e "${GREEN}✅ $1${NC}"
}

show_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

show_error() {
    echo -e "${RED}❌ $1${NC}"
}

show_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Verificar si se está ejecutando como root
if [[ $EUID -eq 0 ]]; then
   show_error "Este script NO debe ejecutarse como root (sudo)"
   exit 1
fi

# Solicitar información del dominio
echo ""
show_info "Por favor, ingresa la información de tu dominio:"
read -p "Dominio (ej: servicesduarte.com): " DOMAIN
read -p "¿Incluir www? (y/n): " INCLUDE_WWW

# Validar entrada
if [ -z "$DOMAIN" ]; then
    show_error "Debes proporcionar un dominio"
    exit 1
fi

echo ""
show_info "Configurando para dominio: $DOMAIN"
if [ "$INCLUDE_WWW" = "y" ]; then
    show_info "Incluyendo subdominio www"
fi

# 1. Actualizar sistema
show_info "Actualizando sistema..."
sudo apt update && sudo apt upgrade -y

# 2. Instalar dependencias
show_info "Instalando dependencias básicas..."
sudo apt install -y curl wget git nginx mongodb software-properties-common

# 3. Instalar Node.js v18
show_info "Instalando Node.js v18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 4. Instalar Yarn
show_info "Instalando Yarn..."
sudo npm install -g yarn

# 5. Instalar Python
show_info "Instalando Python y dependencias..."
sudo apt install -y python3 python3-pip python3-venv

# 6. Crear directorio del proyecto
show_info "Creando estructura de directorios..."
sudo mkdir -p /var/www/services-duarte
sudo chown $USER:$USER /var/www/services-duarte
cd /var/www/services-duarte

# 7. Verificar que el archivo comprimido existe
if [ ! -f "services-duarte-complete.tar.gz" ]; then
    show_error "No se encontró el archivo services-duarte-complete.tar.gz"
    show_info "Por favor, sube el archivo a este directorio y ejecuta el script nuevamente"
    exit 1
fi

# 8. Descomprimir proyecto
show_info "Descomprimiendo proyecto..."
tar -xzf services-duarte-complete.tar.gz

# 9. Instalar dependencias del Frontend
show_info "Instalando dependencias del Frontend..."
cd frontend
yarn install
show_message "Dependencias del frontend instaladas"

# 10. Configurar variables de entorno del Frontend
show_info "Configurando variables de entorno del Frontend..."
cat > .env << EOF
REACT_APP_BACKEND_URL=https://$DOMAIN
EOF

cd ..

# 11. Instalar dependencias del Backend
show_info "Instalando dependencias del Backend..."
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
show_message "Dependencias del backend instaladas"

# 12. Configurar variables de entorno del Backend
show_info "Configurando variables de entorno del Backend..."
cat > .env << EOF
MONGO_URL=mongodb://localhost:27017/services_duarte
DB_NAME=services_duarte
EOF

cd ..

# 13. Configurar MongoDB
show_info "Configurando MongoDB..."
sudo systemctl start mongodb
sudo systemctl enable mongodb

# 14. Configurar Nginx
show_info "Configurando Nginx..."
if [ "$INCLUDE_WWW" = "y" ]; then
    SERVER_NAME="$DOMAIN www.$DOMAIN"
else
    SERVER_NAME="$DOMAIN"
fi

sudo tee /etc/nginx/sites-available/services-duarte > /dev/null << EOF
server {
    listen 80;
    server_name $SERVER_NAME;
    
    # Frontend (React)
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
    
    # Backend API (FastAPI)
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Habilitar sitio
sudo ln -s /etc/nginx/sites-available/services-duarte /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default  # Remover sitio por defecto
sudo nginx -t
sudo systemctl reload nginx

show_message "Nginx configurado correctamente"

# 15. Crear servicios systemd
show_info "Creando servicios del sistema..."

# Servicio Backend
sudo tee /etc/systemd/system/services-duarte-backend.service > /dev/null << EOF
[Unit]
Description=Services Duarte Backend API
After=network.target mongodb.service

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/services-duarte/backend
Environment=PATH=/var/www/services-duarte/backend/venv/bin
ExecStart=/var/www/services-duarte/backend/venv/bin/python -m uvicorn server:app --host 0.0.0.0 --port 8001
Restart=always

[Install]
WantedBy=multi-user.target
EOF

# Servicio Frontend
sudo tee /etc/systemd/system/services-duarte-frontend.service > /dev/null << EOF
[Unit]
Description=Services Duarte Frontend
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/services-duarte/frontend
ExecStart=/usr/bin/yarn start
Restart=always
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
EOF

# 16. Configurar permisos
show_info "Configurando permisos..."
sudo chown -R www-data:www-data /var/www/services-duarte

# 17. Habilitar e iniciar servicios
show_info "Iniciando servicios..."
sudo systemctl daemon-reload
sudo systemctl enable services-duarte-backend
sudo systemctl enable services-duarte-frontend
sudo systemctl start services-duarte-backend
sudo systemctl start services-duarte-frontend

# 18. Verificar servicios
sleep 5
backend_status=$(sudo systemctl is-active services-duarte-backend)
frontend_status=$(sudo systemctl is-active services-duarte-frontend)

if [ "$backend_status" = "active" ]; then
    show_message "Backend iniciado correctamente"
else
    show_error "Error al iniciar el backend"
fi

if [ "$frontend_status" = "active" ]; then
    show_message "Frontend iniciado correctamente"
else
    show_error "Error al iniciar el frontend"
fi

# 19. Instalar Certbot para SSL
show_info "Instalando Certbot para SSL..."
sudo apt install certbot python3-certbot-nginx -y

echo ""
echo "=========================================="
show_message "¡INSTALACIÓN COMPLETADA!"
echo "=========================================="
echo ""
show_info "Próximos pasos:"
echo "1. Configura los DNS de tu dominio para que apunten a la IP de este servidor"
echo "2. Espera a que los DNS se propaguen (puede tomar hasta 24 horas)"
echo "3. Ejecuta el siguiente comando para obtener certificado SSL:"
if [ "$INCLUDE_WWW" = "y" ]; then
    echo "   sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
else
    echo "   sudo certbot --nginx -d $DOMAIN"
fi
echo ""
show_info "URLs importantes:"
echo "   🌐 Sitio web: http://$DOMAIN (https://$DOMAIN después del SSL)"
echo "   🔐 Panel admin: http://$DOMAIN/admin"
echo ""
show_info "Credenciales del panel admin:"
echo "   👤 Usuario: Davidd18"
echo "   🔑 Contraseña: AHB314867id2025"
echo "   📧 Email: servicesduarte22@gmail.com"
echo ""
show_info "Para verificar el estado de los servicios:"
echo "   sudo systemctl status services-duarte-backend"
echo "   sudo systemctl status services-duarte-frontend"
echo ""
show_warning "IMPORTANTE: Configura tus DNS antes de obtener el certificado SSL"
echo "=========================================="