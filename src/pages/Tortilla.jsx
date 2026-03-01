import "../pages/Arkiruoka.css"
import tortilla from "../assets/tortilla1.jpg"
import { useState } from "react"

export default function Tortilla() {
  const [reviews, setReviews] = useState([])
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")


  return (
    <div className="recipe-page">
      <h2 className="arkiruoka-title">Tuoreet tortillat korianterilla ja punasipulilla</h2>

      <img src={tortilla} alt="Tortilla" />

      <p>Se nopea herkku, joka maistuu siltä kuin olisit suunnitellut illallisen, vaikka todellisuudessa päätit kaiken viidessä minuutissa.</p>

      <h4>
        On olemassa ruokia, jotka eivät vaadi selityksiä. Tortillat kuuluvat siihen kategoriaan. 
        Ne ovat kuin ystävä, joka ilmestyy paikalle juuri silloin kun et jaksa tehdä mitään monimutkaista, 
        mutta haluat silti syödä jotain, mikä tuntuu vähän juhlalta.
      </h4>

      <h3>Ainekset</h3>
      <ul>
        <li>Tortillalettuja</li>
        <li>Punasipuli ohuina siivuina</li>
        <li>Tuoretta korianteria reilusti</li>
        <li>Paprika tai tomaatti kuutioituna</li>
        <li>Salaattia tai kaalia suikaloituna</li>
        <li>Kana-, kasvis- tai paputäyte</li>
        <li>Ranskankermaa, jogurttia tai majoneesia</li>
        <li>Limeä puristettavaksi</li>
        <li>Suolaa ja mustapippuria</li>
        <li>Halutessa chiliä tai tulista kastiketta</li>
      </ul>

      <h3>Valmistus</h3>

      <h4>1. Lämmitä tortillalettu</h4>
      <p>Lämmitä tortillalettu nopeasti pannulla tai uunissa, jotta se pehmenee ja rullautuu kauniisti.</p>

      <h4>2. Valmistele täytteet</h4>
      <p>Leikkaa punasipuli ohuiksi siivuiksi, kuutioi paprika tai tomaatti ja suikaloi salaatti.</p>

      <h4>3. Valmista proteiini</h4>
      <p>
        Paista kana tai kasvisvaihtoehto kevyesti maustettuna. Pavut, nyhtökaura tai paistetut kasvikset sopivat myös täydellisesti.
      </p>

      <h4>4. Kokoa tortillat</h4>
      <p>
        Levitä pohjalle ranskankermaa tai jogurttia, lisää täytteet ja viimeistele reilulla korianterilla ja limellä.
      </p>

      <h4>5. Nauti heti</h4>
      <p>Tortillat ovat parhaimmillaan lämpiminä ja mehevinä.</p>

      
<form

className="mt-4"
onSubmit={(e) => {
  e.preventDefault()
  if (comment.trim() === "") return

  setReviews([...reviews, { name, comment }])
  setName("")
  setComment("")
}}
>
<h3>Arvostele resepti:</h3>
<div className="mb-3">
  <label className="form-label">Nimesi:</label>
  <input
    type="text"
    className="form-control"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Kirjoita nimesi tähän"
  />
</div>

<div className="mb-3">
  <label className="form-label">Kommentti:</label>
  <textarea
    className="form-control"
    rows="4"
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    placeholder="Kirjoita arvostelusi tähän"
  />
</div>

<button type="submit" className="btn btn-primary">
  Lähetä arvostelu
</button>
</form>

      <h3 className="mt-5">Arvostelut:</h3>

      <div className="reviews-list">
        {reviews.length === 0 && <p>Ei arvosteluja vielä.</p>}

        {reviews.map((r, index) => (
          <div key={index} className="review-box">
            <p>{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
