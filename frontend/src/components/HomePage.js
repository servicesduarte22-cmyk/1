import React, { useState, useEffect } from "react";
import { mockData } from "../mock";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Star, Phone, Instagram, MapPin, Mail, Menu, X, ExternalLink, 
         SignpostBig, Building2, Wrench, Paintbrush2, Lightbulb, 
         Users, Award, Clock, Shield, MessageCircle } from "lucide-react";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState({});

  const categories = ["todos", "Rotulación", "Fachadas", "Metalurgia", "Luminosos"];
  
  const filteredGallery = activeCategory === "todos" 
    ? mockData.gallery 
    : mockData.gallery.filter(item => item.category === activeCategory);

  const openInstagram = (url) => {
    window.open(url, '_blank');
  };

  const openWhatsApp = (phone, message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-2 border-teal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_fc9657d6-7929-4eec-92e2-af27677a1c50/artifacts/et6e4mcy_Recurso%202.png" 
                alt="Services Duarte Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
                  {mockData.company.name}
                </h1>
                <p className="text-sm text-gray-600">{mockData.company.experience} de experiencia</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#servicios" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Servicios</a>
              <a href="#galeria" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Galería</a>
              <a href="#nosotros" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Nosotros</a>
              <a href="#contacto" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Contacto</a>
              <Button 
                onClick={() => openWhatsApp(mockData.contact.whatsapp, mockData.contact.whatsappMessage)}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mr-2"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                onClick={() => openInstagram(mockData.contact.instagramUrl)}
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <a href="#servicios" className="text-gray-700 hover:text-teal-600 py-2">Servicios</a>
                <a href="#galeria" className="text-gray-700 hover:text-teal-600 py-2">Galería</a>
                <a href="#nosotros" className="text-gray-700 hover:text-teal-600 py-2">Nosotros</a>
                <a href="#contacto" className="text-gray-700 hover:text-teal-600 py-2">Contacto</a>
                <Button 
                  onClick={() => openInstagram(mockData.contact.instagramUrl)}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 text-white w-full mt-2"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-orange-400/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${visibleItems.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-orange-800 border-orange-200 mb-4 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Empresa Autorizada · RUC: {mockData.company.ruc}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-700 via-blue-600 to-orange-500 bg-clip-text text-transparent leading-tight">
                SERVICES DUARTE
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                {mockData.company.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  onClick={() => openInstagram(mockData.contact.instagramUrl)}
                  size="lg" 
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Ver Nuestros Trabajos
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {mockData.contact.phone}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {mockData.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleItems.servicios ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 border-teal-200 mb-4 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Nuestros Servicios
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-700 to-blue-600 bg-clip-text text-transparent">
              ¡Variedad de servicios en un mismo lugar!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Y si no lo tenemos, proponga lo que necesite y ¡lo haremos!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.services.map((service, index) => {
              const IconComponent = {
                SignpostBig, Building2, Wrench, Paintbrush2, Lightbulb
              }[service.icon];
              
              return (
                <Card key={service.id} className={`group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-teal-200 ${visibleItems.servicios ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${index * 100}ms`}}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                      <IconComponent className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="bg-teal-50 text-teal-700 border-teal-200 text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 4 && (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                          +{service.features.length - 4} más
                        </Badge>
                      )}
                    </div>
                    <Button 
                      onClick={() => openInstagram(mockData.contact.instagramUrl)}
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Ver Trabajos
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleItems.galeria ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-orange-800 border-orange-200 mb-4 px-4 py-2">
              <Instagram className="w-4 h-4 mr-2" />
              Galería
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Nuestros Trabajos Realizados
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Cada proyecto es una muestra de nuestra pasión y compromiso con la excelencia
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-700 border border-gray-200"
                  }`}
                >
                  {category === "todos" ? "Todos" : category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGallery.map((item, index) => (
              <div 
                key={item.id} 
                className={`group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${visibleItems.galeria ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{transitionDelay: `${index * 50}ms`}}
                onClick={() => openInstagram(item.instagramUrl)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Instagram Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Instagram className="w-6 h-6 text-pink-600" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/90 text-gray-800 text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Ver en Instagram
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="text-center mt-12">
            <Button 
              onClick={() => openInstagram(mockData.contact.instagramUrl)}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Ver Más Trabajos en Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${visibleItems.nosotros ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-blue-200 mb-4 px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Nuestra Historia
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
                25+ Años Transformando Ideas en Realidad
              </h2>
            </div>

            {/* Historia */}
            <Card className="border-2 border-gray-100 shadow-lg mb-12">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  {mockData.about.history}
                </p>
              </CardContent>
            </Card>

            {/* Misión y Visión */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-teal-100 shadow-lg bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-teal-700 flex items-center">
                    <Shield className="w-6 h-6 mr-2" />
                    Nuestra Misión
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {mockData.about.mission}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-orange-100 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-600 flex items-center">
                    <Award className="w-6 h-6 mr-2" />
                    Nuestra Visión
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {mockData.about.vision}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Valores */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Valores</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Estos valores guían cada proyecto y relación que construimos con nuestros clientes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.values.map((value, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-teal-700 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-teal-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleItems.testimonios ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border-amber-200 mb-4 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Testimonios
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className={`bg-white shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-amber-200 ${visibleItems.testimonios ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${index * 200}ms`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-teal-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${visibleItems.contacto ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              ¡Hagamos Realidad Tu Proyecto!
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              Contáctanos y descubre cómo podemos transformar la imagen de tu negocio
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4 text-teal-300" />
                  <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                  <p className="text-white/80">{mockData.contact.phone}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer" onClick={() => openInstagram(mockData.contact.instagramUrl)}>
                <CardContent className="p-6 text-center">
                  <Instagram className="w-8 h-8 mx-auto mb-4 text-pink-300" />
                  <h3 className="text-lg font-semibold mb-2">Instagram</h3>
                  <p className="text-white/80">{mockData.contact.instagram}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-orange-300" />
                  <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
                  <p className="text-white/80 text-sm">{mockData.contact.location}</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`tel:${mockData.contact.phone}`)}
                size="lg" 
                className="bg-white text-teal-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
              <Button 
                onClick={() => openInstagram(mockData.contact.instagramUrl)}
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/20 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Seguinos en Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_fc9657d6-7929-4eec-92e2-af27677a1c50/artifacts/et6e4mcy_Recurso%202.png" 
                alt="Services Duarte Logo" 
                className="h-10 w-auto"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                {mockData.company.name}
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Transformando ideas en realidades tangibles desde el año 2000. 
              Tu inversión está segura con nosotros.
            </p>
            <div className="flex justify-center items-center space-x-6 mb-6">
              <Button 
                variant="ghost" 
                onClick={() => window.open(`tel:${mockData.contact.phone}`)}
                className="text-gray-400 hover:text-white"
              >
                <Phone className="w-5 h-5 mr-2" />
                {mockData.contact.phone}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => openInstagram(mockData.contact.instagramUrl)}
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="w-5 h-5 mr-2" />
                {mockData.contact.instagram}
              </Button>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 {mockData.company.name}. Todos los derechos reservados. | RUC: {mockData.company.ruc}
              </p>
              <p className="text-gray-600 text-xs mt-2">
                {mockData.contact.address}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;