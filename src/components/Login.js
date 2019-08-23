import React, { useState, useEffect } from 'react';
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

function Login (props, { errors, touched, values, isSubmitting }) {
  
  return (
    <Container>
      <Header as="h1">Login</Header>
        <Formik
          initialValues={{ email: '', password: ''}}
          validationSchema={LoginSchema}
          onSubmit={( values, { resetForm, setErrors, setSubmitting, setStatus }) => {
            // Where we write our form submission code (HTTP requests, etc.)
            axios.post("https://umts-backend.herokuapp.com/api/auth/login", values )
              .then( res => {
                //console.log(res);
                setSubmitting(false);
                resetForm();
                localStorage.setItem('token', res.data.token);
                props.history.push('/dashboard');
              })
              .catch( err => {
                console.log(err);
                setSubmitting(false);
              })
          }}
        >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Field
              component="input"
              type="email"
              name="email"
              placeholder="Email"
            />
            { touched.email && errors.email && <p className="form__error">{errors.email}</p> }
            <Field
              component="input"
              type="password"
              name="password"
              placeholder="Password"
            />
            { touched.password && errors.password && <p className="form__error">{errors.password}</p> }
            <Button type="submit" disabled={isSubmitting}>Login</Button> 
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Login;

