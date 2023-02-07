console.log('Checking');

const tableBody = document.querySelector("#tableBody");

let allProducts =[];

// API

const getProducts = async () => {
    const response = await fetch('http://192.168.1.220:4040/product');
    const data = await response.json();    
    allProducts = data.product;
    console.log(data);
    displayProduct();
}
getProducts();

const displayProduct = () => {
    allProducts.forEach((product,i) => {
        const list = `
        <tr>
            <th scope="row">${[i+1]}</th>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td>${product.isSpecial}</td>
            <td>
                <button class="btn btn-primary"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
            </td>
        </tr>
        `;
        tableBody.innerHTML += list;
    });
};