import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignUp = ({ errors, touched, values, status }) => {

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        if (status) {
            setUserInfo([...userInfo, status]);
        }
    }, [status]);


    return (
        <div className="signup-form">
            <Form>
                <Field
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                />
                {touched.firstName && errors.firstName && (
                    <p className='error'>{errors.firstName}</p>
                )}
                <Field
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                />
                {touched.lastName && errors.lastName && (
                    <p className='error'>{errors.lastName}</p>
                )}
                <Field
                    type='text'
                    name='email'
                    placeholder='Email'
                />
                {touched.email && errors.email && (
                    <p className='error'>{errors.email}</p>
                )}
                <Field
                    type='text'
                    name='password'
                    placeholder='Password'
                />
                {touched.password && errors.password && (
                    <p className='error'>{errors.password}</p>
                )}
            </Form>
        </div>
    );
};

const formikHOC = withFormik({
    mapPropsToValues({ firstName, lastName, email, password }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            email: email || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        firstName: Yup.string().required("not a good input"),
        lastName: Yup.string().required("not a good input"),
        email: Yup.string().required("not a good input"),
        password: Yup.string().required("not a good input")
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        axios
            .post("https://umts-backend.herokuapp.com/api/auth/register", values)
            .then(res => {
                console.log("handleSubmit: then: res: ", res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.error("handleSubmit: catch: err: ", err));
    }
});
const SignUpWithFormik = formikHOC(SignUp);

export default SignUpWithFormik;
