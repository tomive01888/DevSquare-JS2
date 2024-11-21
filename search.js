// find the search input
/*

<form name="searchInput">
  <input type="text" id="search" name="tag" placeholder="Filter by tag" />
  <button type="submit">Search</button>
  <button type="reset">X</button>
</form>

*/

// at home.js

import { searchTag } from "path to search js";

const searchForm = document.forms.searchInput

searchForm.addEventListener("submit", searchTag);






// at different js file

export async function searchPost(event){
    event.preventDefault()

    const tag = event.target.tag.value.trim()

    if(tag){




    } else {


    }
}
