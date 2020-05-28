$(document).ready(function(){
  $(".BtnSuburbs").click(function(){
    $(".BtnCity").replaceWith("<div class=cong><p>Congratulations for having taken the first step! Get ready to explore the suburbs with us..</p></div>");
  $(".top p").hide();
  $(".middle h2").replaceWith("<h3>Welcome to the suburbs!</h3>")
  $("<br><br>").appendTo(".middle");
  $("<button>hey</button>").addClass("test1").addClass("horsies").appendTo(".middle");
  $("<button>hola</button>").addClass("test1").addClass("hiking").appendTo(".middle");
  $("<button>hello</button>").addClass("test1").addClass("mansion").appendTo(".middle");
  $("<button>moi</button>").addClass("test1").addClass("cricket").appendTo(".middle");
  });
    $(".BtnCity").click(function(){
    $(".BtnSuburbs").replaceWith("<div class=cong><p>Congratulations for having taken the first step! Let's visit the town center today..</p></div>");
  $(".top p").hide();
  $(".middle h2").replaceWith("<h3>Welcome to the center!</h3>")
  $("<br><br>").appendTo(".middle");
  $("<button>hey</button>").addClass("test1").addClass("foodie").appendTo(".middle");
  $("<button>hola</button>").addClass("test1").addClass("story").appendTo(".middle");
  $("<button>hello</button>").addClass("test1").addClass("cafe").appendTo(".middle");
  $("<button>moi</button>").addClass("test1").addClass("shop").appendTo(".middle");
  });
});