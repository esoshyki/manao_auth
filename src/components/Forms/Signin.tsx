import {
  Formik,
  Form,
  Field,
} from 'formik';
import classes from './forms.module.sass';
import * as Yup from 'yup';
import auth from '../../auth';
import { signInData, SignHideProps } from '../../auth/interfaces';
import { useState } from 'react';


const SigninSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});


const Signin = ({hide} : SignHideProps) => {
  const initialValues: signInData = { login: "", password: "" };

  const [dbError, setDbError] = useState("");
  const [dbSuccess, setDbSuccess] = useState("");

  const signin = async (userData: signInData) => {
    const result = await auth.signIn(userData);

    if (result.error) {
      setDbError(result.error)
    };

    if (result.user) {
      setDbSuccess(`Hello, ${result.user.userName}`)
    }


  };

  return (
    <div className={classes.signin}>
      <h1>Sign in</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          signin(values)
        }}
        validationSchema={SigninSchema}
      >
        {({ errors, touched }) => (
        <Form className={classes.form}>
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
            className={classes.submit_button + " " + classes.database_success} 
            onClick={hide}
            >
            {dbSuccess}
          </button>}

          {dbError && <button 
            className={classes.submit_button + " " + classes.database_success} 
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
        )}
      </Formik>
    </div>
  );
};

export default Signin;