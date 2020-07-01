import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const schema = Yup.object({
    mailTo: Yup.string().required(),
    subject: Yup.string().required(),
    body: Yup.string().required(),
})

export const TemplateForm = () => {
    const [formResponse, setFormResponse] = useState('')

    return (
        <>
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
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                        <Form.Label>Mail to</Form.Label>
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
                    <Form.Group as={Col} md="4" controlId="validationFormik02">
                        <Form.Label>cc</Form.Label>
                        <Form.Control
                            type="text"
                            name="cc"
                            value={values.cc}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                        <Form.Label>bcc</Form.Label>
                        <Form.Group as={Col} md="6" controlId="validationFormik03">
                            <Form.Label>bcc</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                name="bcc"
                                value={values.bcc}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                        <Form.Label>subject</Form.Label>
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
                    <Form.Group as={Col} md="3" controlId="validationFormik04">
                        <Form.Label>body</Form.Label>
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
                      <Button type="submit">Submit form</Button>
                  </Form>
              )}
          </Formik>
          <p>{formResponse}</p>
      </>
    )
}
