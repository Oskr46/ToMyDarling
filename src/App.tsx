//import { useState } from 'react';
import DailyGif from "../public/darling/dailyGif.gif"
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
            ♥ Hola Serenita linda ♥, espero que hayas dormido bieen. Te amo Corazón, que tengas un buen día.
          </h3>

          <p>
            Cada día me enamoro más de ti, amor mío, me gustas muchísimo. Te amo como no tienes idea. De verdad que si no estás
            me aburro muchísimo, ya no paro de pensar en tí todo el día.
          </p>

          <p>
            Estaba escuchando música y bueno, tengo varias que me recuerdan a tí. Espero que te gusten amor mío, así como tu a mí ♥
          </p>
          <ul>
          <li>
            <h4>
              Bonita - Cabas. <br></br> <a href="https://youtu.be/zLlmvol7g4k?si=qW-kCaH1v6NEI6CT">Presiona aquí, Princesa ♥</a>
            </h4>
          </li>
      <br></br>
          <li>
            <h4>
              Amo Las Estrellas - Zapato3 <br></br> <a href="https://youtu.be/Pd79SSm0X1Y?si=M7Ou4v9dRsjcDHb1">Presiona aquí, Princesa ♥</a>
            </h4>
          </li>
      <br></br>
          <li>
            <h4>
              La Que Me Gusta - Los Amigos Invisibles <br></br> <a href="https://youtu.be/rigubwkGxdw?si=z49NxHXF4D16RfEx">Presiona aquí, Princesa ♥</a>
            </h4>
          </li>
      <br></br>
          <li>
            <h4>
              Flamingo - La Vida Boheme <br></br> <a href="https://youtu.be/xoWRkd3oGcs?si=Uk5APLfjAev2Yk_C">Presiona aquí, Princesa ♥</a>
            </h4>
          </li>
      <br></br>
          <li>
            <h4>
            Caraluna - Bacilos <br></br> <a href="https://youtu.be/D3JKXJpPhM0?si=OpMx7cxlfdA9v_Uw">Presiona aquí, Princesa ♥</a>
            </h4>
          </li>
      <br></br>
          <li>
            <h4>
              De mi, de mi, de mi - Lasso <br></br> <a href="https://youtu.be/Q7eLPn9J-2o?si=ZMbYxCrAgwpywCq0">Presiona aquí, Princesa ♥</a>
            </h4>
          </li>
      <br></br>
          <li>
            <h4>
              Te veo - Lasso <br></br> <a href="https://youtu.be/Vqq6tO3Xeko?si=1kQWPyzaf16Abq7P">Presiona aquí, Princesa ♥</a>
            </h4>
          </li>
      <br></br>
          <li>
            <h4>
              Obsesionario en La Mayor - Tan Bionica <br></br> <a href="https://youtu.be/V8hIlJt0lDY?si=x1RbjM07_54abWn3">Presiona aquí, Princesa ♥</a>
            </h4>
          </li>
      <br></br>
          <li>         
            <h4>
              Loca - Tan Bionica <br></br> <a href="https://youtu.be/rehqofVh7-Y?si=zLTHfafRegbfzBgd">Presiona aquí, Princesa ♥</a>
            </h4>
          </li>
      <br></br>
          <li>
            <h4>
              Tu Ternura - Gualberto Ibarreto <br></br> <a href="https://youtu.be/EAB1hCmxq4U?si=XA4KY3Fz8psUIP14">Presiona aquí, Princesa ♥</a>
            </h4>
          </li>
      <br></br>   
          </ul>

          <h3>
            Espero que te gusten princesa linda. Te amo ♥
          </h3>
          <h3>♥ Que pases un bonito día. ♥</h3>
          
          <div className='image-container' data-caption="♥♥♥">
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