const ITEMS=[
    {
        id:1,
        name:"White Kosha",
        price:6000,
        image:'images/Component 192.png',
        qty:1
    },
    {
        id:2,
        name:"Pink Kosha",
        price:10000,
        image:'images/Component 193.png',
        qty:1
    }
]


const openbtn=document.getElementById("open_cart_btn");
const cart =document.getElementById("sidecart");
const closebtn=document.getElementById("close_btn");
const backdrop=document.querySelector(".backdrop");
const itemsEl=document.querySelector(".seec5");
const cartitems=document.querySelector(".cart_items");
const itemnum=document.getElementById("items_num");
const subtotalprice=document.getElementById("subtotal_price");

let cart_data=[];

openbtn.addEventListener("click",opencart);
closebtn.addEventListener("click",closecart);
backdrop.addEventListener("click",closecart);

renderItems();
rendercartitems();


//open cart
function opencart(){
    cart.classList.add("open");
    backdrop.style.dispaly="block";
    setTimeout(() =>{
        backdrop.classList.add("show");
    },0)
}

//colse cart
function closecart(){
    cart.classList.remove("open");
    backdrop.style.dispaly="none";
    setTimeout(() =>{
        backdrop.classList.remove("show"); 
    },500)
}


//add items to cart
function additem(idx,itemId){
    //find same item
    const foundeditem = cart_data.find(
    (item) => item.id === itemId);

    if(foundeditem){
        increaseqty(itemId);
    }else{
        cart_data.push(ITEMS[idx]);
    }
    updatecart();
    opencart();
}

//remove item from cart
function removecartitem(itemId){
    cart_data=cart_data.filter((item) => item.id != itemId);
    updatecart();
}

//increase qty
function increaseqty(itemId){
    cart_data =cart_data.map((item) => 
    item.id === itemId
    ? { ...item, qty: item.qty + 1 } 
    :item
    );
    updatecart();
}


//decrease qty
function decreaseqty(itemId){
    cart_data =cart_data.map(
        (item) => item.id === 
        itemId? { ...item, qty: item.qty >1 ? item.qty-1:item.qty} :item);
    updatecart();
}


//calculate items number
function calcitemsnum(){
    let itemscount=0;
    cart_data.forEach(item => (itemscount +=item.qty));
    itemnum.innerText=itemscount;
}


//calculate subtotal price
function calcsubtotalprice(){
    let subtotal=0;
    cart_data.forEach((item) => (subtotal += item.price * item.qty));
    subtotalprice.innerText=subtotal;
}

//render items 
function renderItems(){
    ITEMS.forEach((item , idx) =>{
        const itemEl=document.createElement("div");
        itemEl.classList.add("block1");
        itemEl.onclick = () => additem(idx, item.id);
        itemEl.innerHTML=`
        <div class="image">
            <img src="${item.image}">
        </div>
        <div class="top">
            <h1>The Day With <span>${item.price} EGP</span></h1>
            <p>${item.name}</p>
        </div>
        <div class="icons">
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
                <i  class="fa-regular fa-heart"onclick="red(this)"></i>
        </div>
        <div class="text">
            <h2>Product information</h2>
            <p>This is a bouquet that proudly expresses it's femininity. Calming 
                blush tones, garden and delicate floribundas roses bringing all their This is a bouquet that proudly expresses it's femininity. 
                blush tones, garden and delicate floribundas roses bringing.</p>
            <button>Add to cart <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>  </button>
        </div>
        `
        itemsEl.appendChild(itemEl);
    })
}

// display / render cart items
function rendercartitems(){
    // remove everything  from cart
    cartitems.innerHTML="";
    //add new data
    cart_data.forEach(item =>{
        const cartitem = document.createElement('div');
        cartitem.classList.add('cart_item');
        cartitem.innerHTML=`
                    <div class="remove_item" onclick="removecartitem(${item.id})">
                        <span>&times;</span>
                    </div>
                    <div class="item_img">
                        <img src="${item.image}">
                    </div>
                    <div class="item_details">
                        <p>${item.name}</p>
                        <strong>${item.price}$</strong>
                        <div class="qty">
                            <span onclick="decreaseqty(${item.id})">-</span>
                            <strong>${item.qty}</strong>
                            <span onclick="increaseqty(${item.id})">+</span>
                        </div>
                    </div>
                `
        cartitems.appendChild(cartitem);
    })
}

//updare cart
function updatecart(){
    //render cart items with update data
    rendercartitems();
    //update items number in cart
    calcitemsnum();
    //update subtotal price in cart
    calcsubtotalprice()
}