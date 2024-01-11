import { Field, Formik, Form, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import '../styles/LoginForm.css'; // Import your CSS file

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Password is required';
  } else if (value.length < 8) {
    error = 'Password must be at least 8 characters';
  }
  return error;
};

const LoginForm = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleTermsChange = () => {
    setAcceptTerms(!acceptTerms);
  };

  return (
    <div className="login-form-container">
      <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => { console.log(values) }}>
        <Form>
          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <Field type='email' name='email' validate={validateEmail} />
            <ErrorMessage name='email' />
          </div>
          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <Field type='password' name='password' validate={validatePassword} />
            <ErrorMessage name='password' />
          </div>
          <div className="form-group">
            <label className="click-here-label">Click Here</label>
            <span className="terms-and-conditions">
              <input type='radio' id='termsAndConditions' checked={acceptTerms} onClick={handleTermsChange} />
              <label htmlFor="termsAndConditions">I accept the Terms and Conditions</label>
            </span>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
