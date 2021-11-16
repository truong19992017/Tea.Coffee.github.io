let sumCart = 0;

const proDuct = [
    {
        id: 0,
        img: "product-13-300x300.jpg",
        name: "Passion Fruit",
        rice: 9.00,
    },
    {
        id: 1,
        img: "product-21-300x300.jpg",
        name: "Herbal Love",
        rice: 10.00,
    },
    {
        id: 2,
        img: "product-17-300x300.jpg",
        name: "Chicory",
        rice: 8.00,
    },
    {
        id: 3,
        img: "product-10-300x300.jpg",
        name: "Mint & Roses",
        rice: 9.00,
    },
]

let cart = [];

let addCart = (id) => {
    sumCart += 1;

    cart.push(proDuct[id]);
    document.getElementsByClassName("sumCar")[0].innerHTML = sumCart;
    document.getElementsByClassName("sumCar")[1].innerHTML = sumCart;
    alert("Đã thêm sản phẩm vào giỏ hàng ")
}

let showCart = () =>{
    event.preventDefault();
    let arr = "<h2>giỏ hàng:  <strong class=listProduct onclick=cancel()>Thoát</strong><strong class=listProduct onclick=move()>/ Hủy</strong></h2>";
    for(let i = 0; i < cart.length; i++)
    {
        arr += `
        <div class="products">
        <img src="img/${cart[i].img}">
        <h2>${cart[i].name}</h2>
        </div>
        
        `
    }
    document.getElementById('cart').style.display = "block";
    document.getElementById('cart').innerHTML = arr;
}

let cancel = () =>{
    document.getElementById('cart').style.display = "none";
}

let move = () => {
    document.getElementById("cart").style.display = "none";
    cart.splice(0, cart.length);
    sumCart = 0;

    document.getElementsByClassName("sumCar")[0].innerHTML = 0;
    document.getElementsByClassName("sumCar")[1].innerHTML = 0;
}