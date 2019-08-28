import React from 'react';
import { Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import axiosWithAuth from '../axiosWithAuth.js'

const CreateProfileSchema =  Yup.object().shape({
    phone: Yup.number().required("Please enter your phone number"),
    street: Yup.string(),
    city: Yup.string().required("Please enter your city"),
    avatarUrl: Yup.string()
});


function CreateProfile (props) {

    return (
        <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle" >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" style={{ color: '#2B4162' }}>Create Profile</Header>
                <Formik
                    initialValues = {{ 
                        firstName: `${props.user.firstName}`,
                        lastName: `${props.user.lastName}`,
                        email: `${props.user.email}`,
                        password: '',
                        phone: '',
                        street: '',
                        city: '',
                        state: '',
                        avatarUrl: '' 
                    }}
                    validationSchema = {CreateProfileSchema}
                    onSubmit = {( values, { resetForm, setStatus }) => {
                        axiosWithAuth()
                            .put("https://umts-backend.herokuapp.com/api/auth/profile", values)
                            .then(res => {
                                setStatus(res.data);
                                resetForm();
                                props.history.push('/');
                            })
                            .catch( err => {
                                console.log(err);
                                setStatus(err);
                            })
                    }}
                >    
                {({ isSubmitting, errors, touched }) => (
                    <Form className='form'>
                        <Segment stacked>
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
                                placeholder='Password (required)'
                            />
                             {touched.password && errors.password && (<p className='form__error'>{errors.password}</p>)}
                            <Field
                                className='field'
                                type='text'
                                name='phone'
                                placeholder='Phone (required)'
                            />
                             {touched.phone && errors.phone && (<p className='form__error'>{errors.phone}</p>)}
                            <Field
                                className='field'
                                type='text'
                                name='street'
                                placeholder='Street Name'
                            />
                             {touched.street && errors.street && (<p className='form__error'>{errors.street}</p>)}
                            <Field
                                className='field'
                                type='text'
                                name='city'
                                placeholder='City Name (Required)'
                            />
                            {touched.city && errors.city && (<p className='form__error'>{errors.city}</p>)}
                            <Field 
                                className='field'
                                type='text'
                                name='state'
                                placeholder='State'
                            />
                             {touched.state && errors.state && (<p className='form__error'>{errors.state}</p>)}
                            <Field 
                                className='field'
                                type='text'
                                name='avatarUrl'
                                placeholder='Avatar'
                            />
                             {touched.avatarUrl && errors.avatarUrl && (<p className='form__error'>{errors.avatarUrl}</p>)} 
                             <Button 
                                 style={{
                                   color: 'white',
                                   backgroundColor: '#2B4162',
                                   marginTop: '10px'
                                 }}
                                 fluid
                                 size="large"
                                 type="submit" 
                                 disabled={isSubmitting}
                             >
                                 Submit
                            </Button>
                        </Segment>
                    </Form>
                )}        
            </Formik>         
        </Grid.Column>
    </Grid>
    );
}

export default CreateProfile;
