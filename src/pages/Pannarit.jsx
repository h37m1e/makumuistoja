import "../pages/Arkiruoka.css"
import { useState } from "react"
import pannari from "../assets/pancakes.jpg"

export default function Pannarit() {
  const [reviews, setReviews] = useState([])
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")


  return (
    <div className="recipe-page">
      <h2 className="arkiruoka-title">Pannarit mansikoilla ja kermavaahdolla</h2>

      <img src={pannari} alt="Pannarit" />

      <p>Se aamu, joka muuttuu paremmaksi heti kun taikina osuu pannulle.</p>
        <h4>On olemassa hetkiä, jolloin tekee mieli hemmotella itseään jollain yksinkertaisella mutta täydellisellä. Pannarit ovat juuri sitä: pehmeitä, kullanruskeita ja sellaisia, jotka katoavat lautaselta nopeammin kuin ehdin kertoa, että taikina oli oikeasti helppo. Mansikat ja kermavaahto tekevät niistä vielä vähän juhlavampia kuin pieni miniloma keskellä tavallista päivää. </h4>
      <h3>Ainekset</h3>
      <ul>
        <li>2 dl vehnäjauhoja</li>
        <li>2 rkl sokeria</li>
        <li>1 tl leivinjauhetta</li>
        <li>Ripaus suolaa</li>
        <li>1 kananmuna</li>
        <li>1.5 dl maitoa</li>
        <li>Voita paistamiseen</li>
        <li>Mansikoita</li>
        <li>Kermavaahtoa</li>
      </ul>

      <h3>Valmistus</h3>

      <p>
        Sekoita kulhossa jauhot, sokeri, leivinjauhe ja suola. Lisää muna ja maito ja sekoita taikina tasaiseksi. 
        Sen ei tarvitse olla täydellisen sileää pieni rosoisuus tekee pannareista ilmavia. 
        Anna taikinan levätä hetki, jotta jauhot ehtivät turvota.
      </p>

      <p>
        Kuumenna pannu ja lisää siihen nokare voita tai pieni loraus öljyä. Paista pannareita keskilämmöllä, 
        kunnes pinta alkaa kuplia ja reunat hyytyvät. Käännä ja paista toinen puoli kauniin kullanruskeaksi. 
        Toista, kunnes taikina on loppu.
      </p>

      <p>
        Vatkaa kerma pehmeäksi vaahdoksi ja lisää halutessasi hieman vaniljasokeria. 
        Leikkaa mansikat siivuiksi.
      </p>

      <h3>Tarjoilu</h3>
      <p>
        Kokoa pannarit lautaselle kerroksittain, lisää päälle kermavaahtoa ja tuoreita mansikoita. 
        Pieni tomusokerihuntu tekee annoksesta vielä kauniimman.
      </p>

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
        {reviews.map((r, i) => (
          <div key={i} className="review-box">
            <p>{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
