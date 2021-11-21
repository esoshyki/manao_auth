export interface signInData {
  login: string;
  password: string;
}

export interface signUpData {
  login: string;
  password: string;
  email: string;
  userName: string,
  role: string
}

export interface responseUserData {
  login: string,
  email: string,
  userName: string,
  role: string
}

export interface signResult {
  error?: string;
  user?: responseUserData;
}

export interface findUserData {
  login: string;
  email: string;
}

export interface SignHideProps {
  hide: () => void
};