import { Link } from 'react-router-dom';

function SearchResults({ searchForPuppy }) {

    return (
    <div>
      <h1>Search Results</h1>
      <p>Here are the results for your search.</p>
            <div >
                {
                  searchForPuppy.map((pups) => {
                         return (
                        <div key={pups.id}>
                            <Link to={`/PuppyRoster/singlePuppy/${pups.id}`}>
                            <h1>{pups.name}</h1>
                            </Link>
                            <p>{pups.breed}</p>
                            <img src={pups.imageUrl ? pups.imageUrl : null} alt={pups.name} />
                            <p>{pups.status}</p>
                        </div>
                        );
                    })
                }
            </div>
    </div>
  );
}
export default SearchResults;