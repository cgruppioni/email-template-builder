import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import mail from './mail.svg';
import './App.css';



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mail} className="App-logo" alt="logo" />
      </header>
      <section>
      <Formik
        initialValues={{ mailTo: '', cc: '', bcc: '', subject: '', body: '' }}
        validate={values => {
          const errors = {};
          if (!values.mailTo) {
            errors.mailTo = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mailTo)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
          console.log("ASDASD")
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
              <label>Mail To: </label>
              <Field type="mailTo" name="mailTo" />
              <ErrorMessage name="mailTo" component="div" />
              <label>cc: </label>
              <Field type="cc" name="cc" />
              <ErrorMessage name="cc" component="div" />
              <label>bcc: </label>
              <Field type="bcc" name="bcc" />
              <ErrorMessage name="bcc" component="div" />
              <label>subject: </label>
              <Field type="subject" name="subject" as="textarea" />
              <ErrorMessage name="subject" component="div" />
              <label>body: </label>
              <Field type="body" name="body" as="textarea" />
              <ErrorMessage name="body" component="div" />
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
      </section>
      <footer>
        <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </footer>
    </div>
  );
}

export default App;
