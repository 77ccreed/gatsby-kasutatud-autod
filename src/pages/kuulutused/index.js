import React from 'react'

import Layout from '../../components/Layout'
import Helmet from 'react-helmet'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Autode müügikuulutused. Kasutatud autod Euroopast</title>
          <meta name="description" content="Kasutatud autode müük Valga autoplatsil ja kodulehel. Kõik müüdavad autod on läbinud tehnilise taustakontrolli ja müügieelse ülevaatuse. Komisjonimüük" />
        </Helmet>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/kasutatud-autod-valgas.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow:
                'rgb(255, 68, 0, 0.7) 0.5rem 0px 0px, rgb(255, 68, 0, 0.7) -0.5rem 0px 0px',
              backgroundColor: 'rgb(255, 68, 0, 0.7)',
              color: 'white',
              padding: '1rem',
            }}
          >
            Kuulutused
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
