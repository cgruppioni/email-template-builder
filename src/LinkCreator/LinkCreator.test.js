import { ShortenLink } from './'
import { render } from '@testing-library/react'
import { hasUncaughtExceptionCaptureCallback } from 'process'

test('ShortenLink', () => {
  it('returns a link', () => {
    const link = 'https://cgruppioni.github.io'
    const response = ShortenLink(link)

    console.log(response)

    expect(response).toBe('something')
  })
})
