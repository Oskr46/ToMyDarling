//import { useState } from 'react';
import DailyGif from "/darling/dailyGif.gif"
import DailyGif2 from "/darling/dailyGif2.gif"
import './App.css'

function App() {
  //const [ans, setAns] = useState(0);
  //const [noClicks, setNoClicks] = useState(0);

 /* function handleResponse(){
    switch(ans){
      case(0): return(
      <div className='response'>
        <h3> Selecciona alguna mi amor :D</h3>
      </div>)

      case(1): return(
      <div className='response'>
        <h3> ¡Siipi, te amo mi amor, Gracias! ♥</h3>
        <div className='images'>
          <div className='image-container' data-caption="Mi princesa ♥">
            <img src={Serenita5} width={180} height={220} alt="Nuestro momento especial" />
          </div>
        </div>
        <h4>Ya no hay vuelta atrás, no puedes deshacerte de mi C:</h4>
        <div className="hearts">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="heart" style={{
              animationDelay: `${i * 0.2}s`,
              left: `${Math.random() * 100}%`
            }}>♥</div>
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

  */
 {/* const handleNoClick = () => {
    setNoClicks(noClicks + 1);
    if (noClicks >= 10){setAns(2)};
  }
*/}
  return (
    <>
    <div className='box'>
      <div className='mainText'>
        <h2>📌♥ Mensajito Diario para mi Princesa ♥📌</h2>
      </div>
      <div className='content'>
        <div className='hiText'>
          <h3>
            ♥ Hola Serenita linda ♥, buenas noches, lo siento por tardar. Te amo demasiado amor mío.
          </h3>

          <h4>
            Te amo mucho Serena, Gracias por pasar el día conmigo. Me encanta pasar tiempo contigo y estar
            pegado a tí como un pegoste.
          </h4>

          <p>
              Gracias por estos dos días lindos ♥, te amo demasiadooo. 
          </p>

          <div className="proposal">
            <p>
              Eres lo mejor que me ha pasado en la vida amor mío. Gracias por aparecer y por tratarme bien, te amo demasiado corazóncito
            </p>
            <p>
              Pues, siguiendo un poco con dejarte algo para que escuches, hoy sólo te dejaré una cancioncita, probablemente ya la has escuchado.
            </p>
            <h3>
              Lo Eres Todo - Guaco
            </h3>
            <a href="https://youtu.be/9K-52HzMJgA?si=FUq2FE3EmP72dSli">Presiona aquí, amor</a>

            <h3>
            Eres - Café Tacvba
            </h3>
            <a href="https://youtu.be/RiDMRwR-GQY?si=uz8dfRwBcioE5f2t">Presiona aquí, amor</a>
          </div>

          <h3>
            Espero que te guste mi Amor. Te amo ♥
          </h3>
          <h3>♥ Que pases buena noche. ♥</h3>
          
          <div>
            <div className='image-container' data-caption="♥♥♥">
              <img src={DailyGif} width={180} height={180} alt="Mi amor precioso" />
            </div>

            <div className='image-container' data-caption="♥♥♥">
              <img src={DailyGif2} width={180} height={180} alt="Mi amor precioso" />
            </div>
          </div>

        </div>
        
{/*
        <div className='hiText'>
          <h3>♥ Te amo demasiado Serenita ♥</h3>
          <h4>No sé si ya te lo dije, pero...</h4>
        </div>

        <div className='images'>
          <div className='image-container' data-caption="Mi todo ♥">
            <img src={Serenita6} width={200} height={200} alt="Mi vida completa" />
          </div>
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
*/}
      </div>
    </div>
    </>
  )
}

export default App