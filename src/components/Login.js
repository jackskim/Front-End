import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Header, Button, Grid, Message, Segment } from 'semantic-ui-react';

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
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" style={{color: "#2B4162"}} textAlign="center">Login</Header>
        <Formik
          initialValues={{ email: '', password: ''}}
          validationSchema={LoginSchema}
          onSubmit={( values, { resetForm, setStatus }) => {
            // Where we write our form submission code (HTTP requests, etc.)
            axios.post('https://umts-backend.herokuapp.com/api/auth/login', values )
              .then( res => {
                resetForm();
                localStorage.setItem('token', res.data.token);
                props.setUser(res.data.user);
                props.history.push('/');
              })
              .catch( err => {
                console.log(err);
                setStatus(err);
              })
          }}
        >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Segment stacked>
            <Field
              className="field"
              component="input"
              type="email"
              name="email"
              placeholder="Email"
            />
            { touched.email && errors.email && <p className="form__error">{errors.email}</p> }
            <Field
              className="field"
              component="input"
              type="password"
              name="password"
              placeholder="Password"
            />
            { touched.password && errors.password && <p className="form__error">{errors.password}</p> }
            <Button 
              style={{
                color: "white",
                backgroundColor: "#2B4162",
                marginTop: "10px"
              }} 
              fluid 
              size="large" 
              type="submit" 
              disabled={isSubmitting}>
              Login
            </Button> 
              </Segment>
          </Form>
        )}
      </Formik>
        <Message>
          New to us? <Link to="/signup">Sign up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Login;

