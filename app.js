
function displayItemsOnHomePage () {
    let itemContainerElements = document.querySelector(".items-container");

    if(!itemContainerElements) {
        return;
    }
    let innerHTML = '';
    items.forEach(item => {
        innerHTML +=  `<div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="product-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick = "addToBag(${item.id})">Add to Bag</button>
    </div>`
    });
    itemContainerElements.innerHTML = innerHTML;
}

let bagItems ;

onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem("bagItems");
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];   // if string present then parse if not then empty bag assign []
    displayBagIcon();
    displayItemsOnHomePage();  // on top but save it in onLoad()
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemsCountElements = document.querySelector(".bag-item-count");
    if(bagItems.length > 0) {
    bagItemsCountElements.innerText = bagItems.length;
    bagItemsCountElements.style.visibility = 'visible';
    } else {
        bagItemsCountElements.style.visibility = 'hidden';
    }
}

