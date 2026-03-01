import "./Home.css"
import { Link } from "react-router-dom"
import iso from "../assets/Makumuistoja_iso.jpg"   
import tomaatti from "../assets/tomaatti.png"
export default function Home() {
  return (
    <div className="home-container">

      <div className="hero-wrapper d-none d-md-block">
        <img src={iso} alt="Makumuistoja iso taustakuva" className="hero-image" />
        <div className="hero-text">
        </div>
      </div>

      <div className="mobile-hero d-block d-md-none text-center py-5">
        <h1 className="playfair mobile-title">Maku<br/>Muistoja</h1>
      </div>


      <section className="intro-section container py-5">
        <h2 className="playfair intro-title">Minä &lt;3 Ruoka</h2>

        <p className="intro-text">
          Ruoanlaitto on ollut minulle aina tapa hengähtää ja irrottautua arjesta.
          Kun keittiössä alkaa tapahtua, muu maailma hiljenee hetkeksi. En ole
          ammattilainen enkä tavoittele täydellisyyttä, vaan nautin siitä, että saan
          kokeilla, epäonnistua, onnistua ja ennen kaikkea syödä hyvin.
        </p>

        <p className="intro-text">
          Kirjoitan tänne ruokia, joita oikeasti teen kotona: nopeita arkiruokia,
          edullisia kasvisvaihtoehtoja ja makeita herkkuja. Toivon, että löydät täältä
          jotain, mikä inspiroi sinua kokeilemaan uutta tai helpottaa kiireistä päivää.
        </p>

        <p className="intro-text">
        Rakastan sitä hetkeä, kun ruoka alkaa valmistua ja koti täyttyy tuoksuista. Se on pieni
        muistutus siitä, että arjen keskelläkin voi pysähtyä ja tehdä jotain hyvää itselleen.
        Toivon, että nämä reseptit tuovat sinulle samanlaista rauhaa ja iloa edes pienen hetken
        verran. 
        </p>

        <p className="intro-text">
        Tämä blogi ei ole täydellisiä kuvia tai virheettömiä annoksia varten. Se on paikka, jossa
        ruoka saa olla elävää, sotkuista, hauskaa ja ennen kaikkea omaa.
        </p>
        <p className="smooch-regular mt-4">
            Rakkaudella, Maku
            </p>
         <div className="tomato-wrapper d-none d-lg-block">
        <img src={tomaatti} alt="Tomato" className="tomato-img" />
        </div>
        

      </section>

    </div>
  )
}
