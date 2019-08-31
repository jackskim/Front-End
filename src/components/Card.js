import React, { useEffect, useState, Fragment } from "react";
import ItemCardInfo from './ItemCardInfo';
import Navigation from './Navigation';
import { Formik, Form, Field } from 'formik';
import axiosWithAuth from '../axiosWithAuth.js';

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
      <Fragment>
        <Navigation />
        <ItemCardInfo {...item} />
        <Formik
          initialValues={{ quantity: 1, startDate: '', endDate: '', pickupTime: '', pickupLocation: '' }}
          onSubmit={async (values, { resetForm, setStatus }) => {
            const response = await axiosWithAuth().post( `https://umts-backend.herokuapp.com/api/rentItems/${id}/bookings`, values);
            const booking = response.data.booking;
            setStatus({ booked: true })
          }} 
        >
          {({ isSubmitting, status, touched }) => (
            <Form>
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
              <button type="submit">
                Rent Item Now
              </button>
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
      </Fragment>
    )
};

export default Card;