import React, { FormEvent, useState }from 'react'
import * as Yup from 'yup'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import TinyURL from 'tinyurl'
import { Formik } from 'formik'

import mail from './mail.svg'
import styles from './styles.module.scss'

const schema = Yup.object({
  mailTo: Yup.string().required(),
})

const App = () => {
  const [tinyUrlResponse, setTinyUrlResponse] = useState('')
  const [tinyUrlResponseError, setTinyUrlResponseError] = useState(false)

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={mail} className={styles.appLogo} alt="logo" />
      </header>
      <main>
        <h5 className={styles.description}>Create a shareable email campaign</h5>
        <a className={styles.instructions} href="https://tinyurl.com/emailtemplatedirections" rel="noopener noreferrer" target="_blank">Instructions</a>
        <p className={styles.tinyUrlResponse}>{tinyUrlResponse}</p>
        <Formik
          validationSchema={schema}
          onSubmit={(values) => {
            const body = encodeURIComponent(values.body)
            const subject = encodeURIComponent(values.subject)

            const link = `mailTo:${values.mailTo}?cc=${values.cc}&bcc=${values.bcc}&subject=${subject}&body=${body}`
            const data = { 'url': link, 'alias': values.alias }

            TinyURL.shortenWithAlias(data).then(function(res: {} | null | undefined) {
              if (res === 'Error'){
                setTinyUrlResponseError(true)
                setTinyUrlResponse(values.alias)
              }
              else {
                setTinyUrlResponseError(false)
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
                        // rows="5"
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
                  <a href={`https://tinyurl.com/${setTinyUrlResponse}`} rel="noopener noreferrer" target="_blank">{`https://tinyurl.com/${setTinyUrlResponse}`}</a> has already been claimed. Please try a different custom url.
                </Form.Group>}
                <Button type="submit" size="lg" className={styles.button}>Submit form</Button>
              </Form>
          )}
        </Formik>
      </main>
      <footer>
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </footer>
    </div>
  )
}

export default App
