// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;//acortar el codigo javascript

var welcomescreen_slides = [
  {
    id: 'slide0',
    title: 'Hola buenas, Bienvenido a e-commerce!', // optional
    picture: '<img src="http://galaxyworld.ir/wp-content/uploads/2017/05/google-maps-new-interface1-320x220.jpg">',
    text: 'con esta aplicación usted podrá saber a donde ir cuando quieras salir'
  },
  {
    id: 'slide1',
    picture: '<img src="https://3.bp.blogspot.com/-wdAonlry0To/WafHu8ehuNI/AAAAAAAAISw/3DzDdr9NLzkC24ra3NoC9_6OajtuqThXwCLcBGAs/s1600/flora.jpg">',
    text: 'Podrás encontrar el lugar que buscas'
  },
  {
    id: 'slide2',
    picture: '<img src="https://www.whatifspecialist.com/wp-content/uploads/2012/03/bossy.jpg">',
    text: 'Donde quiera que estés te indicará las mejores opciones'
  },
  {
    id: 'slide3',
    picture: '<img src="https://my.datasphere.com/files/mydatasphere/styles/ls_tile/public/1430173647_ThinkstockPhotos-454388475.jpg">',
    text: 'Disfruta de la aplicación!.<br><br><a onclick="welcomescreen.close();" href="#">Comenzar app</a>'
  }
];

var options = {
  'bgcolor': 'blue',
  'fontcolor': '#fff',
  'closeButtonText':'Omitir',
  'open':false
}

var welcomescreen = myApp.welcomescreen(welcomescreen_slides, options);
// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
//codigo nuevo, primera linea llama al index en donde esta el deviceready para llamarlo
$$(document).on('deviceready',initapp);
// on escuchar un evetno que se produzca
function initapp(){
  console.log("dispositivo listo!!");
  if (localStorage.getItem("ws")==null) {
    localStorage.setItem("ws","ok");
    welcomescreen.open();
  }

  $$('#iniciar').on("click",click_btn);
}
function click_btn(){
  document.location = "main.html"
}
