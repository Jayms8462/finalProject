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

var thanhSonTofu = new Restaurant ('asian', 'Thanh Son Tofu', '$', '1248 S King St, Seattle, WA 98144', '(206) 320-1316', '8AM to 6PM', '', '');
var aPieceOfCake = new Restaurant ('asian', 'A Piece Of Cake', '$', '2401 2nd Ave, Seattle, WA 98121', '(206) 623-8284', '9AM to 9PM', 'apieceofcakeseattle.com', '');
var moonLight = new Restaurant ('asian', 'Moon Light Cafe', '$', '1919 S Jackson St, Seattle, WA 98144', '(206) 322-3378', '11:00AM to 9:30PM', '', '');
var bambooGarden = new Restaurant ('asian', 'Bamboo Garden Vegetarian', '$$', '364 Roy Street, Seattle, WA 98109', '(206) 282-6616', '11AM to 10PM', 'http://www.bamboo-garden.co/', '');
var wedgwood = new Restaurant ('asian', 'Wedgwood Vegetarian Thai', '$$', '420 Broadway E., Seattle, WA 98102', '(206) 724-0655', '12:00PM to 9:30PM', 'http://wedgwoodii.com/', '');
var roti = new Restaurant ('asian', 'Roti Indian Cuisine', '$$', '530 Queen Anne Ave N, Seattle, WA 98109', '(206) 216-7684', '11:30AM to 9:45PM', 'http://rotirestaurantseattle.com/', '');
var harbor = new Restaurant ('asian', 'Harbor City Restaurant', '$$$', '707 S King St., Seattle, WA 98104', '(206) 621-2228', '8:30AM to 11:00PM', '', './images/mexican/Fogon.jpg');
var sevenBeef = new Restaurant ('asian', 'Seven Beef', '$$$', '1305 E Jefferson St., Seattle WA 98122', '(206) 328-7090', '5:00PM to 10:00PM', 'sevenbeef.com', './images/mexican/Villa.jpg');
var shiros = new Restaurant ('asian', 'Shiro\'s', '$$$', '2401 2nd Ave, Seattle WA 98121', '(206) 443-9844', '5:30PM to 10:30PM', 'https://shiros.com/', './images/mexican/Zocalo.jpg');

///'./images/mexican/Zocalo.jpg'
var restaurants;

restaurants = [thanhSonTofu, aPieceOfCake, moonLight, bambooGarden, wedgwood, roti, harbor, sevenBeef, shiros];

function getRestaurant(category, priceRange){
  var result = [];

  for(var i = 0; i < restaurants.length; i++){
    if ((restaurants[i].category === category) && (restaurants[i].priceRange === priceRange)){
      result.push(restaurants[i]);
    }
  }
  console.log(result);
  return result;
}

function display(){
///test function getRestaurant
var recommendedRestaurant = getRestaurant('asian', '$$$');
console.log(recommendedRestaurant);

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

img1.src = recommendedRestaurant[0].imagePath;
img2.src = recommendedRestaurant[1].imagePath;
img3.src = recommendedRestaurant[2].imagePath;
}

display();
