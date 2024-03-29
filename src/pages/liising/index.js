import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'

const Järelmaks = () => {
  return (
    <Layout>
      <Helmet>
        <title>Kasutatud auto järelmaks - vaata tingimusi kodulehelt</title>
        <meta name="description" content="Pakume koos Inbank-iga võimalust osta auto järelmaksuga. Täida küsimustik meie kodulehel või küsi pakkumist automüügiplatsil Valgas." />
      </Helmet >
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title is-size-3 has-text-weight-bold is-bold-light">Järelmaksu tingimused</h1>
                <ul className="content">
                  <li>
                    <p>
                      ✔️ Oled vähemalt 21-aastane Eesti kodanik või Sul on elamisluba.
                    </p>
                  </li>
                  <li>
                    <p>
                      ✔️ Sinu igakuine netosissetulek on vähemalt 280 eurot.
                    </p>
                  </li>
                  <li>
                    <p>
                      ✔️ Sa täidad oma rahalisi kohustusi korrektselt.
                    </p>
                  </li>
                  <li>
                    <p>
                      ✔️ Järelmaksusumma, mida saame Sinule pakkuda, sõltub Sinu igakuisest sissetulekust ja kohustustest.
                    </p>
                  </li>
                  <li>
                    <p>
                      ✔️ Laenu summa kuni 25 000 EUR
                    </p>
                  </li>
                  <li>
                    <p>
                      ✔️ Intress alates 9,9% aastas - laenujäägilt
                    </p>
                  </li>
                  <li>
                    <p>
                      ✔️ Sissemakse 0%
                    </p>
                  </li>
                  <li>
                    <p>
                      ✔️ Enneaege tagastamine TASUTA
                    </p>
                  </li>
                  <li>
                    <p>
                      ✔️ Põhiosa vähendamine TASUTA
                    </p>
                  </li>
                </ul>
                <hr />
                <a className="is-size-4 btn" href="https://www.primero.ee/autolaen/auth?promo=valgaautoaed" target="_blank" rel="noopener noreferrer"
                  title="Järelmaks">Taotluse esitamist alusta siit.</a>
                <hr />
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
                <hr />
                <a className="is-size-4 btn" href="https://www.primero.ee/autolaen/auth?promo=valgaautoaed" target="_blank" rel="noopener noreferrer"
                  title="Järelmaks">Taotluse esitamist alusta siit.</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Järelmaks