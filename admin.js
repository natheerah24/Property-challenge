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
      <div class="col">
               <div class="bucket">
                   <img
                   id="admin-img"
                   class="proj_img"
                   src="${listings.img}"
                   />
                   <div class="overlay">
                  <div class="text-product">
                      <h4>${listings.title}</h4>
                <p>${listings.location}</p>
                <div class="icons">
                  <i class="fa-solid fa-bed">   ${listings.bedrooms}</i>
                  <i class="fa-solid fa-shower">  ${listings.bathroom}</i>
                  <i class="fa-solid fa-car">  ${listings.parking}</i>
                  <i class="fa-solid fa-ruler-combined">  ${listings.size}</i>
                  </div>
              </div>
            </div>
         </div>
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
