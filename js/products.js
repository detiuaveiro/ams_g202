// Checks the list of all products
if(typeof(Storage) !== "undefined"){
    if (!localStorage.getItem('ecomarket_products')){
        // Store default demo products in the storage
        var products = [
            {
                id: "1",
                new: "",
                sale: "",
                old_price: "",
                image: "/ams_g202/images/products/maca_gala.jpg",
                name: "Maçã Gala de Alcobaça",
                price: "2,10",
                producer: "Peça de Fruta",
                quantity_left: "14"
            },
            {
                id: "2",
                new: "",
                sale: "",
                old_price: "",
                image: "/ams_g202/images/products/couve_portuguesa.jpg",
                name: "Couve Portuguesa",
                price: "1,49",
                producer: "Horta da Torre",
                quantity_left: "21"
            },
            {
                id: "3",
                new: "",
                sale: "",
                old_price: "",
                image: "/ams_g202/images/products/roma.jpg",
                name: "Romã",
                price: "1,59",
                producer: "Frusoal",
                quantity_left: "9"
            },
            {
                id: "4",
                new: "",
                sale: "",
                old_price: "",
                image: "/ams_g202/images/products/nabica.jpg",
                name: "Nabiças",
                price: "1,99",
                producer: "Quinta do Funcho",
                quantity_left: "9"
            },
            {
                id: "5",
                new: "",
                sale: "PROMOÇÃO",
                old_price: "2,49",
                image: "/ams_g202/images/products/diospiro_persimmon.jpg",
                name: "Dióspiro Persimmon",
                price: "1,55",
                producer: "Frutalmente",
                quantity_left: "9"
            },
            {
                id: "6",
                new: "NOVIDADE",
                sale: "",
                old_price: "",
                image: "/ams_g202/images/products/laranja_algarve_1.jpg",
                name: "Laranja do Algarve",
                price: "1,49",
                producer: "Cacial",
                quantity_left: "9"
            }
        ];

        products = JSON.stringify(products);
        localStorage.setItem('ecomarket_products', products);
        products = JSON.parse(products).reverse();
        
    } else{
        // Get products data from the storage item
        var products = localStorage.getItem('ecomarket_products');
        products = JSON.parse(products).reverse();
    }
} else{
    // Browser does not support web storage
    window.location.replace("/ams_g202/marketplace/no-js");
}
