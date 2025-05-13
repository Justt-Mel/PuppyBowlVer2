import './pup.css'
import { Link } from "react-router-dom"
import axios from 'axios'

function AllPuppies({allPuppies ,setAllPuppies}){

const deletePup = async (id) => {
    try {
      await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2501-PUPPIES/players/${id}`);
      const delPup = allPuppies.filter((pup) => {return pup.id !== id});
      setAllPuppies(delPup);
    } catch (error) {
        console.error(error);
    }
}

    return(
        <div>
            <h1>All The Pups</h1>
            <div className="PupsContainer">
                {
                    
                   allPuppies.map((pups) => {
                        return(
                        <div key={pups.id} className="pupObjects">
                            <Link to={`/PuppyRoster/singlePuppy/${pups.id}`}>
                            <h1>{pups.name}</h1>
                            </Link>
                            <p>{pups.breed}</p>
                            <img src={pups.imageUrl ? pups.imageUrl : null} alt={pups.name} />
                            <p>{pups.status}</p>
                            <button onClick={() => deletePup(pups.id)}>Delete</button>
                        </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default AllPuppies