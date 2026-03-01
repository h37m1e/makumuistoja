import "./Arkiruoka.css"
import pasta from "../assets/pasta.jpg"
import tortilla from "../assets/tortilla1.jpg"
import wokki from "../assets/wokki.jpg"
import { Link } from "react-router-dom"


export default function Arkiruoka() {
  return (
    <div className="arkiruoka-container">

      <h1 className="arkiruoka-title">Arkiruoka</h1>
      <p className="intro-text">
      Arki ei aina anna aikaa pitkille keittosessioille, mutta se ei tarkoita, 
      että pitäisi tyytyä tylsään ruokaan. Tälle sivulle olen koonnut reseptejä, 
      jotka syntyvät nopeasti ja ilman turhaa säätöä  sellaisia ruokia, 
      joita teen itse silloin kun haluan hyvää heti, enkä jaksa miettiä monimutkaisia vaiheita tai pitkiä 
      ainesosaluetteloita.
        </p>
    
        <p className="intro-text">
        Nopeat arkiruoat ovat minulle pieniä pelastuksia: helppoja, edullisia 
        ja ennen kaikkea luotettavia. Täältä löydät reseptejä, jotka valmistuvat usein 
        alle puolessa tunnissa ja sopivat päiviin, jolloin nälkä on jo ehtinyt yllättää.
        Mukana on myös muutamia omia “hätävarareseptejäni”, jotka syntyvät siitä mitä kaapista sattuu löytymään 
        ja jotka yllättävät maullaan joka kerta. 
        </p>
        <p className = "intro-text">
        Toivon, että löydät näistä resepteistä omat arjen suosikkisi ja ehkä 
        muutaman uuden ideankin niihin hetkiin, kun aikaa on vähän mutta hyvälle ruualle on aina tilaa. 
        </p>
      
    <Link to="/resepti/pasta" className="card-link">
      <div className="recipe-card">
      <h3>Kermainen pennepasta pinaatilla ja paprikalla </h3>
        <img src={pasta} alt ="Kermainen penne pasta" />
        
        <p>Se arkiruoka, joka pelastaa päivän ja maistuu siltä kuin olisit nähnyt vaivaa, vaikka et oikeasti nähnyt.</p>
      </div>
      </Link>
    <Link to= "/resepti/tortilla" className="card-link">
      <div className="recipe-card">
      <h3>Tuoreet tortillat korianterilla ja punasipulilla</h3>
        <img src={tortilla} alt="Tortilla" />
        <p> Nopea herkku, joka maistuu siltä kuin olisit suunnitellut illallisen, vaikka todellisuudessa päätit kaiken viidessä minuutissa. </p>
      </div>
      </Link>
    <Link to= "/resepti/wokki" className="card-link">
      <div className="recipe-card">
      <h3>Nopea wokki soijasuikaleilla tai vegekanalla</h3>
        <img src={wokki} alt="Wokki" />
        <p>Ruoka, joka syntyy puolivahingossa mutta katoaa lautaselta tarkoituksella. </p>
      </div>
      </Link>

    </div>
  )
}
