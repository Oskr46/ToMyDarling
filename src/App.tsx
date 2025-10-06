//import { useState } from 'react';
import DailyGif from "/darling/DailyGif.gif"  
import DailyGif2 from "/darling/dailyGif2.gif"
import Us1 from "/darling/Us1.jpg"
import Us2 from "/darling/Us2.jpeg"
import Us3 from "/darling/Us3.jpg"
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
            
          <h2>📌♥ Mensajito para mi princesa ♥📌</h2>
          
          <h4>
            ♥ Hola mi amor ♥, te amo mi chiquita, Buenas noches. 
          </h4>

          <p>
            Hola princesaa, espero que hayas pasado un buen día, y que te sientas mucho mejor
            te amo con locura mi bebé, siempre vas a ser mi princesita lindisima, te amo muchisisisimo
            muamuamua.
          </p>

          <div className="proposal">
            
            <h2>📌♥ Cositas para tí ♥📌</h2>
            
            <h3>
              📹♥ Videos ♥📹
            </h3>

            <p>
              Aquí tienes una rutina de comedia de Nanutria y una de Franco Escamilla para ti princesa. Te amo
              espero que te guste mucho.
            </p>

            <h4>
              De que pais es 
            </h4>
            <a href="https://youtu.be/ufIn1TNDFNM?si=opyOsf0rTCjM-lzK">
              Presiona aquí princesa ♥
            </a>

            <h4>
              Aroma a Papa 
            </h4>
            <a href="https://youtu.be/LDMC_CmR5RA?si=C1nPTAp3g9-VuBfw">
              Presiona aquí princesa ♥
            </a>

            <br /> <br />

            <h3>
              ♥ Canciones ♥
            </h3>

            <p>
              Algunas canciones para tí ♥
            </p>

            <h4>
              Hasta la raíz - Natalia Lafourcade
            </h4>
            <a href="https://youtu.be/iHSnLRrEC10?si=9pv37NlO0dVkdL7S">
              Presiona aquí princesa ♥
            </a>

            <h4>
              Love me like there's no tomorrow - Freddy Mercury
            </h4>
            <a href="https://youtu.be/4p4S9PfZTE8?si=o_bXPaTtY1hdbDJN">
              Presiona aquí princesa ♥
            </a>

            <h4>
              Waiting For Love - Avicii
            </h4>
            <a href="https://youtu.be/-ncIVUXZla8?si=TACEECt0TMqwuUYk">
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

          <br/>

          <h2>📌♥ Fin del contenido ♥📌</h2>

          <h4>
            Espero que te haya gustado todo mi bebé, cuídate mucho
          </h4>
          <h4>♥ Que pases buena noche corazón ♥</h4>
          
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