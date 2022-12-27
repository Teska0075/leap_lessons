console.log('Ecommerce');

// All variables

const productList = document.querySelector(".productList");
let allProducts = [];

const getProducts = async () => {

    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();    
    allProducts = data.products;
    displayProduct();

}
getProducts();

const displayProduct = () => {
    allProducts.forEach((product) => {
        const card = `
        <div class="card shadow p-2 bg-body rounded border-0" style="width: 18rem;">
        <img src="${product.thumbnail}" class="card-img-top" style = "width: 100%; height: 200px;" alt="...">
        <div class="card-body d-flex flex-column">
            <h3 class="card-title text-center fw-bolder fs-3">${product.title}</h3>
            <p class="text-success fs-6 mt-3" style="margin-left: auto; height: 27px; text-align: end; background-color: lightgreen;">${product.discountPercentage}% OFF</p>
            <h4>$${product.price}.00</h4>
            <p class="card-text fs-6 w-100 text-truncate">${product.description}.</p>
            <div class="d-flex justify-content-between mt-3 mb-0">
                <div>
                    <span><i class="bi-solid bi-star-fill text-warning"></i></span>
                    <span><i class="bi-solid bi-star-fill text-warning"></i></span>
                    <span><i class="bi-solid bi-star-fill text-warning"></i></span>
                    <span><i class="bi-solid bi-star-fill text-warning"></i></span>
                    <span><i class="bi-solid bi-star-half text-warning"></i></span>
                    <span>${product.rating}</span>   
                </div>
                <div>
                    <button href="#" class="btn btn-white fw-bold text-primary border-primary">
                    <i class="bi bi-cart"></i>
                        Cart
                    </button>
                </div>
               
                
                
            </div>
        </div>
    </div>
    `;
    productList.innerHTML += card;
    });
};