import "./public/js/topRated/topRated.controller";
import "./public/js/searchResults/searchResults.controller";
import "./public/js/myCollections/myCollections.controller"


// var top = require('./public/js/topRated/topRated.controller');
//import './topRated/topRated.controller.js'

/*const topRated = document.getElementById("topRated");
const url = "https://developers.zomato.com/api/v2.1/collections?city_id=280&count=4";


function search(){
  let searchHeaders = {
  "user-key": "6735af4836826fc3fd3ac0aa8a760fdd"
  }
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
      return restos.map(restaurants => { */
      /*const div = document.createElement("div");
      const div1 = document.createElement('div');
       
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
      searchItem.appendChild(div);*/
     /* let searchItem_card = createHTMLElement(`<div class="col-lg-3 col-md-6 mb-5">
      <div class="card  h-100 restaurants" name=mainCard>
        <div class="card-body d-flex flex-column" name=cardBody>
          <img class="card-img-top" src="${collection.collection.image_url}" alt="restaurant">
          <h5 class="card-title" name="title">${collection.collection.title}</h5>
          <p class="card-text">${collection.collection.description}</p>
          <button name="add_button" type="button" class="btn btn-indigo btn-rounded mb-4 mt-auto" data-toggle="modal" data-target="#modalLoginForm" id="${collection.collection.collection_id}" onclick="list_collec(${collection.collection.collection_id})">
            Add
          </button>
        </div>
      </div>
    </div>`);
      topRated.appendChild(topRated_card); 

     const id = button.id;
        button.onclick = () => {
            console.log('clicked add from search')
            list_collection(id);
        }
      })
    })
}*/

/*
let myheaders = {
"user-key": "6735af4836826fc3fd3ac0aa8a760fdd"
}
var createButton = html => {
    const button = document.createElement('button');
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
return restos.map(collection => {*/
    /*const div = document.createElement("div");
    const img = document.createElement('img');
    const cardBody = document.createElement('div');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
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
    topRated.appendChild(div);*/
  /*  let topRated_card = createHTMLElement(`<div class="col-lg-3 col-md-6 mb-5">
      <div class="card  h-100 restaurants" name=mainCard>
        <div class="card-body d-flex flex-column" name=cardBody>
          <img class="card-img-top" src="${collection.collection.image_url}" alt="restaurant">
          <h5 class="card-title" name="title">${collection.collection.title}</h5>
          <p class="card-text">${collection.collection.description}</p>
          <button name="add_button" type="button" class="btn btn-indigo btn-rounded mb-4 mt-auto" data-toggle="modal" data-target="#modalLoginForm" id="${collection.collection.collection_id}" onclick="list_collec(${collection.collection.collection_id})">
            Add
          </button>
        </div>
      </div>
    </div>`);
      topRated.appendChild(topRated_card); 
    const id = button.id;
    button.onclick = () => {
      console.log('clicked add')
      list_collection(id);
    }
})
}) 
.then(reload());
*/


/*function reload(collectionName){
  const myCollection = document.getElementById("example");
    const getUrl = `http://localhost:3000/collections/?collection=${collectionName}`;
    myCollection.innerHTML = "";
    fetch(getUrl)
    .then((resp)=>resp.json())
    .then(data => {
        let collections = data; 
        return collections.map(collection => {*/
            /*const div = document.createElement('div');
            const img = document.createElement('img');
            const cardBody = document.createElement('div');
            const h5 = document.createElement('h5');
            const p = document.createElement('p');
            div.className = "collection card h-100";
            img.className = "card-img-top";
            cardBody.className = "card-body";
            h5.className = "card-title";
            p.className = "card-text text-muted";
            img.src = collection.img;  
            h5.innerHTML = `${collection.name}`;
            p.innerHTML = `${collection.text}`; 
            const button = createButton("Delete");
            button.id = collection.id;
            cardBody.appendChild(h5);
            cardBody.appendChild(p);
            div.appendChild(img);
            div.appendChild(cardBody);
            cardBody.appendChild(button);
            myCollection.appendChild(div);*/        
   /* let myCollections_card = createHTMLElement(`<div class="col-lg-3 col-md-6 mb-5">
      <div class="card  h-100 restaurants" name=mainCard>
        <div class="card-body d-flex flex-column" name=cardBody>
          <img class="card-img-top" src="${collection.img}" alt="restaurant">
          <h5 class="card-title" name="title">${collection.name}</h5>
          <p class="card-text">${collection.text}</p>
          <button name="add_button" type="button" class="btn btn-indigo btn-rounded mb-4 mt-auto" data-toggle="modal" data-target="#modalLoginForm" id="${collection.collection.collection_id}" onclick="list_collec(${collection.collection.collection_id})">
            Add
          </button>
        </div>
      </div>
    </div>`);
      myCollection.appendChild(myCollections_card); 
const id = button.id;
            button.onclick = () => {
                deleteRestaurant(id);
            }
        })
    })
}*/


/*function createHTMLElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
} */


/*function addCollection(id){
    const div = document.getElementById(id).parentElement.parentElement;
    console.log(div);
    const img = div.firstChild;
    console.log(img);
    const cardBody = img.nextSibling;
    console.log(cardBody);
    const name = cardBody.firstChild;
    console.log(name);
    const text = name.nextSibling;
    const jsonString = {
            "id" : id,
            "img" : img.src,
            "name" : name.innerHTML,
            "text" : text.innerHTML
    };  
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
    .then(reload());        
} 
function deleteCollection(id, collectionName){
    let fetchData = {
        method: "DELETE", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        redirect: "follow", 
        referrer: "no-referrer", 
    }
    let deleteUrl = `http://localhost:3000/myCollections/${id}`;
    let getUrl = `http://localhost:3000/collections?collection=${collectionName}`;
    fetch(deleteUrl, fetchData)
    .then(data => {
      toReshow();
    });
    fetch(getUrl).
    then((resp)=>resp.json())
    .then(data => data.map(collection => {
      let dlt = `http://localhost:3000/collections/${collection.id}`;
      fetch(dlt,fetchData);
    })); 
} 
window.list_collection = id => {
  console.log(id);
  const dropdown = document.getElementById("example");
  const Url3 = "http://localhost:3000/myCollections";
  dropdown.innerHTML = "";

  fetch(Url3)
  .then((resp)=>resp.json())
  .then(data => {
      let collections = data;

      const form = document.createElement("form");
      const select = document.createElement("select");
      const option = document.createElement("option");
      const input = document.createElement("input");
      input.type = "hidden";
      input.id = id;
      form.id = "collectionForm";
      form.className = "form-group";
      select.id = "selectedCollection";
      option.value = "select";
      option.innerHTML = "COLLECTIONS";
      select.appendChild(option);

      collections.map(collection => {
          const opt = document.createElement("option");
          opt.value = collection.name;
          opt.innerHTML = collection.name;
          select.appendChild(opt);
      })
      form.appendChild(select);
      form.appendChild(input);
      dropdown.appendChild(form);
  })
}

selectCollectionButton.onclick = () => {
  const selectedCollection = document.getElementById("selectedCollection");
  const value = selectedCollection.value;
  const id = selectedCollection.nextSibling.id;
  addToCollection(id, value);
}


function addToCollection(id, collectionName){
    const div = document.getElementById(id).parentElement.parentElement;
    const img = div.firstChild;
    const cardBody = img.nextSibling;
    const name = cardBody.firstChild;
    const text = name.nextSibling;

    const jsonString = {
            "id" : id,
            "collection": collectionName,
            "img" : img.src,
            "name" : name.innerHTML,
            "text" : text.innerHTML
    };
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
new_collection.onclick = () => {
  addCollec();
}
toReshow();

function addCollec(){
    const div = document.createElement('div');
    const cardBody = document.createElement('div');
    const name = document.getElementById('defaultForm-email');
    const text = document.getElementById('defaultForm-pass');
    console.log(name.value);
    const jsonString = {
            "name" : name.value,
            "text" : text.value
    };
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
    const get2Url = "http://localhost:3000/myCollections";
    demoCollection.innerHTML = "";

    fetch(get2Url)
    .then((resp)=>resp.json())
    .then(data => {
        let collections = data; 
        return collections.map(collection => {
            const div1 = document.createElement('div');
            const div = document.createElement('div');
            const cardBody = document.createElement('div');
            const h5 = document.createElement('h5');
            const p = document.createElement('p');

            const collectData = createHTMLElement(`
                  <button type="button" class="btn btn-pink mt-auto" data-toggle="modal" data-target="#exampleModal" id="viewButton">
                      View All
                  </button>
            `);

            const button1 = collectData;
            console.log(button1);
            const deleteData = createHTMLElement(`
                  <button type="button" class="btn btn-pink mt-auto" id="deleteButton">
                      Delete
                  </button>
            `);
            const button2 = deleteData;*/

            /*div1.className = "col-lg-3 col-md-6 mb-5";
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
            demoCollection.appendChild(div1);*/
           /* let demoCollection_card = createHTMLElement(`<div class="col-lg-3 col-md-6 mb-5">
      <div class="card  h-100 restaurants" name=mainCard>
        <div class="card-body d-flex flex-column" name=cardBody>
          
          <h5 class="card-title" name="card-title">${collection.name}</h5>
          <p class="card-text">${collection.text}</p>
          <button type="button" class="btn btn-pink mt-auto" data-toggle="modal" data-target="#exampleModal" id="viewButton">
                      View All
                  </button>
                  <button type="button" class="btn btn-pink mt-auto" id="deleteButton">
                      Delete
                  </button>

        </div>
      </div>
    </div>`);
      demoCollection.appendChild(demoCollection_card); 


            const id = button2.id;
            const collectionName = collection.name;
            button2.onclick = () => {
              deleteCollection(id,collectionName);
             }
            button1.onclick = () => {
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
    let deleteUrl = `http://localhost:3000/collections/${id}`;

    fetch(deleteUrl, fetchData)
    .then(toReshow());
} */