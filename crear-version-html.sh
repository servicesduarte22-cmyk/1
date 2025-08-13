#!/bin/bash

# CREAR VERSIÓN ESTÁTICA HTML PARA HOSTGATOR
# ==========================================

echo "🎯 Creando versión HTML estática para HostGator..."

# Crear directorio para versión estática
mkdir -p /app/hostgator-version/

# Crear index.html basado en el React component
cat > /app/hostgator-version/index.html << 'EOF'
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services Duarte - Rotulación, Fachadas y Publicidad Profesional</title>
    <meta name="description" content="Empresa líder en rotulación, fachadas publicitarias, metalurgia y letras corporativas en Nicaragua. 25+ años de experiencia transformando ideas en realidad.">
    <meta name="keywords" content="rotulación nicaragua, fachadas publicitarias, letras corporativas, metalurgia, publicidad managua, services duarte">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Custom CSS -->
    <style>
        /* Smooth scrolling */
        html { scroll-behavior: smooth; }
        
        /* Custom animations */
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        /* Gradient text */
        .gradient-text {
            background: linear-gradient(135deg, #0d9488, #f97316);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    </style>
</head>
<body class="bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">

    <!-- Navigation -->
    <nav class="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-2 border-teal-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <div class="flex items-center space-x-4">
                    <img src="https://customer-assets.emergentagent.com/job_fc9657d6-7929-4eec-92e2-af27677a1c50/artifacts/et6e4mcy_Recurso%202.png" 
                         alt="Services Duarte Logo" class="h-12 w-auto">
                    <div>
                        <h1 class="text-2xl font-bold gradient-text">SERVICES DUARTE</h1>
                        <p class="text-sm text-gray-600">25+ años de experiencia</p>
                    </div>
                </div>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-6">
                    <a href="#servicios" class="text-gray-700 hover:text-teal-600 transition-colors font-medium">Servicios</a>
                    <a href="#galeria" class="text-gray-700 hover:text-teal-600 transition-colors font-medium">Galería</a>
                    <a href="#nosotros" class="text-gray-700 hover:text-teal-600 transition-colors font-medium">Nosotros</a>
                    <a href="#contacto" class="text-gray-700 hover:text-teal-600 transition-colors font-medium">Contacto</a>
                    <a href="https://wa.me/50557050821?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20SERVICES%20DUARTE" 
                       target="_blank"
                       class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        📱 WhatsApp
                    </a>
                    <a href="https://instagram.com/Multiser_Duarte" target="_blank"
                       class="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        📸 Instagram
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button class="md:hidden text-gray-700" onclick="toggleMobileMenu()">
                    <span id="menuIcon">☰</span>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div id="mobileMenu" class="md:hidden py-4 border-t border-gray-200 hidden">
                <div class="flex flex-col space-y-3">
                    <a href="#servicios" class="text-gray-700 hover:text-teal-600 py-2">Servicios</a>
                    <a href="#galeria" class="text-gray-700 hover:text-teal-600 py-2">Galería</a>
                    <a href="#nosotros" class="text-gray-700 hover:text-teal-600 py-2">Nosotros</a>
                    <a href="#contacto" class="text-gray-700 hover:text-teal-600 py-2">Contacto</a>
                    <a href="https://wa.me/50557050821" target="_blank"
                       class="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-center">
                        📱 WhatsApp
                    </a>
                    <a href="https://instagram.com/Multiser_Duarte" target="_blank"
                       class="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2 rounded-lg text-center">
                        📸 Instagram
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-orange-400/5"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div class="text-center">
                <div class="mb-4">
                    <span class="bg-gradient-to-r from-amber-100 to-orange-100 text-orange-800 border-orange-200 px-4 py-2 rounded-full text-sm font-medium">
                        🏆 Empresa Autorizada · RUC: 121180190003P
                    </span>
                </div>
                <h1 class="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
                    SERVICES DUARTE
                </h1>
                <p class="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                    Tu inversión está segura y con sello de calidad, nuestra experiencia es nuestro mayor orgullo.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <a href="https://wa.me/50557050821?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20SERVICES%20DUARTE" 
                       target="_blank"
                       class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        📱 Consulta por WhatsApp
                    </a>
                    <a href="https://instagram.com/Multiser_Duarte" target="_blank"
                       class="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        📸 Ver Nuestros Trabajos
                    </a>
                    <a href="tel:+50557050821"
                       class="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        📞 +505 5705 0821
                    </a>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div class="text-center">
                        <div class="text-3xl md:text-4xl font-bold gradient-text mb-2">25+</div>
                        <div class="text-gray-600 text-sm md:text-base">Años de Experiencia</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
                        <div class="text-gray-600 text-sm md:text-base">Proyectos Completados</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl md:text-4xl font-bold gradient-text mb-2">100%</div>
                        <div class="text-gray-600 text-sm md:text-base">Clientes Satisfechos</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
                        <div class="text-gray-600 text-sm md:text-base">Soporte</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="servicios" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 border-teal-200 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                    👥 Nuestros Servicios
                </span>
                <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                    ¡Variedad de servicios en un mismo lugar!
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Y si no lo tenemos, proponga lo que necesite y ¡lo haremos!
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1: Rotulación -->
                <div class="group bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-teal-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div class="relative overflow-hidden rounded-t-lg">
                        <img src="https://images.unsplash.com/photo-1567093597754-35b79c864763" 
                             alt="Rotulación" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                            🏷️
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors mb-2">
                            Rotulación
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-4">
                            Le ofrecemos rotulación con impresión a gran formato en vinil adhesivo, microperforado, lona banner y más. Llevamos tu proyecto desde la idea conceptual hasta el producto final.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Stickers</span>
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Facias</span>
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Banners</span>
                            <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">+8 más</span>
                        </div>
                        <a href="https://instagram.com/Multiser_Duarte" target="_blank"
                           class="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-lg text-center block transition-all duration-300">
                            Ver Trabajos 🔗
                        </a>
                    </div>
                </div>

                <!-- Service 2: Fachadas -->
                <div class="group bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-teal-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div class="relative overflow-hidden rounded-t-lg">
                        <img src="https://images.unsplash.com/photo-1534163655406-5596ea058a28" 
                             alt="Fachadas" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                            🏢
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors mb-2">
                            Fachadas Publicitarias
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-4">
                            Transformamos y renovamos la apariencia visual de tu negocio, infundiéndole vida con colores fuertes y vibrantes que lo hacen atractivo y agradable para tus clientes.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Renovación visual</span>
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Colores vibrantes</span>
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Alta calidad</span>
                        </div>
                        <a href="https://instagram.com/Multiser_Duarte" target="_blank"
                           class="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-lg text-center block transition-all duration-300">
                            Ver Trabajos 🔗
                        </a>
                    </div>
                </div>

                <!-- Service 3: Metalurgia -->
                <div class="group bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-teal-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div class="relative overflow-hidden rounded-t-lg">
                        <img src="https://images.unsplash.com/photo-1531053326607-9d349096d887" 
                             alt="Metalurgia" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                            🔧
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors mb-2">
                            Metalurgia
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-4">
                            Con nuestro servicio de metalurgia podemos crear cualquier estructura metálica que desees, incluyendo facias, marquesinas, toldos, backing publicitario, stands y mucho más.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Marquesinas</span>
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Toldos</span>
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Stands</span>
                        </div>
                        <a href="https://instagram.com/Multiser_Duarte" target="_blank"
                           class="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-lg text-center block transition-all duration-300">
                            Ver Trabajos 🔗
                        </a>
                    </div>
                </div>

                <!-- Service 4: Pintura -->
                <div class="group bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-teal-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div class="relative overflow-hidden rounded-t-lg">
                        <img src="https://images.unsplash.com/photo-1640419238789-85f92c946cb6" 
                             alt="Pintura" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                            🎨
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors mb-2">
                            Pintura Profesional
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-4">
                            ¿Quieres rejuvenecer tu casa, negocio u oficina? Nos encargamos de renovarlo. Somos profesionales en pintura y te sorprenderás con los resultados.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Residencial</span>
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Comercial</span>
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Oficinas</span>
                        </div>
                        <a href="https://instagram.com/Multiser_Duarte" target="_blank"
                           class="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-lg text-center block transition-all duration-300">
                            Ver Trabajos 🔗
                        </a>
                    </div>
                </div>

                <!-- Service 5: Letras Corporativas -->
                <div class="group bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-teal-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div class="relative overflow-hidden rounded-t-lg">
                        <img src="https://images.unsplash.com/photo-1550424844-f7b914439c1b" 
                             alt="Letras Corporativas" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                            💡
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors mb-2">
                            Letras Corporativas y Rótulos Luminosos
                        </h3>
                        <p class="text-gray-600 leading-relaxed mb-4">
                            Destaca a lo grande el nombre de tu negocio en letras corporativas luminosas, de luz directa e indirecta, enchapadas en acrílico sobre pvc.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">LED</span>
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Acrílico</span>
                            <span class="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1 rounded">Latón</span>
                        </div>
                        <a href="https://instagram.com/Multiser_Duarte" target="_blank"
                           class="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-4 py-2 rounded-lg text-center block transition-all duration-300">
                            Ver Trabajos 🔗
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="galeria" class="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="bg-gradient-to-r from-amber-100 to-orange-100 text-orange-800 border-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                    📸 Galería
                </span>
                <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                    Nuestros Trabajos Realizados
                </h2>
                <p class="text-xl text-gray-600 mb-8">
                    Cada proyecto es una muestra de nuestra pasión y compromiso con la excelencia
                </p>
            </div>

            <!-- Gallery Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                <div class="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                     onclick="window.open('https://instagram.com/Multiser_Duarte', '_blank')">
                    <div class="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1567093597754-35b79c864763" 
                             alt="Instalación de Letras Corporativas" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="bg-white/90 backdrop-blur-sm p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                📸
                            </div>
                        </div>
                        <div class="absolute top-3 left-3">
                            <span class="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded">Rotulación</span>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-800 mb-1 group-hover:text-teal-700 transition-colors">
                            Instalación de Letras Corporativas
                        </h3>
                        <p class="text-sm text-gray-600 flex items-center">
                            🔗 Ver en Instagram
                        </p>
                    </div>
                </div>

                <div class="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                     onclick="window.open('https://instagram.com/Multiser_Duarte', '_blank')">
                    <div class="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1534163655406-5596ea058a28" 
                             alt="Fachada Moderna" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="bg-white/90 backdrop-blur-sm p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                📸
                            </div>
                        </div>
                        <div class="absolute top-3 left-3">
                            <span class="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded">Fachadas</span>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-800 mb-1 group-hover:text-teal-700 transition-colors">
                            Fachada Moderna
                        </h3>
                        <p class="text-sm text-gray-600 flex items-center">
                            🔗 Ver en Instagram
                        </p>
                    </div>
                </div>

                <div class="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                     onclick="window.open('https://instagram.com/Multiser_Duarte', '_blank')">
                    <div class="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1531053326607-9d349096d887" 
                             alt="Soldadura Profesional" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="bg-white/90 backdrop-blur-sm p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                📸
                            </div>
                        </div>
                        <div class="absolute top-3 left-3">
                            <span class="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded">Metalurgia</span>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-800 mb-1 group-hover:text-teal-700 transition-colors">
                            Soldadura Profesional
                        </h3>
                        <p class="text-sm text-gray-600 flex items-center">
                            🔗 Ver en Instagram
                        </p>
                    </div>
                </div>

                <div class="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                     onclick="window.open('https://instagram.com/Multiser_Duarte', '_blank')">
                    <div class="relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1550424844-f7b914439c1b" 
                             alt="Letrero Neon Moderno" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="bg-white/90 backdrop-blur-sm p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                📸
                            </div>
                        </div>
                        <div class="absolute top-3 left-3">
                            <span class="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded">Luminosos</span>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-gray-800 mb-1 group-hover:text-teal-700 transition-colors">
                            Letrero Neon Moderno
                        </h3>
                        <p class="text-sm text-gray-600 flex items-center">
                            🔗 Ver en Instagram
                        </p>
                    </div>
                </div>
            </div>

            <!-- Instagram CTA -->
            <div class="text-center">
                <a href="https://instagram.com/Multiser_Duarte" target="_blank"
                   class="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block">
                    📸 Ver Más Trabajos en Instagram
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="nosotros" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                    🕒 Nuestra Historia
                </span>
                <h2 class="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                    25+ Años Transformando Ideas en Realidad
                </h2>
            </div>

            <!-- Historia -->
            <div class="bg-white rounded-xl shadow-lg border-2 border-gray-100 p-8 mb-12">
                <p class="text-lg text-gray-700 leading-relaxed text-center">
                    En enero del año 2000, comenzamos nuestra aventura como emprendedores en el mundo de la publicidad. 
                    Con una única visión en mente: hacer realidad los proyectos de cada uno de nuestros clientes. 
                    Hoy, después de más de dos décadas de esfuerzo y dedicación, nos enorgullece decir que somos una empresa 
                    reconocida por nuestra responsabilidad y profesionalidad.
                </p>
            </div>

            <!-- Misión y Visión -->
            <div class="grid md:grid-cols-2 gap-8 mb-12">
                <div class="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl shadow-lg border-2 border-teal-100 hover:shadow-xl transition-shadow duration-300">
                    <div class="p-6">
                        <h3 class="text-2xl text-teal-700 flex items-center font-bold mb-4">
                            🛡️ Nuestra Misión
                        </h3>
                        <p class="text-gray-700 leading-relaxed">
                            Transformar las ideas y sueños de nuestros clientes en realidades tangibles a través de soluciones publicitarias 
                            innovadoras y efectivas. Nos comprometemos a ofrecer un servicio de alta calidad, personalizado y orientado a resultados.
                        </p>
                    </div>
                </div>
                
                <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-lg border-2 border-orange-100 hover:shadow-xl transition-shadow duration-300">
                    <div class="p-6">
                        <h3 class="text-2xl text-orange-600 flex items-center font-bold mb-4">
                            🏆 Nuestra Visión
                        </h3>
                        <p class="text-gray-700 leading-relaxed">
                            Ser líderes en el sector de la publicidad, reconocidos por nuestra creatividad, profesionalismo y capacidad 
                            para adaptarnos a las necesidades cambiantes del mercado. Aspiramos a ser la primera opción para las empresas.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Valores -->
            <div class="text-center mb-8">
                <h3 class="text-3xl font-bold text-gray-800 mb-4">Nuestros Valores</h3>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Estos valores guían cada proyecto y relación que construimos con nuestros clientes
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
                    <h4 class="text-lg text-teal-700 flex items-center font-bold mb-3">
                        <div class="w-8 h-8 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span class="text-teal-600 font-bold text-sm">1</span>
                        </div>
                        Responsabilidad
                    </h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Cumplimos con nuestros compromisos y actuamos con integridad en todas nuestras acciones.
                    </p>
                </div>

                <div class="bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
                    <h4 class="text-lg text-teal-700 flex items-center font-bold mb-3">
                        <div class="w-8 h-8 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span class="text-teal-600 font-bold text-sm">2</span>
                        </div>
                        Profesionalismo
                    </h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Mantenemos altos estándares de calidad y excelencia en cada proyecto que emprendemos.
                    </p>
                </div>

                <div class="bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
                    <h4 class="text-lg text-teal-700 flex items-center font-bold mb-3">
                        <div class="w-8 h-8 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span class="text-teal-600 font-bold text-sm">3</span>
                        </div>
                        Innovación
                    </h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Fomentamos la creatividad y buscamos constantemente nuevas formas de superar las expectativas.
                    </p>
                </div>

                <div class="bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
                    <h4 class="text-lg text-teal-700 flex items-center font-bold mb-3">
                        <div class="w-8 h-8 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span class="text-teal-600 font-bold text-sm">4</span>
                        </div>
                        Compromiso con el Cliente
                    </h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Nos dedicamos a entender y satisfacer las necesidades de nuestros clientes construyendo relaciones duraderas.
                    </p>
                </div>

                <div class="bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
                    <h4 class="text-lg text-teal-700 flex items-center font-bold mb-3">
                        <div class="w-8 h-8 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span class="text-teal-600 font-bold text-sm">5</span>
                        </div>
                        Trabajo en Equipo
                    </h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Valoramos la colaboración y el aporte de cada miembro de nuestro equipo reconociendo que juntos podemos lograr más.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contacto" class="py-20 bg-gradient-to-r from-teal-700 to-blue-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-4xl md:text-5xl font-bold mb-8">
                    ¡Hagamos Realidad Tu Proyecto!
                </h2>
                <p class="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
                    Contáctanos y descubre cómo podemos transformar la imagen de tu negocio
                </p>

                <div class="grid md:grid-cols-3 gap-8 mb-12">
                    <a href="https://wa.me/50557050821?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20SERVICES%20DUARTE" 
                       target="_blank"
                       class="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 p-6 rounded-xl">
                        <div class="text-center">
                            <div class="text-4xl mb-4">📱</div>
                            <h3 class="text-lg font-semibold mb-2">WhatsApp</h3>
                            <p class="text-white/80">+505 5705 0821</p>
                        </div>
                    </a>
                    
                    <a href="tel:+50557050821"
                       class="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 p-6 rounded-xl">
                        <div class="text-center">
                            <div class="text-4xl mb-4">📞</div>
                            <h3 class="text-lg font-semibold mb-2">Teléfono</h3>
                            <p class="text-white/80">+505 5705 0821</p>
                        </div>
                    </a>
                    
                    <a href="https://instagram.com/Multiser_Duarte" target="_blank"
                       class="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 p-6 rounded-xl">
                        <div class="text-center">
                            <div class="text-4xl mb-4">📸</div>
                            <h3 class="text-lg font-semibold mb-2">Instagram</h3>
                            <p class="text-white/80">@Multiser_Duarte</p>
                        </div>
                    </a>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://wa.me/50557050821?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20SERVICES%20DUARTE" 
                       target="_blank"
                       class="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block">
                        📱 Escribir por WhatsApp
                    </a>
                    <a href="tel:+50557050821"
                       class="bg-white text-teal-700 hover:bg-gray-100 px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block">
                        📞 Llamar Ahora
                    </a>
                    <a href="https://instagram.com/Multiser_Duarte" target="_blank"
                       class="border border-white text-white hover:bg-white/20 px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block">
                        📸 Seguinos en Instagram
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <div class="flex justify-center items-center space-x-4 mb-6">
                    <img src="https://customer-assets.emergentagent.com/job_fc9657d6-7929-4eec-92e2-af27677a1c50/artifacts/et6e4mcy_Recurso%202.png" 
                         alt="Services Duarte Logo" class="h-10 w-auto">
                    <h3 class="text-2xl font-bold gradient-text">SERVICES DUARTE</h3>
                </div>
                <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
                    Transformando ideas en realidades tangibles desde el año 2000. 
                    Tu inversión está segura con nosotros.
                </p>
                <div class="flex justify-center items-center space-x-6 mb-6">
                    <a href="https://wa.me/50557050821" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                        📱 +505 5705 0821
                    </a>
                    <a href="tel:+50557050821" class="text-gray-400 hover:text-white transition-colors">
                        📞 +505 5705 0821
                    </a>
                    <a href="https://instagram.com/Multiser_Duarte" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                        📸 @Multiser_Duarte
                    </a>
                </div>
                <div class="border-t border-gray-800 pt-6">
                    <p class="text-gray-500 text-sm">
                        © 2025 SERVICES DUARTE. Todos los derechos reservados. | RUC: 121180190003P
                    </p>
                    <p class="text-gray-600 text-xs mt-2">
                        WALTER FERRETI (WASPAN NORTE), KM 7 CARRETERA NORTE 7C AL LAGO M/I ESQUINERA
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <!-- WhatsApp Floating Button -->
    <div class="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/50557050821?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20SERVICES%20DUARTE" 
           target="_blank"
           class="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-float flex items-center justify-center text-2xl">
            📱
        </a>
    </div>

    <!-- JavaScript -->
    <script>
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const menuIcon = document.getElementById('menuIcon');
            
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                menuIcon.textContent = '✕';
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.textContent = '☰';
            }
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                const menuIcon = document.getElementById('menuIcon');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuIcon.textContent = '☰';
                }
            });
        });

        // Add scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                observer.observe(section);
            });
        });
    </script>

</body>
</html>
EOF

echo "✅ Versión HTML estática creada para HostGator"
echo "📁 Archivo: /app/hostgator-version/index.html"
echo "📋 Funcionalidades incluidas:"
echo "   • WhatsApp (4 botones + flotante)"
echo "   • Instagram (enlaces directos)"
echo "   • Responsive design"
echo "   • Animaciones suaves"
echo "   • SEO optimizado"
echo "   • Colores atractivos"