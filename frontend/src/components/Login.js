import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { Eye, EyeOff, Shield, Lock, Mail, ArrowLeft, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const Login = () => {
  const { login, sendPasswordReset, resetPassword, loginAttempts, isLocked } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(formData.username, formData.password);
      toast({
        title: "¡Bienvenido!",
        description: "Has ingresado exitosamente al panel de administración.",
      });
    } catch (error) {
      toast({
        title: "Error de Autenticación",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await sendPasswordReset(resetEmail);
      toast({
        title: "Código Enviado",
        description: result.message,
      });
      
      // For demo purposes, show the reset code (remove in production)
      if (result.resetCode) {
        toast({
          title: "Código de Recuperación (Demo)",
          description: `Tu código es: ${result.resetCode}`,
          duration: 10000
        });
      }
      
      setShowResetForm(true);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden.",
        variant: "destructive"
      });
      return;
    }

    if (newPassword.length < 8) {
      toast({
        title: "Error", 
        description: "La nueva contraseña debe tener al menos 8 caracteres.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      await resetPassword(resetCode, newPassword);
      toast({
        title: "¡Éxito!",
        description: "Contraseña restablecida exitosamente. Ya puedes iniciar sesión.",
      });
      
      // Reset form and go back to login
      setShowForgotPassword(false);
      setShowResetForm(false);
      setResetEmail('');
      setResetCode('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (showForgotPassword && !showResetForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-2 border-gray-100 backdrop-blur-sm bg-white/95">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
                Recuperar Contraseña
              </CardTitle>
              <CardDescription>
                Ingresa tu email para recibir un código de recuperación
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <Label htmlFor="resetEmail">Email de Recuperación</Label>
                  <Input
                    id="resetEmail"
                    type="email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="servicesduarte22@gmail.com"
                    required
                    className="border-gray-200 focus:border-teal-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      Enviando código...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Código
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setShowForgotPassword(false)}
                  className="w-full text-gray-600 hover:text-gray-800"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (showResetForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-2 border-gray-100 backdrop-blur-sm bg-white/95">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-700 to-teal-600 bg-clip-text text-transparent">
                Restablecer Contraseña
              </CardTitle>
              <CardDescription>
                Ingresa el código recibido y tu nueva contraseña
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
                  <Label htmlFor="resetCode">Código de Recuperación</Label>
                  <Input
                    id="resetCode"
                    type="text"
                    value={resetCode}
                    onChange={(e) => setResetCode(e.target.value.toUpperCase())}
                    placeholder="Ingresa el código de 8 dígitos"
                    required
                    className="border-gray-200 focus:border-teal-500 text-center font-mono text-lg tracking-wider"
                    maxLength={8}
                  />
                </div>

                <div>
                  <Label htmlFor="newPassword">Nueva Contraseña</Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Nueva contraseña"
                      required
                      minLength={8}
                      className="border-gray-200 focus:border-teal-500 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Mínimo 8 caracteres</p>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirma tu nueva contraseña"
                    required
                    className="border-gray-200 focus:border-teal-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      Restableciendo...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Restablecer Contraseña
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    setShowResetForm(false);
                    setShowForgotPassword(false);
                  }}
                  className="w-full text-gray-600 hover:text-gray-800"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Company Info */}
        <div className="text-center mb-8">
          <img 
            src="https://customer-assets.emergentagent.com/job_fc9657d6-7929-4eec-92e2-af27677a1c50/artifacts/et6e4mcy_Recurso%202.png" 
            alt="Services Duarte Logo" 
            className="h-16 w-auto mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-700 to-orange-500 bg-clip-text text-transparent">
            SERVICES DUARTE
          </h1>
          <p className="text-gray-600 mt-2">Panel de Administración</p>
        </div>

        <Card className="shadow-2xl border-2 border-gray-100 backdrop-blur-sm bg-white/95">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-blue-600 bg-clip-text text-transparent">
              Acceso Seguro
            </CardTitle>
            <CardDescription>
              Ingresa tus credenciales para acceder al panel administrativo
            </CardDescription>
          </CardHeader>

          <CardContent>
            {(loginAttempts > 0 || isLocked) && (
              <div className={`mb-4 p-3 rounded-lg border-2 ${
                isLocked 
                  ? 'bg-red-50 border-red-200 text-red-800' 
                  : 'bg-amber-50 border-amber-200 text-amber-800'
              }`}>
                <div className="flex items-center">
                  {isLocked ? (
                    <Lock className="w-5 h-5 mr-2" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 mr-2" />
                  )}
                  <div>
                    {isLocked ? (
                      <p className="font-semibold">Cuenta Bloqueada</p>
                    ) : (
                      <p className="font-semibold">Advertencia de Seguridad</p>
                    )}
                    <p className="text-sm">
                      {isLocked 
                        ? 'Demasiados intentos fallidos. Espera 30 minutos.'
                        : `${loginAttempts} intento${loginAttempts > 1 ? 's' : ''} fallido${loginAttempts > 1 ? 's' : ''}. ${5 - loginAttempts} restante${5 - loginAttempts > 1 ? 's' : ''}.`
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Ingresa tu usuario"
                  required
                  disabled={isLocked}
                  className="border-gray-200 focus:border-teal-500"
                />
              </div>

              <div>
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Ingresa tu contraseña"
                    required
                    disabled={isLocked}
                    className="border-gray-200 focus:border-teal-500 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLocked}
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading || isLocked}
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="loading-spinner mr-2"></div>
                    Verificando...
                  </>
                ) : isLocked ? (
                  <>
                    <Clock className="w-4 h-4 mr-2" />
                    Cuenta Bloqueada
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2" />
                    Iniciar Sesión
                  </>
                )}
              </Button>

              <Button
                type="button"
                variant="ghost"
                onClick={() => setShowForgotPassword(true)}
                disabled={isLoading}
                className="w-full text-teal-600 hover:text-teal-700 hover:bg-teal-50"
              >
                ¿Olvidaste tu contraseña?
              </Button>
            </form>

            {/* Security Info */}
            <div className="mt-6 p-3 bg-gray-50 rounded-lg border">
              <div className="flex items-start">
                <Shield className="w-4 h-4 mt-0.5 mr-2 text-gray-600" />
                <div className="text-xs text-gray-600">
                  <p className="font-semibold mb-1">Medidas de Seguridad:</p>
                  <ul className="space-y-1">
                    <li>• Máximo 5 intentos de login</li>
                    <li>• Bloqueo automático por 30 minutos</li>
                    <li>• Sesión expira en 24 horas</li>
                    <li>• Recuperación por email seguro</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Badge variant="outline" className="bg-white/80 text-gray-600">
            <Shield className="w-3 h-3 mr-1" />
            Área Restringida - Solo Personal Autorizado
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Login;