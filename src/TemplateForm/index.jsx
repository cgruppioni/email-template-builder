import * as Yup from 'yup'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import { Formik } from 'formik'

import styles from './styles.module.css'

const schema = Yup.object({
    mailTo: Yup.string().required(),
    subject: Yup.string().required(),
    body: Yup.string().required(),
})

export const TemplateForm = () => {
    const [formResponse, setFormResponse] = useState('')

    return (
        <>
          <h4 className={styles.description}>Fill out this form and you will recieve a tiny.url to share an email template.</h4>
          <Formik
              validationSchema={schema}
              onSubmit={(values) => {setFormResponse("Success!")}}
              initialValues={{
                  mailTo: '',
                  cc: '',
                  bcc: '',
                  subject: '',
                  body: '',
              }}
          >
              {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
              }) => (
                  <Form noValidate onSubmit={handleSubmit} className={styles.form}>
                    <Form.Group as={Col} md="7" controlId="validationFormikMailTo" className={styles.formGroup}>
                        <Form.Label className={styles.label}>Mail to</Form.Label>
                        <Form.Control
                            type="text"
                            name="mailTo"
                            value={values.mailTo}
                            onChange={handleChange}
                            isInvalid={!!errors.mailTo}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.mailTo}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="7" controlId="validationFormikCC" className={styles.formGroup}>
                        <Form.Label className={styles.label}>cc</Form.Label>
                        <Form.Control
                            type="text"
                            name="cc"
                            value={values.cc}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="7" controlId="validationFormikBCC" className={styles.formGroup}>
                        <Form.Label className={styles.label}>bcc</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="bcc"
                            value={values.bcc}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="7" controlId="validationFormikSubject" className={styles.formGroup}>
                        <Form.Label className={styles.label}>subject</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="subject"
                            value={values.subject}
                            onChange={handleChange}
                            isInvalid={touched.subject && !!errors.subject}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.subject}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="7" controlId="validationFormikBody" className={styles.formGroup}>
                        <Form.Label className={styles.label}>body</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="body"
                            value={values.body}
                            onChange={handleChange}
                            isInvalid={touched.body && !!errors.body}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.body}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" size="lg" className={styles.button}>Submit form</Button>
                  </Form>
              )}
          </Formik>
          <div className={styles.formResponse}>{formResponse}</div>
      </>
    )
}
