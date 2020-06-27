import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const TemplateForm = () => {
  const formik = useFormik({
    initialValues: {
      mailTo: '',
      cc: '',
      bcc: '',
      subject: '',
      body: '',
    },
    validationSchema: Yup.object({
      mailto: Yup.string()
        .required('Required'),
      subject: Yup.string()
        .required('Required'),
      body: Yup.string()
        .required('Required')
    }),
    onSubmit: values => {
      console.log("2323")
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="mailTo">Mail To</label>
      <input
        id="mailTo"
        name="mailTo"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.mailTo}
      />
      {formik.touched.mailTo && formik.errors.mailTo ? (
        <div>{formik.errors.mailTo}</div>
      ) : null}
      <label htmlFor="cc">cc</label>
      <input
        id="cc"
        name="cc"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cc}
      />
      {formik.touched.cc && formik.errors.cc ? (
        <div>{formik.errors.cc}</div>
      ) : null}
      <label htmlFor="bcc">Bcc</label>
      <input
        id="bcc"
        name="bcc"
        type="bcc"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.bcc}
      />
      {formik.touched.bcc && formik.errors.bcc ? (
        <div>{formik.errors.bcc}</div>
      ) : null}
      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        name="subject"
        type="subject"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
      />
      {formik.touched.subject && formik.errors.subject ? (
        <div>{formik.errors.subject}</div>
      ) : null}
      <label htmlFor="body">Body</label>
      <input
        id="body"
        name="body"
        type="body"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.body}
      />
      {formik.touched.body && formik.errors.body ? (
        <div>{formik.errors.body}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  )
}
