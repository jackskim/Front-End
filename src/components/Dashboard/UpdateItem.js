import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';

import axiosWithAuth from '../../axiosWithAuth.js';

const UpdateItemSchema =  Yup.object().shape({
    name: Yup.string().required("Please enter your item name"),
    description: Yup.string(),
    price: Yup.number().required("Please enter a price"),
    address: Yup.string().required("Please enter an address"),
    imageUrl: Yup.string()
});


function UpdateItem(props) {
  
  const [ item, setItem ] = useState({});

  useEffect(() => {
    (async() => {
      try {
        const response = await axios.get(`https://umts-backend.herokuapp.com/api/rentItems/${props.match.params.itemid}`);
        setItem(response.data.item);
      } catch(error) {
        console.log(error);
      }
    })(); 
  },[props.match.params.itemid]);

  console.log(item);

  return (
        <Grid textAlign="center" style={{ height: '50vh', margin: '20px' }} verticalAlign="top" >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" style={{ color: '#2B4162' }}>Update Item</Header>
                <Formik
                    initialValues = {{ 
                        name: `${item.name}`,
                        description: `${item.description}`,
                        price: `${item.price}`,
                        address: `${item.address}`,
                        imageUrl: `${item.imageUrl}` 
                    }}
                    validationSchema = {UpdateItemSchema}
                    onSubmit = {( values, { resetForm, setStatus }) => {
                        axiosWithAuth()
                        .put(`https://umts-backend.herokuapp.com/api/rentItems/${props.item.id}`, values)
                            .then(res => {
                                setStatus(res.data);
                                resetForm();
                              props.history.push('/dashboard/itemlist');
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
                                placeholder='Item Name (Required)'
                            />
                             {touched.name && errors.name && (<p className='form__error'>{errors.name}</p>)}
                            <Field
                                className='field'
                                type='text'
                                name='description'
                                placeholder='Item Description'
                            />
                             {touched.description && errors.description && (<p className='form__error'>{errors.description}</p>)}
                            <Field
                                className='field'
                                type='number'
                                name='price'
                                placeholder='Item Price (Required)'
                            />
                             {touched.price && errors.price && (<p className='form__error'>{errors.price}</p>)} 
                            <Field
                                className='field'
                                type='text'
                                name='address'
                                placeholder='Address (required)'
                            />
                             {touched.address && errors.address && (<p className='form__error'>{errors.address}</p>)}
                            <Field
                                className='field'
                                type='text'
                                name='imageurl'
                                placeholder='Item Image URL'
                            />
                             {touched.phone && errors.phone && (<p className='form__error'>{errors.phone}</p>)}
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
                                 Update Item
                            </Button>
                        </Segment>
                    </Form>
                )}        
            </Formik>         
        </Grid.Column>
    </Grid>

  );
}

export default UpdateItem;
