import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AdminProvider } from "./contexts/AdminContext";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/HomePage";
import AdminPanel from "./components/AdminPanel";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <AdminProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <AdminPanel />
                  </ProtectedRoute>
                } 
              />
            </Routes>
            <Toaster />
          </AdminProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;