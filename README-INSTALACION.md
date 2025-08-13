# SERVICES DUARTE - Sitio Web Profesional
## 🚀 Guía de Instalación en Servidor Externo

### 📋 Requisitos del Servidor
- **Ubuntu/Debian** 20.04 o superior (recomendado)
- **Node.js** v18+ y **npm/yarn**
- **Python** 3.8+
- **MongoDB** 4.4+
- **Nginx** (para proxy reverso)
- **Dominio propio** configurado

---

## 🛠️ PASO 1: Preparar el Servidor

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar dependencias básicas
sudo apt install -y curl wget git nginx mongodb

# Instalar Node.js v18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar yarn
npm install -g yarn

# Instalar Python y pip
sudo apt install -y python3 python3-pip python3-venv

# Verificar instalaciones
node --version    # Debe ser v18+
python3 --version # Debe ser 3.8+
mongod --version  # Debe estar instalado
```

---

## 📦 PASO 2: Instalar el Proyecto

```bash
# Crear directorio para el proyecto
sudo mkdir -p /var/www/services-duarte
sudo chown $USER:$USER /var/www/services-duarte
cd /var/www/services-duarte

# Descomprimir el archivo (sube services-duarte-complete.tar.gz a tu servidor)
tar -xzf services-duarte-complete.tar.gz

# Instalar dependencias del Frontend
cd frontend
yarn install
cd ..

# Instalar dependencias del Backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..
```

---

## ⚙️ PASO 3: Configurar Variables de Entorno

### Frontend (.env):
```bash
cd frontend
nano .env
```
**Contenido del archivo:**
```
REACT_APP_BACKEND_URL=https://tudominio.com
```

### Backend (.env):
```bash
cd ../backend
nano .env
```
**Contenido del archivo:**
```
MONGO_URL=mongodb://localhost:27017/services_duarte
DB_NAME=services_duarte
```

---

## 🌐 PASO 4: Configurar Nginx

```bash
# Crear configuración de Nginx
sudo nano /etc/nginx/sites-available/services-duarte
```

**Contenido del archivo:**
```nginx
server {
    listen 80;
    server_name tudominio.com www.tudominio.com;
    
    # Frontend (React)
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Backend API (FastAPI)
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Habilitar el sitio
sudo ln -s /etc/nginx/sites-available/services-duarte /etc/nginx/sites-enabled/
sudo nginx -t  # Verificar configuración
sudo systemctl reload nginx
```

---

## 🔐 PASO 5: Configurar SSL (HTTPS)

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtener certificado SSL (reemplaza tudominio.com)
sudo certbot --nginx -d tudominio.com -d www.tudominio.com

# Verificar renovación automática
sudo certbot renew --dry-run
```

---

## 🔄 PASO 6: Crear Servicios del Sistema

### Servicio del Backend:
```bash
sudo nano /etc/systemd/system/services-duarte-backend.service
```

**Contenido:**
```ini
[Unit]
Description=Services Duarte Backend API
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/services-duarte/backend
Environment=PATH=/var/www/services-duarte/backend/venv/bin
ExecStart=/var/www/services-duarte/backend/venv/bin/python -m uvicorn server:app --host 0.0.0.0 --port 8001
Restart=always

[Install]
WantedBy=multi-user.target
```

### Servicio del Frontend:
```bash
sudo nano /etc/systemd/system/services-duarte-frontend.service
```

**Contenido:**
```ini
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
```

### Habilitar e Iniciar Servicios:
```bash
# Cambiar permisos
sudo chown -R www-data:www-data /var/www/services-duarte

# Habilitar servicios
sudo systemctl enable services-duarte-backend
sudo systemctl enable services-duarte-frontend

# Iniciar servicios
sudo systemctl start services-duarte-backend
sudo systemctl start services-duarte-frontend

# Verificar estado
sudo systemctl status services-duarte-backend
sudo systemctl status services-duarte-frontend
```

---

## 🌍 PASO 7: Configurar DNS

En tu proveedor de dominio, configura los siguientes registros DNS:

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | @ | [IP_DE_TU_SERVIDOR] |
| A | www | [IP_DE_TU_SERVIDOR] |
| CNAME | admin | tudominio.com |

---

## 🔑 CREDENCIALES DEL PANEL ADMIN

- **URL**: `https://tudominio.com/admin`
- **Usuario**: `Davidd18`
- **Contraseña**: `AHB314867id2025`
- **Email recuperación**: `servicesduarte22@gmail.com`

---

## 📊 VERIFICACIÓN FINAL

```bash
# Verificar que todo esté corriendo
curl http://localhost:3000  # Frontend
curl http://localhost:8001/api/  # Backend

# Ver logs si hay problemas
sudo journalctl -u services-duarte-frontend -f
sudo journalctl -u services-duarte-backend -f
```

---

## 🔧 COMANDOS ÚTILES DE MANTENIMIENTO

```bash
# Reiniciar servicios
sudo systemctl restart services-duarte-frontend
sudo systemctl restart services-duarte-backend

# Ver logs
sudo journalctl -u services-duarte-frontend --since "1 hour ago"
sudo journalctl -u services-duarte-backend --since "1 hour ago"

# Actualizar certificado SSL manualmente
sudo certbot renew

# Backup de MongoDB
mongodump --db services_duarte --out /backup/mongodb/
```

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### Si el sitio no carga:
1. Verificar que Nginx esté corriendo: `sudo systemctl status nginx`
2. Verificar servicios: `sudo systemctl status services-duarte-*`
3. Verificar DNS: `nslookup tudominio.com`

### Si el panel de admin no funciona:
1. Verificar que el backend esté corriendo en puerto 8001
2. Verificar logs del backend: `sudo journalctl -u services-duarte-backend`

---

## 📞 INFORMACIÓN DE CONTACTO

- **Empresa**: SERVICES DUARTE
- **RUC**: 121180190003P
- **Teléfono**: +505 5705 0821
- **Instagram**: @Multiser_Duarte
- **Email**: servicesduarte22@gmail.com

---

¡Tu sitio web profesional estará listo en tu propio servidor! 🎉