document.addEventListener('DOMContentLoaded', function () {
    displayAllProducts();
 });
 
 
 function displayAllProducts() {
     const allProducts = getAllProductsData();
     displayProducts('All Products', allProducts);
 }
 
 function showProducts(category) {
     if (category === 'All') {
         displayAllProducts();
     }
     else {
         const products = getProductData(category);
         displayProducts(`${category} Products`, products);
     }
 }
 
 function displayProducts(category, products) {
     const productContainer = document.getElementById('product-container');
     productContainer.style.display = 'block';
     const categoryTitle = document.getElementById('category-title');
     categoryTitle.textContent = category;
     const productList = document.getElementById('product-list');
     productList.innerHTML = ''; // Clear previous products
     products.forEach(product => {
         const productCard = createProductCard(product);
         productList.appendChild(productCard);
     });
 }
 
 function getAllProductsData() {
     // Combine data for all categories or load from a common source
     const samsungProducts = getProductData('Samsung');
     const appleProducts = getProductData('Apple');
     const onePlusProducts = getProductData('OnePlus');
     const accessoriesProducts = getProductData('Accessories');
     return accessoriesProducts.concat(samsungProducts, appleProducts, onePlusProducts);
 }
 
 function showProducts(category) {
 
     // Replace this with your actual product data
     const products = getProductData(category);
     // Display the product container
     const productContainer = document.getElementById('product-container');
     productContainer.style.display = 'block';
     // Display the category title
     const categoryTitle = document.getElementById('category-title');
     categoryTitle.textContent = `${category} Products`;
     // Display the products as cards
     const productList = document.getElementById('product-list');
     productList.innerHTML = ''; // Clear previous products
     products.forEach(product => {
         const productCard = createProductCard(product);
         productList.appendChild(productCard);
     });
 }
 // Replace this function with your actual product data logic
 function getProductData(category) {
     switch (category) {
     case 'Samsung':
         return [
             {
                 "brand": "Samsung"
                 , "model": "Galaxy S24 Ultra"
                 , "processor": "Snapdragon 8 Gen 3"
                 , "RAM": "12GB"
                 , "storage": "256GB"
                 , "display": "6.8-inch FHD"
                 , "price": "$1299.99"
                 , "image": "images/accessories/s24.jpg"
     }
                     , {
                 "brand": "Samsung"
                 , "model": "Galaxy Z Fold 5"
                 , "processor": "Snapdragon 8 Gen 2"
                 , "RAM": "12GB"
                 , "storage": "512GB"
                 , "display": "7.6-inch"
                 , "price": "$1519.99"
                 , "image": "images/accessories/zFold5.jpg"
     }
                     , {
                 "brand": "Samsung"
                 , "model": "Galaxy Z Flip 5"
                 , "processor": "Snapdragon 8 Gen 1"
                 , "RAM": "8GB"
                 , "storage": "256GB"
                 , "display": "6.2-inch"
                 , "price": "$899.99"
                 , "image": "images/accessories/zFlip5.jpg"
     }
                     , {
                 "brand": "Samsung"
                 , "model": "Galaxy S23 FE"
                 , "processor": "Snapdragon 7 Gen 3"
                 , "RAM": "8GB"
                 , "storage": "256GB"
                 , "display": "6.4-inch"
                 , "price": "$609.99"
                 , "image": "images/accessories/s23.jpg"
     }];
     case 'Apple':
         return [
             {
                 "brand": "Apple"
                 , "model": "Iphone 15 Pro Max"
                 , "processor": "A17 PRO"
                 , "RAM": "8GB"
                 , "storage": "1TB"
                 , "display": "6.7-inch"
                 , "price": "$1499.99"
                 , "image": "images/accessories/15promax.jpg"
     }
                , {
                "brand": "Apple"
                , "model": "Iphone 15 Pro"
                , "processor": "A17 PRO"
                , "RAM": "8GB"
                , "storage": "1TB"
                , "display": "6.1-inch"
                , "price": "$1399.99"
                , "image": "images/accessories/15 pro.jpg"
    }
                , {
                "brand": "Apple"
                , "model": "Iphone 14 Plus"
                , "processor": "A16 PRO"
                , "RAM": "8GB"
                , "storage": "512GB"
                , "display": "6.4-inch"
                , "price": "$1199.99"
                , "image": "images/accessories/14plus.jpg"
    }
                , {
                "brand": "Apple"
                , "model": "Iphone 14 Pro"
                , "processor": "A17 PRO"
                , "RAM": "8GB"
                , "storage": "1TB"
                , "display": "6.7-inch"
                , "price": "$1499.99"
                , "image": "images/accessories/14pro.jpg"
    }];
     case 'OnePlus':
         return [
            {
                "brand": "OnePlus"
                , "model": "OnePlus Open"
                , "processor": "Qualcomm Snapdragon 8 Gen 3"
                , "RAM": "8GB"
                , "storage": "512GB"
                , "display": "6.7-inch"
                , "price": "$1499.99"
                , "image": "images/accessories/OPOpen.jpg"
    },
            {
                "brand": "OnePlus"
                , "model": "OnePlus 12"
                , "processor": "Qualcomm Snapdragon 8 Gen 3"
                , "RAM": "8GB"
                , "storage": "256GB"
                , "display": "6.7-inch"
                , "price": "$899.99"
                , "image": "images/accessories/OP12.jpg"
    }
                , {
                "brand": "OnePlus"
                , "model": "OnePlus 12R"
                , "processor": "Snapdragon 8 Gen 2"
                , "RAM": "8GB"
                , "storage": "256GB"
                , "display": "6.7-inch"
                , "price": "$599.99"
                , "image": "images/accessories/OP12R.jpg"
    }];
     case 'Accessories':
         return [
             {
                 "type": "Wireless Headphones"
                 , "brand": "Sony"
                 , "model": "WH-1000XM4"
                 , "color": "Black"
                 , "connectivity": "Bluetooth"
                 , "battery_life": "Up to 30 hours"
                 , "noise_cancellation": true
                 , "price": "$349.99"
                 , "image": "images/accessories/sony.jpg"
     }
                     , {
                 "type": "Wired Headphones"
                 , "brand": "Audio-Technica"
                 , "model": "ATH-M50x"
                 , "color": "White"
                 , "connectivity": "3.5mm audio jack"
                 , "noise_cancellation": false
                 , "price": "$149.99"
                 , "image": "images/accessories/audio.jpg"
     }
                     , {
                 "type": "Smartwatch"
                 , "brand": "Apple"
                 , "model": "Watch Series 7"
                 , "color": "Space Gray"
                 , "display_size": "45mm"
                 , "water_resistance": "50 meters"
                 , "health_features": [
         "ECG"
         , "Blood Oxygen"
         , "Fitness Tracking"
       ]
                 , "price": "$399.99"
                 , "image": "images/accessories/iwatch.jpg"
     }
                     , {
                 "type": "Fitness Band"
                 , "brand": "Fitbit"
                 , "model": "Charge 5"
                 , "color": "Rosewood"
                 , "display_type": "AMOLED"
                 , "fitness_features": [
             "Heart Rate Monitoring"
             , "Sleep Tracking"
             , "Built-in GPS"
           ]
                 , "price": "$179.95"
                 , "image": "images/accessories/fitbit.jpg"
     }];
     default:
         return [];
     }
 }
 
 function createProductCard(product) {
     const card = document.createElement('div');
     card.className = 'product-card';
     
     const image = document.createElement('img');
     image.src = product.image;
     image.alt = product.model;
     image.className = 'product-image';
     
     const brand = document.createElement('p');
     brand.textContent = `${product.brand}`;
 
     const model = document.createElement('h3');
     model.textContent = product.model;
 
     const price = document.createElement('p');
     price.textContent = `Price: ${product.price}`;
 
     card.appendChild(image);
     card.appendChild(brand);
     card.appendChild(model);
     card.appendChild(price);
 
     const viewButton = document.createElement('button');
     viewButton.textContent = 'View';
     viewButton.addEventListener('click', function () {
         showProductDetails(product);
     });
 
     card.appendChild(viewButton);
     
     return card;
 }
 
 function showProductDetails(product) {
     const modal = document.getElementById('productModal');
     const modalContent = document.getElementById('modal-content');
 
     // Clear previous content
     modalContent.innerHTML = '';
 
     const name = document.createElement('h2');
     name.textContent = product.model;
 
     const price = document.createElement('p');
     price.textContent = `Price: ${product.price}`;
 
     const brand = document.createElement('p');
     brand.textContent = `Brand: ${product.brand}`;
 
     const ram = document.createElement('p');
     ram.textContent = `RAM: ${product.RAM || 'N/A'}`;
 
     const storage = document.createElement('p');
     storage.textContent = `Storage: ${product.storage || 'N/A'}`;
 
     const graphics = document.createElement('p');
     graphics.textContent = `Graphics: ${product.graphics || 'N/A'}`;
 
     // Add other information fields as needed
 
     modalContent.appendChild(name);
     modalContent.appendChild(price);
     modalContent.appendChild(brand);
     modalContent.appendChild(ram);
     modalContent.appendChild(storage);
     modalContent.appendChild(graphics);
     // Append other information fields here
 
     // Add modal styles here
     modal.style.display = 'block';
     modalContent.classList.add('modal-fade-in');
 
     modalContent.addEventListener('animationend', function () {
         modalContent.classList.remove('modal-fade-in');
     });
 
     return detailsContainer;
 }
 
 
 function closeModal() {
     const modal = document.getElementById('productModal');
     modal.style.display = 'none';
 }