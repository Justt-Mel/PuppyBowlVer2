import { useNavigate } from "react-router-dom"


function SearchPuppy({ allPuppies, setSearchForPuppy =()=>{} }) {
const navigate = useNavigate()

const searchPup = (event) => {

    event.preventDefault();
    const formData = new FormData(event.target);
    const search = formData.get("Search").toLowerCase();
    const searchResult = allPuppies.filter((pup) => pup.name.toLowerCase().includes(search));
    if (searchResult.length === 1) {
        navigate(`/PuppyRoster/singlePuppy/${searchResult[0].id}`);
        setSearchForPuppy(searchResult[0]);
    } else if (searchResult.length > 1) {
        const names = searchResult.map(pup => (pup.name)).join(',');
        navigate(`/PuppyRoster/search/searchResults/:name=${names}`);
        setSearchForPuppy(searchResult);
    }
    else {
        alert("No puppies found");
    }
    console.log(searchResult);
};

    return (
        <div>
            <form onSubmit={searchPup}>
                <label>
                    Search for Puppy <input type="text" name="Search" />
                </label>
                <button>search</button>
            </form>
        </div>
    )
}
export default SearchPuppy