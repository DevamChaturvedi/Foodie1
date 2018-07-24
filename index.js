

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
        let restos = data.restaurants; 
        console.log(restos);
      return restos.map(function(restaurants) { 
      var div = document.createElement("div");
      var div1 = document.createElement('div');
       
      img = document.createElement('img');
      cardBody = document.createElement('div');
      h5 = document.createElement('h5');
      p = document.createElement('p');
      button = createButton("add");

      div.className = "col-lg-3 col-md-6 mb-5";
      div1.className = "card  narrower restaurants";

      
      img.className = "card-img-top";
      cardBody.className = "card-body";
      h5.className = "card-title";
      p.className = "card-text";
      button.className = "btn btn-pink";
      img.src = restaurants.restaurant.featured_image; 
      h5.innerHTML = `${restaurants.restaurant.name}` ;
      p.innerHTML = `${restaurants.restaurant.cuisines}`;
      button.id = restaurants.restaurant.id;
      
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
            list_collection(id);
        }
      })
    })
}


let myheaders = {
"user-key": "6735af4836826fc3fd3ac0aa8a760fdd"
}
var createButton = function (html) {
    var button = document.createElement('button');
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
.then(function(data){
  let restos = data.collections; 
return restos.map(function(collection) {
var div = document.createElement("div"), 
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
img.src = collection.collection.image_url; 
h5.innerHTML = `${collection.collection.title}` ;
p.innerHTML = `${collection.collection.description}`;
button.id = collection.collection.collection_id;

cardBody.appendChild(h5);
cardBody.appendChild(p);
cardBody.appendChild(button);
div.appendChild(img);
div.appendChild(cardBody);
topRated.appendChild(div);
const id = button.id;
      button.onclick = function(){
        console.log('clicked add')
        list_collection(id);
      }

})
}) 
.then(reload());



function reload(collectionName){
  const myCollection = document.getElementById("example");
    var getUrl = "http://localhost:3000/collections/?collection=" + collectionName;
    myCollection.innerHTML = "";
    fetch(getUrl)
    .then((resp)=>resp.json())
    .then(function(data){
        let collections = data; 
        return collections.map(function (collection) {
            var div = document.createElement('div'), 
                img = document.createElement('img'),
                cardBody = document.createElement('div'),
                h5 = document.createElement('h5'),
                p = document.createElement('p');
            div.className = "collection card h-100";
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
                deleteRestaurant(id);
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
function deleteCollection(id, collectionName){
    let fetchData = {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    }
    let deleteUrl = "http://localhost:3000/myCollections/" + id;
    let getUrl = "http://localhost:3000/collections?collection=" + collectionName;
    fetch(deleteUrl, fetchData)
    .then(function(data){
      toReshow();
    });
    fetch(getUrl).
    then((resp)=>resp.json())
    .then(function(data){
      return data.map(function(collection){
        let dlt = "http://localhost:3000/collections/" + collection.id;
        fetch(dlt,fetchData);
      })
    }); 
} 
window.list_collection = function(id){
  console.log(id);
  const dropdown = document.getElementById("example");
  var Url3 = "http://localhost:3000/myCollections";
  dropdown.innerHTML = "";

  fetch(Url3)
  .then((resp)=>resp.json())
  .then(function(data){
      let collections = data;
      
      var form = document.createElement("form"),
      select = document.createElement("select"),
      option = document.createElement("option"),
      input = document.createElement("input");
      input.type = "hidden";
      input.id = id;
      form.id = "collectionForm";
      form.className = "form-group";
      select.id = "selectedCollection";
      option.value = "select";
      option.innerHTML = "COLLECTIONS";
      select.appendChild(option);

      collections.map(function (collection) {
          var opt = document.createElement("option");
          opt.value = collection.name;
          opt.innerHTML = collection.name;
          select.appendChild(opt);
      })
    form.appendChild(select);
    form.appendChild(input);
    dropdown.appendChild(form);
  })
}

selectCollectionButton.onclick = function () {
  var selectedCollection = document.getElementById("selectedCollection");
  var value = selectedCollection.value;
  var id = selectedCollection.nextSibling.id;
  addToCollection(id, value);
}


function addToCollection(id, collectionName){
    var div = document.getElementById(id).parentElement.parentElement;
    var img = div.firstChild;
    var cardBody = img.nextSibling;
    var name = cardBody.firstChild;
    var text = name.nextSibling;

    var jsonString = {
            "id" : id,
            "collection": collectionName,
            "img" : img.src,
            "name" : name.innerHTML,
            "text" : text.innerHTML
    }
    let fetchData = {
        method: "POST", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json; charset=utf-8",  
        },
        redirect: "follow", 
        referrer: "no-referrer", 
        body: JSON.stringify(jsonString) 
    }
    let addUrl = "http://localhost:3000/collections";

    fetch(addUrl, fetchData)
    .then(reload(collectionName));
    alert('Added to collection');    
}



const new_collection = document.getElementById('button1');
new_collection.onclick = function(){
  addCollec();
}
toReshow();

function addCollec(){
    var div = document.createElement('div');
    var cardBody = document.createElement('div');
    var name = document.getElementById('defaultForm-email');
    var text = document.getElementById('defaultForm-pass');
    console.log(name.value);
    var jsonString = {
            "name" : name.value,
            "text" : text.value
    }
    let fetchData = {
        method: "POST", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json; charset=utf-8",  
        },
        redirect: "follow", 
        referrer: "no-referrer", 
        body: JSON.stringify(jsonString) 
    }
    let add2Url = "http://localhost:3000/myCollections";

    fetch(add2Url, fetchData)
    .then(toReshow());        
    alert('Collection created');
}

function toReshow(){
    const demoCollection = document.getElementById("myCollection");
    var get2Url = "http://localhost:3000/myCollections";
    demoCollection.innerHTML = "";

    fetch(get2Url)
    .then((resp)=>resp.json())
    .then(function(data){
        let collections = data; 
        return collections.map(function (collection) { 
            var div1 = document.createElement('div');
            var div = document.createElement('div'), 
            cardBody = document.createElement('div'),
            
            h5 = document.createElement('h5'),
            p = document.createElement('p');
            
            const collectData = createHTMLElement(`
                  <button type="button" class="btn btn-pink mt-auto" data-toggle="modal" data-target="#exampleModal" id="viewButton">
                      View All
                  </button>
            `);
          
            var button1 = collectData;
            console.log(button1);
            const deleteData = createHTMLElement(`
                  <button type="button" class="btn btn-pink mt-auto" id="deleteButton">
                      Delete
                  </button>
            `);
            var button2 = deleteData;

            div1.className = "col-lg-3 col-md-6 mb-5";
            div.className = "collection card h-100";
            cardBody.className = "card-body d-flex flex-column";
            
            h5.className = "card-title";
            p.className = "card-text text-muted";

            
            h5.innerHTML = `${collection.name}`;
            p.innerHTML = `${collection.text}`; 
            
            button1.id = collection.id;
            button2.id = collection.id;
            
            cardBody.appendChild(h5);
            cardBody.appendChild(p);
            cardBody.appendChild(button1);
            cardBody.appendChild(button2);
            div.appendChild(cardBody);
            div1.appendChild(div);
            demoCollection.appendChild(div1);

            const id = button2.id;
            const collectionName = collection.name;
            button2.onclick = function(){
              deleteCollection(id,collectionName);
             }
            button1.onclick = function() {
              reload(collectionName);
            }
        })
    })
} 
function deleteRestaurant(id){
    let fetchData = {
        method: "DELETE", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        redirect: "follow", 
        referrer: "no-referrer", 
    }
    let deleteUrl = "http://localhost:3000/collections/"+id;

    fetch(deleteUrl, fetchData)
    .then(toReshow());
} 