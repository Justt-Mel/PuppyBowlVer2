import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Home from './Components/Home'
import AllPuppies from './Components/AllPuppies'
import SinglePuppy from './Components/singlePuppy'
import AddPuppyForm from './Components/AddPuppyForm'
import SearchPuppy from './Components/SearchPuppy'
import SearchResults from './Components/SearchResults'
import { Routes,Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  const [allPuppies,setAllPuppies] = useState([])
  const[searchForPuppy,setSearchForPuppy] = useState([])


  useEffect( () => {
    const fetchPuppies = async ()=>{
        try {
            const {data} = await axios.get("https://fsa-puppy-bowl.herokuapp.com/api/2501-PUPPIES/players")
            console.log(data.data.players)
            setAllPuppies(data.data.players)
        } catch (error) {
            console.error(error)
        }
    }
    fetchPuppies()
},[])

  return (
      <div>
         <div className='Nav'>
          <Link to={'/'}>Home</Link>
          <Link to={'/PuppyRoster'}> The Pups</Link>
          <Link to={'/NewPuppyForm'}>Add A Puppy</Link>
           <div> 
            <SearchPuppy path = '/PuppyRoster/search'  allPuppies={allPuppies} setSearchForPuppy={setSearchForPuppy}/>
          </div>
         </div>

        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/PuppyRoster' element = { <AllPuppies allPuppies={allPuppies} setAllPuppies = {setAllPuppies}/>} />
          <Route path='/PuppyRoster/singlePuppy/:id' element = {<SinglePuppy allPuppies={allPuppies} />}/>
          <Route path='/NewPuppyForm' element ={<AddPuppyForm allPuppies = {allPuppies} setAllPuppies={setAllPuppies}/>}/>
          <Route path='/PuppyRoster/search/searchResults/:name' element={<SearchResults setSearchForPuppy = {setSearchForPuppy} searchForPuppy={searchForPuppy}/>}/>
        </Routes>
      </div>
  )
}

export default App
