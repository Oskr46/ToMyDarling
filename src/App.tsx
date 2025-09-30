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
            ♥ Hola Serenita linda ♥, buenos días, lo siento por tardar. Que tengas un buen día.
          </h3>

          <h4>
            Lo siento, desperté con mucho dolor de cabeza y me quedé dormido :c, te amo mucho Serena.
          </h4>

          <p>
            Puess, no sé que decirte, muchas gracias por cuidarme y estar pendiente de mí, te amo muchisimo Serenita,
            creo que nunca encontraré las palabras adecuadas para expresar lo que siento, realmente. 
          </p>

          <div className="proposal">
            <p>
              Te amo demasiado Serenita, jamás me voy a cansar de decirlo, o decirtelo frente a quien sea,
              no quiero ocultarte ni quiero que te sientas de esa manera, quiero que siempre seas para mí
              así como yo seré sólo para tí. Te amo.
            </p>
            <p>
              Estaba pensando en dejarte algo para que no te aburras mientras voy a la uni, y bueno, la verdad no sé. Lo Primero que pensé
              es dejarte un video, como no te gusta nada de miedo o cosas paranormales y así, te dejé el video del stream
              que estaba viendo hace tiempo. No es para que te lo veas todo de una vez, puedes ver un pedacito y así, es bastante largo.
              Espero lo disfrutes como yo. Te amo serenita
            </p>
            <h3>
              Una Noche de Charla mientras mi amigo Andrés me vacía la nevera.
            </h3>
            <a href="https://youtu.be/qgWSrD9fUY4?si=BSVDrWZNoS0p_sB5">Presiona aquí, amor</a>
          </div>

          <h3>
            Espero que te guste Serenita linda. Te amo ♥
          </h3>
          <h3>♥ Que pases un bonito día. ♥</h3>
          
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