import { useState } from 'react';
import DailyGif from "/darling/dailyGif.gif"  
import DailyGif2 from "/darling/dailyGif2.gif"
import Us1 from "/darling/Us1.jpg"
import Us2 from "/darling/Us2.jpeg"
import Us3 from "/darling/Us3.jpg"
import S1 from "/darling/1.jpg"
import S2 from "/darling/2.jpg"
import S3 from "/darling/3.jpg"
import S4 from "/darling/4.png"
import S5 from "/darling/6.jpg"
import S6 from "/darling/5.jpg"
import S7 from "/darling/7.jpg"
import './App.css'

function App() {
  const [ans, setAns] = useState(0);
  const [noClicks, setNoClicks] = useState(0);

 function handleResponse(){
    switch(ans){
      case(0): return(
      <div className='response'>
        <h3> Selecciona alguna mi amor :D</h3>
      </div>)

      case(1): return(
        <div className='response celebration'>
          <h3> ¡SIIII! ¡TE AMO MI VIDA! 💖</h3>
          <h4>Ahora oficialmente eres mi novia, mi princesa, mi todo</h4>
          <div className="celebration-content">
            <div className="confetti"></div>
              <div className="promise">
                <h4>Te prometo:</h4>
                <ul>
                  <li>Amarte cada día más</li>
                  <li>Hacerte feliz siempre</li>
                  <li>Ser tu mejor amigo</li>
                  <li>Cuidarte por siempre</li>
                </ul>
              </div>
            </div>
          <div className="hearts">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="heart" style={{
              animationDelay: `${i * 0.2}s`,
              left: `${Math.random() * 100}%`
            }}>💖</div>
          ))}
        </div>
      </div>)

      case(2): return(
      <div className='response'>
        <h3> Esa respuesta no se acepta. Dale que si, por favor</h3>
        <button className='button-yes' onClick={() => setAns(0)}>Intentar de nuevo</button>
      </div>)
    }
  }


 const handleNoClick = () => {
    setNoClicks(noClicks + 1);
    if (noClicks >= 10){setAns(2)};
  }

  return (
    <>
    <div className='box'>
      <div className='mainText'>
        <h2>📌♥ Para mi Princesa  ♥📌 <br /> ♥ Dia Final ♥</h2>
      </div>
      <div className='content'>
        <div className='hiText'>
          <div className="proposal">
            
            <h3>
              ♥ Canciones ♥
            </h3>

            <h4>
              Algunas canciones para tí ♥
            </h4>

            <p>Éstas son mis canciones más personales, son todas tuyas, espero sepas
              apreciarlas, yo sé que lo harás, te amo mi vida.
            </p>
            <h4>
              Luna - Zoé
            </h4>
            <a href="https://youtu.be/BjqrsnBEvfY?si=DCM2soP30yutu-W4">
              Presiona aquí princesa ♥
            </a>

            <h4>
              Arrullo de Estrellas - Zoé
            </h4>
            <a href="https://youtu.be/WJmm32hgtLQ?si=jPt1pSlUia5gVLOh">
              Presiona aquí princesa ♥
            </a>

            <h4>
              Ella - Gilberto Santa Rosa ft. Guaco
            </h4>
            <a href="https://youtu.be/zFUHxbNvqXg?si=qEKC8oW8bwUCbHMD">
              Presiona aquí princesa ♥
            </a>

            <h4>
              Tres Regalos - Los Dandys
            </h4>
            <a href="https://youtu.be/z2_xZcZ6RdE?si=3nhk9R7TE-Bjboub">
              Presiona aquí princesa ♥
            </a>

            <h4>
              Anhelante - Gualberto Ibarreto
            </h4>
            <a href="https://youtu.be/CNxJb3FGCqc?si=S7xqqnNJPpfelyiZ">
              Presiona aquí princesa ♥
            </a>

            <h4>
              Francés Limón - Los Enanitos Verdes
            </h4>
            <a href="https://youtu.be/GgLbP5WG_50?si=1gsed1NduwTMw620">
              Presiona aquí princesa ♥
            </a>

            <h4>
              Vivo - Guaco
            </h4>
            <a href="https://youtu.be/BSQoW0hcA0M?si=iOmr17I6q9TGAMpR">
              Presiona aquí princesa ♥
            </a>

            <h4>
              Si usted la viera - Jorge Luís Chacín
            </h4>
            <a href="https://youtu.be/rQwFzNi4TtI?si=KrKewUvZcaNhECRO">
              Presiona aquí princesa ♥
            </a>

            <h4>
              Algo más - La Quinta Estación
            </h4>
            <a href="https://youtu.be/3MDgVBewf1A?si=8jcX2lvFZJxVAg8E">
              Presiona aquí princesa ♥
            </a>

            <br />

          </div>

          <div className="proposal">
            <h2>📌♥ Us ♥📌</h2>
              <div className="image-container" data-caption="Mi bebé">
                <img width={180} height={180} src={Us1} alt="" />
              </div>

              <div className="image-container" data-caption="Lo más lindo">
                <img width={180} height={180} src={Us2} alt="" />
              </div>

              <div className="image-container" data-caption="Niña de mis ojos" >
                <img width={180} height={180} src={Us3} alt="" />
              </div>
          </div>
          
        <div className='proposal'>
          <h2>💖 Razones por las que te amo 💖</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <h4>✨ Tu Sonrisa ✨</h4>
              <p>Me encanta ver como ríes de mis pendejadas</p>
            </div>
            <div className="reason-card">
              <h4>🌟 Tu Forma de Ser 🌟</h4>
              <p>"Altanera, orgullosa y pretenciosa", como la Bikina</p>
            </div>
            <div className="reason-card">
              <h4>💫 Tu Corazón 💫</h4>
              <p>El más bonito</p>
            </div>
            <div className="reason-card">
              <h4>🎀 Tu Mirada 🎀</h4>
              <p>En tus ojos encuentro paz</p>
            </div>
          </div>
        </div>

          <div className='proposal'>
            <h2>📸 Galería de Mi Princesa 📸</h2>
            <div className="gallery-grid">
              {[S1, S2, S3, S4, S5, S6, S7].map((src, index) => (
                <div key={index} className="gallery-item" data-caption={`Foto ${index + 1} de mi bebé`}>
                  <img src={src} alt={`Mi amor ${index + 1}`} />
                    <div className="gallery-overlay">
                      <span>💖</span>
                    </div>
                </div>
              ))}
            </div>
          </div>

          <br/>

          <h2>📌♥ (??) Fin del contenido (??) ♥📌</h2>

          <h4>
            Nop, ésto aún no llega al final, más bien, acaba de empezar.
          </h4>
          <h4>♥ Sigue bajando, preciosa ♥</h4>
          
          <br />

          <div>
            <div className='image-container' data-caption="♥♥♥">
              <img src={DailyGif} width={180} height={180} alt="Mi amor precioso" />
            </div>

            <div className='image-container' data-caption="♥♥♥">
              <img src={DailyGif2} width={180} height={180} alt="Mi amor precioso" />
            </div>
          </div>

        </div>
        
        <div className='hiText'>

          <h2>📌♥ Mensajito para mi princesa ♥📌</h2>
          
          <h4>
            Hola Serena!, por fin llegó el día, espero que te guste lo poco y lo mucho
            que tengo para tí hoy. Te amo demasiado mi reina ♥ 
          </h4>

          <p>
            Hola reina mía, te amo mucho. Espero la estés pasando muy bien mi amor, cada día que pasa
            me enamoro demasiadisimo de tí, me tienes totalmente loco por tí, me despierto en las mañanas
            locamente enamorado y me acuesto a dormir aún más. <br /> <br />

            Sólo quiero que hoy te quede claro que te amo demasiado, que quiero que seas mi princesa toda mi vida,
            mi bebé malcriada, mi princesa, mi todo, llevo días manteniendo ésta página para tí, investigando, buscando
            canciones, videos que sé que te gustarán, que te mantengas todo el día sabiendo que aunque no estoy cerca
            te amo con toda mi alma y que jamás te hará falta ni un poco de cariño conmmigo. <br /> <br />

            Sigo irremediablemente enamorado de tí, incluso más que el día 1, espero que algún día te quede muy claro,
            espero que hoy te quede mucho más claro de lo que lo tienes ya mismo. <br /> <br />

            Bueno amor, no tengo mucho más que decir, sólo espero que, al igual que yo, quieras regalarme tu vida,
            tu tiempo, tu cariño, así como yo lo quiero contigo, que seas mi amiga más intima, mi compañera
            y algún día si me dejas, mi esposa y madre de mis hijos. Te amo Serena, siempre lo haré
          </p>


          <h3>♥ Te amo demasiado Serenita ♥</h3>
          <h4>Espero te hayan gustado tus flores, entonces...</h4>
        </div>

        <div className='proposal'>
          <h2>♥ ¿Quieres ser mi novia? ♥</h2>
  
            {ans == 0 &&
            <div className='decision'>
              <button className='button-yes' onClick={() => {setAns(1)}}>Sí, Mi Amor </button>
              <button className='button-no'  onClick={handleNoClick}>
                {noClicks > 1 ? "Que mala eres, segura? :(" : "No, Maldito"}
              </button>
            </div>
            }
          
          {handleResponse()}
        </div>

      </div>
    </div>
    </>
  )
}

export default App