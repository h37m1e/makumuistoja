import "../pages/Arkiruoka.css"
import { useState } from "react"
import feta from "../assets/kurkkuleipa.jpg"

export default function Fetaleipa() {
  const [reviews, setReviews] = useState([])
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")


  return (
    <div className="recipe-page">
      <h2 className="arkiruoka-title">Vaalea leipä vaahdotetulla fetalla ja ohuella kurkulla</h2>

      <img src={feta} alt="Fetaleipä" />

      <p>Se pieni mutta täydellinen hetki, kun yksinkertaiset asiat maistuvat ylelliseltä.</p>

      <h4>
        On olemassa hetkiä, jolloin ei kaipaa mitään monimutkaista. 
        Vain hyvää leipää, jotain kermaisen suolaista ja jotain raikasta.
      </h4>

      <h3>Ainekset</h3>
      <ul>
        <li>Vaaleaa leipää</li>
        <li>Fetajuustoa (150 g)</li>
        <li>Loraus kermaa tai jogurttia</li>
        <li>Kurkku ohuina siivuina</li>
        <li>Sitruunan mehua tai oliiviöljyä</li>
        <li>Mustapippuria</li>
        <li>Tuoreita yrttejä</li>
      </ul>

      <h3>Valmistus</h3>

      <h4>1. Vaahdota feta</h4>
      <p>Murustele feta ja vatkaa se kerman tai jogurtin kanssa kuohkeaksi.</p>

      <h4>2. Valmistele kurkku</h4>
      <p>Leikkaa kurkku ohuiksi siivuiksi ja mausta kevyesti.</p>

      <h4>3. Paahda leipä</h4>
      <p>Paahda leipä kevyesti, jotta se saa rapean pinnan.</p>

      <h4>4. Kokoa</h4>
      <p>Levitä fetavaahto leivälle ja lisää kurkku sekä yrtit.</p>

      <h3>Tarjoilu</h3>
      <p>Parasta heti lämpimänä.</p>

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
