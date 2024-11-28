// Nested object structure for products
var products = {
    "iPhone": {
        "iPhone 14 Pro": {
            image: "https://images.olx.com.pk/thumbnails/500976634-240x180.webp",
            price: "Rs 208,000",
            location: "Khana Kacha Road, Lahore",
            time: "6 days ago",
        },
        "iPhone 14": {
            image: "https://images.olx.com.pk/thumbnails/500671103-240x180.webp",
            price: "Rs 215,000",
            location: "Gulberg 3, Lahore",
            time: "3 days ago",
        },
    },
    "Google Pixel": {
        "Google Pixel 4XL": {
            image: "https://images.olx.com.pk/thumbnails/502270622-240x180.webp",
            price: "Rs 50,000",
            location: "Others, Chakwal",
            time: "1 day ago",
        },
    },
    "Samsung": {
        "Samsung A06 Box Pack": {
            image: "https://images.olx.com.pk/thumbnails/499565218-800x600.jpeg",
            price: "Rs 23,400",
            location: "Township, Lahore",
            time: "2 weeks ago",
        },
        "Samsung S24 Plus": {
            image: "https://images.olx.com.pk/thumbnails/500671103-240x180.webp",
            price: "Rs 215,000",
            location: "Gulberg 3, Lahore",
            time: "3 days ago",
        },
    },
    "Toyota": {
        "Toyota Corolla GLI 2018": {
            image: "https://images.olx.com.pk/thumbnails/502606161-800x600.webp",
            price: "Rs 3,750,000",
            location: "Federal B Area, Karachi",
            time: "3 days ago",
        },
    },
    "Honda": {
        "Honda Civic VTi Oriel Prosmatec 2019": {
            image: "https://images.olx.com.pk/thumbnails/502139462-800x600.webp",
            price: "Rs 5,150,000",
            location: "DHA, Karachi",
            time: "5 days ago",
        },
        "Honda City Aspire Manual 2020": {
            image: "https://images.olx.com.pk/thumbnails/498773688-800x600.webp",
            price: "Rs 3,650,000",
            location: "H Block, Vehari",
            time: "1 week ago",
        },
    },
};

function displayAllProducts() {
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    for (var category in products) {
        for (var product in products[category]) {
            var productDetails = products[category][product];
            var card = document.createElement("div");
            card.className = "col-md-2";

            var html = `
          <div class="card h-100">
            <img src="${productDetails.image}" class="card-img-top" alt="${product}">
            <div class="card-body">
              <h5 class="card-title">${product}</h5>
              <p class="card-text text-muted">${productDetails.location}</p>
              <p class="card-text">${productDetails.price}</p>
              <p class="card-text text-muted small">${productDetails.time}</p>
            </div>
          </div>`;
            card.innerHTML = html;
            resultsContainer.appendChild(card);
        }
    }
}

function searchProduct() {
    var searchInput = document.getElementById("searchInput");
    var searchString = searchInput.value.toLowerCase();
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    var found = false;
    for (var category in products) {
        for (var product in products[category]) {
            var productName = product.toLowerCase();
            if (productName.includes(searchString)) {
                found = true;
                var productDetails = products[category][product];
                var card = document.createElement("div");
                card.className = "col-md-3";

                var html = `
            <div class="card h-100">
              <img src="${productDetails.image}" class="card-img-top" alt="${product}">
              <div class="card-body">
                <h5 class="card-title">${product}</h5>
                <p class="card-text text-muted">${productDetails.location}</p>
                <p class="card-text">${productDetails.price}</p>
                <p class="card-text text-muted small">${productDetails.time}</p>
              </div>
            </div>`;
                card.innerHTML = html;
                resultsContainer.appendChild(card);
            }
        }
    }
    if (!found) {
        resultsContainer.innerHTML = "<p>No products found.</p>";
    }
}


document.addEventListener("DOMContentLoaded", displayAllProducts);