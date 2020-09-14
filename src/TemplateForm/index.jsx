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
          <h5 className={styles.description}>Create a link that will autofill an email with information.</h5>
          <div className={styles.tinyUrlResponse}>{tinyUrlResponse}</div>
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
                    <Form.Group as={Col} md="8" controlId="validationFormikMailTo" className={styles.formGroup}>
                        <Form.Label className={styles.label}>Mail to</Form.Label>
                        <Form.Control
                            type="text"
                            name="mailTo"
                            value={values.mailTo}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="validationFormikCC" className={styles.formGroup}>
                        <Form.Label className={styles.label}>CC</Form.Label>
                        <Form.Control
                            type="text"
                            name="cc"
                            value={values.cc}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="validationFormikBCC" className={styles.formGroup}>
                        <Form.Label className={styles.label}>BCC</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="bcc"
                            value={values.bcc}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="validationFormikSubject" className={styles.formGroup}>
                        <Form.Label className={styles.label}>Subject</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="subject"
                            value={values.subject}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="validationFormikBody" className={styles.formGroup}>
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
                    <Form.Group as={Col} md="8" controlId="validationFormikBody" className={styles.formGroup}>
                        <Form.Label className={styles.label}>Custom URL*</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="alias"
                            value={values.alias}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="8">
                      <small>The final link will look like: tinyurl.com/custom-url<br></br> If you do not enter a string, TinyUrl will return a random one like: tinyurl.com/asd897asd</small>
                    </Form.Group>
                    <Button type="submit" size="lg" className={styles.button}>Submit form</Button>
                  </Form>
              )}
          </Formik>
      </>
    )
}
