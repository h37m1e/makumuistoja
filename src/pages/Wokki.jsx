import "../pages/Arkiruoka.css"
import wokki from "../assets/wokki.jpg"
import { useState } from "react"

export default function Wokki() {
  const [reviews, setReviews] = useState([])
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")


  return (
    <div className="recipe-page">
      <h2 className="arkiruoka-title">Nopea wokki soijasuikaleilla tai vegekanalla</h2>

      <img src={wokki} alt="Wokki" />

      <p>Se ruoka, joka syntyy puolivahingossa mutta katoaa lautaselta tarkoituksella.</p>

      <h4>
        On olemassa hetkiä, jolloin tekee mieli jotain lämmintä, nopeaa ja värikästä. 
        Wokki on juuri sitä: pannullinen höyryä, rapeutta ja kastiketta, joka tarttuu jokaiseen suikaleeseen.
      </h4>

      <h3>Ainekset</h3>
      <ul>
        <li>Soijasuikaleita tai vegekanaa (200 g)</li>
        <li>Paprika suikaloituna</li>
        <li>Porkkana ohuina tikuina</li>
        <li>Punasipuli tai kevätsipuli</li>
        <li>Pinaattia tai kaalia</li>
        <li>Valkosipulia ja inkivääriä raastettuna</li>
        <li>Soijakastiketta</li>
        <li>Makeaa chilikastiketta tai hoisinia</li>
        <li>Seesamiöljyä</li>
        <li>Limeä tai sitruunaa</li>
        <li>Suolaa ja mustapippuria</li>
        <li>Seesaminsiemeniä ja korianteria</li>
        <li>Nuudeleita tai riisiä tarjoiluun</li>
      </ul>

      <h3>Valmistus</h3>

      <h4>1. Valmistele proteiini</h4>
      <p>
        Liota soijasuikaleet kuumassa vedessä tai paista vegekanasuikaleet suoraan pannulla.
      </p>

      <h4>2. Paista proteiini</h4>
      <p>Paista suikaleet öljyssä, kunnes ne saavat kauniin paistopinnan.</p>

      <h4>3. Paista kasvikset</h4>
      <p>
        Aloita porkkanasta ja sipulista, lisää paprika. Wokin idea on nopeus — kasvikset saavat jäädä napakoiksi.
      </p>

      <h4>4. Lisää mausteet ja kastikkeet</h4>
      <p>
        Lisää valkosipuli, inkivääri, soijakastike ja makea chili tai hoisin. Lopuksi pinaatti tai kaali.
      </p>

      <h4>5. Yhdistä ja viimeistele</h4>
      <p>
        Sekoita kaikki yhteen, purista päälle limeä ja viimeistele seesaminsiemenillä ja korianterilla.
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

        {reviews.map((r, index) => (
          <div key={index} className="review-box">
            <p>{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
