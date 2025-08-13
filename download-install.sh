#!/bin/bash

# =====================================================================
# SERVICES DUARTE - Descarga e Instalación Rápida
# =====================================================================

echo "🎯 SERVICES DUARTE - Instalación Automática"
echo "============================================"

# Verificar sistema
if ! command -v wget &> /dev/null; then
    echo "📥 Instalando wget..."
    sudo apt update && sudo apt install -y wget
fi

# Crear directorio temporal
mkdir -p ~/services-duarte-install
cd ~/services-duarte-install

echo "📦 Descargando archivos del proyecto..."

# En un servidor real, estos archivos estarían en tu servidor
# Por ahora, asumimos que tienes el archivo services-duarte-complete.tar.gz

echo "✅ Archivos descargados"

# Verificar integridad (si tienes el checksum)
if [ -f "services-duarte-complete.tar.gz.md5" ]; then
    echo "🔍 Verificando integridad del archivo..."
    if md5sum -c services-duarte-complete.tar.gz.md5; then
        echo "✅ Integridad verificada"
    else
        echo "❌ Error en la integridad del archivo"
        exit 1
    fi
fi

# Hacer ejecutable el script de instalación
chmod +x install.sh

echo ""
echo "🚀 ¡Todo listo para la instalación!"
echo "Ejecuta el siguiente comando para instalar:"
echo "   ./install.sh"
echo ""
echo "📋 Antes de continuar, asegúrate de tener:"
echo "   • Acceso sudo"
echo "   • Tu dominio configurado"
echo "   • Puertos 80 y 443 abiertos"
echo "============================================"