# MokeSell - FED2024Asg2_P04_Team2
MokeSell x Hoyoverse, a collaborative e-commerce site which features products from HoYo's 4 major games - Genshin Impact, Honkai: Star Rail, Honkai Impact 3, and Zenless Zone Zero.<br>
You can visit the website here: [MokeSell](https://xueuee.github.io/FED2024Asg2_P04_Team2/)

## Design Process
Designing from a user's perspective, we wanted to ensure that users could easily find and buy products from their favourite HoYo games. This ensures ease of access for users as everything is on ONE website, along with the fact that the website is easy to use and understand.<br>

You can view the wireframe here: [Wireframe](https://www.figma.com/design/AhdB5w0bRhpVujYtgJ5A7D/FED2024Assg2_P04_Team2_Simple_Wireframe?node-id=0-1&t=jNoSWip6f8533o0H-1)<br>

and the github repository here: [Github Repository](https://github.com/xueuee/FED2024Asg2_P04_Team2)

## Features
### Existing Features
* Feature 1 - LOTTIE
  * Upon opening the website, users are greeted with a "Loading..." animation created with Lottie. This animation also plays when user clicks on "HOME" in the navigation bar.

* Feature 2 - NAVIGATION BAR
  * At the top of the site, right below the header, the navigation bar links users to HOME, BROWSE, ACCOUNT, ABOUT, and the cart. There is also a bell which displays notifications when clicked on. When user hovers over a part of the navigation bar (e.g HOME), the word will be coloured light blue and underlined.
  
* Feature 3 - SIDEBAR
  * To the left of the HOME and BROWSE pages, there is a sidebar. The sidebar consists of filter options - 'Filter by games' and 'Categories' which allows users to filter the products listed by any of the 4 games and categories like badges/pins, clothing, peripherals, keychains, and plushies.
  
* Feature 4 - PRODUCTS
  * On the HOME and BROWSE pages, there are several products listed. When user mouses over a product, there is a hover and box-shadow effect which can indicate to user which product they are about to check out. After user clicks on a product, they will be directed to that specified product's details which contains the product's name, price, and description. Users can then decide which variant of the product and specify the quantity they want to be added to the cart.

* Feature 5 - RECOMMENDED PRODUCTS
  * On each specified product's page, there is a "You may also like..." section below. The products featured in that section are the products that are currently listed on the site. A feature we added was that they will be randomised each time, meaning the products in that section will - firstly, NEVER include the specified product the user is CURRENTLY looking at and secondly, will always consist of different products.

* Feature 6 - CART
  * After user adds a product they want to the cart, users can click on the cart icon located in the navigation bar to check what they have added to their cart so far. Users are able to view their total amount and can then head to checkout by clicking the "Checkout" button at the bottom of the page, or they can choose to remove an item from their cart as well. When users try to checkout with an empty cart, the website will give a prompt saying the cart is empty, restricting the user from being redirected to the checkout page.

* Feature 7 - CHECKOUT
  * After users click the Checkout button in their cart, they are redirected to a checkout page. On the left, they are prompted to fill in their billing details and select a payment method and on the right, they are able to view their order along with insert a discount code along with the "Place order" button. Discounts will only be applied if the discount code is VALID. Upon placing their orders, users are prompted by the site that their order was placed successfully, and will be redirected to the order confirmation page.

* Feature 8 - ACCOUNT
  * On the ACCOUNT page, users are able to see their username, active codes for the games, a daily check-in section, and more options below.
  * Daily Check-in: Users can check in everyday with the daily check-in to claim in-game rewards. Not only do the rewards for each day vary, but we have made sure that users are required to sign-in to an account to check-in. If they signed in as a guest, they will not be able to claim the daily check-in and will see a "Please sign in to check-in!" text above the rewards. However if they are signed into a proper account, they are able to click on the reward to claim them. Upon claiming, the rewards are greyscaled which indicates that it has already been claimed and the site gives a prompt displaying what rewards the user just received. If users have already checked-in today and try to claim another reward, the site gives them a prompt indicating that they have already checked in for today.
  * There is also a logout button beside the user's profile picture. Users are redirected to the login page after the button is clicked.

* Feature 9 - LOGIN/SIGNUP
  * Users will be required to either login if they have an existing account, or signup and create a new account. They can also choose to continue as a guest but they will be limited and restricted from certain features. We have also added a special background so the page does not look so dull.

* Feature 10 - FAQ
  * On the ABOUT page, users are greeted with frequently asked questions (FAQ). Users are able to click on the questions listed to view the answers. When users hover over the questions, they are highlighted in another colour so it is easy for users to see which questions they are going to click on. At the bottom of the page, there is a section where users can enter their emails to subscribe for the site's latest deals.

### Features Left to Implement
* ACCOUNT - OTHERS
  * At the bottom of the ACCOUNT page, there are 3 other options. These options are supposed to lead to (from L - R) user's wishlist, order history, and user's ratings for products that have already been received.

* PRODUCTS - HOYOCURRENCY
  * If you look closely at the ACCOUNT and CHECKOUT pages, there is a point system called "Hoyocurrency". Our initial idea was to make it so that when a user places their order and sees it through, the user gains hoyocurrency. Each product will have a different amount of hoyocurrency and users can use it to gain certain benefits.

* NAVIGATION - NOTIFICATIONS
  * The notifications are to be used to notify users when a "Out-of-stock" product is back in stock, or when they orders' status change (e.g Preparing > In Transit > Delivered)

* NAVIGATION - SEARCH
  * Users can use the search bar to search for listed products easily.

## Technologies Used
* [Visual Studio Code](https://code.visualstudio.com)

* [HTML](https://en.wikipedia.org/wiki/HTML)

* [CSS](https://en.wikipedia.org/wiki/CSS)

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

* [RestDB](https://restdb.io)

* [Figma](https://www.figma.com)

## Testing
NOTE - The following tests can be performed on the ready-made accounts, or you can also create your own.<br>
Usernames: User1, User2<br>
Passwords: user1, user2<br>
1. Navigation Testing
   1. Ensure you are able to navigate to each respective page without errors.
2. Account Testing
   1. Ensure you can signup and login to your account with no errors. 
   2. Your username should be displayed on the top of HOME page and on the ACCOUNT page.
   3. If you are signed into your account, try the daily check-in. Ensure that you are able to check-in today, and that you are not able to when signed in as Guest.
3. Product + Cart Testing
   1. Upon opening the website - click on any product on the HOME or BROWSE page, select a variant, and ensure that you are able to add it to cart. You may choose to test the filter and filter the products by their game and categories.
   2. Once item is in the cart, head to the your cart by clicking the cart icon. Verify the products you selected are in the cart and proceed to checkout.
   3. On the checkout screen, fill out your billing details and place order. You should then be redirected to the order confirmation page after successfully placing your order.
   4. Verify that the cart is now empty.
4. FAQ Testing
   1. Ensure you are able to click on the questions and reveal their answers on the ABOUT page.
5. Media Query
   1. Ensure that mobile view is properly styled (e.g images should fit and be equally sized, sidebar does not cover the entire page, etc.)
   2. Header and Footer should fit into the website properly.
   3. Ensure every feature is accessible in both desktop and mobile view.

## Credits
### Content
All rights belong to their respective owners, products shown and events stipulated in the website belong to HoYoverse/Cognosphere. We do not claim ourselves as them, this website is purely fictional.

### Media
* Lottie Animation made by [Wee Xin Yi](https://github.com/vynniex)
* HoYoverse Logo and Games Icons taken from [HoYoverse Official](https://www.hoyoverse.com/en-us/about-us)
* Search Icon made by [Smashicons](https://www.flaticon.com/authors/smashicons) from [Flaticon](https://www.flaticon.com/)
* Other Icons (cart, bell, etc.) made by [FontAwesome](https://fontawesome.com/icons)
* Product photos and details taken from [HoYoMerch](https://hoyomerch.com/shop/) and [Hoyo.global](https://hoyo.global)
* Login/Signup animated background taken from [Motion Backgrounds](https://motionbgs.com/teyvats-special-delivery)
* Check-in rewards icons taken from [Genshin Impact Wiki](https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki)
* Header Background taken from [Adobe Stock](https://stock.adobe.com/images/night-black-starry-sky-horizontal-background/490577775)

### Acknowledgements
* We received inspiration for this project from our love of HoYoverse games as we ourselves play them, and the captivating products HoYoverse manages to put out of our favourite characters. The daily check-in was inspired by HoYo's official site & mobile app - [HoYoLab](https://www.hoyolab.com/home) where players can use it to check out character guides, check-in for rewards, get updates on the games, etc. 