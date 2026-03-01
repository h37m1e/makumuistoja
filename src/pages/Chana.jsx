import "../pages/Arkiruoka.css"
import { useState } from "react"
import chana from "../assets/chanamasala.jpg"

export default function Chana() {
  const [reviews, setReviews] = useState([])
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")


  return (
    <div className="recipe-page">
      <h2 className="arkiruoka-title">Kikhernechana — lämmin, mausteinen ja lohdullinen</h2>

      <img src={chana} alt="Chana masala" />

      <p>Se ruoka, joka tuoksuu siltä kuin olisit matkustanut pitkälle, vaikka oikeasti vain avasit maustekaapin.</p>

      <h4>
        Chana masala on lämmin, mausteinen ja täynnä syvää makua, vaikka sen valmistus on yllättävän yksinkertaista.
      </h4>

      <h3>Ainekset</h3>
      <ul>
        <li>Kikherneitä (1–2 purkkia)</li>
        <li>Punasipuli hienonnettuna</li>
        <li>Valkosipulia ja inkivääriä raastettuna</li>
        <li>Tomaattimurskaa</li>
        <li>Garam masalaa, kurkumaa, jeeraa ja paprikajauhetta</li>
        <li>Chiliä maun mukaan</li>
        <li>Kookosmaitoa tai kermaa</li>
        <li>Sitruunan mehua</li>
        <li>Tuoretta korianteria</li>
        <li>Suolaa ja mustapippuria</li>
        <li>Öljyä paistamiseen</li>
      </ul>

      <video controls className="recipe-video">
  <source src="/videot/wokki-video.mp4" type="video/mp4" />
  Selaimesi ei tue videon toistoa.
</video>
<h3>Valmistus</h3>

      <h4>1. Kuullota sipulit</h4>
      <p>Kuullota punasipuli, lisää valkosipuli ja inkivääri.</p>

      <h4>2. Lisää mausteet</h4>
      <p>Lisää kaikki mausteet ja anna niiden paahtua hetki. Kun mausteita lämmitetän niiden aromit vapautuvat ja voimistuvat.</p>

      <h4>3. Lisää tomaatti ja kikherneet</h4>
      <p>Lisää tomaattimurska ja kikherneet, anna hautua. Maut syventyvät kun annat ruuan hautua pidempään.</p>

      <h4>4. Lisää kookosmaito</h4>
      <p>Lisää kookosmaito tai kerma ja mausta suolalla.</p>

      <h4>5. Viimeistele</h4>
      <p>Purista päälle sitruunaa ja lisää korianteri.</p>

      <h3>Tarjoilu</h3>
      <p>Tarjoa riisin tai naan-leivän kanssa.</p>

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
