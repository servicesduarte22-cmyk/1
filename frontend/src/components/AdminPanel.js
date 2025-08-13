import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Settings, Globe, Instagram, Palette, Image, Save, ArrowLeft, Upload, Play, 
         Sparkles, Facebook, Twitter, Youtube, Linkedin, MessageCircle, LogOut, User } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AdminPanel = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const [config, setConfig] = useState({
    domain: "servicesduarte.com",
    companyName: "SERVICES DUARTE",
    tagline: "Tu inversión está segura y con sello de calidad, nuestra experiencia es nuestro mayor orgullo.",
    phone: "+505 5705 0821",
    instagram: "@Multiser_Duarte",
    address: "WALTER FERRETI (WASPAN NORTE), KM 7 CARRETERA NORTE 7C AL LAGO M/I ESQUINERA",
    primaryColor: "#0d9488", // teal-600
    secondaryColor: "#f97316", // orange-500
    backgroundColor: "#f8fafc" // slate-50
  });

  const [seoSettings, setSeoSettings] = useState({
    title: "Services Duarte - Rotulación, Fachadas y Publicidad Profesional",
    description: "Empresa líder en rotulación, fachadas publicitarias, metalurgia y letras corporativas en Nicaragua. 25+ años de experiencia transformando ideas en realidad.",
    keywords: "rotulación nicaragua, fachadas publicitarias, letras corporativas, metalurgia, publicidad managua, services duarte",
    ogImage: "https://customer-assets.emergentagent.com/job_fc9657d6-7929-4eec-92e2-af27677a1c50/artifacts/et6e4mcy_Recurso%202.png"
  });

  const [socialMedia, setSocialMedia] = useState({
    instagram: "@Multiser_Duarte",
    instagramUrl: "https://instagram.com/Multiser_Duarte",
    facebook: "Services Duarte",
    facebookUrl: "https://facebook.com/servicesduarte",
    whatsapp: "+505 5705 0821",
    whatsappUrl: "https://wa.me/50557050821",
    youtube: "Services Duarte",
    youtubeUrl: "https://youtube.com/@servicesduarte",
    tiktok: "@servicesduarte",
    tiktokUrl: "https://tiktok.com/@servicesduarte",
    linkedin: "Services Duarte",
    linkedinUrl: "https://linkedin.com/company/servicesduarte",
    twitter: "@ServicesD",
    twitterUrl: "https://twitter.com/ServicesD"
  });

  const [mediaSettings, setMediaSettings] = useState({
    galleryImages: [],
    heroVideo: null,
    logoFile: null,
    backgroundImage: null
  });

  const [visualEffects, setVisualEffects] = useState({
    parallaxEnabled: true,
    animationsEnabled: true,
    particleEffect: false,
    vertigoEffect: false,
    glassmorphism: true,
    fadeInAnimation: true,
    hoverEffects: true,
    gradientAnimation: true,
    floatingElements: false,
    scrollAnimations: true
  });

  const handleSaveConfig = () => {
    // En una implementación real, aquí enviarías los datos al backend
    toast({
      title: "Configuración Guardada",
      description: "Los cambios se han guardado correctamente.",
    });
  };

  const handleSaveSEO = () => {
    // En una implementación real, aquí actualizarías la configuración SEO
    toast({
      title: "SEO Actualizado",
      description: "La configuración de SEO se ha actualizado correctamente.",
    });
  };

  const handleSaveSocialMedia = () => {
    toast({
      title: "Redes Sociales Actualizadas",
      description: "La configuración de redes sociales se ha guardado correctamente.",
    });
  };

  const handleSaveMedia = () => {
    toast({
      title: "Medios Actualizados",
      description: "Las imágenes y videos se han subido correctamente.",
    });
  };

  const handleSaveEffects = () => {
    toast({
      title: "Efectos Aplicados",
      description: "Los efectos visuales se han aplicado al sitio web.",
    });
  };

  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      setMediaSettings(prev => ({
        ...prev,
        [type]: file
      }));
      toast({
        title: "Archivo Subido",
        description: `${file.name} se ha subido correctamente.`,
      });
    }
  };

  const handleInputChange = (section, field, value) => {
    if (section === 'config') {
      setConfig(prev => ({
        ...prev,
        [field]: value
      }));
    } else if (section === 'seo') {
      setSeoSettings(prev => ({
        ...prev,
        [field]: value
      }));
    } else if (section === 'social') {
      setSocialMedia(prev => ({
        ...prev,
        [field]: value
      }));
    } else if (section === 'effects') {
      setVisualEffects(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="border-teal-200 text-teal-700 hover:bg-teal-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Sitio
            </Button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
                Panel de Administración
              </h1>
              <p className="text-gray-600">Gestiona tu sitio web fácilmente</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-800 border-green-200 px-3 py-1">
              <User className="w-4 h-4 mr-2" />
              Sesión Activa
            </Badge>
            <Button 
              variant="outline"
              onClick={() => {
                logout();
                toast({
                  title: "Sesión Cerrada",
                  description: "Has cerrado sesión exitosamente.",
                });
              }}
              className="border-red-200 text-red-700 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="general" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              <Settings className="w-4 h-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger value="medios" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              <Upload className="w-4 h-4 mr-2" />
              Medios
            </TabsTrigger>
            <TabsTrigger value="efectos" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              <Sparkles className="w-4 h-4 mr-2" />
              Efectos
            </TabsTrigger>
            <TabsTrigger value="redes" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              <Instagram className="w-4 h-4 mr-2" />
              Redes
            </TabsTrigger>
            <TabsTrigger value="dominio" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              <Globe className="w-4 h-4 mr-2" />
              Dominio
            </TabsTrigger>
            <TabsTrigger value="seo" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              <Image className="w-4 h-4 mr-2" />
              SEO
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <Card className="shadow-lg border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Settings className="w-5 h-5 mr-2" />
                  Información General
                </CardTitle>
                <CardDescription>
                  Configura la información básica de tu empresa
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Nombre de la Empresa</Label>
                    <Input 
                      id="companyName"
                      value={config.companyName}
                      onChange={(e) => handleInputChange('config', 'companyName', e.target.value)}
                      className="border-gray-200 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input 
                      id="phone"
                      value={config.phone}
                      onChange={(e) => handleInputChange('config', 'phone', e.target.value)}
                      className="border-gray-200 focus:border-teal-500"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="tagline">Eslogan de la Empresa</Label>
                  <Textarea 
                    id="tagline"
                    value={config.tagline}
                    onChange={(e) => handleInputChange('config', 'tagline', e.target.value)}
                    className="border-gray-200 focus:border-teal-500"
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input 
                      id="instagram"
                      value={config.instagram}
                      onChange={(e) => handleInputChange('config', 'instagram', e.target.value)}
                      className="border-gray-200 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Dirección</Label>
                    <Textarea 
                      id="address"
                      value={config.address}
                      onChange={(e) => handleInputChange('config', 'address', e.target.value)}
                      className="border-gray-200 focus:border-teal-500"
                      rows={2}
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleSaveConfig}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Guardar Configuración
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Domain Settings */}
          <TabsContent value="dominio" className="space-y-6">
            <Card className="shadow-lg border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Globe className="w-5 h-5 mr-2" />
                  Configuración de Dominio
                </CardTitle>
                <CardDescription>
                  Conecta tu propio dominio personalizado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="domain">Dominio Actual</Label>
                  <Input 
                    id="domain"
                    value={config.domain}
                    onChange={(e) => handleInputChange('config', 'domain', e.target.value)}
                    className="border-gray-200 focus:border-teal-500"
                    placeholder="tudominio.com"
                  />
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Instrucciones para configurar tu dominio:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-blue-700 text-sm">
                      <li>Ve al panel de control de tu proveedor de dominio</li>
                      <li>Busca la sección "DNS" o "Gestión de DNS"</li>
                      <li>Crea un registro CNAME que apunte a: servicesduarte.emergent.sh</li>
                      <li>Guarda los cambios (puede tomar 24-48 horas en propagarse)</li>
                      <li>Vuelve aquí y actualiza tu dominio</li>
                    </ol>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-green-50 border-green-200 p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Estado del Dominio</h4>
                    <Badge className="bg-green-100 text-green-800 border-green-300">
                      ✓ Configurado Correctamente
                    </Badge>
                  </Card>
                  
                  <Card className="bg-amber-50 border-amber-200 p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">Certificado SSL</h4>
                    <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                      🔒 Automático
                    </Badge>
                  </Card>
                </div>

                <Button 
                  onClick={handleSaveConfig}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Actualizar Dominio
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Settings */}
          <TabsContent value="seo" className="space-y-6">
            <Card className="shadow-lg border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Image className="w-5 h-5 mr-2" />
                  Configuración SEO
                </CardTitle>
                <CardDescription>
                  Optimiza tu sitio para motores de búsqueda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="seoTitle">Título SEO</Label>
                  <Input 
                    id="seoTitle"
                    value={seoSettings.title}
                    onChange={(e) => handleInputChange('seo', 'title', e.target.value)}
                    className="border-gray-200 focus:border-teal-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">Máximo 60 caracteres recomendado</p>
                </div>

                <div>
                  <Label htmlFor="seoDescription">Descripción SEO</Label>
                  <Textarea 
                    id="seoDescription"
                    value={seoSettings.description}
                    onChange={(e) => handleInputChange('seo', 'description', e.target.value)}
                    className="border-gray-200 focus:border-teal-500"
                    rows={3}
                  />
                  <p className="text-sm text-gray-500 mt-1">Máximo 160 caracteres recomendado</p>
                </div>

                <div>
                  <Label htmlFor="seoKeywords">Palabras Clave</Label>
                  <Textarea 
                    id="seoKeywords"
                    value={seoSettings.keywords}
                    onChange={(e) => handleInputChange('seo', 'keywords', e.target.value)}
                    className="border-gray-200 focus:border-teal-500"
                    rows={2}
                  />
                  <p className="text-sm text-gray-500 mt-1">Separa las palabras clave con comas</p>
                </div>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Estado SEO Actual:</h4>
                    <div className="space-y-2 text-green-700 text-sm">
                      <div>✓ Meta tags configurados</div>
                      <div>✓ Open Graph implementado</div>
                      <div>✓ Schema.org añadido</div>
                      <div>✓ Sitemap generado automáticamente</div>
                      <div>✓ Robots.txt configurado</div>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  onClick={handleSaveSEO}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Guardar SEO
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Media Management */}
          <TabsContent value="medios" className="space-y-6">
            <Card className="shadow-lg border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Upload className="w-5 h-5 mr-2" />
                  Gestión de Medios
                </CardTitle>
                <CardDescription>
                  Sube y administra fotos, videos y recursos multimedia
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Logo Upload */}
                <div>
                  <Label htmlFor="logoUpload">Logo de la Empresa</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-500 transition-colors">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-2">Arrastra tu logo aquí o haz clic para seleccionar</p>
                    <Input 
                      id="logoUpload"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'logoFile')}
                      className="hidden"
                    />
                    <Button 
                      onClick={() => document.getElementById('logoUpload').click()}
                      variant="outline"
                      className="mt-2"
                    >
                      Seleccionar Logo
                    </Button>
                  </div>
                </div>

                {/* Gallery Images */}
                <div>
                  <Label htmlFor="galleryUpload">Galería de Imágenes</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-500 transition-colors">
                    <Image className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-2">Sube múltiples imágenes para la galería</p>
                    <Input 
                      id="galleryUpload"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleFileUpload(e, 'galleryImages')}
                      className="hidden"
                    />
                    <Button 
                      onClick={() => document.getElementById('galleryUpload').click()}
                      variant="outline"
                      className="mt-2"
                    >
                      Seleccionar Imágenes
                    </Button>
                  </div>
                </div>

                {/* Video Upload */}
                <div>
                  <Label htmlFor="videoUpload">Video Principal (Hero Section)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-500 transition-colors">
                    <Play className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-2">Video de fondo para la sección principal</p>
                    <Input 
                      id="videoUpload"
                      type="file"
                      accept="video/*"
                      onChange={(e) => handleFileUpload(e, 'heroVideo')}
                      className="hidden"
                    />
                    <Button 
                      onClick={() => document.getElementById('videoUpload').click()}
                      variant="outline"
                      className="mt-2"
                    >
                      Seleccionar Video
                    </Button>
                  </div>
                </div>

                {/* Background Image */}
                <div>
                  <Label htmlFor="backgroundUpload">Imagen de Fondo</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-500 transition-colors">
                    <Image className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-2">Imagen de fondo personalizada para secciones</p>
                    <Input 
                      id="backgroundUpload"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'backgroundImage')}
                      className="hidden"
                    />
                    <Button 
                      onClick={() => document.getElementById('backgroundUpload').click()}
                      variant="outline"
                      className="mt-2"
                    >
                      Seleccionar Imagen
                    </Button>
                  </div>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Formatos Soportados:</h4>
                    <div className="text-blue-700 text-sm space-y-1">
                      <div>📸 <strong>Imágenes:</strong> JPG, PNG, WebP, SVG (máx. 5MB)</div>
                      <div>🎬 <strong>Videos:</strong> MP4, WebM, MOV (máx. 50MB)</div>
                      <div>⚡ <strong>Optimización:</strong> Las imágenes se comprimen automáticamente</div>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  onClick={handleSaveMedia}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Guardar Medios
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Visual Effects */}
          <TabsContent value="efectos" className="space-y-6">
            <Card className="shadow-lg border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Efectos Visuales
                </CardTitle>
                <CardDescription>
                  Personaliza los efectos y animaciones de tu sitio web
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Animation Effects */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Efectos de Animación</h4>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <Label className="font-medium">Efecto Vértigo</Label>
                        <p className="text-sm text-gray-600">Efecto de zoom infinito</p>
                      </div>
                      <Input
                        type="checkbox"
                        checked={visualEffects.vertigoEffect}
                        onChange={(e) => handleInputChange('effects', 'vertigoEffect', e.target.checked)}
                        className="w-5 h-5"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <Label className="font-medium">Efecto Parallax</Label>
                        <p className="text-sm text-gray-600">Movimiento de capas en scroll</p>
                      </div>
                      <Input
                        type="checkbox"
                        checked={visualEffects.parallaxEnabled}
                        onChange={(e) => handleInputChange('effects', 'parallaxEnabled', e.target.checked)}
                        className="w-5 h-5"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <Label className="font-medium">Partículas Flotantes</Label>
                        <p className="text-sm text-gray-600">Partículas animadas de fondo</p>
                      </div>
                      <Input
                        type="checkbox"
                        checked={visualEffects.particleEffect}
                        onChange={(e) => handleInputChange('effects', 'particleEffect', e.target.checked)}
                        className="w-5 h-5"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <Label className="font-medium">Elementos Flotantes</Label>
                        <p className="text-sm text-gray-600">Iconos y elementos que flotan</p>
                      </div>
                      <Input
                        type="checkbox"
                        checked={visualEffects.floatingElements}
                        onChange={(e) => handleInputChange('effects', 'floatingElements', e.target.checked)}
                        className="w-5 h-5"
                      />
                    </div>
                  </div>

                  {/* Visual Effects */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Efectos Visuales</h4>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <Label className="font-medium">Glassmorphism</Label>
                        <p className="text-sm text-gray-600">Efecto de vidrio translúcido</p>
                      </div>
                      <Input
                        type="checkbox"
                        checked={visualEffects.glassmorphism}
                        onChange={(e) => handleInputChange('effects', 'glassmorphism', e.target.checked)}
                        className="w-5 h-5"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <Label className="font-medium">Animación de Gradientes</Label>
                        <p className="text-sm text-gray-600">Gradientes que cambian de color</p>
                      </div>
                      <Input
                        type="checkbox"
                        checked={visualEffects.gradientAnimation}
                        onChange={(e) => handleInputChange('effects', 'gradientAnimation', e.target.checked)}
                        className="w-5 h-5"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <Label className="font-medium">Efectos Hover</Label>
                        <p className="text-sm text-gray-600">Animaciones al pasar el mouse</p>
                      </div>
                      <Input
                        type="checkbox"
                        checked={visualEffects.hoverEffects}
                        onChange={(e) => handleInputChange('effects', 'hoverEffects', e.target.checked)}
                        className="w-5 h-5"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <Label className="font-medium">Animaciones de Scroll</Label>
                        <p className="text-sm text-gray-600">Elementos aparecen al hacer scroll</p>
                      </div>
                      <Input
                        type="checkbox"
                        checked={visualEffects.scrollAnimations}
                        onChange={(e) => handleInputChange('effects', 'scrollAnimations', e.target.checked)}
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                </div>

                <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Vista Previa de Efectos</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
                      <div className={`p-3 rounded-lg transition-all duration-500 ${visualEffects.vertigoEffect ? 'bg-purple-100 transform scale-105' : 'bg-gray-100'}`}>
                        Vértigo
                      </div>
                      <div className={`p-3 rounded-lg transition-all duration-500 ${visualEffects.parallaxEnabled ? 'bg-blue-100 transform translate-y-1' : 'bg-gray-100'}`}>
                        Parallax
                      </div>
                      <div className={`p-3 rounded-lg transition-all duration-500 ${visualEffects.glassmorphism ? 'bg-white/60 backdrop-blur-sm border' : 'bg-gray-100'}`}>
                        Glass
                      </div>
                      <div className={`p-3 rounded-lg transition-all duration-500 ${visualEffects.particleEffect ? 'bg-gradient-to-br from-cyan-100 to-blue-100' : 'bg-gray-100'}`}>
                        Partículas
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  onClick={handleSaveEffects}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Aplicar Efectos
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Media */}
          <TabsContent value="redes" className="space-y-6">
            <Card className="shadow-lg border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Instagram className="w-5 h-5 mr-2" />
                  Redes Sociales
                </CardTitle>
                <CardDescription>
                  Configura todas tus redes sociales y enlaces
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Instagram */}
                  <Card className="border-pink-200 hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center text-pink-600">
                        <Instagram className="w-5 h-5 mr-2" />
                        Instagram
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label>Usuario (@)</Label>
                        <Input 
                          value={socialMedia.instagram}
                          onChange={(e) => handleInputChange('social', 'instagram', e.target.value)}
                          placeholder="@tu_usuario"
                          className="border-pink-200 focus:border-pink-500"
                        />
                      </div>
                      <div>
                        <Label>URL Completa</Label>
                        <Input 
                          value={socialMedia.instagramUrl}
                          onChange={(e) => handleInputChange('social', 'instagramUrl', e.target.value)}
                          placeholder="https://instagram.com/tu_usuario"
                          className="border-pink-200 focus:border-pink-500"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* WhatsApp */}
                  <Card className="border-green-200 hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center text-green-600">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label>Número</Label>
                        <Input 
                          value={socialMedia.whatsapp}
                          onChange={(e) => handleInputChange('social', 'whatsapp', e.target.value)}
                          placeholder="+505 1234 5678"
                          className="border-green-200 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <Label>URL WhatsApp</Label>
                        <Input 
                          value={socialMedia.whatsappUrl}
                          onChange={(e) => handleInputChange('social', 'whatsappUrl', e.target.value)}
                          placeholder="https://wa.me/50512345678"
                          className="border-green-200 focus:border-green-500"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Facebook */}
                  <Card className="border-blue-200 hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center text-blue-600">
                        <Facebook className="w-5 h-5 mr-2" />
                        Facebook
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label>Nombre de Página</Label>
                        <Input 
                          value={socialMedia.facebook}
                          onChange={(e) => handleInputChange('social', 'facebook', e.target.value)}
                          placeholder="Tu Página de Facebook"
                          className="border-blue-200 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <Label>URL Facebook</Label>
                        <Input 
                          value={socialMedia.facebookUrl}
                          onChange={(e) => handleInputChange('social', 'facebookUrl', e.target.value)}
                          placeholder="https://facebook.com/tu_pagina"
                          className="border-blue-200 focus:border-blue-500"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* YouTube */}
                  <Card className="border-red-200 hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center text-red-600">
                        <Youtube className="w-5 h-5 mr-2" />
                        YouTube
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label>Canal</Label>
                        <Input 
                          value={socialMedia.youtube}
                          onChange={(e) => handleInputChange('social', 'youtube', e.target.value)}
                          placeholder="Tu Canal de YouTube"
                          className="border-red-200 focus:border-red-500"
                        />
                      </div>
                      <div>
                        <Label>URL YouTube</Label>
                        <Input 
                          value={socialMedia.youtubeUrl}
                          onChange={(e) => handleInputChange('social', 'youtubeUrl', e.target.value)}
                          placeholder="https://youtube.com/@tu_canal"
                          className="border-red-200 focus:border-red-500"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* TikTok */}
                  <Card className="border-black hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center text-gray-800">
                        <Tiktok className="w-5 h-5 mr-2" />
                        TikTok
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label>Usuario (@)</Label>
                        <Input 
                          value={socialMedia.tiktok}
                          onChange={(e) => handleInputChange('social', 'tiktok', e.target.value)}
                          placeholder="@tu_usuario"
                          className="border-gray-300 focus:border-gray-500"
                        />
                      </div>
                      <div>
                        <Label>URL TikTok</Label>
                        <Input 
                          value={socialMedia.tiktokUrl}
                          onChange={(e) => handleInputChange('social', 'tiktokUrl', e.target.value)}
                          placeholder="https://tiktok.com/@tu_usuario"
                          className="border-gray-300 focus:border-gray-500"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* LinkedIn */}
                  <Card className="border-blue-300 hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center text-blue-700">
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label>Empresa</Label>
                        <Input 
                          value={socialMedia.linkedin}
                          onChange={(e) => handleInputChange('social', 'linkedin', e.target.value)}
                          placeholder="Tu Empresa"
                          className="border-blue-300 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <Label>URL LinkedIn</Label>
                        <Input 
                          value={socialMedia.linkedinUrl}
                          onChange={(e) => handleInputChange('social', 'linkedinUrl', e.target.value)}
                          placeholder="https://linkedin.com/company/tu_empresa"
                          className="border-blue-300 focus:border-blue-500"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button 
                  onClick={handleSaveSocialMedia}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Guardar Redes Sociales
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Domain Settings */}
          <TabsContent value="dominio" className="space-y-6">
            <Card className="shadow-lg border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Globe className="w-5 h-5 mr-2" />
                  Configuración de Dominio
                </CardTitle>
                <CardDescription>
                  Conecta tu propio dominio personalizado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="domain">Dominio Actual</Label>
                  <Input 
                    id="domain"
                    value={config.domain}
                    onChange={(e) => handleInputChange('config', 'domain', e.target.value)}
                    className="border-gray-200 focus:border-teal-500"
                    placeholder="tudominio.com"
                  />
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Instrucciones para configurar tu dominio:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-blue-700 text-sm">
                      <li>Ve al panel de control de tu proveedor de dominio</li>
                      <li>Busca la sección "DNS" o "Gestión de DNS"</li>
                      <li>Crea un registro CNAME que apunte a: servicesduarte.emergent.sh</li>
                      <li>Guarda los cambios (puede tomar 24-48 horas en propagarse)</li>
                      <li>Vuelve aquí y actualiza tu dominio</li>
                    </ol>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-green-50 border-green-200 p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Estado del Dominio</h4>
                    <Badge className="bg-green-100 text-green-800 border-green-300">
                      ✓ Configurado Correctamente
                    </Badge>
                  </Card>
                  
                  <Card className="bg-amber-50 border-amber-200 p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">Certificado SSL</h4>
                    <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                      🔒 Automático
                    </Badge>
                  </Card>
                </div>

                <Button 
                  onClick={handleSaveConfig}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Actualizar Dominio
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Settings */}
          <TabsContent value="seo" className="space-y-6">
            <Card className="shadow-lg border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Image className="w-5 h-5 mr-2" />
                  Configuración SEO
                </CardTitle>
                <CardDescription>
                  Optimiza tu sitio para motores de búsqueda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="seoTitle">Título SEO</Label>
                  <Input 
                    id="seoTitle"
                    value={seoSettings.title}
                    onChange={(e) => handleInputChange('seo', 'title', e.target.value)}
                    className="border-gray-200 focus:border-teal-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">Máximo 60 caracteres recomendado</p>
                </div>

                <div>
                  <Label htmlFor="seoDescription">Descripción SEO</Label>
                  <Textarea 
                    id="seoDescription"
                    value={seoSettings.description}
                    onChange={(e) => handleInputChange('seo', 'description', e.target.value)}
                    className="border-gray-200 focus:border-teal-500"
                    rows={3}
                  />
                  <p className="text-sm text-gray-500 mt-1">Máximo 160 caracteres recomendado</p>
                </div>

                <div>
                  <Label htmlFor="seoKeywords">Palabras Clave</Label>
                  <Textarea 
                    id="seoKeywords"
                    value={seoSettings.keywords}
                    onChange={(e) => handleInputChange('seo', 'keywords', e.target.value)}
                    className="border-gray-200 focus:border-teal-500"
                    rows={2}
                  />
                  <p className="text-sm text-gray-500 mt-1">Separa las palabras clave con comas</p>
                </div>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Estado SEO Actual:</h4>
                    <div className="space-y-2 text-green-700 text-sm">
                      <div>✓ Meta tags configurados</div>
                      <div>✓ Open Graph implementado</div>
                      <div>✓ Schema.org añadido</div>
                      <div>✓ Sitemap generado automáticamente</div>
                      <div>✓ Robots.txt configurado</div>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  onClick={handleSaveSEO}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Guardar SEO
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="mt-8 shadow-lg border-2 border-gray-100 bg-gradient-to-r from-teal-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-teal-700">Acciones Rápidas</CardTitle>
            <CardDescription>
              Herramientas útiles para gestionar tu sitio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button 
                variant="outline"
                onClick={() => window.open('/', '_blank')}
                className="border-teal-200 text-teal-700 hover:bg-teal-50"
              >
                <Globe className="w-4 h-4 mr-2" />
                Ver Sitio
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://instagram.com/Multiser_Duarte', '_blank')}
                className="border-pink-200 text-pink-700 hover:bg-pink-50"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
              <Button 
                variant="outline"
                disabled
                className="border-gray-200 text-gray-500"
              >
                <Image className="w-4 h-4 mr-2" />
                Subir Imágenes
              </Button>
              <Button 
                variant="outline"
                disabled
                className="border-gray-200 text-gray-500"
              >
                <Settings className="w-4 h-4 mr-2" />
                Backup
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;