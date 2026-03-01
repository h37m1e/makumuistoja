import "../pages/Arkiruoka.css"
import { useState } from "react"
import muffinsi from "../assets/muffinsit.jpg"

export default function Muffinit() {
  const [reviews, setReviews] = useState([])
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")


  return (
    <div className="recipe-page">
      <h2 className="arkiruoka-title">Suklaamuffinit</h2>

      <img src={muffinsi} alt="Muffinit" />

      <p>Se leivonnainen, joka katoaa pelliltä nopeammin kuin ehdit sanoa “otan vain yhden”.</p>
      <h4>On olemassa hetkiä, jolloin tekee mieli jotain pientä ja makeaa, mutta ei mitään monimutkaista. Suklaahippumuffinit ovat täydellinen vastaus siihen tunteeseen. Ne syntyvät yksinkertaisista aineksista, mutta maistuvat siltä kuin olisit nähnyt vaivaa. Ja mikä parasta, taikina valmistuu nopeammin kuin uuni ehtii lämmetä. </h4>
      <video controls className="recipe-video">
  <source src={`${import.meta.env.BASE_URL}videot/muffinsi_video.mp4`} type="video/mp4" />
  Selaimesi ei tue videon toistoa.
</video>

      <h3>Ainekset</h3>
      <ul>
        <li>2.5 dl vehnäjauhoja</li>
        <li>1 dl sokeria</li>
        <li>1 tl vaniljasokeria</li>
        <li>2 tl leivinjauhetta</li>
        <li>Ripaus suolaa</li>
        <li>1 kananmuna</li>
        <li>1 dl maitoa</li>
        <li>0.5 dl öljyä tai sulatettua voita</li>
        <li>1 dl suklaahippuja</li>
      </ul>

      <h3>Valmistus</h3>
      <p> Lämmitä uuni 200 asteeseen. Sekoita kulhossa jauhot, sokeri, vaniljasokeri, leivinjauhe ja suola. Toisessa kulhossa yhdistä muna, maito ja öljy tai voi. Kaada märät aineet kuivien joukkoon ja sekoita juuri sen verran, että taikina on tasainen. Lisää suklaahiput ja kääntele ne taikinan sekaan. </p>
      <p> Jaa taikina muffinivuokiin. Täytä vuoat noin kolmeen neljäsosaan, jotta muffinit kohoavat kauniisti mutta eivät valu yli. Paista uunin keskitasolla noin 12–15 minuuttia, kunnes pinta on kullanruskea ja muffinit tuntuvat kevyesti kimmoisilta. </p>
      <h3>Tarjoilu</h3>
      <p> Anna muffinien jäähtyä hetki, vaikka tiedätkin, että yksi on pakko maistaa lämpimänä. Suklaa on silloin vielä pehmeää ja juuri niin syntisen hyvää kuin pitääkin. </p>
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
