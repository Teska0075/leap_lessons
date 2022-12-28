console.log('Ecommerce');

// All variables
const productList = document.querySelector(".productList");
const cartList = document.querySelector(".cartList");
const cartCount = document.querySelector(".cartCount");
const categoryList = document.querySelector(".categoryList");
const cartPrice = document.querySelector(".cartPrice");

let allProducts = [];
let cartProducts = [];
let allCategories = [];

// API'S FROM DUMMYJSON
const getCategories = async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    allCategories = data;

    showCategories();
};
getCategories();

const getProducts = async () => {

    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();    
    allProducts = data.products;
    displayProduct();
    displayCart();
}
getProducts();




// CATEGORY

const getCategoryProduct = async (category) => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();
    allProducts = data.products;

    displayProduct();
};

const showCategories = () => {
    categoryList.innerHTML = "";
    allCategories.forEach((category) => {
    const categoryItem = `
      <button onclick="getCategoryProduct('${category}')" class="btn btn-primary">${category}</button>
    `;
    categoryList.innerHTML += categoryItem;
  });
};








// CART SECTION
const addCart = (productId) => {
    const findIdx = cartProducts.findIndex((item) => item.id === productId);
    if(findIdx > -1){
        cartProducts[findIdx].count += 1;
    }else{
        const findIndex = allProducts.findIndex((item) => item.id === productId);
        const newProduct = {count: 1, ...allProducts[findIndex]};

        cartProducts.push(newProduct);
    }
    cartCount.innerText = cartProducts.length;
    displayCart();
};



const displayCart = () => {
    cartList.innerHTML = '';
    for (product of cartProducts){
        const cartItem = `
                <div class="card mt-1 p-4 hoverable">
                    <div class="row  d-flex align-items-center">
                        <div class="d-flex flex-column col-1 align-items-center">
                            <button  class="btn border border-1">+</button>
                            
                            <button class="btn border border-1">-</button>
                        </div>
                        <div class="col-4 ">
                            <img class="card-img w-100 h-80" src="${product.thumbnail}"  alt="">
                        </div>
                        
                        <div class="col-4 ">
                            <h3 class="card-title fs-5">${product.title}</h3>
                            <h5 class="fs-2 text-primary">$${product.price}.00</h4>
                            <h3 class="fs-6 fw-light  text-muted">1 X</h3>
                        </div>
                        
                        <div class="col-3 d-flex align-items-center gap-2 border-start border-2">
                            <div class="mt-2">$240.00
                            <input
                            class="form-control "
                            min="0"
                            id="quantity"
                            value="${product.count}"
                            type="number"
                        />
                            </div>
                            <button onclick="removeItem(this,${product.id})" class="btn ms-3 "><i class="bi bi-trash-fill text-danger fs-4"></i></button>
                        </div>
                    </div>
                </div>
        `;
        cartList.innerHTML += cartItem;
    };
    const totalCartPrice = calculateCartPrice();
    cartPrice.innerText = `$${totalCartPrice}`;
    console.log("total",totalCartPrice);
};

const calculateCartPrice = () => {
    let sumPrice = 0;
    for(product of cartProducts){
        sumPrice = sumPrice + product.price * product.count
    }
    return sumPrice;
};

let removeItem = (e,productId) => {
    console.log(e.parentNode.parentNode.parentNode.parentNode);

    const parent = e.parentNode.parentNode.parentNode.parentNode;
    const child = e.parentNode.parentNode.parentNode;

    parent.removeChild(child);

    const findIdx = cartProducts.findIndex((item) => item.id === productId);
    cartProducts.splice(findIdx,1)
    cartCount.innerText = cartProducts.length;
    
    displayCart();
};

// SHOW PRODUCTS
const displayProduct = () => {
    allProducts.forEach((product,idx) => {
        const card = `
        <div class="card hoverable shadow p-2 bg-body rounded border-0" style="width: 18rem;">
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
                    <button href="#" onclick="addCart(${product.id})" class="btn btn-white fw-bold text-primary border-primary addCart">
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

