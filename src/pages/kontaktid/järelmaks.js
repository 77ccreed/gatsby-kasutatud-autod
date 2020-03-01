import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Helmet from 'react-helmet'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Järelmaks extends React.Component {
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
          <title>Auto järelmaks</title>
          <meta name="description" content="Pakume koos Inbank-iga oma klientidele võimalust osta auto järelmaksuga. Täida küsimustik meie kodulehel või küsi pakkumist müügiplatsil." />
        </Helmet>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Järelmaks</h1>
              <form
                name="jarelmaks"
                method="post"
                action="/kontaktid/kiri-on-saadetud/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="jarelmaks" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className='columns'>

                  <div className="field column">
                    <label className="label" htmlFor={'name'}>
                      Ees ja perekonnanimi
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
                  <div className="field column">
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
                        required={true}
                      />
                    </div>
                  </div>

                </div>

                <div className='columns'>

                  <div className="field column">
                    <label className="label" htmlFor={'aadress'}>
                      Aadress
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'aadress'}
                        onChange={this.handleChange}
                        id={'aadress'}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="field column">
                    <label className="label" htmlFor={'linn'}>
                      Linn
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'linn'}
                        onChange={this.handleChange}
                        id={'linn'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label" htmlFor={'maakond'}>
                      Maakond
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'maakond'}
                        onChange={this.handleChange}
                        id={'maakond'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label" htmlFor={'postiindeks'}>
                      Postiindeks
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'postiindeks'}
                        onChange={this.handleChange}
                        id={'postiindeks'}
                        required={true}
                      />
                    </div>
                  </div>

                </div>

                <div className='columns'>
                  <div className="field column">
                    <label className="label" htmlFor={'isikukood'}>
                      Isikukood
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'isikukood'}
                        onChange={this.handleChange}
                        id={'isikukood'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label" htmlFor={'doktuup'}>
                      Dokumendi tüüp
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'doktuup'}
                        onChange={this.handleChange}
                        id={'doktuup'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label" htmlFor={'doknr'}>
                      Dokumendi number
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'doknr'}
                        onChange={this.handleChange}
                        id={'doknr'}
                        required={true}
                      />
                    </div>
                  </div>

                </div>



                <div className='columns'>
                  <div className="field column">
                    <label className="label" htmlFor={'tookoht'}>
                      Töökoht
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'tookoht'}
                        onChange={this.handleChange}
                        id={'tookoht'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label" htmlFor={'netosissetulek'}>
                      Igakuine netosissetulek
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'netosissetulek'}
                        onChange={this.handleChange}
                        id={'netosissetulek'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label" htmlFor={'liisinglaen'}>
                      Igakuised liisingu- ja laenumaksed
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'liisinglaen'}
                        onChange={this.handleChange}
                        id={'liisinglaen'}
                        required={true}
                      />
                    </div>
                  </div>

                </div>

                <div className='columns'>
                  <div className="field column">
                    <label className="label" htmlFor={'arvelduskonto'}>
                      Arvelduskonto number
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'arvelduskonto'}
                        onChange={this.handleChange}
                        id={'arvelduskonto'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label" htmlFor={'pank'}>
                      Pank
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'pank'}
                        onChange={this.handleChange}
                        id={'pank'}
                        required={true}
                      />
                    </div>
                  </div>

                </div>
                <div className='columns'>
                  <div className="field column">
                    <label className="label" htmlFor={'soidukinimi'}>
                      Sõiduki nimi
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'soidukinimi'}
                        onChange={this.handleChange}
                        id={'soidukinimi'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label" htmlFor={'maksumus'}>
                      Sõiduki maksumus
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'maksumus'}
                        onChange={this.handleChange}
                        id={'maksumus'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label" htmlFor={'osamakse'}>
                      Osamaksete arv
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'osamakse'}
                        onChange={this.handleChange}
                        id={'osamakse'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field column">
                    <label className="label" htmlFor={'sissemakse'}>
                      Sissemakse
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'sissemakse'}
                        onChange={this.handleChange}
                        id={'sissemakse'}
                        required={true}
                      />
                    </div>
                  </div>

                </div>

                <div className="field">
                  <button className="button is-link" type="submit">
                    Esita järelmaksutaotlus
                  </button>


                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">Järelmaksu tingimused</h2>
                  <p className="content">Oled vähemalt 21-aastane Eesti kodanik või Sul on elamisluba</p>
                  <p className="content">Sinu igakuine netosissetulek on vähemalt 280 eurot</p>
                  <p className="content">Sa täidad oma rahalisi kohustusi korrektselt</p>
                  <p className="content">Järelmaksusumma mida saame Sinule pakkuda, sõltub Sinu igakuisest sissetulekust ja kohustustest</p>
                  <h2 className="title is-size-4 has-text-weight-bold is-bold-light">Osamaksete tasumine</h2>
                  <p className="content">Saadame Sinu kodupanga internetipanka igal kuul e-arve. Osamaksete tasumise tähtaeg on iga kuu 12. kuupäev.</p>
                  <p className="content">Kui e-arve ei ole Sinuni jõudnud, täida vorm e-arve tellimiseks. Kui soovid makseid igakuiselt käsitsi teha, kasuta selleks kindlasti korrektset Inbanki arveldusarve numbrit ning viitenumbrit, mille leiad oma lepingust.</p>
                  <p className="content">Kui Sa ei ole osamakset maksepäevaks tasunud, saadame Sulle meeldetuletava SMS-i. Juhime tähelepanu, et makse hilinemisega kaasnevad kulud ning hilinenud maksetelt arvestatakse viivist. Makse hilinemisega seotud tasud leiad lepingust ja Inbanki hinnakirjast. Kui Sul tekib raskusi kohustuste täitmisel, siis palume esimesel võimalusel kindlasti Inbanki poole pöörduda, sest nii saame üheskoos paindliku lahenduse leida ja Sul on võimalik hoida ära täiendavaid kulusid ning kohtuvaidlusi.</p>


                  <h2 className="title is-size-4 has-text-weight-bold is-bold-light">Järelmaksu ennetähtaegne tagastamine</h2>

                  <p className="content">Järelmaksu saad meile igal ajal osaliselt või täielikult ennetähtaegselt tagastada ning siis ei tule Sul tasuda laenu kasutamata jätmise aja eest intresse ega muid tasusid. Selleks tuleb Inbanki klienditeenindusele esitada kirjalik sooviavaldus, märkides tagastatava summa ja kuupäeva. Seejärel edastame lõpliku summa, mis Sul tasuda on jäänud. Järelmaksulepingu ennetähtaegse lõpetamise tasu on:</p>
                  <p className="content">0,5% tagastatavalt summalt – kui tagastamise hetkel on lepingu lõppemiseni jäänud vähem kui üks aasta;</p>
                  <p className="content">1% tagastatavalt summalt – kui tagastamise hetkel on lepingu lõppemiseni jäänud rohkem kui üks aasta.</p>

                  <h2 className="title is-size-4 has-text-weight-bold is-bold-light">Oluline info enne lepingu sõlmimist</h2>

                  <p className="content">Kaalu hoolikalt, kas Järelmaks on Sinu vajadusi ja rahalist olukorda arvestades sobiv valik.</p>
                  <p className="content">Enne lepingu sõlmimist tutvu hoolega lepingutingimustega ning küsi julgelt, kui soovid rohkem teada.</p>
                  <p className="content">Mõtle hästi läbi, kui suurt riski saad endale lubada. Pane tähele, et makseraskuse tekkimine võib raskendada Sul tulevikus laenu saamist.</p>
                  <p className="content">Tutvu Inbanki erinevate finantseerimise võimalustega meie kodulehel ja küsi julgelt abi meie klienditeeninduselt.</p>
                  <p className="content">Kui oled lepingu sõlminud, vaata veelkord üle tingimused. Nii saad olla kindel, et täidad oma kohustused õigel viisil ja õigel ajal.</p>
                  <p className="content">Tutvu meie kirjadega tähelepanelikult ning anna meile kohe teada, kui Sinu kontaktandmed muutuvad.</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
