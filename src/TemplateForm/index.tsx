import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export const TemplateForm = () => {
    const [formResponse, setFormResponse] = useState('')

    return (
        <>
            <Formik
                initialValues={{ mailTo: '', subject: '', body: '' }}
                validationSchema={Yup.object({
                    mailTo: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    subject: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    body: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setFormResponse('You successfully submit the form!')
                }}
            >
                <Form>
                    <p>
                      <label htmlFor="mailTo">Mail To</label>
                      <Field name="mailTo" type="text" />
                      <ErrorMessage name="mailTo" />
                    </p>
                    <p>
                      <label htmlFor="cc">cc</label>
                      <Field name="cc" type="text" />
                      <ErrorMessage name="cc" />
                    </p>
                    <p>
                      <label htmlFor="bcc">bcc</label>
                      <Field name="bcc" type="bcc" />
                      <ErrorMessage name="bcc" />
                    </p>
                    <p>
                      <label htmlFor="subject">Subject</label>
                      <Field name="subject" type="text" />
                      <ErrorMessage name="subject" />
                    </p>
                    <p>
                      <label htmlFor="body">Body</label>
                      <Field name="body" type="text" as="textarea" />
                      <ErrorMessage name="body" />
                    </p>
                    <p>
                      <button type="submit">Submit</button>
                    </p>
                </Form>
            </Formik>
            <p>{formResponse}</p>
        </>
    )
}
