# SERVICES DUARTE - Setup Completo para GitHub

## 🚀 REPOSITORIO LISTO PARA RAILWAY

Este es tu repositorio completo optimizado para deploy automático en Railway.

---

## 📦 ESTRUCTURA DEL PROYECTO

```
services-duarte/
├── frontend/                 # React Application
│   ├── src/                 # Código fuente
│   ├── public/              # Archivos estáticos
│   ├── package.json         # Dependencias NPM
│   └── .env                 # Variables entorno
├── backend/                 # FastAPI Application
│   ├── server.py           # Servidor principal
│   ├── requirements.txt    # Dependencias Python
│   └── .env               # Variables entorno
├── railway.json           # Configuración Railway
├── README.md             # Documentación
└── .gitignore           # Archivos a ignorar
```

---

## ⚡ CONFIGURACIÓN RAILWAY AUTOMÁTICA

### Frontend (React):
- **Detección**: Automática por package.json
- **Build**: `yarn install && yarn build`
- **Start**: `yarn start`
- **Puerto**: 3000 (automático)

### Backend (FastAPI):
- **Detección**: Automática por requirements.txt  
- **Build**: `pip install -r requirements.txt`
- **Start**: `uvicorn server:app --host 0.0.0.0 --port $PORT`
- **Puerto**: Variable $PORT (automático)

### Base de Datos:
- **MongoDB**: Se conecta automáticamente
- **Variable**: $MONGO_URL (automática)

---

## 🔧 VARIABLES DE ENTORNO

### Configuradas Automáticamente:
```bash
# Frontend
REACT_APP_BACKEND_URL=https://services-duarte-backend.railway.app

# Backend  
MONGO_URL=mongodb://mongo:password@railway.app:27017/services_duarte
DB_NAME=services_duarte
PORT=$PORT
```

---

## 🌐 DOMINIOS

### URLs Automáticas Railway:
- **Frontend**: `https://services-duarte.railway.app`
- **Backend**: `https://services-duarte-backend.railway.app`
- **Panel Admin**: `https://services-duarte.railway.app/admin`

### Dominio Personalizado:
1. **Railway**: Settings → Domains → Add Custom Domain
2. **DNS**: CNAME record → railway.app
3. **SSL**: Automático con Let's Encrypt

---

## 🔐 CREDENCIALES PANEL ADMIN

- **Usuario**: Davidd18
- **Contraseña**: AHB314867id2025
- **Email**: servicesduarte22@gmail.com

---

## 📋 DEPLOY EN RAILWAY (PASOS)

### 1. Ir a Railway:
https://railway.app

### 2. Login con GitHub:
- Click "Login with GitHub"
- Autorizar Railway

### 3. Nuevo Proyecto:
- Click "New Project"
- Click "Deploy from GitHub repo"
- Seleccionar "services-duarte"

### 4. Configuración Automática:
- Railway detecta React + Python
- Configura build commands automáticamente
- Crea variables de entorno
- Conecta MongoDB

### 5. Deploy:
- Click "Deploy"
- Esperar 2-3 minutos
- ¡Sitio funcionando!

---

## 💰 COSTOS

- **$5/mes**: Aplicación completa
- **$5 gratis**: Para empezar
- **Incluye**: Frontend + Backend + MongoDB + SSL + Custom Domain

---

## ✅ FUNCIONALIDADES

### Sitio Web:
- ✅ Design responsive profesional
- ✅ 4 botones WhatsApp + flotante  
- ✅ Galería Instagram interactiva
- ✅ SEO optimizado
- ✅ Colores atractivos teal/naranja

### Panel Admin:
- ✅ 6 secciones: General, Medios, Efectos, Redes, Dominio, SEO
- ✅ Sistema autenticación seguro
- ✅ Gestión contenido completa
- ✅ Efectos visuales (incluyendo vértigo)

---

## 🤝 SOPORTE

Para cualquier problema:
1. **Railway Logs**: Dashboard → Runtime Logs
2. **Railway Support**: Chat 24/7
3. **Documentación**: railway.app/docs

---

## 📞 CONTACTO EMPRESA

- **SERVICES DUARTE**
- **RUC**: 121180190003P  
- **Teléfono**: +505 5705 0821
- **WhatsApp**: +505 5705 0821
- **Instagram**: @Multiser_Duarte

---

🎉 **¡Tu sitio web profesional está listo para deploy!**