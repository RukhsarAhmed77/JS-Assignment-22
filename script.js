var products = [
    {
        image: "https://images.olx.com.pk/thumbnails/500976634-240x180.webp",
        name: "iPhone 14 Pro",
        price: "Rs 208,000",
        location: "Khana Kacha Road, Lahore",
        time: "6 days ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/502270622-240x180.webp",
        name: "Google Pixel 4XL",
        price: "Rs 50,000",
        location: "Others, Chakwal",
        time: "1 day ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/499565218-800x600.jpeg",
        name: "Samsung A06 Box Pack",
        price: "Rs 23,400",
        location: "Township, Lahore",
        time: "2 weeks ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/500671103-240x180.webp",
        name: "Samsung S24 Plus",
        price: "Rs 155,000",
        location: "Gulberg 3, Lahore",
        time: "6 days ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/503530106-240x180.webp",
        name: "Samsung A18",
        price: "Rs 25,000",
        location: "Johar",
        time: "3 days ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/503008038-240x180.webp",
        name: "Iphone 12 pro",
        price: "Rs 85,000",
        location: "Lahore",
        time: "3 days ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/501077592-240x180.webp",
        name: "Iphone 11",
        price: "Rs 50,000",
        location: "Karachi",
        time: "8 days ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/503745078-240x180.webp",
        name: "Infinix Hot 50",
        price: "Rs 36,800",
        location: "AC Colony, Nowshera",
        time: "2 weeks ago"
    }
];

var cars = [
    {
        image: "https://images.olx.com.pk/thumbnails/502606161-800x600.webp",
        name: "Toyota Corolla GLI 2018",
        price: "Rs 3,750,000",
        location: "Federal B Area, Karachi",
        time: "3 days ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/502139462-800x600.webp",
        name: "Honda Civic VTi Oriel Prosmatec 2019",
        price: "Rs 5,150,000",
        location: "DHA, Karachi",
        time: "5 days ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/498773688-800x600.webp",
        name: "Honda City Aspire Manual 2020",
        price: "Rs 3,650,000",
        location: "H Block, Vehari",
        time: "1 week ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/499610172-800x600.webp",
        name: "Brand new low mileage 800km",
        price: "Rs 7,900,000",
        location: "Blue Area, Islamabad",
        time: "2 weeks ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/503998470-800x600.webp",
        name: "Suzuki Swift 2022",
        price: "Rs 2,000,000",
        location: "Gulshan-e-Iqbal, Karachi",
        time: "1 day ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/503162986-800x600.webp",
        name: "Hyundai Elantra 2021",
        price: "Rs 3,200,000",
        location: "F-10, Islamabad",
        time: "3 days ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/498085680-800x600.webp",
        name: "Kia Sportage 2020",
        price: "Rs 4,500,000",
        location: "DHA, Lahore",
        time: "1 week ago"
    },
    {
        image: "https://images.olx.com.pk/thumbnails/502939040-800x600.webp ",
        name: "Honda Civic RS 2022 Model | Mint Condition",
        price: "Rs 9,150,000",
        location: "Korangi, Karachi",
        time: "2 weeks ago"
    }
];

function displayItems(items, containerId) {
    var container = document.getElementById(containerId);
    container.innerHTML = '';

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var card = document.createElement("div");
        card.className = "col-md-3";

        card.innerHTML = `
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text text-muted">${item.location}</p>
            <p class="card-text">${item.price}</p>
            <p class="card-text text-muted small">${item.time}</p>
          </div>
        </div>
      `;
        container.appendChild(card);
    }
}

displayItems(products, "product-cards");
displayItems(cars, "car-cards");

function searchItems() {
    var searchText = document.getElementById("search-input").value.toLowerCase();

    var filteredProducts = [];
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        if (product.name.toLowerCase().indexOf(searchText) !== -1) {
            filteredProducts.push(product);
        }
    }

    var filteredCars = [];
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        if (car.name.toLowerCase().indexOf(searchText) !== -1) {
            filteredCars.push(car);
        }
    }

    displayItems(filteredProducts, "product-cards");
    displayItems(filteredCars, "car-cards");
}

document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchItems();
    }
});