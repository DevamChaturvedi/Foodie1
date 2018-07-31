import {topRated_views} from './toprated.views.js'

// var a = require('./topRated')
export function top_Rated () {
	let myheaders = {
"user-key": "6735af4836826fc3fd3ac0aa8a760fdd"
}
const topRated = document.getElementById("topRated");
const url = "https://developers.zomato.com/api/v2.1/collections?city_id=280&count=4";
const button = document.createElement('button');
var createButton = html => {
    
    button.type = "button";
    button.className = "btn btn-pink mt-auto";

        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#exampleModal")

    button.innerHTML =html;
    console.log(button)
    return button;
} 
fetch(url,{
method: 'GET',
headers: myheaders
})

.then((resp) => resp.json())
.then(data => {
  let restos = data.collections; 
return restos.map(collection => {

   
      
    const id = button.id;
    button.onclick = () => {
      console.log('clicked add')
      list_collection(id);
    }
    console.log(topRated_views(collection));
})
});


}