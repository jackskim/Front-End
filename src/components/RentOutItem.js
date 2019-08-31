import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Header, Button, Grid, Message, Segment, Container } from 'semantic-ui-react';
import Navigation from './Navigation.js';

const RentOutItemSchema = Yup.object().shape({
  description: Yup.string(),
  price: Yup.number()
            .required('Please enter an item price'),
  address: Yup.string()
            .required('Please enter an address'),
  imageUrl: Yup.string(),
  name: Yup.string()
            .required('Please enter an item name')
});

function RentOutItem (props) {

  return (
    <Container fluid>
      <Navigation />
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" style={{color: "#2B4162"}} textAlign="center">Rent Out Items</Header>
          <Formik
            initialValues={{ description: '', price: '', address: '', imageUrl: '', name: ''}}
            validationSchema={RentOutItemSchema}
            onSubmit={( values, { resetForm, setStatus }) => {
              axios.post('https://umts-backend.herokuapp.com/api/rentItems', values )
                  .then( res => {
                      resetForm();
                      props.history.push('/');
                  })
                  .catch(err => {
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
                component="textarea"
                type="text"
                name="description"
                placeholder="Description"
              />
              { touched.description && errors.description && <p className="form__error">{errors.description}</p> }
              <Field
                className="field"
                component="input"
                type="text"
                name="price"
                placeholder="Price"
              />
              { touched.price && errors.price && <p className="form__error">{errors.price}</p> }
              <Field
                className="field"
                component="input"
                type="text"
                name="address"
                placeholder="Address"
              />
              { touched.address && errors.address && <p className="form__error">{errors.address}</p> }
              <Field
                className="field"
                component="input"
                type="text"
                name="imageUrl"
                placeholder="ImageUrl"
              />
              { touched.imageUrl && errors.imageUrl && <p className="form__error">{errors.imageUrl}</p> }
              <Field
                className="field"
                component="input"
                type="text"
                name="name"
                placeholder="Name"
              />
              { touched.name && errors.name && <p className="form__error">{errors.name}</p> }
              
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
                Submit
              </Button> 
                </Segment>
            </Form>
          )}
        </Formik>
        </Grid.Column>
      </Grid>
    </Container>  
  );
}

export default RentOutItem;
