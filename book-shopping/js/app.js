const app = new Vue({
    el:"#main",
    data(){
        return {
            showProducts:false,
            showProduct:false,
            showHome:true,
            showBuy:false,
            showThanks:false,
            item:{},
            cart:[],
            products:[
                {
                    id:1,
                    name:"Alvido bolalik",
                    author:"Tohir Malik",
                    price:12,
                    description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur placeat",
                    rating:8,
                    image:"images/2.jpg",
                },
                {
                    id:2,
                    name:"Iblis saltanati",
                    author:"Nuriddin Ismoilov",
                    price:10,
                    description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur placeat",
                    rating:5,
                    image:"images/1.jpg",
                },
                {
                    id:3,
                    name:"Graf Monta Kristo",
                    author:"Aleksandr Dyuma",
                    price:9,
                    description:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consequatur placeat",
                    rating:6,
                    image:"images/3.jpg",
                },
                
            ]
        }
    },
    methods:{
        productList(){
            this.showProducts = true;
            this.showProduct = false;
            this.showHome = false;
            this.showBuy = false;
            this.showThanks = false;
        },
        returnHome(){
            this.showProducts = false;
            this.showProduct = false;
            this.showHome = true;
            this.showBuy = false;
            this.showThanks = false;
        },
        returnBuy(){
            this.showProducts = false;
            this.showProduct = false;
            this.showHome = false;
            this.showBuy = true;
            this.showThanks = false;
        },
        returnThanks(){
            this.showProducts = false;
            this.showProduct = false;
            this.showHome = false;
            this.showBuy = false;
            this.showThanks = true;
        },

        getProduct(id){
            let item = this.products[id]
            this.showProducts = false;
            this.showProduct = true;
            this.showHome = false;
            this.showBuy = false;
            this.showThanks = false;
            this.item = item

        }
    },
    computed:{
        getCartItemsLength(){
            // return this.cart.length || "X"

        }
    }
});



///typewritter

var home = document.getElementById('home-pages');

var typewriter = new Typewriter(home, {
    loop: true
});

typewriter.typeString('<h2>Eng qiziqarli kitoblar</h2>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<h2>Badiiy Kitoblar</h2>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<h2>Detektiv kitoblar</h2>')
    .pauseFor(2000)
    .start();