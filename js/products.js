// Checks the list of all products
if(typeof(Storage) !== "undefined"){
    if (!localStorage.getItem('ecomarket_products')){
        // Store default demo products in the storage
        var products = [
            {
                id: "1",
                category: "Fruta",
                new: "",
                sale: "",
                old_price: "",
                image: "/ams_g202/images/products/maca_gala.jpg",
                name: "Maçã Gala de Alcobaça",
                price: "2,10",
                producer: "Joaquim Raro, Lda",
                quantity_left: "14",
                description: "As maçãs de Alcobaça IGP, um orgulho da região, são produzidas com base no conhecimento que fruticultores que passam de geração em geração. As condições climatéricas desta zona do país, permitem produzir maçãs crocantes, com um equilíbrio perfeito entre o doces e o ácido, que resultam num fruto de sabor agridoce e aroma intenso.",
                origin: "Alcobaça (Portugal)",
                variety: "Gala",
                season: "Agosto - Junho",
                orders: "2",
                feedback: []
            },
            {
                id: "2",
                category: "Legume",
                new: "",
                sale: "",
                old_price: "",
                image: "/ams_g202/images/products/couve_portuguesa.jpg",
                name: "Couve Portuguesa",
                price: "1,49",
                producer: "Joaquim Raro, Lda",
                quantity_left: "21",
                description: "A couve é originária da costa ocidental europeia e o seu cultivo remonta ao período Neolítico. São legumes de variedade de cores e tamanhos, que diferem muito em termos morfológicos, pelo que a sua descrição se torna difícil. É rica em vitamina C e ácido fólico e fonte de vitamina A.",
                origin: "Aveiro (Portugal)",
                variety: "Penca",
                season: "Novembro - Março",
                orders: "1",
                feedback: []
            },
            {
                id: "3",
                category: "Fruta",
                new: "",
                sale: "",
                old_price: "",
                image: "/ams_g202/images/products/roma.jpg",
                name: "Romã",
                price: "1,59",
                producer: "Frusoal",
                quantity_left: "0",
                description: "Por trás dos bagos vermelhos e rosados de sabor agridoce está um fruto exótico que tem imensas propriedades benéficas para o organismo e, por conseguinte, para a saúde. A romã ajuda, entre outras coisas, a manter baixos os níveis de colesterol e de tensão arterial, e a sua vitamina C protege das constipações.",
                origin: "Algarve (Portugal)",
                variety: "Asseria",
                season: "Setembro - Dezembro",
                orders: "27",
                feedback: [
                    {
                        name: "André Lopes",
                        avatar: "/ams_g202/images/avatars/avatar.jpg",
                        title: "Não gostei lá muito",
                        comment: "Talvez por já estarem fora de época, mas não me agradaram tanto como outras variedades que já comi",
                        rating: "2",
                        date: "21/01/2021"
                    }
                ]
            },
            {
                id: "4",
                category: "Legume",
                new: "",
                sale: "",
                old_price: "",
                image: "/ams_g202/images/products/nabica.jpg",
                name: "Nabiças",
                price: "1,99",
                producer: "Quinta do Funcho",
                quantity_left: "13",
                description: "As nabiças apresentam uma cor que varia entre o verde médio e o verde escuro, com uma textura rugosa e áspera, pubescentes e disposta em formato de roseta durante a sua fase vegetativa. São ricas em fibra, vitaminas A, B6, C, E e K, e diversos minerais, como manganês, cálcio, cobre, magnésio e potássio, ajudando a regular a digestão e o trânsito intestinal.",
                origin: "Sintra (Portugal)",
                variety: "Nabiça de Rama",
                season: "Outubro - Maio",
                orders: "11",
                feedback: [
                    {
                        name: "Jaime Costa",
                        avatar: "/ams_g202/images/avatars/avatar.jpg",
                        title: "",
                        comment: "",
                        rating: "4",
                        date: "11/01/2021"
                    }
                ]
            },
            {
                id: "5",
                category: "Fruta",
                new: "",
                sale: "PROMOÇÃO",
                old_price: "2,49",
                image: "/ams_g202/images/products/diospiro_persimmon.jpg",
                name: "Dióspiro Perssimon",
                price: "1,55",
                producer: "Joaquim Raro, Lda",
                quantity_left: "9",
                description: "O dióspiro é uma fruta com muitos hidratos de carbono, sobretudo de absorção rápida. Assim, provoca uma rápida subida de açúcar no sangue (glicemia) em relação a outras frutas. Popularmente são diferenciados como o de roer (dióspiro Perssimon), mais rijo e alaranjado, e o de abrir, mais macio e quase vermelho.",
                origin: "Barcelos (Portugal)",
                variety: "Perssimon",
                season: "Outubro - Dezembro",
                orders: "1",
                feedback: [
                    {
                        name: "Jaime Costa",
                        avatar: "/ams_g202/images/avatars/avatar.jpg",
                        title: "Recomendo",
                        comment: "Recomendo",
                        rating: "5",
                        date: "10/01/2021"
                    }
                ]
            },
            {
                id: "6",
                category: "Fruta",
                new: "NOVIDADE",
                sale: "",
                old_price: "",
                image: "/ams_g202/images/products/laranja_algarve.jpg",
                name: "Laranja do Algarve",
                price: "1,49",
                producer: "Cacial",
                quantity_left: "26",
                description: "A variedade Newhall é um fruto de tamanho médio a grande, com forma oblonga a elipsóide, 'umbigo' pequeno e casca cor de laranja intenso. A polpa é de textura média e sabor agradável, com 10 a 12 gomos e não contém sementes. A época de maturação vai de outubro a fevereiro.",
                origin: "Algarve (Portugal)",
                variety: "Newhall",
                season: "Outubro - Fevereiro",
                orders: "19",
                feedback: [
                    {
                        name: "Lucinda Alves",
                        avatar: "/ams_g202/images/avatars/avatar_3.jpg",
                        title: "Não tem sementes!!",
                        comment: "Não tem sementes nenhumas, o que é perfeito para as minhas crianças. Certamente irei comprar mais vezes, obrigado!",
                        rating: "5",
                        date: "08/12/2020"
                    },
                    {
                        name: "Rui Marques",
                        avatar: "/ams_g202/images/avatars/avatar_1.jpg",
                        title: "",
                        comment: "",
                        rating: "4",
                        date: "02/12/2020"
                    },
                    {
                        name: "Paula Ferreira",
                        avatar: "/ams_g202/images/avatars/avatar.jpg",
                        title: "O que é nacional é bom 😜",
                        comment: "Recomendo muito a vocês provarem esta variedade",
                        rating: "5",
                        date: "24/11/2020"
                    },
                    {
                        name: "Rodrigo Costa",
                        avatar: "/ams_g202/images/avatars/avatar_4.jpg",
                        title: "Laranjas bem saborosas 👌",
                        comment: "",
                        rating: "5",
                        date: "03/11/2020"
                    },
                    {
                        name: "Paula Estevão",
                        avatar: "/ams_g202/images/avatars/avatar_2.jpg",
                        title: "",
                        comment: "",
                        rating: "4",
                        date: "29/10/2020"
                    }
                ]
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
    window.location.replace("/ams_g202/marketplace/error");
}
