import {search_in} from './searchResults.views.js'
export function search_item() {
 let searchHeaders = {
  "user-key": "6735af4836826fc3fd3ac0aa8a760fdd"
  }
  const button = document.createElement('button');
    const form = document.getElementById('searchForm');
      const searchItem = document.getElementById("search_item");
      console.log(searchItem);
const url1 = `https://developers.zomato.com/api/v2.1/search?q=${form.value}`;
      $( "#search_item" ).empty();
      fetch(url1,{
      method: 'GET',
      headers: searchHeaders
      })
      .then((resp) => resp.json())
      .then(data => {
        let restos = data.restaurants; 
        console.log(restos);
      return restos.map(restaurants => { 
     
      /*topRated.appendChild(topRated_card);*/ 

     const id = button.id;
        button.onclick = () => {
            console.log('clicked add from search')
            list_collection(id);
        }
        search_in(restaurants);
      })
    })
      
}