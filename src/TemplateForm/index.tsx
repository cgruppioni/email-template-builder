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
                    <label htmlFor="mailTo">Mail To</label>
                    <Field name="mailTo" type="text" />
                    <ErrorMessage name="mailTo" />
                    <label htmlFor="cc">Last Name</label>
                    <Field name="cc" type="text" />
                    <ErrorMessage name="cc" />
                    <label htmlFor="bcc">Email Address</label>
                    <Field name="bcc" type="bcc" />
                    <ErrorMessage name="bcc" />
                    <label htmlFor="subject">Subject</label>
                    <Field name="subject" type="text" />
                    <ErrorMessage name="subject" />
                    <label htmlFor="body">Body</label>
                    <Field name="body" type="text" />
                    <ErrorMessage name="body" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <p>{formResponse}</p>
        </>
    )
}
