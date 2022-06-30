let listings = JSON.parse(localStorage.getItem("listings"))
  ? JSON.parse(localStorage.getItem("listings"))
  : [
      {
        ID: "1",
        title: " Apartment Nice View",
        bedrooms: "3",
        price: "$11,000/mo",
        img: "./assets/car-1.jpg",
        locations: "New York",
        location: "2985 Waterman Rd Camden, New York(NY), 13316",
        type: "Apartment",
        bathroom: "1",
        parking: "1",
        size: "1789 Sq Ft",
      },
      {
        ID: "2",
        title: "Light and Modern Loft",
        bedrooms: "4",
        price: "$4,500/mo",
        img: "./assets/car-2.jpg",
        locations: "Los Angeles",
        location: "2129 SW 75th Ave Bell, Los Angeles(LA), 32619",
        type: "Loft",
        bathroom: "2",
        parking: "1",
        size: "1200 Sq Ft",
      },
      {
        ID: "3",
        title: "Comfortable Loft",
        bedrooms: "1",
        price: "$3,700/mo",
        img: "./assets/car-3.jpg",
        locations: "Miami",
        location: "299 Main St Brockport,  Miami(MI), 14420",
        type: "Loft",
        bathroom: "2",
        parking: "1",
        size: "1900 Sq Ft",
      },
      {
        ID: "4",
        title: "Complex",
        bedrooms: "1",
        price: "$2,800/mo",
        img: "./assets/car-4.jpg",
        locations: "chicago",
        location: "299 Rose Ln Smithtown, chicago (CH), 11787",
        type: "Complex",
        bathroom: "1",
        parking: "1",
        size: "2360 Sq Ft",
      },
      {
        ID: "5",
        title: "Green View Design",
        bedrooms: "4",
        price: "$1,600/mo",
        img: "./assets/car-5.jpg",
        locations: "New York",
        location: "299 Webster Ave New Rochelle, New York(NY), 10801",
        type: "Apartment",
        bathroom: "2",
        parking: "1",
        size: "4300 Sq Ft",
      },
      {
        ID: "6",
        title: "Modern Loft Apartment",
        bedrooms: "5",
        price: "$5,600/mo",
        img: "./assets/car-6.jpg",
        locations: "Los Angeles",
        location: "3 A Birchbrook Rd Ossining, Los Angeles (LA), 10562",
        type: "Apartment",
        bathroom: "3",
        parking: "1",
        size: "3450 Sq Ft",
      },
      {
        ID: "7",
        title: "Renovated Kitchen Loft",
        bedrooms: "1",
        price: "$3,500/mo",
        img: "./assets/car-7.jpg",
        locations: "Los Angeles",
        location: "3 Alix Rd Newburgh, Los Angeles(LA), 12550",
        type: "Loft",
        bathroom: "1",
        parking: "1",
        size: "1760 Sq Ft",
      },
      {
        ID: "8",
        title: "Contemporary Apartment",
        bedrooms: "1",
        price: "$3,750/mo",
        img: "./assets/car-8.jpg",
        locations: "New York",
        location: "3 Amfer Ct Bay Shore, New York(NY), 11706",
        type: "Apartment",
        bathroom: "1",
        parking: "1",
        size: "1678 Sq Ft",
      },
      {
        ID: "9",
        title: "Ample Complex",
        bedrooms: "2",
        price: "$13,000/mo",
        img: "./assets/car-9.jpg",
        locations: "Miami",
        location: "3 Atna Dr Amityville,  Miami(MI), 11701",
        type: "Complex",
        bathroom: "2",
        parking: "1",
        size: "2300 Sq Ft",
      },
    ];
function readData(listings) {
  document.querySelector("#listings").innerHTML = "";
  listings.forEach((listings, i) => {
    document.querySelector("#listings").innerHTML += `
      <table class="table table-hover table-bordered">
    
      <thead class="table-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">bedrooms</th>
          <th scope="col">price</th>
          <th scope="col">ImgURL</th>
          <th scope="col">locations</th>
          <th scope="col">location</th>
          <th scope="col">type</th>
          <th scope="col">bathroom</th>
          <th scope="col">parking</th>
          <th scope="col">size</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
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
          <td> <button onclick="deleteListings(${i})">delete</buttonn><button
          type="button"
          class="btn btn-danger"
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
      </tbody>
    </table>
    
        `;
  });
}
readData(listings);

function propertySort() {
  let type = document.querySelector("#propertySort").value;
  console.log(propertySort);
  if (type == "all") {
    readData(listings);
    return;
  }
  let filteredListings = listings.filter((listings) => {
    return listings.type == type;
  });
  readData(filteredListings);
}
function LocationSort() {
  let locations = document.querySelector("#LocationSort").value;
  console.log(LocationSort);
  if (locations == "all") {
    readData(listings);
    return;
  }
  let filteredListings = listings.filter((listings) => {
    return listings.locations == locations;
  });
  readData(filteredListings);
}
function bedroomsSort() {
  let bedrooms = document.querySelector("#bedroomsSort").value;
  console.log(bedroomsSort);
  if (bedrooms == "all") {
    readData(listings);
    return;
  }
  let filteredListings = listings.filter((listings) => {
    return listings.bedrooms == bedrooms;
  });
  readData(filteredListings);
}
function priceSort() {
  let price = document.querySelector("#priceSort").value;
  console.log(priceSort);
  if (price == "all") {
    readData(listings);
    return;
  }
  let filteredListings = listings.filter((listings) => {
    return listings.price == price;
  });
  readData(filteredListings);
}



// function priceSort() {
//   let direction = document.querySelector("#priceSort").value;
//   let sortedProducts = products.sort((a, b) => a.price - b.price);
//   console.log(sortedProducts);
//   if (direction == "descending") sortedProducts.reverse();
//   readData(sortedProducts);
// }
// function sortName() {
//   let direction = document.querySelector("#sortName").value;
//   let sortedProducts = products.sort((a, b) => {
//     if (a.name.toLowerCase() < b.name.toLowerCase()) {
//       return -1;
//     }
//     if (a.name.toLowerCase() > b.name.toLowerCase()) {
//       return 1;
//     }
//     return 0;
//   });
//   if (direction == "descending") sortedProducts.reverse();
//   console.log(sortedProducts);
//   readData(products);
// }
