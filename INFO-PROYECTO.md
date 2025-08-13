# SERVICES DUARTE - Información del Proyecto

## 📋 INFORMACIÓN GENERAL
- **Empresa**: SERVICES DUARTE
- **RUC**: 121180190003P
- **Fundada**: Enero 2000 (25+ años de experiencia)
- **Especialidad**: Rotulación, Fachadas, Metalurgia, Letras Corporativas

## 📞 DATOS DE CONTACTO
- **Teléfono**: +505 5705 0821
- **WhatsApp**: +505 5705 0821
- **Instagram**: @Multiser_Duarte
- **Email**: servicesduarte22@gmail.com
- **Dirección**: WALTER FERRETI (WASPAN NORTE), KM 7 CARRETERA NORTE 7C AL LAGO M/I ESQUINERA

## 🔐 CREDENCIALES PANEL ADMIN
- **Usuario**: Davidd18
- **Contraseña**: AHB314867id2025
- **Email Recuperación**: servicesduarte22@gmail.com
- **URL**: /admin

## 🛠️ TECNOLOGÍAS UTILIZADAS
### Frontend:
- **React 19.0.0** (JavaScript Framework)
- **Tailwind CSS** (Estilos)
- **Shadcn/ui** (Componentes UI)
- **Lucide React** (Iconos)
- **React Router** (Navegación)
- **Axios** (HTTP Requests)

### Backend:
- **FastAPI** (Python Web Framework)
- **MongoDB** (Base de Datos NoSQL)
- **Motor** (MongoDB Async Driver)
- **Pydantic** (Validación de Datos)
- **Uvicorn** (ASGI Server)

### Características:
- **Sistema de Autenticación** completo con JWT
- **Panel de Administración** con 6 secciones
- **Responsive Design** (móvil y escritorio)
- **Optimización SEO** integrada
- **Integración WhatsApp** completa
- **Galería Instagram** interactiva
- **Sistema de Efectos Visuales**

## 🎨 SERVICIOS DE LA EMPRESA
1. **Rotulación**: Impresión gran formato, vinil adhesivo, microperforado, lona banner
2. **Fachadas Publicitarias**: Transformación visual con colores vibrantes
3. **Metalurgia**: Estructuras metálicas, marquesinas, toldos, stands
4. **Pintura Profesional**: Renovación de casas, negocios y oficinas
5. **Letras Corporativas y Rótulos Luminosos**: LED, acrílico, PVC, latón

## 📂 ESTRUCTURA DEL PROYECTO
```
services-duarte/
├── frontend/                    # React Application
│   ├── src/
│   │   ├── components/         # Componentes React
│   │   │   ├── ui/            # Componentes Shadcn
│   │   │   ├── HomePage.js    # Página Principal
│   │   │   ├── AdminPanel.js  # Panel Admin
│   │   │   └── Login.js       # Sistema Login
│   │   ├── contexts/          # Context Providers
│   │   │   ├── AuthContext.js # Autenticación
│   │   │   └── AdminContext.js# Configuración Admin
│   │   ├── hooks/             # Custom Hooks
│   │   └── mock.js           # Datos Mock
│   ├── public/               # Archivos Estáticos
│   └── package.json         # Dependencias NPM
├── backend/                 # FastAPI Application  
│   ├── server.py           # Servidor Principal
│   ├── requirements.txt    # Dependencias Python
│   └── .env               # Variables Entorno
├── README-INSTALACION.md  # Guía Instalación
└── install.sh            # Script Automático
```

## 🎯 FUNCIONALIDADES IMPLEMENTADAS

### Página Principal:
- ✅ Hero Section con estadísticas
- ✅ Sección de Servicios (5 servicios principales)
- ✅ Galería de Imágenes (12 imágenes profesionales)
- ✅ Información de la empresa (Historia, Misión, Visión, Valores)
- ✅ Testimonios de clientes
- ✅ Sección de contacto completa
- ✅ Botón flotante de WhatsApp
- ✅ Footer con información

### Panel de Administración:
- ✅ **General**: Info empresa, teléfono, dirección
- ✅ **Medios**: Subida de logo, imágenes, videos
- ✅ **Efectos**: Control efectos visuales (incluyendo vértigo)
- ✅ **Redes**: Configuración todas las redes sociales
- ✅ **Dominio**: Configuración dominio personalizado
- ✅ **SEO**: Optimización motores búsqueda

### Sistema de Seguridad:
- ✅ Autenticación robusta con intentos limitados
- ✅ Bloqueo automático tras 5 intentos fallidos
- ✅ Sesiones con expiración (24 horas)
- ✅ Sistema recuperación por email
- ✅ Rutas protegidas con contexto
- ✅ Logout seguro con limpieza

### Integración WhatsApp:
- ✅ 4 botones estratégicamente ubicados
- ✅ Mensaje predefinido automático
- ✅ Botón flotante con animación
- ✅ Integración en navegación y footer

### Integración Instagram:
- ✅ Enlaces directos a perfil
- ✅ Galería conectada a Instagram
- ✅ Botones en múltiples secciones

## 🎨 DISEÑO Y COLORES
- **Colores Principales**: Teal (#0d9488), Naranja (#f97316), Azul
- **Tipografía**: Sistema nativo optimizada
- **Efectos**: Gradientes suaves, sombras, animaciones
- **Responsive**: Adaptable a todos los dispositivos
- **Accesibilidad**: Contrastes apropiados, navegación por teclado

## 📈 OPTIMIZACIÓN SEO
- ✅ Meta tags configurados
- ✅ Open Graph implementado
- ✅ Schema.org markup
- ✅ Sitemap automático
- ✅ Robots.txt configurado
- ✅ URLs amigables
- ✅ Optimización imágenes
- ✅ Performance optimizado

## 🔄 COMANDOS ÚTILES

### Desarrollo:
```bash
# Frontend
cd frontend && yarn start

# Backend  
cd backend && python -m uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

### Producción:
```bash
# Ver estado servicios
sudo systemctl status services-duarte-*

# Reiniciar servicios
sudo systemctl restart services-duarte-backend
sudo systemctl restart services-duarte-frontend

# Ver logs
sudo journalctl -u services-duarte-backend -f
sudo journalctl -u services-duarte-frontend -f
```

### Backup MongoDB:
```bash
mongodump --db services_duarte --out /backup/
```

## 📞 SOPORTE TÉCNICO
Para cualquier problema técnico o consulta sobre el código, revisa:
1. Los logs del sistema con `journalctl`
2. El archivo README-INSTALACION.md
3. El estado de los servicios con `systemctl status`

---
**Desarrollado con ❤️ para SERVICES DUARTE**
*Transformando ideas en realidades desde el año 2000*