import React, { useEffect, useState, Fragment } from "react";
import ItemCardInfo from './ItemCardInfo';
import Navigation from './Navigation';
import { Formik, Form, Field } from 'formik';
import axiosWithAuth from '../axiosWithAuth.js';
import { Header, Button, Grid, Segment, Container} from 'semantic-ui-react';

const Card = props => {
    const [item, setItem] = useState();
    const id = props.match.params.id;

    useEffect(() => {
      (async () => {
        try {
          const response = await fetch(`https://umts-backend.herokuapp.com/api/rentItems/${id}`);
          const data = await response.json();
          setItem(data.item);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [props.match.params.id]);

    if (!item) return <p>Loading...</p>;

    return (
      <Container fluid>
        <Navigation />
        <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" style={{color: "#2B4162"}} textAlign="center">Rent Out Items</Header>
          <ItemCardInfo {...item} />
          <Formik
            initialValues={{ quantity: 1, startDate: '', endDate: '', pickupTime: '', pickupLocation: '' }}
            onSubmit={async (values, { resetForm, setStatus }) => {
              const response = await axiosWithAuth().post( `https://umts-backend.herokuapp.com/api/rentItems/${id}/bookings`, values);
              const booking = response.data.booking;
              console.log(response);
              setStatus({ booked: true })
            }} 
          >
            {({ isSubmitting, status, touched }) => (
              <Form>
                <Segment stacked>
                Rent This Item
                <Field
                  className='field'
                  type='number'
                  name='quantity'
                  placeholder='Quantity'
                />
                <Field
                  className='field'
                  type='text'
                  name='startDate'
                  placeholder='Start Date'
                />
                <Field
                  className='field'
                  type='text'
                  name='endDate'
                  placeholder='End Date'
                />
                <Field
                  className='field'
                  type='text'
                  name='pickupTime'
                  placeholder='Pickup Time'
                />
                <Field
                  className='field'
                  type='text'
                  name='pickupLocation'
                  placeholder='Pickup Location'
                />
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
                    Rent Item Now
                </Button>
                </Segment>
                { touched.booked && status.booked && <span className="form__error">{status.booked}</span> }
                {/* try {
                  if (status && status.booked) {
                    
                  }
                }
                {status && status.booked && (
                  <p>Item booked successfully!</p>
                )} */}
              </Form>
            )}
            </Formik>
            </Grid.Column>
          </Grid>
        </Container>
      )
  };

  export default Card;