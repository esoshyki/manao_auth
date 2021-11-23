import {
  Formik,
  Form,
  Field,
} from 'formik';
import classes from './forms.module.sass';
import * as Yup from 'yup';
import { useState } from 'react';
import { SignUpData, SignHideProps } from '../../interfaces/auth';
import auth from '../../auth';
import Loading from '../Elements/Loading';

interface SignUpFormVaules {
  login: string;
  password: string;
  confirmPassword: string;
  email: string;
  userName: string;
}

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(/(?=.*[a-zA-Z0-9])/, "Must contain no special symbols"),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/(?=.*[a-z])/, 'Login must contain at least one lowercase letter.')
    .matches(/(?=.*[A-Z])/, 'Login must contain at least one uppercase letter.')
    .matches(/(?=.*[0-9])/, 'Login must contain at least one number.')
    .required('Required'),
  confirmPassword: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  email: Yup.string()
    .email()
    .required('Required'),
  userName: Yup.string()
    .min(2, 'Too Short!')
    .matches(/[a-яА-Яa-zA-Z]+$/, 'Only letters')
    .max(50, 'Too Long!')
    .required('Required'),
});

const SignUp = ({hide}: SignHideProps) => {
  const initialValues: SignUpFormVaules = { 
    login: "", 
    password: "",
    confirmPassword: "",
    email: "",
    userName: ""  
  };

  const [dbError, setDbError] = useState("");
  const [dbSuccess, setDbSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async (userData: SignUpFormVaules) => {
    setLoading(true);
    const newUser: SignUpData = {
      login: userData.login,
      email: userData.email,
      password: userData.password,
      userName: userData.userName,
      role: "user"
    };

    const result = await auth.signUp(newUser);

    if (result.error) {
      setDbError(result.error)
    };

    if (result.user) {
      setDbSuccess(`User ${result.user.login} has been created`)
    };
    setLoading(false);
  };

  return (
    <div className={classes.signin}>
      {loading && <Loading />}
      <h1>Sign up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: SignUpFormVaules, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
          signUp(values);
        }}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (    
        <Form 
          onChange={() => setDbError("")}
          className={classes.form}>

          <label htmlFor="login">Login</label>
          <Field id="login" name="login" placeholder="Login" />
          {errors.login && touched.login ? (
             <div className={classes.error}>{errors.login}</div>
           ) : null}

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" placeholder="Password" />
          {errors.password && touched.password ? (
             <div className={classes.error}>{errors.password}</div>
           ) : null}

          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm password" />
          {errors.confirmPassword && touched.confirmPassword ? (
             <div className={classes.error}>{errors.confirmPassword}</div>
           ) : null}

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" placeholder="Email" />
          {errors.email && touched.email ? (
             <div className={classes.error}>{errors.email}</div>
           ) : null}

          <label htmlFor="userName">Name</label>
          <Field id="userName" name="userName" placeholder="Name" />
          {errors.userName && touched.userName ? (
             <div className={classes.error}>{errors.userName}</div>
           ) : null}

          {dbSuccess && <button 
            className={classes.submit_button + " " + classes.database_success} 
            onClick={hide}
            >
            {dbSuccess}
          </button>}

          {dbError && <button 
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
        )}
      </Formik>
    </div>
  );
};

export default SignUp;