import { initializeApp } from "firebase/app";
import { signUpData, signResult, signInData } from "./interfaces";
import database from "./database";

const firebaseConfig = {
  apiKey: "AIzaSyC-oPmUC0979pQrnjiy_4nr_ivrtf7QxOU",
  authDomain: "su-10-ee191.firebaseapp.com",
  databaseURL: "https://su-10-ee191.firebaseio.com",
  projectId: "su-10-ee191",
  storageBucket: "su-10-ee191.appspot.com",
  messagingSenderId: "776077864820",
  appId: "1:776077864820:web:d0e1f53f7a48f05a5bc621",
  measurementId: "G-0C902NFYV1"
};

export const app = initializeApp(firebaseConfig);

async function signUp(userData: signUpData) : Promise<signResult> {
  return await database.createUser(userData)
}

async function signIn(userData: signInData) : Promise<signResult>  {
  const user = await database.getUser(userData.login);

  if (user) {
    if (user.password === userData.password) {
      const responseData = {
        login: user.login,
        email: user.email,
        role: user.role,
        userName: user.userName
      };

      return ({
        user: responseData
      });
    } else {
      return ({
        error: "Password don't match"
      })
    }
  } else {
    return ({
      error: "User doesn't exists"
    })
  }
}

const AuthService = {
  signIn, signUp
}

export default AuthService;



