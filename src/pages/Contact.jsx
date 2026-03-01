import "./Arkiruoka.css"
import iso from "../assets/Makumuistoja_iso.jpg"   


export default function Contact() {
  return (
    <div className="arkiruoka-container">

      <div className="hero-wrapper d-none d-md-block">
        <img src={iso} alt="Iso kuva" className="hero-image" />
        <div className="hero-text">
        </div>
      </div>

      <div className="mobile-hero d-block d-md-none text-center py-5">
        <h1 className="playfair mobile-title">Maku<br/>Muistoja</h1>
      </div>

      <h2 className="arkiruoka-title">Yhteystiedot</h2>

      <p className="intro-text">
        Jos haluat ottaa yhteyttä, antaa palautetta tai lähettää reseptitoiveita,
        voit tavoittaa minut näistä kanavista.
      </p>

      <div className="contact-box">
        <h3>Maku Mustapippurinen</h3>

        <p><strong>Sähköposti:</strong><br /> Makumuistoja@gmail.com</p>

        <p><strong>Puhelin:</strong><br />
        040 111111111</p>
      </div>

    </div>
  )
}
