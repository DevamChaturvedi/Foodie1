// require('../../node_modules/mdbootstrap/css/bootstrap.min.css');
// require('../../node_modules/mdbootstrap/css/mdb.min.css')
//require("./style.css");

const topRated = document.getElementById("topRated");
const url = "https://developers.zomato.com/api/v2.1/collections?city_id=280&count=4";


function search(){
  let searchHeaders = {
  "user-key": "6735af4836826fc3fd3ac0aa8a760fdd"
  }
    const form = document.getElementById('searchForm');
      const searchItem = document.getElementById("search_item");
      console.log(searchItem);
const url1 = "https://developers.zomato.com/api/v2.1/search?q="+form.value;
      $( "#search_item" ).empty();
      fetch(url1,{
      method: 'GET',
      headers: searchHeaders
      })
      .then((resp) => resp.json())
      .then(function(data){
        let restos = data.restaurants; // Get the results
        console.log(restos);
      return restos.map(function(restaurants) { // Map through the results and for each run the code below
      var div = document.createElement("div");
      var div1 = document.createElement('div');
       // Create the elements we need
      img = document.createElement('img');
      cardBody = document.createElement('div');
      h5 = document.createElement('h5');
      p = document.createElement('p');
      button = createButton("add");

      div.className = "col-lg-3 col-md-6 mb-5";
      div1.className = "card  narrower restaurants";

      // div.className = "search card";
      img.className = "card-img-top";
      cardBody.className = "card-body";
      h5.className = "card-title";
      p.className = "card-text";
      button.className = "btn btn-pink";
      img.src = restaurants.restaurant.featured_image; // Add the source of the image to be the src of the img element
      h5.innerHTML = `${restaurants.restaurant.name}` ;
      p.innerHTML = `${restaurants.restaurant.cuisines}`;
      button.id = restaurants.restaurant.id;
      //a.textContent = "Add" // Make the HTML of our span to be the first and last name of our author
      div1.appendChild(img);
      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      cardBody.appendChild(button);

      div1.appendChild(cardBody);
      div.appendChild(div1);
      searchItem.appendChild(div);
     const id = button.id;
        button.onclick = function(){
            console.log('clicked add from search')
            addCollection(id);
        }
      })
    }).then(reload());
  } 



let myheaders = {
"user-key": "6735af4836826fc3fd3ac0aa8a760fdd"
}
var createButton = function (html) {
    var button = document.createElement('button');
    button.type = "button";
    button.className = "btn btn-pink mt-auto";
    button.innerHTML =html;
    return button;
} 
fetch(url,{
method: 'GET',
headers: myheaders
})
.then((resp) => resp.json())
.then(function(data){
  let restos = data.collections; // Get the results
return restos.map(function(collection) { // Map through the results and for each run the code below
var div = document.createElement("div"), // Create the elements we need
img = document.createElement('img'),
cardBody = document.createElement('div'),
h5 = document.createElement('h5'),
p = document.createElement('p');
button = createButton("add");
div.className = "collection card";
img.className = "card-img-top";
cardBody.className = "card-body";
h5.className = "card-title";
p.className = "card-text";
//a.className = "btn btn-pink";
img.src = collection.collection.image_url; // Add the source of the image to be the src of the img element
h5.innerHTML = `${collection.collection.title}` ;
p.innerHTML = `${collection.collection.description}`;
button.id = collection.collection.collection_id;
//a.textContent = "Add" // Make the HTML of our span to be the first and last name of our author
cardBody.appendChild(h5);
cardBody.appendChild(p);
cardBody.appendChild(button);
div.appendChild(img);
div.appendChild(cardBody);
topRated.appendChild(div);
const id = button.id;
      button.onclick = function(){
        console.log('clicked add')
        addCollection(id);
      }

})
}) 
.then(reload());



function reload(){
  const myCollection = document.getElementById("myCollection");
    var getUrl = "http://localhost:3000/collections";
    myCollection.innerHTML = "";
    fetch(getUrl)
    .then((resp)=>resp.json())
    .then(function(data){
        let collections = data; // Get the results
        return collections.map(function (collection) { // Map through the results and for each run the code below
            var div = document.createElement('div'), //  Create the elements we need
                img = document.createElement('img'),
                cardBody = document.createElement('div'),
                h5 = document.createElement('h5'),
                p = document.createElement('p');
            div.className = "collection card col-md-2";
            img.className = "card-img-top";
            cardBody.className = "card-body";
            h5.className = "card-title";
            p.className = "card-text text-muted";
            img.src = collection.img;  // Add the source of the image to be the src of the img element
            h5.innerHTML = `${collection.name}`;
            p.innerHTML = `${collection.text}`; // Make the HTML of our span to be the first and last name of our author
            var button = createButton("Delete");
            button.id = collection.id;
            cardBody.appendChild(h5);
            cardBody.appendChild(p);
            div.appendChild(img);
            div.appendChild(cardBody);
            cardBody.appendChild(button);
            myCollection.appendChild(div);
            const id = button.id;
            button.onclick = function(){
                deleteCollection(id);
            }
        })
    })
}


function createHTMLElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
} 


function addCollection(id){
    var div = document.getElementById(id).parentElement.parentElement;
    console.log(div);
    var img = div.firstChild;
    console.log(img);
    var cardBody = img.nextSibling;
    console.log(cardBody);
    var name = cardBody.firstChild;
    console.log(name);
    var text = name.nextSibling;
    var jsonString = {
            "id" : id,
            "img" : img.src,
            "name" : name.innerHTML,
            "text" : text.innerHTML
    }
    let fetchData = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",  // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(jsonString) // body data type must match "Content-Type" header
    }
    let addUrl = "http://localhost:3000/collections";

    fetch(addUrl, fetchData)
    .then(reload());        //Adding to json-server and calling reload function
} 
function deleteCollection(id){
    let fetchData = {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    }
    let deleteUrl = "http://localhost:3000/collections/"+id;

    fetch(deleteUrl, fetchData)
    .then(reload());
} 