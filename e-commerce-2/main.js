console.log('Ecommerce');

// All variables
const productList = document.querySelector(".productList");
const cartList = document.querySelector(".cartList");
const cartCount = document.querySelector(".cartCount")
// const productsEvent = document.querySelector(".productsEvent");
let allProducts = [];
let cartProducts = [];

const getProducts = async () => {

    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();    
    allProducts = data.products;
    displayProduct();
    displayCart();
}
getProducts();

const addCart = (idx) => {
    cartProducts.push(allProducts[idx]);
    cartCount.innerText = cartProducts.length;
    displayCart();
  };

const displayCart = () => {
    cartList.innerHTML = '';
    for (product of cartProducts){
        const cartItem = `
                <div class="card mt-1 p-4">
                    <div class="row  d-flex align-items-center">
                        <div class="d-flex flex-column col-1 align-items-center">
                            <button class="btn border border-1">+</button>
                            <span class="my-2">2</span>
                            <button class="btn border border-1">-</button>
                        </div>
                        <div class="col-4 ">
                            <img class="card-img w-100 h-80" src="${product.thumbnail}"  alt="">
                        </div>
                        
                        <div class="col-4 ">
                            <h3 class="card-title fs-5">${product.title}</h3>
                            <h5 class="fs-2 text-primary">$${product.price}.00</h4>
                            <h3 class="fs-6 fw-light  text-muted">2 X</h3>
                        </div>
                        
                        <div class="col-3 d-flex align-items-center border-start border-2">
                            <h5 class="ms-3">$240.00</h4>
                            
                        </div>
                    </div>
                </div>
        `;
        cartList.innerHTML += cartItem;
    };
};



const displayProduct = () => {
    allProducts.forEach((product,idx) => {
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
                    <button href="#" onclick="addCart(${idx})" class="btn btn-white fw-bold text-primary border-primary">
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

