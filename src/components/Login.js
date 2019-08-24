import React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Header, Button } from 'semantic-ui-react';

const LoginSchema = Yup.object().shape({
  // telling Formik what shape the input data is supposed to be
  email: Yup.string()
    .email('Email is not valid')
    .required('Please enter your email address'),
  password: Yup.string()
    .required('Please enter a password')
});

function Login (props) {

  return (
    <Container className="container" >
      <Header as="h1">Login</Header>
        <Formik
          initialValues={{ email: '', password: ''}}
          validationSchema={LoginSchema}
          onSubmit={( values, { resetForm, setStatus }) => {
            // Where we write our form submission code (HTTP requests, etc.)
            axios.post('https://umts-backend.herokuapp.com/api/auth/login', values )
              .then( res => {
                resetForm();
                localStorage.setItem('token', res.data.token);
                props.history.push('/');
              })
              .catch( err => {
                console.log(err);
                setStatus(err);
              })
          }}
        >
        {({ isSubmitting, errors, touched }) => (
          <Form className="form">
            <Field
              className="field"
              component="input"
              type="email"
              name="email"
              placeholder="Email"
            />
            { touched.email && errors.email && <span className="form__error">{errors.email}</span> }
            <Field
              className="field field-password"
              component="input"
              type="password"
              name="password"
              placeholder="Password"
            />
            { touched.password && errors.password && <span className="form__error">{errors.password}</span> }
            <Button className="button" type="submit" disabled={isSubmitting}>Login</Button> 
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Login;

