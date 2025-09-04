import { createContext, useContext } from 'react';
import { User, Session } from '@supabase/supabase-js';

/**
 * Authentication context type definition
 * Contains user session data and loading state
 */
interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
}

/**
 * Authentication context with default values
 * Used to provide auth state throughout the application
 */
export const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true
});

/**
 * Custom hook to access authentication context
 * @returns {AuthContextType} Current authentication state
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};