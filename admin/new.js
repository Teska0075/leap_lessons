console.log('Checking');

const titleEl = document.querySelector("#productName");
const catEl = document.querySelector("#category");
const priceEl = document.querySelector("#productPrice");

const postData = () => {
    const data = fetch('http://192.168.1.220:4040/product', {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify({
            title: titleEl.value,
            category: catEl.value,
            price: priceEl.value,
            isSpecial: true,
            imageURL: 'https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            days: 'Monday'
        })
    }) ;
    console.log(titleEl.value);
    console.log(catEl.value);
    console.log(priceEl.value);
};