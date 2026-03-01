import "./Arkiruoka.css"
import muffinsi from "../assets/muffinsit.jpg"
import brownie from "../assets/brownies.jpg"
import pannari from "../assets/pancakes.jpg"
import { Link } from "react-router-dom"

export default function Makeat() {
  return (
    <div className="arkiruoka-container">

      <h1 className="arkiruoka-title">Makeat herkut</h1>

      <p className="intro-text">
        Makeat herkut ovat minulle pieniä ilonpilkahduksia arjen keskellä 
        sellaisia hetkiä, jotka eivät vaadi juhlaa tai erityistä syytä. 
        Joskus riittää, että tekee mieli jotain hyvää. Tälle sivulle olen koonnut 
        reseptejä, jotka ovat helppoja, nopeita ja juuri sopivan hemmottelevia. 
        Mukana on sekä klassikoita että omia suosikkejani, jotka syntyvät usein siitä, 
        mitä kaapista sattuu löytymään. 
      </p>
      <p className="intro-text"> 
        Rakastan makeita reseptejä, jotka eivät vaadi monimutkaisia vaiheita tai pitkää odottelua. 
        Pieni paistos, nopea piirakka, muutaman aineksen keksi tai jälkiruoka, jonka voi sekoittaa 
        kulhossa ilman sen kummempaa suunnittelua juuri sellaisia herkkuja, 
        jotka pelastavat päivän ja tuovat hyvän mielen hetkessä. 
      </p>
      <p className="intro-text"> 
      Toivon, että löydät näistä resepteistä jotain, mikä saa sinut hymyilemään 
      ja ehkä pysähtymään hetkeksi nauttimaan. Makeat hetket kuuluvat kaikille, ja 
      täällä ne syntyvät mutkattomasti ja rennolla otteella. 
      </p>

      <Link to="/resepti/muffinit" className="card-link">
        <div className="recipe-card">
          <h3>Suklaahippumuffinit</h3>
          <img src={muffinsi} alt="Muffinit" />
          <p>Se leivonnainen, joka katoaa pelliltä nopeammin kuin ehdit sanoa “otan vain yhden”.</p>
        </div>
      </Link>

      <Link to="/resepti/browniet" className="card-link">
        <div className="recipe-card">
          <h3>Mehevät browniet</h3>
          <img src={brownie} alt="Browniet" />
          <p>Suklaaneliö, joka saa ajan hidastumaan ja arjen tuntumaan paremmalta.</p>
        </div>
      </Link>

      <Link to="/resepti/pannarit" className="card-link">
        <div className="recipe-card">
          <h3>Pannarit mansikoilla ja kermavaahdolla</h3>
          <img src={pannari} alt="Pannarit" />
          <p>Aamu, joka muuttuu paremmaksi heti kun taikina osuu pannulle.</p>
        </div>
      </Link>

    </div>
  )
}
