//AuthContext.tsx
import React, { createContext, useState, useContext, useCallback, useMemo, } from "react";

//criação do modelo de autenticação (só um boolean com duas funções)
type AuthContextType = {
    isAuthenticated: boolean;
    login: (name: string, email: string, password: string) => boolean;
    logout: () => void;
};

//cria contexto compartilhado de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//usuário pré-definido
const user = {
    name: "Bressan",
    email: "bressan@email.com",
    password: "123"
};

//função/componente de autenticação:
//"children" é o conteúdo que vai estar dentro de <AuthProvider> ... </AuthProvider>,
//um parâmetro já inato do componente que pode ser usado
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = useCallback((name: string, email: string, password: string) => 
    {
        if (
            name === user.name &&
            email === user.email &&
            password === user.password
        ) {
            setIsAuthenticated(true);
            return true;
        } else {
            return false;
        }
    }, []);

    const logout = useCallback(() => 
    {
        setIsAuthenticated(false);
    }, []);

    const value = useMemo(() => ({ isAuthenticated, login, logout}), [isAuthenticated, login, logout]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


//função auxiliar para impedir repetição de autenticação fora do login
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return context;
};