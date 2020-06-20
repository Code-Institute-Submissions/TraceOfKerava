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
    $(".lets-play").replaceWith("<h2 class=lets-play>Just one more choice to make:</h2>");
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
  $(".welcome").replaceWith("<p class=welcome>Congratulations for having taken the first step! Get ready to explore the center with us..</p>");
  $("<button>hey</button>").addClass("test1").addClass("foodie").appendTo(".game-border");
  $("<button>hola</button>").addClass("test1").addClass("story").appendTo(".game-border");
  $("<button>hello</button>").addClass("test1").addClass("cafe").appendTo(".game-border");
  $("<button>moi</button>").addClass("test1").addClass("shop").appendTo(".game-border");
  $(".lets-play").replaceWith("<h2 class=lets-play>Just one more choice to make:</h2>");
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
  $(".cricket").hide();
  $(".getStarted").hide().closest('section.top-text').removeClass('top-text');
  $(".welcome").text("Finland's National Cricket Ground in Kerava, located about two kilometers from central station, is available for use under reservation. Make sure to register and pay if you wish to use these grounds!");
  $(".lets-play-final").text("Get active for cricket!");
  $(".explore").text("Click below to reveal your challenge!");
  $("#map").removeClass("hide").appendTo(".game-final");
});
// Manor
$(document).one("click", ".mansion", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top_final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom_text").addClass("bottom_text-final").removeClass("bottom_text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".getReady").hide();
  $(".cricket").hide();
  $(".explore").hide();
  $(".mansion").hide();
  $(".horsies").hide();
  $(".game-border").removeClass();
  $(".hiking").hide().replaceWith("<div><p>Support the manor and buy yourself a snack or a drink from the cafe located on ground floor. Take a walk inside to view the art on display.<br></br>For additional challange write and post a review on social media with #traceofkerava.</p></div>").appendTo(".middle");
  $(".getStarted").hide().closest('section.top-text').removeClass('top-text');
  $(".welcome").text("While housing in this hill dates much further back in history, the current look of Kerava Manor is from 1928. Since 1991 the Manor has been under the town ownership and is being used to host various cultural events.");
  $(".lets-play-final").text("Enjoy the beauty of Kerava Manor!");
  $("#map").removeClass("hide").appendTo(".game-final");
});
//Stables
$(document).one("click", ".horsies", function() {
   $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top_final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom_text").addClass("bottom_text-final").removeClass("bottom_text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".getReady").hide();
  $(".cricket").hide();
  $(".explore").hide();
  $(".mansion").hide();
  $(".horsies").hide();
  $(".game-border").removeClass();
  $(".hiking").hide().replaceWith("<div><p>Walk over to the fields next to the school to take a selfie with a horse on the background and post it online with #traceofkerava.<br></br>For additional challenge sign up for a riding lesson with the school.</p></div>");
  $(".getStarted").hide().closest('section.top-text').removeClass('top-text');
  $(".welcome").replaceWith("<p><strong>Kerava Riding School</strong> has been operating in Ahjo, Kerava since 1975. The school offers lessons for all levels and ages. The grounds include a riding hall, two riding fields and a cafe for those looking for refreshments.</p>");
 $(".lets-play-final").text("Time to see some animal friends!") 
 $("#map").removeClass("hide").appendTo(".game-final");
  });
  //Hiking
$(document).one("click", ".hiking", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top_final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom_text").addClass("bottom_text-final").removeClass("bottom_text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".getReady").hide();
  $(".cricket").hide();
  $(".explore").hide();
  $(".mansion").hide();
  $(".horsies").hide();
  $(".game-border").removeClass();
  $(".hiking").hide().replaceWith("<div><p>Go for the full 2.8 kilometer circular walk on the marked nature path. Visit the highest path on Haukkavuori to take a picture of the views.<br></br>For additional challenge try to spot a Pelloporus leporinus growing on a tree trunk.</p></div>").appendTo(".middle");
  $(".getStarted").hide().closest('section.top-text').removeClass('top-text');
  $(".welcome").replaceWith("<p><strong>Haukkavuori</strong> nature reserve offers a great walk along the nature and is easy reach. As this is a protected environmnent do stay on the marked paths. The wildlife in this area like their homes undisturbed!</p>");
  $(".lets-play-final").text("Lets start being active!");
  $("#map").removeClass("hide").appendTo(".game-final");
});
// Actions for City route buttons
//Food
$(document).one("click", ".foodie", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top_final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom_text").addClass("bottom_text-final").removeClass("bottom_text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".getReady").hide();
  $(".story").hide();
  $(".explore").hide();
  $(".cafe").hide();
  $(".shop").hide();
  $(".game-border").removeClass();
$(".foodie").hide().replaceWith("<div><p>Google recipes starting with the first letter of your first name. Go to Prisma to buy the required ingredients and start cooking.<br></br>For extra challange write a review of the recipe and tag it with #traceofkerava</p></div>").appendTo(".middle");
$(".getStarted").hide().closest('section.top-text').removeClass('top-text');
$(".welcome").replaceWith("<p>Located at the very center of the town, <strong>Prisma shopping center</strong> and grocery store offers a large variety of consurmer goods for a reasonable price. We will get familiar with their food aisles today!</p>");
$(".lets-play-final").text("Explore the shops in town!");
 $("#map").removeClass("hide").appendTo(".game-final");
  });
  //Books
$(document).one("click", ".story", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top_final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom_text").addClass("bottom_text-final").removeClass("bottom_text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".getReady").hide();
  $(".story").hide();
  $(".explore").hide();
  $(".cafe").hide();
  $(".shop").hide();
  $(".game-border").removeClass();
$(".foodie").hide().replaceWith("<div><p>Find and read the first book available from first author who’s last name begings with the same letter as yours.<br></br>For an extra challenge write and post a review of the book online</p></div>").appendTo(".middle");
$(".getStarted").hide().closest('section.top-text').removeClass('top-text');
$(".welcome").replaceWith("<p>Founded back in 1925, <strong>Kerava library</strong> situated close to the railway station is a perfect destination for book lovers. So get your library card and head over there..</p>");
$(".lets-play-final").text("Let's find a book!");
 $("#map").removeClass("hide").appendTo(".game-final");
  });
//Cafe
$(document).one("click", ".cafe", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top_final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom_text").addClass("bottom_text-final").removeClass("bottom_text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".getReady").hide();
  $(".story").hide();
  $(".explore").hide();
  $(".cafe").hide();
  $(".shop").hide();
  $(".game-border").removeClass();
$(".foodie").hide().replaceWith("<div><p>Buy yourself a coffee and sit down at a table. Write a small made up story about the next customer to walk in this cafe.<br></br>For extra challenge post your story on social media and ask for reviews.</p></div>").appendTo(".middle");
$(".getStarted").hide().closest('section.top-text').removeClass('top-text');
$(".welcome").replaceWith("<p>The Kerava center a variety of cafes for meeting up friends or taking a break from shopping. One of the more establised cafes is <strong>Kulmakonditoria</strong>, also known as Kulmis. Lets go visit them this time!");
$(".lets-play-final").text("Relax and have a drink!");
 $("#map").removeClass("hide").appendTo(".game-final");
});
$(document).one("click", ".shop", function() {
  $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
  $(".top").addClass("top_final").removeClass("top");
  $(".banner-bottom").addClass("banner-bottom-final").removeClass("banner-bottom");
  $(".bottom_text").addClass("bottom_text-final").removeClass("bottom_text");
  $(".game").addClass("game-final").removeClass("game");
  $(".footer").addClass("footer-final").removeClass("footer");
  $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
  $(".getReady").hide();
  $(".story").hide();
  $(".explore").hide();
  $(".cafe").hide();
  $(".shop").hide();
  $(".game-border").removeClass();
$(".foodie").hide().replaceWith("<div><p>Find an item in color green closest possible to the one used in this site. Spend no more than five euro on your purchase!<br></br>For additional challange post a picture of your item in it's new home on social media.</p></div>").appendTo(".middle");
$(".getStarted").hide().closest('section.top-text').removeClass('top-text');
$(".welcome").replaceWith("<p>Next to various department stores, Kerava also has a number of secondhand stores with interesting collections of used items. Today we will visit <strong>Fida secondhand</strong></p>");
 $(".lets-play-final").text("Treasure hunting time!");
 $("#map").removeClass("hide").appendTo(".game-final");
  });