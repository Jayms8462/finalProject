'use strict';

function Restaurant (category, name, priceRange, address, phoneNumber, hours, link, imagePath) {
  this.category = category;
  this.name = name;
  this.priceRange = priceRange;
  this.address = address;
  this.phoneNumber = phoneNumber;
  this.hours = hours;
  this.link = link;
  this.imagePath = imagePath;
}

//Asian Restaurants
var thanhSonTofu = new Restaurant ('asian', 'Thanh Son Tofu', '$', '1248 S King St, Seattle, WA 98144', '(206) 320-1316', '8AM to 6PM', 'https://www.yelp.com/biz/thanh-son-tofu-seattle-3?osq=Than+Son+Tofu', '/images/thanhSonTofu.jpg');
var aPieceOfCake = new Restaurant ('asian', 'A Piece Of Cake', '$', '2401 2nd Ave, Seattle, WA 98121', '(206) 623-8284', '9AM to 9PM', 'https://www.yelp.com/biz/a-piece-of-cake-seattle', '/images/pieceOfCake.jpg');
var moonLight = new Restaurant ('asian', 'Moon Light Cafe', '$', '1919 S Jackson St, Seattle, WA 98144', '(206) 322-3378', '11:00AM to 9:30PM', 'https://www.yelp.com/biz/moonlight-cafe-seattle', '/images/moonLight.jpg');
var bambooGarden = new Restaurant ('asian', 'Bamboo Garden Vegetarian', '$$', '364 Roy Street, Seattle, WA 98109', '(206) 282-6616', '11AM to 10PM', 'https://www.yelp.com/biz/bamboo-garden-vegetarian-cuisine-seattle', '/images/bambooGarden.jpg');
var wedgwood = new Restaurant ('asian', 'Wedgwood Vegetarian Thai', '$$', '420 Broadway E., Seattle, WA 98102', '(206) 724-0655', '12:00PM to 9:30PM', 'https://www.yelp.com/biz/wedgwood-ii-vegetarian-thai-seattle', '/images/wedgwood.jpg');
var roti = new Restaurant ('asian', 'Roti Indian Cuisine', '$$', '530 Queen Anne Ave N, Seattle, WA 98109', '(206) 216-7684', '11:30AM to 9:45PM', 'https://www.yelp.com/biz/roti-indian-cuisine-seattle', '/images/roti.jpg');
var harbor = new Restaurant ('asian', 'Harbor City Restaurant', '$$$', '707 S King St., Seattle, WA 98104', '(206) 621-2228', '8:30AM to 11:00PM', 'https://www.yelp.com/biz/harbor-city-restaurant-seattle', '/images/harborCity.jpg');
var sevenBeef = new Restaurant ('asian', 'Seven Beef', '$$$', '1305 E Jefferson St., Seattle WA 98122', '(206) 328-7090', '5:00PM to 10:00PM', 'https://www.yelp.com/biz/seven-beef-seattle', '/images/asianSevenBeef.jpg');
var shiros = new Restaurant ('asian', 'Shiro\'s', '$$$', '2401 2nd Ave, Seattle WA 98121', '(206) 443-9844', '5:30PM to 10:30PM', 'https://www.yelp.com/biz/shiros-seattle', '/images/harborCity.jpg');
//Mexican Restaurants
var tacosC = new Restaurant ('mexican', 'Tacos Chukis', '$', '219 Broadway E Seattle, WA 98102', '(206) 328-4447', '11:00AM to 10:00pm', 'https://www.yelp.com/biz/tacos-chukis-seattle', '/images/TacoChuk.jpg');
var elCam = new Restaurant ('mexican', 'El Camión', '$', '6416 15th Ave NW Seattle, WA 98107 at 64th St Ballard', '(206) 784-5411', '9:30AM to 10:00pm', 'https://www.yelp.com/biz/el-cami%C3%B3n-seattle-7', '/images/ElCamion.jpg');
var tacosEl = new Restaurant ('mexican', 'Tacos El Asadero', '$', '3517 Rainier Ave S Seattle, WA 98118 Columbia City, Mount Baker', '(206) 722-9977', '10:00AM to 10:00PM', 'https://www.yelp.com/biz/tacos-el-asadero-seattle-2', '/images/tacos.jpg');
var fogon = new Restaurant ('mexican', 'Fogón Cocina Mexicana', '$$', '600 E Pine St Seattle, WA 98122 b/t Boylston Ave & Belmont Ave  Capitol Hill', '(206) 320-7777', '11:00AM to 11:00PM', 'https://www.yelp.com/biz/fog%C3%B3n-cocina-mexicana-seattle-2', '/images/Fogon.jpg');
var villaEs = new Restaurant ('mexican', 'Villa Escondida', '$$', '2203 1st Ave Seattle, WA 98121 b/t Bell St & Blanchard St  Belltown', '(206) 448-2393', '11:00AM to 10:00PM', 'https://www.yelp.com/biz/villa-escondida-seattle-3', '/images/Villa.jpg');
var elLegend = new Restaurant ('mexican', 'El Legendario Mexican Restaurant', '$$', '4705 Aurora Ave N Seattle, WA 98103 b/t 47th St & 48th St  Fremont', '(206) 539-9731', '11:00AM to 10:00PM', 'https://www.yelp.com/biz/el-legendario-mexican-restaurant-seattle', '/images/Legendario.jpg');
var laAnt = new Restaurant ('mexican', 'La Antigua Casa Maria', '$$$', '1100 N 115th St Ste 101 Seattle, WA 98133 b/t N Stone Ave & N Aurora Ave Haller Lake', '(206) 420-1158', '11:00AM to 10:00PM', 'https://www.yelp.com/biz/la-antigua-casa-maria-seattle', '/images/LaAntigua.jpg');
var zocalo = new Restaurant ('mexican', 'Zocálo', '$$$', '224 Occidental Ave S Seattle, WA 98104 b/t Main St & Washington St  Pioneer Square', '(206) 623-0550', '11:00AM to 10:00PM', 'https://www.yelp.com/biz/zoc%C3%A1lo-seattle', '/images/Zocalo.jpg');
var taqueria = new Restaurant ('mexican', 'Taqueria Cantina', '$$$', '2630 1st Ave Seattle, WA 98121 b/t Cedar St & Vine St Belltown','(206) 995-8588', '11:00AM to 11:00PM', 'https://www.yelp.com/biz/taqueria-cantina-seattle', '/images/Taqueria.jpg');

//Italian Restaurants
var moLuPasta = new Restaurant ('Italian','Mo & Lu Pasta','$','12518 Lake City Way NE, Seattle, WA 98125','(206) 362-1396','4:00PM-10:00PM', 'https://www.yelp.com/biz/ristorante-doria-seattle', '/images/molupasta.jpg');
var bizzarro = new Restaurant ('Italian','Bizzarro Italian Cafe','$','1307 N 46th St, Seattle, WA 98103','(206) 632-7277','5:00PM-10:00PM', 'https://www.yelp.com/biz/bizzarro-italian-caf%C3%A9-seattle-2', '/images/bizzarro.jpg');
var loPriore = new Restaurant ('Italian','LoPriore Brothers Pasta Bar','$','1530 Post Alley, Seattle, WA 98101','(206) 621-7545','10:00AM-5:00PM', 'https://www.yelp.com/biz/lopriore-brothers-pasta-bar-seattle', '/images/lopriore.jpg');
var salvatoreRistorante = new Restaurant ('Italian','Salvatore Ristorante Italiano','$$','6100 Roosevelt Way NE, Seattle, WA 98105','(206)527-9301','5:00PM-10:00PM', 'Salvatore Ristorante Italiano', '/images/salvatore.jpg');
var mammaMelina = new Restaurant ('Italian','Mamma Melina Ristorante & Pizzeria','$$','5101 25th Ave NE, Seattle, WA 98105','(206) 632-2271','11:00AM-11:00PM', 'https://www.yelp.com/biz/mamma-melina-ristorante-pizzeria-seattle?osq=Mamma+Melina+Ristorante+%26+Pizzeria', '/images/mammaMelina.jpg');
var buca = new Restaurant ('Italian','Buca di Beppo','$$','701 9th Ave N, Seattle, WA 98109','(206) 244-2288','11:00AM-11:00PM', 'https://www.yelp.com/biz/buca-di-beppo-lynnwood-4', '/images/buca.jpg');
var tavolata = new Restaurant ('Italian','Tavolata','$$$','2323 2nd Ave, Seattle, WA 98121','(206) 838-8008','5:00PM-11:00PM', 'https://www.yelp.com/biz/tavolata-seattle', '/images/Tavolata.jpg');
var doria = new Restaurant ('Italian','Ristroante Doria','$$$','4759 Roosevelt Way NE, Seattle, WA 98105','(206)466-2380','4:00PM-10:00PM', 'https://www.yelp.com/biz/ristorante-doria-seattle', '/images/doria.jpg');
var spinasse = new Restaurant ('Italian','Spinasse','$$$','1531 14th Ave, Seattle, WA 98122','(206) 251-7673','5:00PM-11:00PM', 'https://www.yelp.com/biz/cascina-spinasse-seattle', '/images/spinasse.jpg');

var restaurants;

restaurants = [thanhSonTofu, aPieceOfCake, moonLight, bambooGarden, wedgwood, roti, harbor, sevenBeef, shiros, doria, bizzarro, loPriore, salvatoreRistorante, mammaMelina, buca, tavolata, doria, spinasse, tacosC, elCam, tacosEl, fogon, villaEs, elLegend, laAnt, zocalo, taqueria];

function getRestaurant(category, priceRange){
  var result = [];

  for(var i = 0; i < restaurants.length; i++){
    if ((restaurants[i].category === category) && (restaurants[i].priceRange === priceRange)){
      result.push(restaurants[i]);
    }
    return result;
  }
}

///test getRestaurant function
var recommendedRestaurant = getRestaurant('asian', '$$$');
console.log (recommendedRestaurant);

var img1 = document.getElementById('img1');
console.log('img1 is: ' + img1);
var img2 = document.getElementById('img2');
console.log('img2 is: ' + img2);
var img3 = document.getElementById('img3');

function displayRecommendedRestaurants(){

///test function getRestaurant
  var recommendedRestaurant = getRestaurant('asian', '$$$');
  console.log(recommendedRestaurant);

//var img1 = document.getElementById('img1');
//var img2 = document.getElementById('img2');
//var img3 = document.getElementById('img3');

  //img1.src = recommendedRestaurant[0].imagePath;
  //img2.src = recommendedRestaurant[1].imagePath;
  //img3.src = recommendedRestaurant[2].imagePath;
}

displayRecommendedRestaurants();

img1.addEventListener('click', handleClick, false);
img2.addEventListener('click', handleClick, false);
img3.addEventListener('click', handleClick, false);

var selectedCategory;
var selectedPriceRange;

//still working on the handleClick function
function handleClick(event){
  var selectedImageId = event.target.id;
  console.log('selectedImageId is: ' + selectedImageId);

  if(selectedImageId === 'img1'){
    selectedCategory = 'asian';
  }

  if(selectedImageId === 'img2'){
    selectedCategory = 'Italian';
  }

  if (selectedImageId === 'img3'){
    selectedCategory = 'mexican';
  }

  displayPriceRangeImages();

  if (selectedImageId === 'img1'){
    selectedPriceRange = '$';
  }

  if (selectedImageId === 'img2'){
    selectedPriceRange = '$$';
  }

  if (selectedImageId === 'img3'){
    selectedPriceRange = '$$$';
  }

  console.log('The selected category is: ' + selectedCategory);
  console.log('The selected price is: ' + selectedPriceRange);

  //getRestaurant();
}

function displayPriceRangeImages(){
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');

  img1.src = './images/dollarSigns/lowPrice.jpg';
  img2.src = './images/dollarSigns/mediumPriceRange.jpg';
  img3.src = './images/dollarSigns/highPriceRange.jpg';
}
