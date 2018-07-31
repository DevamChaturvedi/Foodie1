import {top_Rated} from './topRated.service.js'
export function topRated_views(collection) {
	 let topRated_card = createHTMLElement(`<div class="col-lg-3 col-md-6 mb-5">
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
}
function createHTMLElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
} 

