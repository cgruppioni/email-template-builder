import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import TinyURL from 'tinyurl'
import { Formik } from 'formik'

import styles from './styles.module.scss'

export const TemplateForm = () => {
    const [tinyUrlResponse, setTinyUrlResponse] = useState('')

    return (
        <>
          <h5 className={styles.description}>Create a link that will autofill an email with information.</h5>
          <p className={styles.exampleUrl}>Ex: <a href="https://tinyurl.com/personemailexample" rel="noopener noreferrer" target="_blank">https://tinyurl.com/personemailexample</a></p>
          <p className={styles.tinyUrlResponse}>{tinyUrlResponse}</p>
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
                        <Form.Label className={styles.label}>To*</Form.Label>
                        <Form.Control
                            type="text"
                            name="mailTo"
                            value={values.mailTo}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="validationFormikCC" className={styles.formGroup}>
                        <Form.Label className={styles.label}>cc</Form.Label>
                        <Form.Control
                            type="text"
                            name="cc"
                            value={values.cc}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="validationFormikBCC" className={styles.formGroup}>
                        <Form.Label className={styles.label}>bcc</Form.Label>
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
                        <Form.Label className={styles.label}>Message*</Form.Label>
                        <Form.Control
                            as="textarea"
                            type="text"
                            placeholder=""
                            name="body"
                            value={values.body}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="validationFormikBody" className={styles.customUrl}>
                        <Form.Label className={styles.label}>Custom Url</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="personemailexample"
                            name="alias"
                            value={values.alias}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="8">
                      <small>*required</small>
                    </Form.Group>
                    <Button type="submit" size="lg" className={styles.button}>Submit form</Button>
                  </Form>
              )}
          </Formik>
      </>
    )
}
