import { app } from './index';
import { getDatabase, ref, get, set } from "firebase/database";
import { findUserData, signUpData, signResult, responseUserData } from './interfaces';

async function findUserByLoginOrEmail({
  login, email
} : findUserData) {
  try {
    const database = getDatabase(app);
    const sameLoginQuery = ref(database, 'manao/users');
    const snapshot = await get(sameLoginQuery);

    if (snapshot.exists()) {
      const users = snapshot.val();
      const filtredUsers = Object.keys(users).filter((key) => {
        return users[key].login === login || users[key].email === email
      });

      if (filtredUsers.length === 0) {
        return null
      } else {
        return users[filtredUsers[0]];
      }
    } else {
      return null
    }
  } catch (err) {
    console.log(err)
  };
};

const getUser = async (login: string) => {
  const database = getDatabase(app);
  const userRef = ref(database, 'manao/users/' + login);
  const snapshot = await get(userRef);
  
  if (snapshot.exists()) {
    return snapshot.val()
    } else {
    return null
  };
};

const getResponseData = (userData: signUpData) : responseUserData => {
  const responseData = {
    login: userData.login,
    email: userData.email,
    userName: userData.userName,
    role: userData.role
  };

  return responseData;
};

const createUser = async (userData: signUpData) : Promise<signResult> => {
  const database = getDatabase(app);
  const foundUsers = await findUserByLoginOrEmail({
    login: userData.login,
    email: userData.email
  });

  if (foundUsers === null) {
    set(ref(database, 'manao/users/' + userData.login), userData);
    return {
      user: getResponseData(userData)
    }; 
  } else {
    return ({
      error: "User exists"
    })
  };
};

const databaseService = {
  findUserByLoginOrEmail,
  createUser,
  getUser
}

export default databaseService;