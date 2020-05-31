// Actions for landing page buttons
$(document).ready(function(){
$(".BtnSuburbs").one("click", function() {
    $(".BtnCity").hide();
  $(".getStarted").text("The areas outside the town center offer various options for both relaxation and physical activities. We have selected a few for this route but suggest you take a look at the official Kerava website for more inspiration.");
  $(".welcome").text("Congratulations for having taken the first step! Get ready to explore the suburbs with us..");
  $("<button>hey</button>").addClass("test1").addClass("horsies").appendTo(".middle");
  $("<button>hola</button>").addClass("test1").addClass("hiking").appendTo(".middle");
  $("<button>hello</button>").addClass("test1").addClass("mansion").appendTo(".middle");
  $("<button>moi</button>").addClass("test1").addClass("cricket").appendTo(".middle");
  $(".BtnSuburbs").hide();
  $(".getReady").text("So lets see what is in store of us today!");
  $(".explore").text("Go ahead, click on the most appealing photo:");
});
});
$(document).ready(function(){
$(".BtnCity").one("click", function() {
    $(".BtnSuburbs").hide();
  $(".getStarted").text("The town center, while compact, has a variety of cultural, culinary and other leisure time activities to offer. We will explore some of these here but be sure to check out others as well later on.");
  $(".welcome").text("Congratulations for having taken the first step! Get ready to explore the center with us..");
  $("<br><br>").appendTo(".middle");
  $("<button>hey</button>").addClass("test1").addClass("foodie").appendTo(".middle");
  $("<button>hola</button>").addClass("test1").addClass("story").appendTo(".middle");
  $("<button>hello</button>").addClass("test1").addClass("cafe").appendTo(".middle");
  $("<button>moi</button>").addClass("test1").addClass("shop").appendTo(".middle");
  $(".BtnCity").hide();
  $(".getReady").text("So lets see what is in store of us today!");
  $(".explore").text("Go ahead, click on the most appealing photo:");
  });
});
// Actions for Suburb route buttons
$(document).on("click", ".cricket", function() {
  $(".mansion").hide();
  $(".horsies").replaceWith("<button class=test1>map</button>");
  $(".hiking").replaceWith("<button class=chal>Your Challenge</button>");
  $(".chal").addClass("test1");
  $(".cricket").hide();
  $(".getStarted").text("Finland's National Cricket Ground in Kerava has been in active use for years. Located about two kilometers from central station the field is available under reservation. Make sure to register and pay for your time if you wish to use these grounds!");
  $(".welcome").text("Time to get active and enter the world of cricket!");
  $(".explore").text("Click below to reveal your challenge!");
});
$(document).on("click", ".mansion", function() {
  $(".cricket").hide();
  $(".horsies").replaceWith("<button class=test1>map</button>");
  $(".hiking").replaceWith("<button class=chal>Your Challenge</button>");
  $(".chal").addClass("test1");
  $(".mansion").hide();
  $(".getStarted").text("Although the housing in this hill dates much further back in history, the current look of Kerava Manor is from 1928. Since 1991 the Manor has been under the town ownership and is used to host various cultural events.");
  $(".welcome").text("Let's fly back in time and enjoy the beauty of Kerava Manor today!");
  $(".explore").text("Click below to reveal your challenge!");
});
$(document).on("click", ".horsies", function() { 
  $(".mansion").hide();
  $(".instr").addClass("test1");
  $(".hiking").replaceWith("<button class=test1>map</button>");
  $(".cricket").replaceWith("<button class=chal>Your Challenge</button>");
  $(".chal").addClass("test1");
  $(".horsies").hide();
  $(".getStarted").text("Kerava Riding School (Keravan Ratsastuskoulu) has been operating in Ahjo, Kerava since 1975. The school offers lessons for all levels and ages. The grounds include a riding hall, two riding fields and a cafe for those looking for refreshments.");
  $(".welcome").text("Time time see some animal friends and enjoy fresh air!");
  $(".explore").text("Click below to reveal your challenge!");

});
$(document).on("click", ".hiking", function() {
  $(".mansion").hide();
  $(".instr").addClass("test1");
  $(".horsies").replaceWith("<button class=test1>map</button>");
  $(".cricket").replaceWith("<button class=chal>Your Challenge</button>");
  $(".chal").addClass("test1");
  $(".hiking").hide()
  $(".getStarted").text("Haukkavuori nature reserve offers a great walk along the nature and is easy reach either from Lahdentie or Kaskelantie. As this is a protected environmnent do stay on the marked paths. The wildlife in this area like their homes undisturbed!");
  $(".welcome").text("Put on your confortable shoes, time to get active!");
  $(".explore").text("Click below to reveal your challenge!");
});
// Actions for City route buttons
$(document).on("click", ".foodie", function() {
  $(".story").replaceWith("<button class=instr>Click on the Challenge button to discover your task for today</button>");
  $(".instr").addClass("test1");
  $(".cafe").replaceWith("<button class=test1>map</button>");
  $(".shop").replaceWith("<button class=chal>challenge</button>");
  $(".chal").addClass("test1");
  $(".foodie").hide();
});
$(document).on("click", ".story", function() {
  $(".foodie").replaceWith("<button class=instr>Click on the Challenge button to discover your task for today</button>");
  $(".instr").addClass("test1");
  $(".cafe").replaceWith("<button class=test1>map</button>");
  $(".shop").replaceWith("<button class=chal>challenge</button>");
  $(".chal").addClass("test1");
  $(".story").hide();
});
$(document).on("click", ".cafe", function() {
  $(".story").replaceWith("<button class=instr>Click on the Challenge button to discover your task for today</button>");
  $(".instr").addClass("test1");
  $(".foodie").replaceWith("<button class=test1>map</button>");
  $(".shop").replaceWith("<button class=chal>challenge</button>");
  $(".chal").addClass("test1");
  $(".cafe").hide();
});
$(document).on("click", ".shop", function() {
  $(".story").replaceWith("<button class=instr>Click on the Challenge button to discover your task for today</button>");
  $(".instr").addClass("test1");
  $(".cafe").replaceWith("<button class=test1>map</button>");
  $(".foodie").replaceWith("<button class=chal>challenge</button>");
  $(".chal").addClass("test1");
  $(".shop").hide();
});