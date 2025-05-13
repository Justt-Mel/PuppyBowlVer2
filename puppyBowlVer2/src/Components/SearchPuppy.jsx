import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
function searchPuppy({allPuppies}) {
const[searchForPuppy,setSearchForPuppy] = useState([])
const navigate = useNavigate()

const searchPup  = (formData) => {
    const search = formData.get("Search").toLowerCase()
    const searchResult = allPuppies.filter((pup) => pup.name.toLowerCase().includes(search))
    if (searchResult.length === 1) {
        navigate(`/PuppyRoster/singlePuppy/${searchResult[0].id}`)
    }
    setSearchForPuppy(searchResult)
    console.log(searchResult)
}

    return (
        <div>
            <form action={searchPup} >
                <label>
                    Search for Puppy <input type="text" name="Search" />
                </label>
                <button>search</button>
            </form>
        </div>
    )
}
export default searchPuppy