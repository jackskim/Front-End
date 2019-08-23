import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Header, Button } from 'semantic-ui-react';

function Login ({ errors, touched, values, isSubmitting, status }) {

  const [ user, setUser] = useState([]);

  useEffect(() => {
    if(status) {
      setUser([...user, status]);
    }
  }, [status])

  return (
    <Container>
      <Header as="h1">Login</Header>
        <Form>
          <Field
            component="input"
            type="email"
            name="email"
            placeholder="Email"
          />
              { touched.email && errors.email && <p className="form__error">{errors.name}</p> }
          <Field
            component="input"
            type="password"
            name="password"
            placeholder="Password"
          />
          { touched.password && errors.password && <p className="form__error">{errors.password}</p> }
          <Button disabled={isSubmitting}>Login</Button> 
        </Form>
    </Container>
  );
}

const propsToValuesMap = {
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || "",
    }
  },
  validationSchema: Yup.object().shape({
    // telling Formik what shape the input data is supposed to be
    email: Yup.string()
      .email('Email is not valid')
      .required('Please enter your email address'),
    password: Yup.string()
      .min(6, 'Password must be 6 characters or longer')
      .required('Please enter a password')
  }),
  handleSubmit( values, props, { resetForm, setErrors, setSubmitting, setStatus }) {
    // Where we write our form submission code (HTTP requests, etc.)
    axios.post("https://umts-backend.herokuapp.com/api", values )
      .then( res => {
        console.log(res);
        setStatus(res.data);
        resetForm();
        setSubmitting(false);
        localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard');
      })
      .catch( err => {
        console.log(err);
        setSubmitting(false);
      })
  }
};

export default withFormik(propsToValuesMap)(Login);

