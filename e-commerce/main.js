console.log("E-Commerce");

//All vairables
const productList = document.querySelector(".productList");
let allProducts = [];
console.log(productList);

const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    allProducts = data.products;
    // console.log(data);
    displayProduct();
};

getProducts();

const displayProduct = () => {
    allProducts.forEach((product) => {
        // console.log(product);
        const item = `<div class="card border-0 rounded-0 col-4">
            <img src="${product.thumbnail}" class="card-img-top" class="" alt="...">
            <div class="card-body d-flex flex-column">
                <h3 class="card-title text-center fw-light">${product.title}</h3>
                <h6 class="col-7 p-1 ms-auto fs-6 bg-primary-emphasis text-success">12.96% OFF</h6>
                <h5 class="card-text">$549.00</h5>
                <p class="card-text fs-6 fw-lighter text-muted">${product.description}</p>
                <div class="container">
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-half text-warning"></i>
                    4.5
                </div>
                <button href="#" class="btn border-primary text-primary col-6 ms-auto"><i class="bi-thin bi-heart"></i> Watch</button>
            </div>
        </div>`;
        productList.innerHMTL += item;
        console.log(`123`);
    });
};

displayProduct();