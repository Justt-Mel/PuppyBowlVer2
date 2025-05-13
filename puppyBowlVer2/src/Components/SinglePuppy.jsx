import './pup.css'
import { useParams } from "react-router-dom"

function SinglePuppy({allPuppies}){

    const params = useParams()
    const id = params.id *1

    const pup = allPuppies.find((pup) => {
        return pup.id === id
    })

    return (
        <div>
          <div className='header'>
            <h1>Single Puppy</h1>
            <h2>Details</h2>
          </div>

          <div className="SinglePupContainer">
              {
               pup ? (
              <div className="SinglePup">
                  <h1>{pup.name}</h1>
                  <p>{pup.breed}</p>
                  <img src= {pup.imageUrl ? pup.imageUrl : null } alt= {pup.name} />
                  <p>{pup.status}</p>
                  <p>{pup.teamId}</p>
              </div>
                ) :
                (
                   <h1>Loading</h1> 
                )
              }
          </div>
         </div>
    )
}
export default SinglePuppy