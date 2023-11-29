///////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () =>{
    //funcctions for filter secarch 
    const searchinput=document.getElementById("search-input");
        const searchsuggestions=document.getElementById("search-suggestions");
    
        const suggestionsdata=[
        "Is The Perfect Way To Show Your Love",
        "Flowers always make people better"," happier and more helpful","They are sunshine, food and medicine to the soul.",
        "Perfect For your beloved","Voila Forest Cake With Roses Hand","Emma Remal Scarf With White Roses Bouquet",
        "Summer Vibes With Orange Roses","Light Pink Bouquet White Wrap","Al-Moled Bouquet With Purple and White roses",
        "Get Well Soon With Colorful Bouquet","Key L'azurde With White Roses","Felizmoda silver Bracelet With Pink Roses Bouquet",
        "Now you can customize your bouquet","Through the following three steps, you can create your own unique bouquet",
        "Decoration","White Kosha","pink Kosha","Discover Our Chocolate Bouquet Delights","Send a with Video Message with Your Flowers by QR Code",
        "Wedding Flowers Add a Touch of Elegance","We Use Eco-Friendly Flower Paper",
        "Fresh Flowers Delivered in Air-Conditioned Cars","Add a Personal Touch to Your Bouquet"
        ]
    
        function updatesuggestions(query){
        searchsuggestions.innerHTML="";
    
        const filtersuggestions=suggestionsdata.filter((item) =>
            item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
    
        filtersuggestions.forEach((suggestion) => {
            const li =document.createElement('li');
            li.textContent=suggestion;
            li.addEventListener('click', () => {
            setsearchinputvalue(suggestion);
            window.location.href='shop.html';
            hidesuggestions();
            });
            searchsuggestions.appendChild(li);
        });
    
        togglesuggestions(filtersuggestions.length > 0);
        }
    
        function setsearchinputvalue(value){
        searchinput.value=value;
        }
    
        function hidesuggestions(show){
        searchsuggestions.style.display= show ? 'block' :'none';
        }
    
        searchinput.addEventListener('input', () =>{
        const query =searchinput.value;
        updatesuggestions(query);
        });
    
        document.addEventListener('click' ,(event) => {
        if (
            !searchsuggestions.contains(event.target) && 
            event.target !== searchinput
        )
        {
            hidesuggestions();
        }
        });
    
        searchinput.addEventListener("keydown" ,(event) =>{
        if(event.key === "Enter"){
            event.preventDefault();
        }
        });
    
        
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ITEMS=[
    {
        id:1,
        name:"Purple Flower",
        price:100,
        image:'images/Component 250.png',
        qty:1
    },
    {
        id:2,
        name:"Yellow Flower",
        price:110,
        image:'images/Component 250 (1).png',
        qty:1
    },
    {
        id:3,
        name:"Roze Flower",
        price:150,
        image:'images/Component 250 (2).png',
        qty:1
    },
    {
        id:4,
        name:"Red Flower",
        price:190,
        image:'images/Component 250 (3).png',
        qty:1
    },
    {
        id:5,
        name:"Sunshine",
        price:200,
        image:'images/Component 250 (4).png',
        qty:1
    },
    {
        id:6,
        name:"Blue Flower",
        price:130,
        image:'images/Component 250 (5).png',
        qty:1
    },
    {
        id:7,
        name:"Roze Flower",
        price:190,
        image:'images/Component 250 (6).png',
        qty:1
    },
    {
        id:8,
        name:"Sunshine",
        price:200,
        image:'images/Component 250 (7).png',
        qty:1
    },
    {
        id:9,
        name:"Pink Flower",
        price:180,
        image:'images/Component 250 (8).png',
        qty:1
    },
    {
        id:10,
        name:"Pink bouquet",
        price:300,
        image:'images/Component 250 (9).png',
        qty:1
    },
    {
        id:11,
        name:"Blue bouquet",
        price:300,
        image:'images/Component 250 (10).png',
        qty:1
    },
    {
        id:12,
        name:"Green bouquet",
        price:300,
        image:'images/Component 250 (11).png',
        qty:1
    },
    {
        id:13,
        name:"Brown bouquet",
        price:300,
        image:'images/Component 250 (12).png',
        qty:1
    },
    {
        id:14,
        name:"Black bouquet",
        price:300,
        image:'images/Component 250 (13).png',
        qty:1
    },
    {
        id:15,
        name:"Roze bouquet",
        price:300,
        image:'images/Component 250 (14).png',
        qty:1
    },
    {
        id:16,
        name:"Green bouquet",
        price:300,
        image:'images/Component 250 (15).png',
        qty:1
    },
    {
        id:17,
        name:"Black bouquet",
        price:500,
        image:'images/Component 250 (16).png',
        qty:1
    },
    {
        id:18,
        name:"Roze bouquet",
        price:500,
        image:'images/Component 250 (17).png',
        qty:1
    },
    {
        id:19,
        name:"Gift Box",
        price:1100,
        image:'images/Component 250 (18).png',
        qty:1
    },
    {
        id:20,
        name:"Gift Box",
        price:900,
        image:'images/Component 250 (19).png',
        qty:1
    },
    {
        id:21,
        name:"Gift Box",
        price:800,
        image:'images/Component 250 (20).png',
        qty:1
    },
    {
        id:22,
        name:"Vase",
        price:2500,
        image:'images/Component 250 (21).png',
        qty:1
    },
    {
        id:23,
        name:"Vase",
        price:3652,
        image:'images/Component 250 (22).png',
        qty:1
    },
    {
        id:24,
        name:"Vase",
        price:2598,
        image:'images/Component 250 (23).png',
        qty:1
    },
    {
        id:25,
        name:"Bouquet Ribbon",
        price:235,
        image:'images/Component 250 (24).png',
        qty:1
    },
    {
        id:26,
        name:"Bouquet Ribbon",
        price:432,
        image:'images/Component 250 (25).png',
        qty:1
    },
    {
        id:27,
        name:"Bouquet Ribbon",
        price:895,
        image:'images/Component 250 (26).png',
        qty:1
    }

]

const itemsEl=document.querySelector(".seec2");

const openbtn=document.getElementById("open_cart_btn");
const cart =document.getElementById("sidecart");
const closebtn=document.getElementById("close_btn");
const backdrop=document.querySelector(".backdrop");
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
        itemEl.classList.add("block");
        itemEl.classList.add("container");
        itemEl.classList.add("row");
        itemEl.classList.add("col-lg-4");
        itemEl.classList.add("col-md-6");
        itemEl.classList.add("col-sm-12");
        itemEl.onclick = () => additem(idx, item.id);
        itemEl.innerHTML=`
        <div class="imagee">
        <img src="${item.image}">
        </div>
        <div class="line">
            <div class="left">
                <h3>${item.price} EGP</h3>
                <p>${item.name}</p>
            </div>
        </div>
        <button class="btttn">Add to cart <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>  </button>
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
                        <strong>${item.price}EGP</strong>
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



