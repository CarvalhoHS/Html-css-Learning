let shop = document.getElementById('shop')

let shopItemsData = [{
    id:"Maneiro",
    name:"Vamo",
    price:37,
    desc: "Lorem ipsum dolor",
    img: "Ambassador_Faelin.png"

},{
    id:"Top",
    name:"Vamo",
    price:47,
    desc: "Lorem ipsum dolor",
    img: "Ambassador_Faelin.png"

},{
    id:"Shoppingtop",
    name:"Vamo",
    price:57,
    desc: "Lorem ipsum dolor",
    img: "Ambassador_Faelin.png"

},{
    id:"Demais",
    name:"Vamo",
    price:87,
    desc: "Lorem ipsum dolor",
    img: "Ambassador_Faelin.png"

}]

let basket = JSON.parse(localStorage.getItem("data")) || []

let gerarshop = () => {
    return (shop.innerHTML= shopItemsData.map((v) => {
        let { id, name, price, desc, img} = v;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=product-id-${id} class="item">
        <img width="220" src="Images/${img}" alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc} </p>
            <div class="price-quantity">
            <h2> $ ${price}</h2>
            <div class="buttons">
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div>
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            </div>
            </div>
        </div>
    </div>
        `
    }).join(""))
}

gerarshop();

let increment = (id) =>{
    let selectedItem = id
    let search = basket.find((x)=> x.id === selectedItem.id)

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        })

    }
    else{
        search.item += 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));
  //  console.log(basket)
    update(selectedItem.id)
}
let decrement = (id) =>{
    let selectedItem = id
    let search = basket.find((x)=> x.id === selectedItem.id)

    if(search.item === 0) return;
    else{
        search.item -= 1;
    }
   localStorage.setItem("data", JSON.stringify(basket));
    update(selectedItem.id)
};

let update = (id) =>{
    let search = basket.find((x) =>x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation()
}

let calculation =()=>{
  let cartIcon = document.getElementById("cartAmount")
  cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x,y)=> x+y,0)

}

calculation()