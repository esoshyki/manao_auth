export interface SignInData {
    login: string;
    password: string;
  }
  
  export interface SignUpData {
    login: string;
    password: string;
    email: string;
    userName: string,
    role: string
  }
  
  export interface SafeUserData {
    login: string,
    email: string,
    userName: string,
    role: string
  }
  
  export interface NoUserData {
    role: string,
    userName: null,
    login: null
  }
  
  export interface SignResult {
    error?: string;
    user?: SafeUserData | NoUserData;
  }
  
  export interface FindUserData {
    login: string;
    email: string;
  }
  
  export interface SignHideProps {
    hide: () => void
  };