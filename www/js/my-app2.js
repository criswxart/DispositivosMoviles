// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;//acortar el codigo javascript

var welcomescreen_slides = [
  {
    id: 'slide0',
    title: 'Slide 0', // optional
    picture: '<div class="tutorialicon">♥</div>',
    text: 'Bienvenido a SearchSector, con esta apliación usted podrá saber a donde ir cuando quiera salir de fiesta'
  },
  {
    id: 'slide1',
    title: 'Slide 1', // optional
    picture: '<div class="tutorialicon">✲</div>',
    text: 'This is slide 2'
  },
  {
    id: 'slide2',
    title: 'Slide 2', // optional
    picture: '<div class="tutorialicon">♫</div>',
    text: 'This is slide 3'
  },
  {
    id: 'slide3',
    //title: 'NO TITLE',
    picture: '<div class="tutorialicon">☆</div>',
    text: 'Thanks for reading! Enjoy this app.<br><br><a onclick="welcomescreen.close();" href="#">End Tutorial</a>'
  }
];

var options = {
  'bgcolor': '#0da6ec',
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
