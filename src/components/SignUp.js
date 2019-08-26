import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Container, Header, Button } from 'semantic-ui-react';


const SignUpSchema =  Yup.object().shape({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string().email("email is not valid").required("Please enter your email address"),
    password: Yup.string().required("Please enter a password")
});


function SignUp (props) {

    return (
        < Container className='container' >
            <Header as="h1">SignUp</Header>
                <Formik
                    initialValues = {{ firstName: '', lastName: '', email: '', password: '' }}
                    validationSchema = {SignUpSchema}
                    onSubmit = {( values, { resetForm, setStatus }) => {
                        axios
                            .post("https://umts-backend.herokuapp.com/api/auth/register", values)
                            .then(res => {
                                setStatus(res.data);
                                resetForm();
                        

                            })
                        const { email, password } = values;
                        axios
                            .post("https://umts-backend.herokuapp.com/api/auth/login", {email, password})
                            .then(res => {
                            localStorage.setItem('token', res.data.token);
                            props.history.push('/dashboard');
                        })
                            .catch( err => {
                                console.log(err);
                                setStatus(err);
                            })
                    }}
                >    
                {({ isSubmitting, errors, touched }) => (
                    <Form className='form'>
                        <Field
                            className='field'
                            type='text'
                            name='firstName'
                            placeholder='First Name'
                        />
                         {touched.firstName && errors.firstName && (<p className='form__error'>{errors.firstName}</p>)}
                        <Field
                            className='field'
                            type='text'
                            name='lastName'
                            placeholder='Last Name'
                        />
                         {touched.lastName && errors.lastName && (<p className='form__error'>{errors.lastName}</p>)}
                        <Field
                            className='field'
                            type='text'
                            name='email'
                            placeholder='Email'
                        />
                        {touched.email && errors.email && (<p className='form__error'>{errors.email}</p>)}
                        <Field 
                            className='field'
                            type='password'
                            name='password'
                            placeholder='Password'
                        />
                         {touched.password && errors.password && (<p className='form__error'>{errors.password}</p>)}
                        <Button className="button" type="submit" disabled={isSubmitting}>Sign Up</Button>
                    </Form>
                )}        
            </Formik>         
            <Link to="/login">Already have an account? Log in</Link>
        </Container>
    );
                }

                export default SignUp;
