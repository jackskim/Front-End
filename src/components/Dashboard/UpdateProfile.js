import React from 'react';
import { Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import axiosWithAuth from '../../axiosWithAuth.js'

const UpdateProfileSchema =  Yup.object().shape({
    phone: Yup.number().required("Please enter your phone number"),
    street: Yup.string(),
    city: Yup.string().required("Please enter your city"),
    avatarUrl: Yup.string()
});


function UpdateProfile (props) {

  const user = props.user;
  const setUser = props.setUser;
    return (
        <Grid textAlign="center" style={{ height: '80vh' }} verticalAlign="middle" >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" style={{ color: '#2B4162' }}>Update Profile</Header>
                <Formik
                    initialValues = {{ 
                        firstName: user.firstName || '',
                        lastName: user.lastName || '',
                        email: user.email || '',
                        password: '',
                        phone: user.phone || '',
                        street: user.street || '',
                        city: user.city || '',
                        state: user.state ||'',
                        avatarUrl: user.avatarUrl ||'' 
                    }}
                    validationSchema = {UpdateProfileSchema}
                    onSubmit = {( values, { resetForm, setStatus }) => {
                        axiosWithAuth()
                            .put("https://umts-backend.herokuapp.com/api/auth/profile", values)
                            .then(res => {
                                setStatus({msg: 'Profile Updated Successfully'});
                                resetForm({...res.data.user, password:''});
                                console.log(res.data);
                            })
                            .catch( err => {
                                console.log(err);
                                setStatus(err);
                            })
                    }}
                >    
                {({ isSubmitting, errors, touched, status }) => (
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

export default UpdateProfile;
