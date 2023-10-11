export type LoginData = {
    email: string;
    password: string;
  };
  
  export type LoginResponse = {
    id: string;
    name: string;
    email: string;
  };
  
  export interface AuthState {
    isAuthenticated: boolean;
    user: LoginResponse | null;
  }
