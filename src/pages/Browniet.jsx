import "../pages/Arkiruoka.css"
import { useState } from "react"
import brownie from "../assets/brownies.jpg"

export default function Browniet() {
  const [reviews, setReviews] = useState([])
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")


  return (
    <div className="recipe-page">
      <h2 className="arkiruoka-title">Mehevät browniet</h2>

      <img src={brownie} alt="Browniet" />

      <p>Se suklaaneliö, joka saa ajan hidastumaan ja arjen tuntumaan paremmalta.</p>
        <h4> On olemassa leivonnaisia, jotka eivät koskaan petä. 
            Brownie on juuri sellainen. Se on tahmea, suklainen ja juuri sopivan syntinen ja mikä parasta, 
            sen tekeminen on yllättävän helppoa. Tämä resepti syntyi eräänä iltana, 
            kun teki mieli jotain lämmintä ja lohdullista, ja lopputulos oli niin hyvä, 
            että pellillinen katosi melkein ennen kuin ehti jäähtyä.
            </h4>
      <h3>Ainekset</h3>
      <ul>
        <li>150 g tummaa suklaata</li>
        <li>100 g voita</li>
        <li>1.5 dl sokeria</li>
        <li>2 kananmunaa</li>
        <li>1 dl vehnäjauhoja</li>
        <li>2 rkl kaakaojauhetta</li>
        <li>1 tl vaniljasokeria</li>
        <li>Ripaus suolaa</li>
      </ul>

      <h3>Valmistus</h3>
      <p>Lämmitä uuni 175 asteeseen. Sulata voi ja suklaa yhdessä miedolla lämmöllä, 
        kunnes seos on sileää ja kiiltävää. Anna jäähtyä hetki, jotta munat eivät kypsy 
        liian nopeasti. 
        </p>
        <p> Vatkaa sokeri ja munat kevyesti yhteen. Kaada joukkoon suklaa-voiseos ja 
            sekoita tasaiseksi. Lisää jauhot, kaakaojauhe, vaniljasokeri ja suola. 
            Sekoita vain sen verran, että taikina yhdistyy. 
            Brownietaikina ei pidä turhasta vatkaamisesta. 
            </p>
        <p> Kaada taikina leivinpaperilla vuorattuun pieneen uunivuokaan. 
            Jos haluat, ripottele päälle suklaahippuja tai pähkinöitä. 
            Paista noin 18–22 minuuttia riippuen siitä, kuinka tahmeasta koostumuksesta pidät. 
            Brownien kuuluu jäädä keskeltä hieman kosteaksi. 
            </p>
      <h3>Tarjoilu</h3>
      <p>Anna jäähtyä hetki vaikka tiedätkin, että yksi pala on pakko maistaa lämpimänä.</p>

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
