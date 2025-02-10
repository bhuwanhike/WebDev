
function rand(){
    return Math.floor(Math.random()*3)+1;
}
let adj = {
    1: "Crazy", 2: "Amazing", 3:"Fire"
}
let shop_name = {
    1:"Engine", 2:"Foods", 3:"Garments"
}
let word = {
    1:"Bros", 2:"Limited", 3:"Hub"
}
alert("Your name could be: " + adj[rand()]+shop_name[rand()]+word[rand()]);