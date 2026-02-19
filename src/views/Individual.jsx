import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {words} from '../words.js'

function Individual(){
    const [palabras, setPalabras] = useState([])
    const [jugadores, setJugadores] = useState(4)
    const [impostores, setImpostores] = useState(1)
    const [categoria, setCategoria] = useState("")
    const [estados, setEstados] = useState([])
    function generar(){
      const randNum = Math.floor(Math.random()* words.length)
      const randomWord = words[randNum]
      setCategoria(randomWord.category)
      const arr = Array.from({length: jugadores || 4}, ()=> randomWord.palabra )
      const state = Array.from({length: jugadores || 4}, ()=> true  )
  
      for(let i = 0; i < impostores ; i++ ){
        const impostor = Math.floor(Math.random()*jugadores)
        arr[impostor] = "IMPOSTOR"
      }
  
      setPalabras(arr)
      setEstados(state)
    }
  
    function mostrar(ind){
      const copy = [...estados]
      copy[ind] = !copy[ind] 
      setEstados(copy)
    }
    return (
      <div className='hero'>
        <Link to='/equipos'><button>Modo equipos</button></Link>
        <section>
          <h2>Jugadores:</h2>
          <input type="number" 
            placeholder='Número de jugadores'
            onChange = {(e)=> setJugadores(e.target.value)}
            value={jugadores}
            />
          <h2>Impostores:</h2>
          <input type="number" 
            placeholder='Numero de impostores' 
            min = {1}
            onChange = {(e) => setImpostores(e.target.value)}
            value={impostores}
            disabled
            />
        <button onClick={generar}>Generar</button>
        </section>
  
        <h1>Categoria: {categoria}</h1>
        <div className="palabras">
        {
          palabras.map((palabra,index)=>{
            return (
              <button onClick={()=> mostrar(index)}>
                {estados[index] ? index + 1  : palabra  }
              </button>
            )
          })
        }
        </div>
      </div>
    )
  }
  export default Individual