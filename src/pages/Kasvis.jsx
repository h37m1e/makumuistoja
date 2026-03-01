import "./Arkiruoka.css"
import intialainen from "../assets/currykuva.jpg"
import kurkku from "../assets/kurkkuleipa.jpg"
import kikherne from "../assets/chanamasala.jpg"
import { Link } from "react-router-dom"


export default function Kasvis() {
  return (
    <div className="arkiruoka-container">

      <h1 className="arkiruoka-title">Edulliset kasvisruoat</h1>
      <p className="intro-text">
        Kasvisruoka ei ole minulle koskaan ollut pelkkä valinta, vaan myös tapa
        tehdä arjesta kevyempää sekä keholle että kukkarolle. Tälle sivulle olen koonnut 
        reseptejä, jotka todistavat, että hyvän makuinen ruoka ei vaadi kalliita aineksia tai 
        monimutkaisia tekniikoita. Usein parhaat kasvisruoat syntyvät yksinkertaisista raaka-aineista, 
        pienestä luovuudesta ja siitä, mitä kaapista sattuu löytymään. 
        </p>
    
        <p className="intro-text">
        Edulliset kasvisruoat ovat minulle arjen luottopilareita: helppoja, täyttäviä ja muokattavia. Täältä löydät ruokia, jotka sopivat kiireisiin päiviin, opiskelijabudjettiin tai hetkiin, jolloin haluat syödä hyvää ilman suurta ostoslistaa. Mukana on myös muutamia omia “pelastusreseptejäni”, jotka ovat syntyneet juuri silloin, kun jääkaappi näyttää tyhjältä mutta nälkä ei odota. 
        </p>
        <p className = "intro-text">
        Toivon, että nämä reseptit tuovat sinulle uusia ideoita ja muistuttavat siitä, että kasvisruoka voi olla yhtä aikaa edullista, helppoa ja todella herkullista. 
        </p>
      
    <Link to="/resepti/intialainen" className="card-link">
      <div className="recipe-card">
      <h3>Leipäjuustoa ja mausteista intialaista riisiä  </h3>
        <img src={intialainen} alt="Intialainen" />
        <p>Se ruoka, joka ei kuulosta järkevältä ennen kuin maistat sen ja sitten et enää unohda sitä </p>
      </div>
      </Link>

    <Link to= "/resepti/kurkkuleipa" className="card-link">
      <div className="recipe-card">
      <h3>Vaalea leipä vaahdotetulla fetalla ja ohuella kurkulla</h3>
        <img src={kurkku} alt="Tortilla" />
        <p> Pieni mutta täydellinen hetki, kun yksinkertaiset asiat maistuvat ylelliseltä  </p>
      </div>
      </Link>

    <Link to= "/resepti/kikherne" className="card-link">
      <div className="recipe-card">
      <h3> Kikhernechana lämmin, mausteinen ja lohdullinen </h3>
        <img src={kikherne} alt="Wokki" />
        <p>Ruoka, joka tuoksuu siltä kuin olisit matkustanut pitkälle, vaikka oikeasti vain avasit maustekaapin  </p>
      </div>
      </Link>

    </div>
  )
}
