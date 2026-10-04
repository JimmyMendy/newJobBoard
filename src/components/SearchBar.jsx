import React, {useState} from "react";

const SearchBar = () => {
  const [jobName, setJobName] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch => (e) {
    e.preventDefault()
    const query = { jobName, location }
  }

  return (
    <div className='searchBarArea'>
      <form action=''>
        <input type='text' placeholder='Search for jobs' setJobName={e.target.value}/>
        <input type='text' placeholder='Location' setLocation={e.target.value}/>
        <button onClick={handleSearch()}> Find jobs </button>
      </form>
      <div className='popular-tags'>
        <h2>Popular searches</h2>
      </div>
    </div>
  );
};

export default SearchBar;
