import "../pages/Arkiruoka.css"
import pasta from "../assets/pasta.jpg"
import {useState} from "react"

export default function Pasta() {
    const [reviews, setReviews] = useState([])
    const [name, setName] = useState("") 
    const [comment, setComment] = useState("")
    return (
      <div className="recipe-page">
        <h2 className="arkiruoka-title">Kermainen pennepasta pinaatilla ja paprikalla</h2>
        <img src={pasta} alt="Pasta" />
        <p>Se arkiruoka, joka pelastaa päivän ja maistuu siltä kuin olisit nähnyt vaivaa, vaikka et oikeasti nähnyt.</p>
      
        <h4>
            Joskus sitä vain kaipaa kulhollista pastaa, joka halaa takaisin. Tämä resepti syntyi eräänä iltana, kun jääkaapissa oli “mitä näitä nyt on” 
            kasviksia ja mieli teki jotain kermaista. Lopputulos oli niin hyvä, että se päätyi 
            arkiruokien vakiolistaan ja nyt myös blogiini. 
            </h4>
        <h3>
        Ainekset (2–3 annosta) 
        </h3>
        <ul>
            <li> 250 g pennepastaa </li>
            <li> 1 punainen paprika (tai keltainen, jos haluat aurinkoa lautaselle)</li>
            <li> 2–3 kourallista tuoretta pinaattia  </li>
            <li> 1 pieni sipuli </li>
            <li> 2 valkosipulinkynttä  </li>
            <li> 2 dl kuohukermaa tai ruokakermaa  </li>
            <li> 1 dl pastan keitinvettä </li>
            <li> 1 rkl voita tai öljyä </li>
            <li> Suolaa ja mustapippuria </li>
            <li> Ripaus paprikajauhetta tai chilihiutaleita </li>
            <li>Parmesan-juustoa viimeistelyyn </li>
        </ul>
        
        <h3> Valmistus </h3>
        <h4>1. Pastan keitto perusta kaikelle hyvälle </h4>
        <p>
            Laita penne kiehumaan reilusti suolattuun veteen. 
            Muista ottaa talteen desi keitinvettä, se on se salainen ainesosa, 
            joka tekee kastikkeesta ravintolatasoisen.  
        </p>
        <h4> 2. Pannulla tapahtuu taikoja </h4>
        <p>
        Kuumenna pannu ja lisää voi tai öljy. Kuullota sipuli ja valkosipuli, kunnes keittiö tuoksuu siltä, 
        että joku tietää mitä tekee. Lisää paprikasuikaleet ja paista, 
        kunnes ne pehmenevät mutta eivät menetä luonnettaan. 
        </p>
        <h4> 3. Pinaatti kutistuu, kastike syntyy</h4>
        <p>
        Heitä pinaatti pannulle ja katso, kuinka se katoaa silmiesi edessä.
        Kaada kerma joukkoon ja sekoita. Lisää hieman pastan keitinvettä, 
        jotta kastike muuttuu samettiseksi. Mausta suolalla, pippurilla ja halutessasi paprikajauheella tai chilillä. 
        </p>
        <h4> 4. Pasta kohtaa kastikkeen</h4>
        <p> Lisää valutettu penne pannulle ja anna sen imeä kastikkeen jokainen pisara.
            Tässä vaiheessa voit jo maistaa ihan vain laadunvalvonnan nimissä. 
        </p>
        <h4> 5. Viimeistely</h4>
        <p> Raasta päälle parmesania, jos haluat nostaa annoksen juhlvammalle tasolle.
         </p>
         <h4>Tämä on juuri sellainen resepti, jonka teen silloin kun en jaksa miettiä liikaa mutta haluan silti hyvää.
            Toivottavasti sinäkin nautit tästä! 
            </h4>



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
      <h5>{r.name || "Anonyymi"}</h5>
      <p>{r.comment}</p>
    </div>
  ))}
</div>


        
      </div>
      
    )
  }
  