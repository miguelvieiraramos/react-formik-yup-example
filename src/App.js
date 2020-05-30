import React from 'react';
import './App.css';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';


function App() {

  function handleSubmit(values) {
    alert(JSON.stringify(values))
  }

  const initialValues = {
    user: "",
    password: ""
  }

  const validations = yup.object().shape({
    user: yup.string().required(),
    password: yup.string().min(8).required()
  });

  return (
    <Formik initialValues={initialValues} onSubmit={(handleSubmit)} validationSchema={validations}>
      <Form>
        <div className="form-group">
          <Field type="text" placeholder="User" name="user" />
          <ErrorMessage component="span" name="user" />
        </div>
        <div className="form-group">
          <Field type="password" placeholder="Password" name="password" />
          <ErrorMessage component="span" name="password" />
        </div>
        <div className="form-group">
          <Field type="submit" value="Login"></Field>
        </div>
      </Form>
    </Formik>
  );
}

export default App;
