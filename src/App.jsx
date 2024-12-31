import { useState } from 'react'
import phrases from './phrases.json'
import	{bg1, bg2, bg3, bg4} from './indexImage'
import './App.css'

const images=[bg1, bg2, bg3, bg4]
function getRandomIndex (miArray){
  return Math.floor(Math.random() * miArray.length)
}

function App() {
  const [phrase, setPhrase] = useState('!Toca la galleta')
  const [imageBackground, setImageBackground ]= useState(getRandomIndex(images))
  const background = `url('${images[imageBackground]}')`
 
  const [imageGalleta, setimageGalleta ]= useState('public/cookieClose.png')

  const handleClick = () => {
    setPhrase(phrases[getRandomIndex(phrases)].phrase)
    setImageBackground(getRandomIndex(images))
    setimageGalleta('public/cookieOpen.png')
    
  } 

  const resetClick = () => {
    setPhrase('!Toca la galleta')
    
    setimageGalleta('public/cookieClose.png')
    
  } 
  return (
    
    <div className='wrapper' style={{backgroundImage: background}}>
       {/* { <img src={images[imageBackground]} alt="img" />} {phrase}*/}
       <div className='container'>

        <h1 className='title'>
          Galleta de la fortuna
        </h1>
        <div className='card__body'>
          <div className='card__galleta'> 
            <img src= {imageGalleta} alt="img" onClick={handleClick}/>
            <div className="text-overlay">
              {phrase}
              </div>
             
          </div>
         
          <button className='card__btn' onClick={resetClick}>&#x21BB; Reset</button>
       
        </div>
      </div>
    </div>
  )
}

export default App
