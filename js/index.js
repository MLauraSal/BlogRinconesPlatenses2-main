const fetchData = async (product, quantity) => {
    try {
        const respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`);
        const data = await respuesta.json()
        // console.log(data)
        const availableProducts = data.results;
        let products;
        // console.log(availableProducts);

        if (availableProducts.length > 0) {
            products = availableProducts.map((element) => {
                return {
                    id: element.id,
                    title: element.title,
                    price: element.price,
                    currency_id: element.currency_id,
                    available_quantity: element.available_quantity,
                    thumbnail: element.thumbnail,
                    condition: element.condition,
                    permalink: element.permalink
                };
            });
        }
        // console.log(products);
        imprimirInfo(products, quantity)
    } catch (error){
        console.log(error)
    }
}


const imprimirInfo = (info, quantity) =>{
    
    // console.log(info[0]);
    const aside = document.getElementById('publicity');
    
    for(let i=0; i<quantity; i++){
        const cardProduct = document.createElement('article');
        cardProduct.innerHTML = `
            <img src="${info[i].thumbnail}" alt="${info[i].title}" class="thumbnail"/>
            <h2>${info[i].title}</h2>
            <p>$${info[i].price}</p>
            <a href="${info[i].permalink}" target="_blank" >Comprar</a>
        `;
        cardProduct.className = 'product';
        aside.appendChild(cardProduct);
    }
}

window.addEventListener('load', function(event){
    fetchData('turismo', 5);
});