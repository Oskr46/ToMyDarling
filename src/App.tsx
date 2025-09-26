import { useState } from 'react';
import './App.css'

function App() {
  const [ans, setAns] = useState(0);
  const [noClicks, setNoClicks] = useState(0);

  function handleResponse(){
    switch(ans){
      case(0): return(
      <div className='response'>
        <h3> Responde c:</h3>
      </div>)

      case(1): return(
      <div className='response'>
        <h3> ¡Siipi, te amo mi amor, Gracias! ♥</h3>
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
        <h3> :c no se acepta esa respuesta, loca</h3>
        <button className='button-yes' onClick={() => setAns(0)}>Intentar de nuevo</button>
      </div>)
    }
  }

  const handleNoClick = () => {
    setNoClicks(noClicks + 1);
    setAns(2);
  }

  return (
    <>
    <div className='box'>
      <div className='mainText'>
        <h2>♥ Para mi Princesa ♥</h2>
      </div>
      <div className='content'>
        <div className='text'>
          <p>
            Holi, xd, digamos que no soy muy bueno haciendo cartas, ni nada por el estilo,
            ésta es mi manera de, bueno, demostrarte lo mucho que te amo. Llevo semanas haciendo ésta página
            y pues, espero que todo lo que haré cumpla tus expectativas, y bueno, que te sientas muy
            querida como siempre quiero que te sientas conmigo.
          </p>
        </div>
        <div className='text'>
          <p>
            En fin Serenita, no sé ni por donde empezar, yo soy una persona muy organizada con todo
            y que hayas llegado a mi vida no sé ni siquiera como pasó, todo fué tan rápido y apresurado,
            que no sé, tal vez eso me gustó en cierto modo, siempre tuvimos las cosas claras y siempre
            estabamos de acuerdo con decirnos lo que esperabamos uno de otro.
          </p>
        </div>

        <div className='text'>
          <p>
            En algún punto, no sé, solo descubrí que te necesitaba con locura, que necesito que estés en mis
            días y te mantengas conmigo, suena enfermizo, lo sé, pero es la manera en la que te amo y te amaré
            toda mi vida, no tienes idea del vacío interno que llenaste en mí y no tengo manera de recompensartelo
            más que bueno, hacerte sentir muy querida siempre. Éste pequeño detalle, que espero que sea de tu agrado
            y que te guste, es tan solo un poco de lo que mi amor por tí puede llegar a ser. Espero que te guste
            lo que estoy preparando, tal vez no es mucho, tal vez no es una fantasía como tal vez tu quieras,
            pero creeme que estoy haciendo lo mejor que puedo para que no te falte nada. Todo lo que yo tengo es
            tuyo, y espero lo sepas apreciar, como lo has hecho hasta ahora 
          </p>
        </div>

        <div className='text'>
          <p>
            Bueno amor, podría hacer ésto muuuy largo, realmente, pero espero de verdad que quieras compartir tu vida
            conmigo, quiero hacer las cosas bien contigo (como siempre), y espero que estés ahí para mí
            como yo lo estaré siempre para tí cuando me necesites, espero que hoy (el día que te entregue esto),
            me des una respuesta positiva y que accedas a compartir conmigo toda la vida. Te amo demasiado mi loquita,
            eres lo más lindo que me ha pasado, jamás dejaré que te falte algo mientras yo pueda dártelo, no espero
            nada a cambio y lo sabes.
          </p>
        </div>
        
        <div className='hiText'>
          <h3>♥ Te amo demasiado Serenita ♥</h3>
          <h4>No sé si ya te lo dije, pero...</h4>
        </div>

        <div className='proposal'>
          <h2>♥ ¿Quieres ser mi novia? ♥</h2>
  
            {ans == 0 &&
            <div className='decision'>
              <button className='button-yes' onClick={() => {setAns(1)}}>Sí, Mi Amor </button>
              <button className='button-no'  onClick={handleNoClick}>
                {noClicks > 2 ? "Segura? :(" : "No, Maldito"}
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