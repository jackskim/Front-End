import React from 'react';
import { Formik, Form, Field, } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Container, Header, Button } from 'semantic-ui-react';

const CreateProfileSchema =  Yup.object().shape({
    phone: Yup.number().required("Please enter your phone number"),
    street: Yup.string(),
    city: Yup.string().string().required("Please enter your city"),
    avatarUrl: Yup.string()
});


function CreateProfile (props) {

    return (
        < Container className='container' >
            <Header as="h1">Create Profile</Header>
                <Formik
                    initialValues = {{ phone: '', street: '', city: '', avatarUrl: '' }}
                    validationSchema = {CreateProfileSchema}
                    onSubmit = {( values, { resetForm, setStatus }) => {
                        axios
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
                        <Field
                            className='field'
                            type='text'
                            name='firstName'
                            placeholder='First Name'
                            value={props.user.firstName}
                        />
                         {touched.firstName && errors.firstName && (<p className='form__error'>{errors.firstName}</p>)}
                        <Field
                            className='field'
                            type='text'
                            name='lastName'
                            placeholder='Last Name'
                            value={props.user.lastName}
                        />
                         {touched.lastName && errors.lastName && (<p className='form__error'>{errors.lastName}</p>)}
                        <Field
                            className='field'
                            type='text'
                            name='email'
                            placeholder='Email'
                            value={props.user.email}
                        />
                         {touched.email && errors.email && (<p className='form__error'>{errors.email}</p>)} 
                        <Field
                            className='field'
                            type='number'
                            name='phone'
                            placeholder='Phone Number'
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
                            placeholder='City Name'
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
                        <Button className="button" type="submit" disabled={isSubmitting}>Submit</Button>
                    </Form>
                )}        
            </Formik>         
        </Container>
    );
                }

                export default CreateProfile;