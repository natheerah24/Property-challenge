function readData(listings) {
  document.querySelector("#admin-listings").innerHTML = "";
  listings.forEach((listings, i) => {
    document.querySelector("#admin-listings").innerHTML += `
        <tr>
          <th scope="row">${listings.ID}</th>
          <td>${listings.title}</td>
          <td>${listings.bedrooms}</td>
          <td>${listings.price}</td>
          <td>${listings.img}</td>
          <td>${listings.location}</td>
          <td>${listings.locations}</td>
          <td>${listings.type}</td>
          <td>${listings.bathroom}</td>
          <td>${listings.parking}</td>
          <td>
        ${listings.size}
          </td>
          <td> <button onclick="deleteListings(${i})" class="btn btn-danger admin-btn">delete</buttonn><button
          type="button"
          class="btn btn-danger admin-btn"
          data-bs-toggle="modal"
          data-bs-target="#edit${i}"
        >
          Edit
        </button></td>
        <div
  class="modal fade"
  id="edit${i}"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">Edit Product</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
 
         <input type="text" placeholder="Enter name" id="title-${i}" value="${listings.title}" />
              <input type="text" placeholder="Enter size" id="size-${i}" value="${listings.size}"/>
              <input type="text" placeholder="Enter Address" id="location-${i}"value="${listings.location}" />
              <input
                type="text"
                placeholder="Enter bathroom amount"
                id="bathroom-${i}"
                value="${listings.bathroom}"
              />
              <input
                type="text"
                placeholder="Enter parking space"
                id="parking-${i}"
                value="${listings.parking}"
              />
              <input type="text" placeholder="Enter img url" id="img-${i}" value="${listings.img}" />
              <select name="propertySort" id="propertySort-${i}" value="${listings.type}">
                <option value="Apartment">Apartment</option>
                <option value="Complex">Complex</option>
                <option value="Loft">Loft</option>
              </select>
              <select name="LocationSort" id="LocationSort-${i}" value="${listings.locations}">
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Miami">Miami</option>
                <option value="chicago">chicago</option>
              </select>
              <select name="bedroomsSort" id="bedroomsSort-${i}" value="${listings.bedrooms}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <select name="priceSort" id="priceSort-${i}" value="${listings.price}">
                <option value="$1,600/mo">$1,600/mo</option>
                <option value="$2,800/mo">$2,800/mo</option>
                <option value="$3,500/mo">$3,500/mo</option>
                <option value="$3,700/mo">$3,700/mo</option>
                <option value="$3,750/mo">$3,750/mo</option>
                <option value="$4,500/mo">$4,500/mo</option>
                <option value="$11,000/mo">$11,000/mo</option>
                <option value="$13,000/mo">$13,000/mo</option>
              </select>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button
        data-bs-toggle="modal"
        data-bs-target="#edit${i}"
          type="button"
          class="btn btn-primary"
          onclick="editProperties(${i})"
        >
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
        </tr>
   
    
        `;
  });
}
readData(listings);
function createlisting() {
  let title = document.querySelector("#title").value;
  let price = document.querySelector("#priceSort").value;
  let img = document.querySelector("#img").value;
  let type = document.querySelector("#propertySort").value;
  let bedrooms = document.querySelector("#bedroomsSort").value;
  let locations = document.querySelector("#LocationSort").value;
  let size = document.querySelector("#size").value;
  let parking = document.querySelector("#parking").value;
  let bathroom = document.querySelector("#bathroom").value;
  let location = document.querySelector("#location").value;
  try {
    if (title == "") throw "Please enter name";
    listings.push({
      title,
      price,
      img,
      type,
      bedrooms,
      locations,
      size,
      parking,
      bathroom,
      location,
    });
    localStorage.setItem("listings", JSON.stringify(listings));
    readData(listings);
  } catch (error) {
    alert(error);
  }
}
function editProperties(i) {
  let title = document.querySelector(`#title-${i}`).value;
  let price = document.querySelector(`#priceSort-${i}`).value;
  let img = document.querySelector(`#img-${i}`).value;
  let type = document.querySelector(`#propertySort-${i}`).value;
  let bedrooms = document.querySelector(`#bedroomsSort-${i}`).value;
  let locations = document.querySelector(`#LocationSort-${i}`).value;
  let size = document.querySelector(`#size-${i}`).value;
  let parking = document.querySelector(`#parking-${i}`).value;
  let bathroom = document.querySelector(`#bathroom-${i}`).value;
  let location = document.querySelector(`#location-${i}`).value;
  listings[i] = {
    title,
    price,
    img,
    type,
    bedrooms,
    locations,
    size,
    parking,
    bathroom,
    location,
  };
  localStorage.setItem("listings", JSON.stringify(listings));
  readData(listings);
}
function deleteListings(i) {
  listings.splice(i, 1);
  localStorage.setItem("listings", JSON.stringify(listings));
  readData(listings);
}
