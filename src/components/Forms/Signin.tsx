import {
  Formik,
  Form,
  Field,
} from 'formik';
import classes from './forms.module.sass';
import * as Yup from 'yup';
import auth from '../../auth';
import { SignInData, SignHideProps } from '../../interfaces/auth';
import { useState, useContext } from 'react';
import UserContext from '../../contexts/user.context';
import Loading from '../Elements/Loading';

const SigninSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(/^[aA-zZ0-9\s]+$/, "Must contain no special symbols"),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});


const Signin = ({hide} : SignHideProps) => {
  const initialValues: SignInData = { login: "", password: "" };

  const userContext = useContext(UserContext);

  const { setUser } = userContext;

  const [dbError, setDbError] = useState("");
  const [dbSuccess, setDbSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const signin = async (userData: SignInData) => {
    setLoading(true);
    const result = await auth.signIn(userData);

    if (result.error) {
      setDbError(result.error)
    };

    if (result.user) {
      setDbSuccess(`Hello, ${result.user.userName}`)
      if (setUser) {
        setUser(result.user);
      };
      setTimeout(() => {
        hide();
      }, 2000)
    }

    setLoading(false);

  };

  return (
    <div className={classes.signin}>
      {loading && <Loading />}
      <h1>Sign in</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          signin(values)
        }}
        validationSchema={SigninSchema}
      >
        {({ errors, touched }) => {

          return (
            <Form 
              className={classes.form}
              onChange={() => setDbError("")}
              >
              
              <label htmlFor="login">Login</label>
              <Field id="login" name="login" placeholder="Login" />
              {errors.login && touched.login ? (
                <div className={classes.error}>{errors.login}</div>
              ) : null}

              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" placeholder="password" />
              {errors.password && touched.password ? (
                <div className={classes.error}>{errors.password}</div>
              ) : null}


              {dbSuccess && <button 
                type="button"
                className={classes.submit_button + " " + classes.database_success} 
                onClick={hide}
                >
                {dbSuccess}
              </button>}

              {dbError && <button 
                type="button"
                className={classes.submit_button + " " + classes.database_error} 
                >
                {dbError}
              </button>}

              {!dbError && !dbSuccess && <button 
                className={classes.submit_button} 
                type="submit"
                >
                Submit
              </button>}
              
            </Form>
            )
          }
        }
      </Formik>
    </div>
  );
};

export default Signin;