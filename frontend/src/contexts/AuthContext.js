import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Credenciales hardcodeadas (en producción deberían estar en el backend)
const ADMIN_CREDENTIALS = {
  username: 'Davidd18',
  password: 'AHB314867id2025',
  email: 'servicesduarte22@gmail.com'
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  // Check if user is already logged in on app start
  useEffect(() => {
    const checkAuthStatus = () => {
      const authToken = localStorage.getItem('admin_auth');
      const authExpiry = localStorage.getItem('admin_auth_expiry');
      const attempts = localStorage.getItem('login_attempts');
      const lockUntil = localStorage.getItem('account_locked_until');
      
      if (attempts) {
        setLoginAttempts(parseInt(attempts));
      }

      if (lockUntil) {
        const lockTime = new Date(lockUntil);
        if (new Date() < lockTime) {
          setIsLocked(true);
        } else {
          localStorage.removeItem('account_locked_until');
          localStorage.removeItem('login_attempts');
          setLoginAttempts(0);
        }
      }

      if (authToken && authExpiry) {
        const expiryTime = new Date(authExpiry);
        if (new Date() < expiryTime) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('admin_auth');
          localStorage.removeItem('admin_auth_expiry');
        }
      }
      
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  const login = async (username, password) => {
    if (isLocked) {
      const lockUntil = localStorage.getItem('account_locked_until');
      const lockTime = new Date(lockUntil);
      const remainingTime = Math.ceil((lockTime - new Date()) / 60000);
      throw new Error(`Cuenta bloqueada. Intenta de nuevo en ${remainingTime} minutos.`);
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const expiryTime = new Date();
      expiryTime.setHours(expiryTime.getHours() + 24); // Token expires in 24 hours
      
      localStorage.setItem('admin_auth', 'authenticated');
      localStorage.setItem('admin_auth_expiry', expiryTime.toISOString());
      localStorage.removeItem('login_attempts');
      localStorage.removeItem('account_locked_until');
      
      setIsAuthenticated(true);
      setLoginAttempts(0);
      setIsLocked(false);
      
      return { success: true };
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      localStorage.setItem('login_attempts', newAttempts.toString());

      if (newAttempts >= 5) {
        const lockUntil = new Date();
        lockUntil.setMinutes(lockUntil.getMinutes() + 30); // Lock for 30 minutes
        localStorage.setItem('account_locked_until', lockUntil.toISOString());
        setIsLocked(true);
        throw new Error('Demasiados intentos fallidos. Cuenta bloqueada por 30 minutos.');
      }

      throw new Error(`Credenciales incorrectas. Intentos restantes: ${5 - newAttempts}`);
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_auth');
    localStorage.removeItem('admin_auth_expiry');
    setIsAuthenticated(false);
  };

  const sendPasswordReset = async (email) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (email === ADMIN_CREDENTIALS.email) {
      // In production, this would send an actual email
      const resetCode = Math.random().toString(36).substr(2, 8).toUpperCase();
      localStorage.setItem('reset_code', resetCode);
      localStorage.setItem('reset_code_expiry', new Date(Date.now() + 15 * 60 * 1000).toISOString());
      
      // Simulate email sending (in production, call backend API)
      console.log(`Código de recuperación enviado a ${email}: ${resetCode}`);
      
      return { 
        success: true, 
        message: 'Código de recuperación enviado al email registrado.',
        resetCode // Remove this in production
      };
    } else {
      throw new Error('Email no encontrado en nuestros registros.');
    }
  };

  const resetPassword = async (code, newPassword) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const storedCode = localStorage.getItem('reset_code');
    const codeExpiry = localStorage.getItem('reset_code_expiry');

    if (!storedCode || !codeExpiry) {
      throw new Error('No hay código de recuperación activo.');
    }

    if (new Date() > new Date(codeExpiry)) {
      localStorage.removeItem('reset_code');
      localStorage.removeItem('reset_code_expiry');
      throw new Error('El código de recuperación ha expirado.');
    }

    if (code !== storedCode) {
      throw new Error('Código de recuperación inválido.');
    }

    // In production, you would update the password in the backend
    localStorage.removeItem('reset_code');
    localStorage.removeItem('reset_code_expiry');
    localStorage.removeItem('login_attempts');
    localStorage.removeItem('account_locked_until');
    
    setLoginAttempts(0);
    setIsLocked(false);

    return { success: true, message: 'Contraseña restablecida exitosamente.' };
  };

  const value = {
    isAuthenticated,
    isLoading,
    loginAttempts,
    isLocked,
    login,
    logout,
    sendPasswordReset,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};