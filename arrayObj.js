
function Display(food){
    console.log(food.name);
    console.log(food.price);
    console.log(food.rating);
    console.log(food.description);
    console.log(food.imagelink);
    console.log("\n");
}
const obj=[
    {
        name:"Kathi Junction Special Paneer Tikka Roll",
        price:99,
        rating:4.3,
        description:"Paneer tikka cooked on charcoal flame wrapped in kathi roll.",
        imagelink:"https:2344"
    },
    {
        name:"Double Mutton Double Cheese Roll",
        price:91,
        rating:4.5,
        description:"Overloaded fresh mutton stuffing with double cheese inside.",
        imagelink:"https:244"
    },
    {
        name:"Paneer Tandoori Roll",
        price:919,
        rating:4.7,
        description:"Special tandoori taste inside with tangy paneer cubes cooked in kathi junction masala.",
        imagelink:"https:044"
    },
    {
        name:"Soya Chaap Tandoori Roll",
        price:299,
        rating:4.90,
        description:"oya chaap with tandoori flavour.",
        imagelink:"https:11111"
    }
];

for(const x of obj){
    Display(x);
}

// console.log(obj);