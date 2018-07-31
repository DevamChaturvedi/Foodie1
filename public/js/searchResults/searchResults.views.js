const search_item = document.getElementById("search_item");
export function search_in(restaurants) {
	let searchItem_card = createHTMLElement(`<div class="col-lg-3 col-md-6 mb-5">
      <div class="card  h-100 restaurants" name=mainCard>
        <div class="card-body d-flex flex-column" name=cardBody>
          <img class="card-img-top" src="${restaurants.restaurant.featured_image}" alt="restaurant">
          <h5 class="card-title" name="title">${restaurants.restaurant.name}</h5>
          <p class="card-text">${restaurants.restaurant.cuisines}</p>
          <button name="add_button" type="button" class="btn btn-indigo btn-rounded mb-4 mt-auto" data-toggle="modal" data-target="#modalLoginForm" id="${restaurants.restaurant.R.res_id}" onclick="list_collec(${restaurants.restaurant.R.res_id})">
            Add
          </button>
        </div>
      </div>
    </div>`);
  search_item.appendChild(searchItem_card); 

}
function createHTMLElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
} 
