import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Helmet from 'react-helmet'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Huvi korral meie teenuste vastu võid sõnumi saata siinsamas</title>
          <meta name="description" content="Kas soovid osta auto või müüa oma vana sõiduki meil? Kirjuta kui on huvi nende või teiste meie teenuste vastu." />
        </Helmet>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Kontaktid</h1>
              <a className="is-size-4" href="https://docs.google.com/forms/d/e/1FAIpQLSeBQV7MpfVycfktm-GZIOH-iwO3cUYyPPYqYDuIwK9euqlM9Q/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"
                title="Järelmaks">Järelmaksu taotlemiseks ava küsimustiku siin.</a>
              <hr />
              <p>Kirja võib saata siinsamas või aadressil valgamoto@gmail.com</p>
              <p>Telefon +372 503 0157</p>
              <hr />

              <form
                name="contact"
                method="post"
                action="/kontaktid/kiri-on-saadetud/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>

                <div className='columns'>
                  <div className="field column">
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Nimi
                  </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="field column">
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        E-mail
                  </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="field column">
                    <label className="label" htmlFor={'telefon'}>
                      Telefoninumber
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'tel'}
                        name={'telefon'}
                        onChange={this.handleChange}
                        id={'telefon'}
                      />
                    </div>
                  </div>

                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Sõnum
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Saada
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
