import React from "react";
import './search.css';

// import SearchIcon from '@mui/icons-material/Search';
// import { FaBeer } from 'react-icons/fa';
const Search = () => {
  return (
    <div className="Search">
      <form>
      {/* <AiOutlineSearch /> */}
      {/* <SearchIcon /> */}
          <input type="text" name="name" placeholder="Search for products, brands and more" className="searchInput"/>
      </form>
    </div>
  );
};

export default Search;
