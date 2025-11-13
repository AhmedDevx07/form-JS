var firstBox = document.getElementsByClassName("firstBox")[0];
var secondBox = document.getElementsByClassName("secondBox")[0];
var container = document.getElementsByClassName("container1")[0];

function signup() {
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;

  if (email && password) {
    var user = {
      email: email,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupPassword").value = "";
    firstBox.style.display = "none";
    secondBox.style.display = "block";
  } else {
    alert("Please fill all fields!");
  }
}

function login() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;
  var storedUser = JSON.parse(localStorage.getItem("user"));
  if (
    storedUser &&
    storedUser.email === email &&
    storedUser.password === password
  ) {
    alert("Login successful! Welcome");
    secondBox.style.display = "none";
    container.style.display = "block";
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
  } else {
    alert("Incorrect email or password!");
  }
}

function logout() {
  alert("Logout successful.");
  container.style.display = "none";
  firstBox.style.display = "none";
  secondBox.style.display = "block";
}

function firstLogin() {
  firstBox.style.display = "none";
  secondBox.style.display = "block";
}

function againSignup() {
  secondBox.style.display = "none";
  firstBox.style.display = "block";
}

function House(
  house,
  type,
  priceDisplay,
  size,
  rooms,
  floors,
  state,
  city,
  area,
  block,
  houseNo,
  streetNo,
  features,
  image
) {
  this.house = house;
  this.type = type;
  this.price = priceDisplay;
  this.size = size;
  this.rooms = rooms;
  this.floors = floors;
  this.state = state;
  this.city = city;
  this.area = area;
  this.block = block;
  this.houseNo = houseNo;
  this.streetNo = streetNo;
  this.features = features;
  this.image = image;
  this.all = function () {
    return `
           <div class="card my-4" style="width: 20rem">
            <img src="${image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">${house}</h6>
              <div class="card-titl1">${type} <b class="pkr">${priceDisplay}</b></div>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Location:</b> ${state}, ${city}, ${area}, Block ${block} ${streetNo} ${houseNo}</li>
              <li class="list-group-item"><b>Rooms:</b> ${rooms} | <b>Floors:</b> ${floors} | <b>Size:</b> ${size}  </li>
              <li class="list-group-item">
              ${features}
              </li> 
            </ul>
          </div>`;
  };
}
var h1 = new House(
  "Dream Villa",
  "Luxury Bungalow",
  "PKR 12 Crore",
  "1000 sq. yards",
  6,
  2,
  "Sindh",
  "Karachi",
  "DHA Phase 8",
  "B",
  "H-23",
  "Street ",
  [
    "Swimming Pool",
    "Basement",
    "Smart Home System",
    "Car Parking",
    "Servant Quarter",
  ],
  "images/1.jpg"
);

var h2 = new House(
  "Sunset Apartments",
  "Modern Apartment",
  "PKR 2.5 Crore",
  "2200 sq. ft",
  3,
  1,
  "Punjab",
  "Lahore",
  "Gulberg 3",
  "C",
  "A-55",
  "Street 4",
  ["Lift Access", "Security 24/7", "Balcony View", "Fully Furnished"],
  "images/2.jpg"
);

var h3 = new House(
  "Royal Heights",
  "Commercial Plaza",
  "PKR 35 Crore",
  "5 Kanal",
  15,
  5,
  "Punjab",
  "Islamabad",
  "Blue Area",
  "A",
  "P-10",
  "Street 12",
  ["Parking", "Generator Backup", "CCTV Surveillance", "Lobby Reception"],
  "images/3.jpg"
);

var h4 = new House(
  "Ocean Breeze",
  "Luxury Apartment",
  "PKR 7 Crore",
  "1800 sq. ft",
  4,
  2,
  "Sindh",
  "Karachi",
  "Clifton",
  "D",
  "H-44",
  "Street 11",
  ["Sea View", "Gym", "Pool Access", "Furnished"],
  "images/4.jpg"
);

var h5 = new House(
  "Skyline Residency",
  "Modern Apartment",
  "PKR 3 Crore",
  "1500 sq. ft",
  3,
  2,
  "Sindh",
  "Karachi",
  "Scheme 33",
  "C",
  "H-15",
  "Street 12",
  ["Security", "Gym", "Balcony View"],
  "images/5.webp"
);

var h6 = new House(
  "Green Meadows",
  "Farm House",
  "PKR 18 Crore",
  "8 Acre",
  8,
  1,
  "Sindh",
  "Hyderabad",
  "Tandojam",
  "A",
  "F-09",
  "Street 2",
  ["Private Pool", "Green Lawn", "BBQ Area", "Boundary Wall"],
  "images/6.png"
);

var h7 = new House(
  "Hill View Residency",
  "Luxury Apartment",
  "PKR 5 Crore",
  "2000 sq. ft",
  4,
  2,
  "KPK",
  "Abbottabad",
  "Main Cantt",
  "B",
  "H-77",
  "Street 3",
  ["Mountain View", "24/7 Security", "Balcony", "Car Parking"],
  "images/7.jpg"
);

var h8 = new House(
  "Elite Tower",
  "Commercial Plaza",
  "PKR 22 Crore",
  "3 Kanal",
  10,
  4,
  "Punjab",
  "Lahore",
  "Johar Town",
  "A",
  "T-14",
  "Street 6",
  ["Basement Parking", "Lift", "Security Room", "CCTV"],
  "images/8.jpg"
);

var h9 = new House(
  "Maple Residency",
  "Modern Apartment",
  "PKR 2.8 Crore",
  "1800 sq. ft",
  3,
  1,
  "Punjab",
  "Rawalpindi",
  "Bahria Town Phase 5",
  "E",
  "M-23",
  "Street 9",
  ["Furnished", "Balcony View", "Security System"],
  "images/9.jpg"
);

var h10 = new House(
  "Palm Estate",
  "Luxury Villa",
  "PKR 14 Crore",
  "1200 sq. yards",
  7,
  2,
  "Sindh",
  "Karachi",
  "PECHS",
  "D",
  "V-44",
  "Street 15",
  ["Car Garage", "Swimming Pool", "Rooftop", "Smart Lighting"],
  "images/10.jpg"
);

var h11 = new House(
  "Royal Meadows",
  "Farm House",
  "PKR 25 Crore",
  "10 Acre",
  10,
  1,
  "Punjab",
  "Lahore",
  "Bedian Road",
  "C",
  "R-22",
  "Street 10",
  ["Huge Lawn", "Boundary Wall", "Solar Power", "Servant Rooms"],
  "images/11.jpg"
);

var h12 = new House(
  "Capital Heights",
  "Luxury Apartment",
  "PKR 6 Crore",
  "2100 sq. ft",
  4,
  2,
  "Islamabad",
  "F-10",
  "Sector F",
  "A",
  "C-11",
  "Street 5",
  ["Lift", "Security", "Furnished", "Smart Locks"],
  "images/12.webp"
);

var h13 = new House(
  "Pearl Residency",
  "Modern Apartment",
  "PKR 4.2 Crore",
  "1600 sq. ft",
  3,
  1,
  "Sindh",
  "Karachi",
  "North Nazimabad",
  "F",
  "P-10",
  "Street 2",
  ["Car Parking", "Security Cameras", "Gym"],
  "images/13.jpg"
);

var h14 = new House(
  "Skyline Plaza",
  "Commercial Plaza",
  "PKR 45 Crore",
  "6 Kanal",
  20,
  6,
  "Punjab",
  "Faisalabad",
  "Jinnah Colony",
  "B",
  "S-20",
  "Street 8",
  ["Generator", "Lift", "Security Desk", "CCTV"],
  "images/14.jpg"
);

var h15 = new House(
  "Rosewood Villa",
  "Luxury Bungalow",
  "PKR 9 Crore",
  "900 sq. yards",
  5,
  2,
  "Punjab",
  "Multan",
  "Wapda Town",
  "C",
  "R-05",
  "Street 9",
  ["Lawn", "Servant Quarter", "Car Garage", "Backup Generator"],
  "images/15.jpg"
);

var h16 = new House(
  "Comfort Home",
  "5 Marla House",
  "PKR 65 Lakh",
  "5 Marla",
  3,
  1,
  "Punjab",
  "Lahore",
  "Township",
  "B",
  "H-11",
  "Street 6",
  ["Car Porch", "Terrace", "Tile Flooring"],
  "images/16.jpg"
);

var h17 = new House(
  "Green Nest",
  "6 Marla House",
  "PKR 72 Lakh",
  "6 Marla",
  4,
  2,
  "Sindh",
  "Hyderabad",
  "Qasimabad",
  "A",
  "G-05",
  "Street 3",
  ["Open Kitchen", "Balcony", "Modern Design"],
  "images/17.webp"
);

var h18 = new House(
  "Family Residency",
  "3 Bed Apartment",
  "PKR 58 Lakh",
  "1250 sq. ft",
  3,
  1,
  "Punjab",
  "Multan",
  "Model Town",
  "C",
  "R-10",
  "Street 8",
  ["Lift", "24/7 Water Supply", "CCTV"],
  "images/18.avif"
);

var h19 = new House(
  "City View Homes",
  "7 Marla House",
  "PKR 79 Lakh",
  "7 Marla",
  4,
  2,
  "Punjab",
  "Faisalabad",
  "Eden Garden",
  "D",
  "H-22",
  "Street 5",
  ["Garage", "Lawn", "Wooden Doors"],
  "images/19.jpg"
);

var h20 = new House(
  "Blue Pearl Apartments",
  "2 Bed Apartment",
  "PKR 50 Lakh",
  "900 sq. ft",
  2,
  1,
  "Sindh",
  "Karachi",
  "Gulistan-e-Johar",
  "F",
  "B-13",
  "Street 4",
  ["Lift", "Security", "Balcony"],
  "images/20.jpg"
);

var h21 = new House(
  "Modern Cottage",
  "4 Marla House",
  "PKR 60 Lakh",
  "4 Marla",
  2,
  1,
  "KPK",
  "Peshawar",
  "Hayatabad Phase 2",
  "B",
  "C-09",
  "Street 2",
  ["Small Lawn", "Car Porch", "Water Bore"],
  "images/21.jpg"
);

var h22 = new House(
  "Canal View Homes",
  "Townhouse",
  "PKR 75 Lakh",
  "6.5 Marla",
  3,
  2,
  "Punjab",
  "Lahore",
  "Canal Bank",
  "C",
  "H-14",
  "Street 9",
  ["Terrace", "Modern Ceiling", "Tiled Floors"],
  "images/22.jpg"
);

var h23 = new House(
  "Family Residency II",
  "5 Marla House",
  "PKR 68 Lakh",
  "5 Marla",
  3,
  2,
  "Punjab",
  "Gujranwala",
  "DC Colony",
  "A",
  "F-12",
  "Street 7",
  ["Lawn", "Car Parking", "TV Lounge"],
  "images/23.jpeg"
);

var h24 = new House(
  "Grace Apartments",
  "2 Bed Apartment",
  "PKR 55 Lakh",
  "1000 sq. ft",
  2,
  1,
  "Islamabad",
  "G-11",
  "Sector G",
  "B",
  "G-09",
  "Street 5",
  ["Lift", "Security", "Balcony"],
  "images/24.jpg"
);

var allHouses = [
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  h9,
  h10,
  h11,
  h12,
  h13,
  h14,
  h15,
  h16,
  h17,
  h18,
  h19,
  h20,
  h21,
  h22,
  h23,
  h24,
];

var rowbox = document.getElementById("row");

function showAll() {
  rowbox.innerHTML = "";
  for (var i = 0; i < allHouses.length; i++) {
    rowbox.innerHTML += allHouses[i].all();
  }
}

function searchData() {
  var user = document.getElementById("form-control").value.trim().toLowerCase();
  var newHTML = "";
  var found = false;
  if (user === "") {
    rowbox.innerHTML = "<b>Please enter a keyword to search.</b>";
    return;
  }

  for (var i = 0; i < allHouses.length; i++) {
    if (
      user === allHouses[i].state.toLowerCase() ||
      user === allHouses[i].city.toLowerCase() ||
      user === allHouses[i].type.toLowerCase() ||
      user === allHouses[i].price.toLowerCase() ||
      user === allHouses[i].size.toLowerCase() ||
      user === allHouses[i].house.toLowerCase() ||
      user === allHouses[i].area.toLowerCase()
    ) {
      newHTML += allHouses[i].all();
      found = true;
    }
  }

  if (found) {
    rowbox.innerHTML = newHTML;
  } else {
    rowbox.innerHTML = "<b>No results found for:</b> " + user;
  }
}

showAll();
