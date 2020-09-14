import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import TinyURL from 'tinyurl'
import { Formik } from 'formik'

import styles from './styles.module.css'

export const TemplateForm = () => {
    const [tinyUrlResponse, setTinyUrlResponse] = useState('')

    return (
        <>
          <h4 className={styles.description}>Fill out this form and you will recieve a tiny.url to share an email template.</h4>
          <Formik
              onSubmit={(values) => {
                const body = encodeURIComponent(values.body)
                const subject = encodeURIComponent(values.subject)

                const link = `mailTo:${values.mailTo}?cc=${values.cc}&bcc=${values.bcc}&subject=${subject}&body=${body}`
                const data = { 'url': link, 'alias': values.alias }

                TinyURL.shortenWithAlias(data).then(function(res) {
                  setTinyUrlResponse(<a href={`${res}`} rel="noopener noreferrer" target="_blank">{res}</a>)
                }, function(err) {
                  setTinyUrlResponse('Please try a different alias.')
                })

              }}
              initialValues={{
                  mailTo: '',
                  cc: '',
                  bcc: '',
                  subject: '',
                  body: '',
                  alias: '',
              }}
          >
              {({
                  handleSubmit,
                  handleChange,
                  values,
              }) => (
                  <Form noValidate onSubmit={handleSubmit} className={styles.form}>
                    <Form.Group as={Col} md="7" controlId="validationFormikMailTo" className={styles.formGroup}>
                        <Form.Label className={styles.label}>Mail to</Form.Label>
                        <Form.Control
                            type="text"
                            name="mailTo"
                            value={values.mailTo}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="7" controlId="validationFormikCC" className={styles.formGroup}>
                        <Form.Label className={styles.label}>CC</Form.Label>
                        <Form.Control
                            type="text"
                            name="cc"
                            value={values.cc}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="7" controlId="validationFormikBCC" className={styles.formGroup}>
                        <Form.Label className={styles.label}>BCC</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="bcc"
                            value={values.bcc}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="7" controlId="validationFormikSubject" className={styles.formGroup}>
                        <Form.Label className={styles.label}>Subject</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="subject"
                            value={values.subject}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="7" controlId="validationFormikBody" className={styles.formGroup}>
                        <Form.Label className={styles.label}>Body</Form.Label>
                        <Form.Control
                            as="textarea"
                            type="text"
                            placeholder=""
                            name="body"
                            value={values.body}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="7" controlId="validationFormikBody" className={styles.formGroup}>
                        <Form.Label className={styles.label}>Alias*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="alias"
                            value={values.alias}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="7">
                      <small>*If you do not enter an alias, TinyUrl will return a random string</small>
                    </Form.Group>
                    <Button type="submit" size="lg" className={styles.button}>Submit form</Button>
                  </Form>
              )}
          </Formik>
          <div className={styles.tinyUrlResponse}>{tinyUrlResponse}</div>
      </>
    )
}
