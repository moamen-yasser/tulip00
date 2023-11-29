///////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () =>{
    ///////////////////////////////////////////////////////////////////////////////
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
            searchsuggestions.contains(event.target) && 
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
/////////////////////////////////////////////////////////////////////////
//var of images and description 
var bigimg=document.getElementById("bigimg");
var s1img=document.getElementById("s1img");
var s2img=document.getElementById("s2img");
var s3img=document.getElementById("s3img");
var s4img=document.getElementById("s4img");
var dess=document.getElementById("dess");
////////////////////////////////////////////////////////////////////////////
// var of links transtion to details page
var block1=document.getElementById("block1");
var block2=document.getElementById("block2");
var block3=document.getElementById("block3");
var block4=document.getElementById("block4");
var block5=document.getElementById("block5");
var block6=document.getElementById("block6");
var block7=document.getElementById("block7");
var block8=document.getElementById("block8");
var block9=document.getElementById("block9");
var block10=document.getElementById("block10");
var block11=document.getElementById("block11");
var block12=document.getElementById("block12");

///////////////////////////////////////////////////////////////////////
const blocksarray=[block1,block2,block3,block4,block5,block6,
    block7,block8,block9,block10,block11,block12];
        fetch('details.json')
        .then(response => {
        return response.json();
        })
        .then(data =>{
            for(let j=0 ;j<blocksarray.length ;j++){
                blocksarray[j].addEventListener("click", (event) => {
                    document.getElementById("text").style.display="none";
                    document.getElementById("header").style.display="block";
                    document.getElementById("sec1").style.display="none";
                    document.getElementById("product-details").style.display="block";
                    for(let i=j ;i<data.length ;i++){
                        bigimg.src=data[j].bigimgurl;
                        s1img.src=data[j].s1url;
                        s2img.src=data[j].s2url;
                        s3img.src=data[j].s3url;
                        s4img.src=data[j].s4url;
                        dess.innerHTML=data[j].des;
                    }
                })
        }
        })
/////////////////////////////////////////////////////////////////////////////
function displayBigImage(element) {
    const smallImageSrc = element.src;
    const bigImage = document.getElementById('bigimg');
    bigImage.src = smallImageSrc;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ITEMS=[
    {
        id:1,
        name:"Red Love",
        price:10000,
        image:'images/Photos of P.L_auto_x2.jpg',
        qty:1
    },
    {
        id:2,
        name:"Pink Love",
        price:10000,
        image:'images/Photos of P.L (1).png',
        qty:1
    },
    {
        id:3,
        name:"Sunshine",
        price:10000,
        image:'images/82d45f41-0630-427e-9845-1ce2b77f43a3.jpg',
        qty:1
    },
    {
        id:4,
        name:"Red Love",
        price:10000,
        image:'images/6fc2929e-031a-4ba3-afc3-7708aabaa1c4.jpg',
        qty:1
    },
    {
        id:5,
        name:"White Love",
        price:10000,
        image:'images/Photos of P.L (4).png',
        qty:1
    },
    {
        id:6,
        name:"Roze Love",
        price:10000,
        image:'images/Photos of P.L (5).png',
        qty:1
    },
    {
        id:7,
        name:"Nola Love",
        price:10000,
        image:'images/Photos of P.L (6).png"',
        qty:1
    },
    {
        id:8,
        name:"Nola Love",
        price:10000,
        image:'images/Photos of P.L (7).png',
        qty:1
    },
    {
        id:9,
        name:"Pink Love",
        price:10000,
        image:'images/Photos of P.L (8)_auto_x2.jpg',
        qty:1
    },
    {
        id:10,
        name:"Pink Love",
        price:10000,
        image:'images/Photos of P.L (9).png',
        qty:1
    },
    {
        id:11,
        name:"Red Love",
        price:10000,
        image:'images/4ca1cee8-85c0-4415-afbb-cc38169b8708.jpg',
        qty:1
    },
    {
        id:12,
        name:"Orange Love",
        price:10000,
        image:'images/Photos of P.L (11).png',
        qty:1
    }
]

const itemsEl=document.querySelector(".seec1");

const openbtn=document.getElementById("open_cart_btn");
const openbttn=document.getElementById("btttn");
const cart =document.getElementById("sidecart");
const closebtn=document.getElementById("close_btn");
const backdrop=document.querySelector(".backdrop");
const cartitems=document.querySelector(".cart_items");
const itemnum=document.getElementById("items_num");
const subtotalprice=document.getElementById("subtotal_price");

let cart_data=[];

openbttn.addEventListener("click",opencart);
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
        const btn1=document.getElementById("block1");
        const btn2=document.getElementById("block2");
        const btn3=document.getElementById("block3");
        const btn4=document.getElementById("block4");
        const btn5=document.getElementById("block5");
        const btn6=document.getElementById("block6");
        const btn7=document.getElementById("block7");
        const btn8=document.getElementById("block8");
        const btn9=document.getElementById("block9");
        const btn10=document.getElementById("block10");
        const btn11=document.getElementById("block11");
        const btn12=document.getElementById("block12");

        itemEl.classList.add("block");
        btn1.onclick = () => additem(0, item.id);
        btn2.onclick = () => additem(1, item.id);
        btn3.onclick = () => additem(2, item.id);
        btn4.onclick = () => additem(3, item.id);
        btn5.onclick = () => additem(4, item.id);
        btn6.onclick = () => additem(5, item.id);
        btn7.onclick = () => additem(6, item.id);
        btn8.onclick = () => additem(7, item.id);
        btn9.onclick = () => additem(8, item.id);
        btn10.onclick = () => additem(9, item.id);
        btn11.onclick = () => additem(10, item.id);
        btn12.onclick = () => additem(11, item.id);

















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