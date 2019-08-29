import React from 'react';
import { Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import axiosWithAuth from '../axiosWithAuth.js'

const BookItemSchema =  Yup.object().shape({
    name: Yup.string().required("Please enter your item name"),
    description: Yup.string(),
    price: Yup.number().required("Please enter your item price"),
    address: Yup.string().required("Please enter your address"),
    imageUrl: Yup.string()
});


function BookItem (props) {

    return (
        <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle" >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" style={{ color: '#2B4162' }}>Create Profile</Header>
                <Formik
                    initialValues = {{ 
                        name: `${props.item.name}`,
                        userId: `${props.user.userId}`,
                        description: `${props.item.description}`,
                        price: `${props.item.price}`,
                        address: `${props.item.address}`,
                        imageUrl: `${props.item.imageUrl}`,
                        status: `${props.item.status}` 
                    }}
                    validationSchema = {BookItemSchema}
                    onSubmit = {( values, { resetForm, setStatus }) => {
                        axiosWithAuth()
                            .put(`https://umts-backend.herokuapp.com/api/rentItems/${id}`, values)
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
                                name='name'
                                placeholder='Name'
                            />
                             {touched.name && errors.name && (<p className='form__error'>{errors.name}</p>)}
                            <Field
                                className='field'
                                component='textarea'
                                type='text'
                                name='description'
                                placeholder='Description'
                            />
                             {touched.description && errors.description && (<p className='form__error'>{errors.description}</p>)}
                            <Field
                                className='field'
                                type='text'
                                name='price'
                                placeholder='Price'
                            />
                             {touched.price && errors.price && (<p className='form__error'>{errors.price}</p>)} 
                            <Field
                                className='field'
                                type='text'
                                name='address'
                                placeholder='Address'
                            />
                             {touched.address && errors.address && (<p className='form__error'>{errors.address}</p>)}
                            <Field
                                className='field'
                                type='text'
                                name='imageUrl'
                                placeholder='Image URL'
                            />
                             {touched.imageUrl && errors.imageUrl && (<p className='form__error'>{errors.imageUrl}</p>)}
                            <Field
                                component='select'
                                className='field'
                                name='status'
                            />
                                <option>Rent Status</option>
                                <option value='open'>Open For Rental</option>
                                <option calue='closed'>Closed For Rental</option>
                             {touched.status && errors.status && (<p className='form__error'>{errors.status}</p>)}
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

export default BookItem;