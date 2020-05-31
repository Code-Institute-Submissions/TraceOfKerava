// Actions for landing page buttons
$(document).ready(function(){
$(".BtnSuburbs").one("click", function() {
    $(".BtnCity").hide();
  $(".getStarted").text("The areas outside the town center offer various options for both relaxation and physical activities. We have selected a few for this route but suggest you take a looka at the official Kerava website for more inspiration");
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
  $(".getStarted").text("The town center, while compact, has a variety of cultural, culinary and other leisure time activities to offer. We will explore some of these here but be sure to check out others as well later on");
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
  $(".instr").addClass("test1");
  $(".horsies").replaceWith("<button class=test1>map</button>");
  $(".hiking").replaceWith("<button class=chal>Your Challenge</button>");
  $(".chal").addClass("test1");
  $(".cricket").hide();
  $(".getStarted").text("Finlan's National Cricket Ground in Kerava has been in active use for years. Located about 2km from central station the field is available under reservation. Make sure to register and pay for your time if you wish to use these grounds!");
  $(".welcome").text("Time to get active and enter the world of cricket!");
  $(".explore").text("Click below to reveal your challenge!");
});
$(document).on("click", ".mansion", function() {
  $(".cricket").replaceWith("<button class=instr>Click on the Challenge button to discover your task for today</button>");
  $(".instr").addClass("test1");
  $(".horsies").replaceWith("<button class=test1>map</button>");
  $(".hiking").replaceWith("<button class=chal>challenge</button>");
  $(".chal").addClass("test1");
  $(".mansion").hide();
});
$(document).on("click", ".horsies", function() {
   $(".BtnSuburbs").hide(); 
  $(".mansion").replaceWith("<button class=instr>Click on the Challenge button to discover your task for today</button>");
  $(".instr").addClass("test1");
  $(".cricket").replaceWith("<button class=test1>map</button>");
  $(".hiking").replaceWith("<button class=chal>challenge</button>");
  $(".chal").addClass("test1");
  $(".horsies").hide();
});
$(document).on("click", ".hiking", function() {
  $(".mansion").replaceWith("<button class=instr>Click on the Challenge button to discover your task for today</button>");
  $(".instr").addClass("test1");
  $(".horsies").replaceWith("<button class=test1>map</button>");
  $(".cricket").replaceWith("<button class=chal>challenge</button>");
  $(".chal").addClass("test1");
  $(".hiking").hide()
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