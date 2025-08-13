import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Settings, Globe, Instagram, Palette, Image, Save, ArrowLeft } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
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
          <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-800 border-green-200 px-3 py-1">
            <Settings className="w-4 h-4 mr-2" />
            Panel Activo
          </Badge>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="general" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              <Settings className="w-4 h-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger value="dominio" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              <Globe className="w-4 h-4 mr-2" />
              Dominio
            </TabsTrigger>
            <TabsTrigger value="seo" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              <Image className="w-4 h-4 mr-2" />
              SEO
            </TabsTrigger>
            <TabsTrigger value="diseno" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              <Palette className="w-4 h-4 mr-2" />
              Diseño
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

          {/* Design Settings */}
          <TabsContent value="diseno" className="space-y-6">
            <Card className="shadow-lg border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Palette className="w-5 h-5 mr-2" />
                  Personalización de Diseño
                </CardTitle>
                <CardDescription>
                  Personaliza los colores y apariencia de tu sitio
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="primaryColor">Color Primario</Label>
                    <div className="flex items-center space-x-2">
                      <Input 
                        id="primaryColor"
                        type="color"
                        value={config.primaryColor}
                        onChange={(e) => handleInputChange('config', 'primaryColor', e.target.value)}
                        className="w-16 h-10 border-gray-200"
                      />
                      <Input 
                        value={config.primaryColor}
                        onChange={(e) => handleInputChange('config', 'primaryColor', e.target.value)}
                        className="border-gray-200 focus:border-teal-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="secondaryColor">Color Secundario</Label>
                    <div className="flex items-center space-x-2">
                      <Input 
                        id="secondaryColor"
                        type="color"
                        value={config.secondaryColor}
                        onChange={(e) => handleInputChange('config', 'secondaryColor', e.target.value)}
                        className="w-16 h-10 border-gray-200"
                      />
                      <Input 
                        value={config.secondaryColor}
                        onChange={(e) => handleInputChange('config', 'secondaryColor', e.target.value)}
                        className="border-gray-200 focus:border-teal-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="backgroundColor">Color de Fondo</Label>
                    <div className="flex items-center space-x-2">
                      <Input 
                        id="backgroundColor"
                        type="color"
                        value={config.backgroundColor}
                        onChange={(e) => handleInputChange('config', 'backgroundColor', e.target.value)}
                        className="w-16 h-10 border-gray-200"
                      />
                      <Input 
                        value={config.backgroundColor}
                        onChange={(e) => handleInputChange('config', 'backgroundColor', e.target.value)}
                        className="border-gray-200 focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>

                <Card className="bg-gray-50 border-gray-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-4">Vista Previa de Colores</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div 
                          className="w-full h-16 rounded-lg mb-2 border-2 border-gray-300"
                          style={{ backgroundColor: config.primaryColor }}
                        ></div>
                        <p className="text-sm text-gray-600">Primario</p>
                      </div>
                      <div className="text-center">
                        <div 
                          className="w-full h-16 rounded-lg mb-2 border-2 border-gray-300"
                          style={{ backgroundColor: config.secondaryColor }}
                        ></div>
                        <p className="text-sm text-gray-600">Secundario</p>
                      </div>
                      <div className="text-center">
                        <div 
                          className="w-full h-16 rounded-lg mb-2 border-2 border-gray-300"
                          style={{ backgroundColor: config.backgroundColor }}
                        ></div>
                        <p className="text-sm text-gray-600">Fondo</p>
                      </div>
                      <div className="text-center">
                        <div 
                          className="w-full h-16 rounded-lg mb-2 border-2 border-gray-300 bg-gradient-to-r"
                          style={{ 
                            backgroundImage: `linear-gradient(to right, ${config.primaryColor}, ${config.secondaryColor})` 
                          }}
                        ></div>
                        <p className="text-sm text-gray-600">Gradiente</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  onClick={handleSaveConfig}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Aplicar Cambios de Diseño
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