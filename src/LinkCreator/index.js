// import TinyUrl from 'tinyurl'


const ShortenLink = (data) => {
  const url = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(data.url) + '&alias=' + encodeURIComponent(data.alias)

  fetch(url)
    .then(async response => {
      const data = await response.json()

      if (!response.ok) {
        const error = (data && data.message) || response.statusText
        console.log('error', error)
        return Promise.reject(error)
      }

      console.log('data', data)
      return { data: data }
    })
    .catch(error => {
      console.log('error', error.toString())
      return { error: error }
    })
}

export const LinkCreator = (values) => {
  const link = `mailTo:${values.mailTo}?cc=${values.cc}&bcc=${values.bcc}&subject=${values.subject}&body=${values.body}`

  const alias = 'caseyg971234k'

  const data = { url: link, alias: alias }

  return ShortenLink(data).data
}
