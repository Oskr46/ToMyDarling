//import { useState } from 'react';
import DailyGif from "../public/darling/PUCCAGif.gif"
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
            Hola mi amor, buenos días. Espero que pases un bueeen día.
          </h3>

          <p>
            Puees, bueno, no tenía pensado aún que vieras todo esto, pero bueno, soy malisimo mintiendo y ocultando cosas xd
            aún no sé bien que poner aquí, te amo muchisimo corazón. 
          </p>

          <p>
            Puees, es inevitable el hecho de esconder que me gustabas en realidad desde el principio, pero bueno, sabes
            como soy, y quería en cierto modo ponerte a prueba, porque bueno, me daba mucho miedo volver a
            quedarme con el amor en las manos. Pero bueno, poco a poco me fuí enamorando muchisimo de tí
            (más que antes xd), y pues, digamos que superaste las expectativas y eres todo lo que buscaba, basicamente,
            estoy perdidamente loco por ti, princesa mía.
          </p>

          <h3>
            Te amo muchisimo.
          </h3>
          <h3>♥Y que pases un bonito día.♥</h3>
          
          <div className='image-container' data-caption="Pucca ♥">
            <img src={DailyGif} width={180} height={180} alt="Mi amor precioso" />
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