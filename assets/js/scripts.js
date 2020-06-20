// Actions for landing page buttons
$(document).ready(function(){
$(".BtnSuburbs").one("click", function() {
    $(".BtnCity").hide();
  $(".getStarted").replaceWith("<p class=getStarted>The areas outside the town center offer various options for relaxation as well as physical activities.</p>"); 
  $("<p>We have selected a few for this route but suggest you take a look at the official Kerava website for more inspiration.</p>").addClass("hidden");
  $(".welcome").replaceWith("<p class=welcome>Congratulations for having taken the first step! Get ready to explore the suburbs with us..</p>");
  $("<button>hey</button>").addClass("test1").addClass("horsies").appendTo(".game-border");
  $("<button>hola</button>").addClass("test1").addClass("hiking").appendTo(".game-border");
  $("<button>hello</button>").addClass("test1").addClass("mansion").appendTo(".game-border");
  $("<button>moi</button>").addClass("test1").addClass("cricket").appendTo(".game-border");
    $(".lets-play").replaceWith("<h2 class=lets-play>Just one more choise to make:</h2>");
  $(".BtnSuburbs").hide();
  $(".getReady").text("Lets see what is in store of us today!");
  $(".explore").text("Go ahead, click on the most appealing photo:");
});
});
$(document).ready(function(){
$(".BtnCity").one("click", function() {
    $(".BtnSuburbs").hide();
  $(".getStarted").replaceWith("<p class=getStarted>The town center, while compact, has a variety of cultural, culinary and other leisure time activities to offer.</p>");
  $("<p>We will explore some of these here but be sure to check out others as well later on.</p>").addClass("hidden");
  $(".welcome").replaceWith("<section class=top-text><p>Congratulations for having taken the first step! Get ready to explore the center with us..</p></section>");
  $("<button>hey</button>").addClass("test1").addClass("foodie").appendTo(".game-border");
  $("<button>hola</button>").addClass("test1").addClass("story").appendTo(".game-border");
  $("<button>hello</button>").addClass("test1").addClass("cafe").appendTo(".game-border");
  $("<button>moi</button>").addClass("test1").addClass("shop").appendTo(".game-border");
  $(".lets-play").replaceWith("<h2 class=lets-play>Just one more choise to make:</h2>");
  $(".BtnCity").hide();
  $(".getReady").text("So lets see what is in store of us today!");
  $(".explore").text("Go ahead, click on the most appealing photo:");
  });
});
// Actions for Suburb route buttons
// Cricket
$(document).one("click", ".cricket", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top_final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom_text").addClass("bottom_text-final").removeClass("bottom_text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".getReady").hide();
  $(".explore").hide();
  $(".mansion").hide();
  $(".horsies").hide();
  $(".game-border").removeClass();
  $(".hiking").hide().replaceWith("<div><p>Walk over to the Kerava National Cricket Ground Pavilion and take a picture of yourself infront of the building.<br></br>For additional challenge sign up for session of Cricket with KCC to test your skills!</p></div>").appendTo(".middle");
  $(".chal").addClass("test1").addClass("cricket-challange");
  $(".cricket").hide();
  $(".getStarted").hide().closest('section.top-text').removeClass('top-text');
  $(".welcome").text("Finland's National Cricket Ground in Kerava, located about two kilometers from central station, is available for use under reservation. Make sure to register and pay if you wish to use these grounds!");
  $(".lets-play").text("Get active for cricket!");
  $(".explore").text("Click below to reveal your challenge!");
  $("#map").removeClass("hide").appendTo(".game-final");
});
$(document).one("click", ".mansion", function() {
  $(".cricket").hide();
  $(".horsies").replaceWith("<button class=test1>map</button>");
  $(".hiking").replaceWith("<button class=chal>Your Challenge</button>");
  $(".chal").addClass("test1").addClass("mansion-challenge");
  $(".mansion").hide();
  $(".getStarted").text("Although the housing in this hill dates much further back in history, the current look of Kerava Manor is from 1928. Since 1991 the Manor has been under the town ownership and is used to host various cultural events.");
  $(".welcome").text("Let's fly back in time and enjoy the beauty of Kerava Manor today!");
  $(".explore").text("Click below to reveal your challenge!");
  $("#map").removeClass("hide").appendTo(".game-border").addClass("test1");
});
$(document).one("click", ".mansion-challenge", function() {
  $("<div><p>Support the manor and buy yourself a snack or a drink from the cafe located on ground floor. Take a walk inside to view the art pieces on display.<br></br>For additional challange write and post a review of the experience with tagging it with #traceofkerava.</p></div>").appendTo(".middle");
  }); 
$(document).one("click", ".horsies", function() { 
  $(".mansion").hide();
  $(".hiking").replaceWith("<button class=test1>map</button>");
  $(".cricket").replaceWith("<button class=chal>Your Challenge</button>");
  $(".chal").addClass("test1").addClass("horsies-challenge");
  $(".horsies").hide();
  $(".getStarted").text("Kerava Riding School (Keravan Ratsastuskoulu) has been operating in Ahjo, Kerava since 1975. The school offers lessons for all levels and ages. The grounds include a riding hall, two riding fields and a cafe for those looking for refreshments.");
  $(".welcome").text("Time time see some animal friends and enjoy fresh air!");
  $(".explore").text("Click below to reveal your challenge!");
  $("#map").removeClass("hide").appendTo(".game-border").addClass("test1");
});
$(document).one("click", ".horsies-challenge", function() {
  $("<div><p>Walk over to the fields next to the school. On most days you will be able to a few horses or ponies standing around. Take a selfie with a horse on the background and post it online with #traceofkerava.<br></br>For additional challenge sign up for a riding lesson with the school</p></div>").appendTo(".middle");
  }); 
$(document).one("click", ".hiking", function() {
  $(".mansion").hide();
  $(".horsies").replaceWith("<button class=test1>map</button>");
  $(".cricket").replaceWith("<button class=chal>Your Challenge</button>");
  $(".chal").addClass("test1").addClass("hiking-challenge");
  $(".hiking").hide()
  $(".getStarted").text("Haukkavuori nature reserve offers a great walk along the nature and is easy reach either from Lahdentie or Kaskelantie. As this is a protected environmnent do stay on the marked paths. The wildlife in this area like their homes undisturbed!");
  $(".welcome").text("Put on your confortable shoes, time to get active!");
  $(".explore").text("Click below to reveal your challenge!");
  $("#map").removeClass("hide").appendTo(".game-border").addClass("test1");
});
$(document).one("click", ".hiking-challenge", function() {
  $("<div><p>Go for the full 2.8 kilometer circular walk on the marked nature path. Visit the highest path on Haukkavuori and take a picture of the views from there<br></br>For additional challenge, and without leaving the path try to spot a Pelloporus leporinus (Pihkakääpä) growing on a tree trunk.</p></div>").appendTo(".middle");
  }); 
// Actions for City route buttons
$(document).one("click", ".foodie", function() {
  $(".story").hide();
  $(".cafe").replaceWith("<button class=test1>map</button>");
  $(".shop").replaceWith("<button class=chal>Your Challenge</button>");
  $(".chal").addClass("test1").addClass("foodie-challenge");
  $(".foodie").hide();
  $(".getStarted").text("Located at the very center of the town, Prisma shopping center and grocery store offers a large variety of consurmer goods for a reasonable price. We will get familiar with their food aisles today so grab your wallet and head over there!");
  $(".welcome").text("Time to explore the shops in town!");
  $(".explore").text("Click below to reveal your challenge!");
  $("#map").removeClass("hide").appendTo(".game-border").addClass("test1");
});
$(document).one("click", ".foodie-challenge", function() {
  $("<div><p>Google recipes starting with the first letter of your first name and select the first possible option. Buy all the required ingredients and prepare the dish yourself.<br></br>For extra challange write a review of the recipe and tag it with #traceofkerava</p></div>").appendTo(".middle");
  }); 
$(document).one("click", ".story", function() {
  $(".foodie").hide();
  $(".cafe").hide();
  $(".shop").replaceWith("<button class=chal>Your Challenge</button>");
  $(".chal").addClass("test1").addClass("story-challenge");
  $(".story").hide();
  $(".getStarted").text("Founded back in 1925, Kerava library situated close to the railway station is a perfect destination to find something to read or to simply enjoy a bit of peace and quite. So get your library card, an open mind and head over there..");
  $(".welcome").text("As you must have guessed, for this option we will need to find a book!");
  $(".explore").text("Click below to reveal your challenge!");
  $("#map").removeClass("hide").appendTo(".game-border").addClass("test1");
});
$(document).one("click", ".story-challenge", function() {
  $("<div><p>Read the first book available from an author who’s last name begings with the same letter as yours.  If you‘ve read that book, go on to the next until you find one you haven't.<br></br>For an extra challenge write a review of the chosen book and remember to tag it with #traceofkerava</p></div>").appendTo(".middle");
}); 
$(document).one("click", ".cafe", function() {
  $(".foodie").hide();
  $(".cafe").replaceWith("<button class=test1>map</button>");
  $(".shop").replaceWith("<button class=chal>challenge</button>");
  $(".chal").addClass("test1").addClass("cafe-challenge");
  $(".story").hide();
  $(".getStarted").text("The Kerava center offers multiple little cafes for meeting up friends or taking a break from shopping. One of the more establised cafes is Kulmakonditoria, also known as Kulmis. Lets go visit them this time!");
  $(".welcome").text("This is the time to take it easy and enjoy a small break");
  $(".explore").text("Click below to reveal your challenge!");
  $("#map").removeClass("hide").appendTo(".game-border").addClass("test1");
});
$(document).one("click", ".cafe-challenge", function() {
  $("<div><p>Buy yourself a coffee or tea of your choosing and sit down at a table. Write a small story about the next customer to walk in this cafe, making up their background and the reason they are at the cafe today.<br></br>For extra challenge post your story online with tag #traceofkerava.</p></div>").appendTo(".middle");
  }); 
$(document).one("click", ".shop", function() {
  $(".story").hide();
  $(".cafe").replaceWith("<button class=test1>map</button>");
  $(".shop").replaceWith("<button class=chal>challenge</button>");
  $(".chal").addClass("test1").addClass("shop-challenge");
  $(".foodie").hide();
  $(".getStarted").text("Next to various department stores, Kerava also has a number of secondhand stores with interesting collections of used items. Today we will go visit Fida secondhand to see what they have on offer");
  $(".welcome").text("Let's go find an old treasure and give it a new home!");
  $(".explore").text("Click below to reveal your challenge!");
  $("#map").removeClass("hide").appendTo(".game-border").addClass("test1");
});
$(document).one("click", ".shop-challenge", function() {
  $("<div><p>Find an item in color green closest possible to the one used in this site. Spend no more than five euro on your purchase!<br></br>For additional challange post a picture of yourself with your item with tag #traceofkerava.</p></div>").appendTo(".middle");
  }); 