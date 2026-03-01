import "../pages/Arkiruoka.css"
import { useState } from "react"
import leipa from "../assets/currykuva.jpg"

export default function Leipajuusto() {
  const [reviews, setReviews] = useState([])
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")


  return (
    <div className="recipe-page">
      <h2 className="arkiruoka-title">Leipäjuustoa ja mausteista intialaista riisiä</h2>

      <img src={leipa} alt="Leipäjuusto ja riisi" />

      <p>Se ruoka, joka ei kuulosta järkevältä ennen kuin maistat sen — ja sitten et enää unohda sitä.</p>

      <h4>
        Joskus syntyy yhdistelmiä, joitaa ei olisi koskaan keksinyt ilman pientä luovaa nälkää. 
        Leipäjuusto ja intialainen riisi kuulostavat oudolta, mutta pannulla ne löytävät toisensa yllättävän kauniisti.
      </h4>

      <h3>Ainekset</h3>
      <ul>
        <li>Leipäjuustoa kuutioituna</li>
        <li>Keitettyä basmati- tai jasmiiniriisiä</li>
        <li>Punasipulia ohuina siivuina</li>
        <li>Valkosipulia ja inkivääriä raastettuna</li>
        <li>Rusinoita tai kuivattuja aprikooseja</li>
        <li>Kurkumaa, garam masalaa ja jeeraa</li>
        <li>Loraus kermaa tai kookosmaitoa</li>
        <li>Tuoretta korianteria</li>
        <li>Suolaa ja mustapippuria</li>
        <li>Öljyä paistamiseen</li>
        <li>Cashewpähkinöitä (valinnainen)</li>
      </ul>

      <h3>Valmistus</h3>

      <h4>1. Paista leipäjuusto</h4>
      <p>Paista leipäjuustokuutiot kullanruskeiksi ja nosta sivuun.</p>

      <h4>2. Kuullota mausteet</h4>
      <p>Kuullota sipuli, valkosipuli ja inkivääri. Lisää mausteet ja anna niiden herätä pannulla.</p>

      <h4>3. Lisää riisi</h4>
      <p>Sekoita keitetty riisi pannulle ja lisää rusinat tai aprikoosit.</p>

      <h4>4. Lisää kerma/kookosmaito</h4>
      <p>Lisää loraus kermaa tai kookosmaitoa, jotta riisi saa pehmeän rakenteen.</p>

      <h4>5. Yhdistä</h4>
      <p>Lisää leipäjuusto takaisin pannulle ja mausta.</p>

      <h3>Tarjoilu</h3>
      <p>Viimeistele korianterilla ja pähkinöillä.</p>

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
