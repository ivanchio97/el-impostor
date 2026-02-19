import {useState} from 'react'
import heart from '../assets/heart.svg'
import {frases} from '../phrases.js'
import {Link} from 'react-router-dom'

function Equipos(){

    const [integrantes, setIntegrantes] = useState(4)
    const [vidas, setVidas] = useState(35)
    const [vidasIniciales, setVidasIniciales] = useState(35)
    const [frase, setFrase] = useState([])
    const [estados, setEstados] = useState([true, true, true, true])
    const [contador, setContador] = useState(1)

    function generar(){
      setVidas(vidasIniciales)
      const randNum = Math.floor(Math.random()*frases.length)
      const randPhr = frases[randNum]
      setFrase(randPhr.split(" "))
    }
    function mostrar(ind){
        const copy = [...estados]
        copy[ind] = !copy[ind] 
        setEstados(copy)
    }
    function reducir(){
        setVidas(prev => prev - 1)
    }
    function mostrarTodos(){
        
       if(contador%2 == 0){
        setEstados([false,false,false,false])
       }
       else{
        setEstados([true,true,true,true])
       }
       setContador(prev => prev + 1)
    }

    return(
        <div className='hero2'>
            <Link to='/'><button>Modo normal</button></Link>
            <section>
                <h2>Jugadores en el equipo:</h2>
                <input type="number"
                  onChange = {(e)=>setIntegrantes(e.target.value)}
                  value = {integrantes}
                />
                <h2>Vidas: </h2>
                <input type="number"
                  onChange = {(e)=>setVidasIniciales(e.target.value)}
                  value = {vidasIniciales}
                />
                <button onClick={generar}>Generar</button>
            </section>
            <div className='heart' onClick = {reducir} >
                <p>{vidas}</p>
                <img src={heart} alt="" />
            </div>
            <div className='palabras'>
             {
                frase.map((palabra, index)=>{
                    return(
                        <button onClick={()=> mostrar(index)}>
                            {estados[index] ? index + 1  : palabra  }
                        </button>
                    )
                })
             }
            </div>
            <button onClick={mostrarTodos} >Mostrarr</button>
        </div>
    )
}
export default Equipos