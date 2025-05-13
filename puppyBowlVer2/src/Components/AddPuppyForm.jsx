import { useNavigate } from 'react-router-dom';
import './pup.css'
import axios from 'axios';


function AddPuppyForm({allPuppies,setAllPuppies}){
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        addPuppy(formData);
        navigate('/PuppyRoster');
    }

    const addPuppy = async (formData) => {
        try {
            const newPuppy = {
                name: formData.get("name"),
                breed: formData.get("breed"),
                teamId: formData.get("teamId"),
                imageUrl: formData.get("imageUrl"),
                status: formData.get("status"),
            }
            const {data} = await axios.post("https://fsa-puppy-bowl.herokuapp.com/api/2501-PUPPIES/players", newPuppy)
            console.log(data)
            setAllPuppies([...allPuppies, data.data.player])
            }
         catch (error) {
            console.error("Error adding puppy:", error);
            
        }
    }


    return (
        <div>
            <h1>Adding puppy</h1>
            <form onSubmit={handleSubmit} className="PupForm" action = {addPuppy}>
                <label>
                    Dog's Name:  <input type="text" name="name" required/>
                </label>
                <br/>
                 <label>
                    Dog's Breed: <input type="text" name="breed" required/>
                </label>
                <br/>
                 <label>
                    Dog's teamId: <input type="number" min ="1" name="teamId" required/>
                </label>
                <br/>
                 <label>
                    Dog's Photo: <input type="string" name="imageUrl"/>
                </label>
                <br />
                <label>
                    Status:<select name="status">
                         <option value="bench">Benched</option>
                         <option value="field">Active</option>
                      </select>
                </label>
                <button type='submit'>Add New Puppy</button>
                <br/>
            </form>
        </div>
    )
}
export default AddPuppyForm