let var1 = document.querySelector("h1").innerHTML;
console.log(var1);
let var2 = document.querySelector("#idSample").innerHTML;
console.log(var2);
let var3 = document.querySelector(".sampleClass").innerHTML;
console.log(var3);
let var4 = document.querySelectorAll("p")[3].innerHTML;
console.log(var4);

let var5 = document.querySelectorAll(".sampleDiv");
for(let i=0; i<var5.length; i++) {
    console.log(var5[i].innerHTML);
}

let person = {
    name: "John Philip Tena",
    age: 17,
    gender: "Male",
    nationality: "Filipino",
    items: [
        {itemName: "Windows 11", itemVariant: "Professional for Workstation", itemPrice: 2880, itemImg: 'picsum.photos/150/100.jpg?random=1'},
        {itemName: "Windows 11", itemVariant: "Professional", itemPrice: 1880, itemImg: 'picsum.photos/150/100.jpg?random=2'},
        {itemName: "Windows 11", itemVariant: "Home", itemPrice: 1680, itemImg: 'picsum.photos/150/100.jpg?random=3'},
        {itemName: "Windows 10", itemVariant: "Professional for Workstation", itemPrice: 2880, itemImg: 'picsum.photos/150/100.jpg?random=4'},
        {itemName: "Windows 10", itemVariant: "Professional", itemPrice: 1880, itemImg: 'picsum.photos/150/100.jpg?random=5'},
        {itemName: "Windows 10", itemVariant: "Home", itemPrice: 1680, itemImg: 'picsum.photos/150/100.jpg?random=6'},
        {itemName: "Office 2021", itemVariant: "Professional", itemPrice: 3880, itemImg: 'picsum.photos/150/100.jpg?random=7'},
        {itemName: "Office 2021", itemVariant: "Home and Business", itemPrice: 2880, itemImg: 'picsum.photos/150/100.jpg?random=8'},
        {itemName: "Office 2019", itemVariant: "Professional", itemPrice: 3880, itemImg: 'picsum.photos/150/100.jpg?random=9'},
        {itemName: "Office 2019", itemVariant: "Home and Business", itemPrice: 2880, itemImg: 'picsum.photos/150/100.jpg?random=10'}
    ],
    showItems() {
        let htmlText = `
<div class="row m-4">
`;
        this.items.forEach(function(item){
        htmlText += `
<div class="card col-3 m-2">
    <img class="card-img-top" src="" alt="${item.itemName}">
    <div class="card-body">
        <h4 class="card-title">${item.itemName}</h4>
        <h6 class="card-title text-muted">${item.itemVariant}</h6>
    </div>
    <div class="card-footer row">
        <h5 class="col-5 card-text">&#8369; ${item.itemPrice}</h5>
        <button class="btn btn-primary col-7" onclick="addToCart('${item.itemName}','${item.itemVariant}','${item.itemPrice}','${item.itemImg}')">Add to cart</button>
    </div>
</div>
`;
        });
        htmlText += `
    </div>
`;
        document.getElementById("catalog").innerHTML = htmlText;
    },
    addItem() {
        let itemName = document.querySelector("#itemname").value;
        let itemVariant = document.querySelector("#itemvariant").value;
        let itemPrice = document.querySelector("#itemprice").value;
        let itemImg = document.querySelector("#itemimg").value;
        this.items.push({itemName, itemVariant, itemPrice, itemImg});
    },
    removeItem() {
        this.items.pop();
    },
    pogi: true,
    hobbies: ["Swimming","Dancing","Fencing"],
    alertMethod() {
        console.log("Hello World");
    },
    greeting() {
        console.log("Hello, "+this.name);
    },
    greetingOthers(pangalan) {
        console.log(`Hello, ${pangalan}`); /* ES6 */
    },
    showHobbies() {
        this.hobbies.forEach(function(hobby){
            console.log(hobby);
        });
    }
};
console.log(person.hobbies[2]);
person.alertMethod();
person.greeting();
person.greetingOthers("Danniel");
person.showHobbies();
person.showItems();

let addItem = () => {
    person.addItem();
    alert("Item added successfuly!");
    person.showItems();
};

let removeItem = () => {
    person.removeItem();
    alert("Item removed successfuly!");
    person.showItems();
};

let addToCart = (name,variant,price,img) => {
    let cart;
    if(!sessionStorage.getItem("cart")) sessionStorage.setItem("cart","");
    cart = sessionStorage.getItem("cart");
    if(cart!="") cart += "|";
    cart += `{itemName:"${name}",itemVariant:"${variant}",itemPrice:${price},itemImg:"${img}"}`;
    sessionStorage.setItem("cart",cart);
    showCart();
};

let showCart = () => {
    let cart;
    if(!sessionStorage.getItem("cart")) sessionStorage.setItem("cart","");
    cart = sessionStorage.getItem("cart");
    let cartItems = cart.split("|");
    let currentItem, currentProp, n=0, text="";
    cartItems.forEach(function(item){
        n++;
        currentItem = item.slice(1,item.length-1);
        currentItem = currentItem.split(",");
        text += n+") ";
        currentItem.forEach(function(prop){
            currentProp = prop.split(":");
            text += currentProp[1] + "-";
        });
        text += "\n"
    });
    alert(text);
};

let Person = {
    name: "John",
    age: 21,
    sex: "Male",
    location: "manila"
};

let PCPart = {
    item: "battery",
    tech: "li-ion",
    removable: false,
    capacity: "65 Watts",
    voltage: "19 Volts",
    compatibility: "hp pavilion series"
};

let Food = {
    name: "ice cream",
    type: "dessert",
    holdingTime: "5 minutes",
    options: ["edible cone","paper cup","bun"]
};