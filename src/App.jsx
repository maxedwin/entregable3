
import { useEffect, useState } from 'react'
import './App.css'
import UseFetch from './hooks/UseFetch'
import getRandomNumber from './services/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormResearch from './components/FormResearch'

function App() {
  const randomLocation = getRandomNumber(126)
  const [locationSelected, setLocationSelected] = useState(randomLocation)
  
  const url = `https://rickandmortyapi.com/api/location/${locationSelected || randomLocation}`
  const [location, getLocation, hasError ] = UseFetch(url)

  useEffect(() => {
    getLocation()
  },[locationSelected])

  return (
    
      <div className='app'>
        <div className='banner'>
       <h1 className='app__title'>Rick and Morty</h1>
        </div>
       <FormResearch 
        setLocationSelected = {setLocationSelected}
       />
       {
        hasError
          ? <h2 className='app__error'>❌Hey! you must provide and id from to 126 😪</h2>
          : (
            <>
            <LocationInfo location = {location} />
            <div className='container-resident'>
            {
              location?.residents.map(urlResident => (
                <ResidentCard 
                  key={urlResident}
                  url={urlResident}
                />
    
                //<img src={urlResident} alt='' />
              )
              )
            }
          </div>
          </>
          )
       }
   
      </div>
    
  )
}

export default App
