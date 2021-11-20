import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import classes from './forms.module.sass';
import * as Yup from 'yup';

interface SignInFrom {
  login: string;
  password: string;
};

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


const Signin = () => {
  const initialValues: SignInFrom = { login: "", password: "" };

  return (
    <div className={classes.signin}>
      <h1>Sign in</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
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

          <button className={classes.submit_button} type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signin;