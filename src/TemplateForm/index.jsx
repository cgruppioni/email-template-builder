import * as Yup from 'yup'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import TinyURL from 'tinyurl'
import { Formik } from 'formik'

import styles from './styles.module.scss'


const schema = Yup.object({
  mailTo: Yup.string().required(),
})

export const TemplateForm = () => {
    const [tinyUrlResponse, setTinyUrlResponse] = useState('')
    const [tinyUrlResponseError, setTinyUrlResponseError] = useState('')

    return (
        <>
          <h5 className={styles.description}>Create a shareable email campaign</h5>
          <p className={styles.tinyUrlResponse}>{tinyUrlResponse}</p>
          <Formik
              validationSchema={schema}
              onSubmit={(values) => {
                const body = encodeURIComponent(values.body)
                const subject = encodeURIComponent(values.subject)

                const link = `mailTo:${values.mailTo}?cc=${values.cc}&bcc=${values.bcc}&subject=${subject}&body=${body}`
                const data = { 'url': link, 'alias': values.alias }

                TinyURL.shortenWithAlias(data).then(function(res) {
                  if (res === 'Error'){
                    setTinyUrlResponseError(values.alias)
                  }
                  else {
                    setTinyUrlResponse(<a href={`${res}`} rel="noopener noreferrer" target="_blank">{res}</a>)
                  }
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
                  isValid,
                  errors,
                  values,
              }) => (
                  <Form noValidate onSubmit={handleSubmit} className={styles.form}>
                    <Form.Group as={Col} md="8" controlId="validationFormikMailTo" className={styles.formGroup}>
                        <Form.Label className={styles.label}>To</Form.Label>
                        <Form.Control
                            type="text"
                            name="mailTo"
                            value={values.mailTo}
                            onChange={handleChange}
                            isInvalid={!!errors.mailTo}
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
                        <Form.Label className={styles.label}>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            type="text"
                            placeholder=""
                            name="body"
                            rows="5"
                            value={values.body}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="validationFormikCustomUrl" className={styles.customUrl}>
                        <Form.Label className={styles.label}>Custom Url</Form.Label>
                        <Form.Control
                            type="text"
                            name="alias"
                            value={values.alias}
                            isInvalid={tinyUrlResponseError}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    {tinyUrlResponseError && <Form.Group as={Col} md="8" className={styles.tinyUrlResponseError}>
                      <a href={`https://tinyurl.com/${tinyUrlResponseError}`} rel="noopener noreferrer" target="_blank">{`https://tinyurl.com/${tinyUrlResponseError}`}</a> has already been claimed. Please try a different custom url.
                    </Form.Group>}
                    <Button type="submit" size="lg" className={styles.button}>Submit form</Button>
                  </Form>
              )}
          </Formik>
      </>
    )
}
