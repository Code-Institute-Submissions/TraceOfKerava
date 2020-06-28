// On click actions for initial buttons
//On hover text to landing page buttons
$(document).ready(function() {
    $(".btn-city").hover(
        function() {
            $(".btn-city").append($("<span class = show-text>Center</span>"));
        },
        function() {
            $(".btn-city").find("span").last().remove();
        }
    );
});
$(document).ready(function() {
    $(".btn-suburbs").hover(
        function() {
            $(".btn-suburbs").append($("<span class = show-text>Suburbs</span>"));
        },
        function() {
            $(".btn-suburbs").find("span").last().remove();
        }
    );
});
//Subrurbs button click actions
$(document).ready(function() {
    $(".btn-suburbs").one("click", function() {
        $(".btn-city").hide();
        $(".get-started").replaceWith(
            "<p class=get-started>The areas outside the town center offer various options for relaxation as well as physical activities.</p>"
        );
        $(
            "<p>We have selected a few for this route but suggest you take a look at the official Kerava website for more inspiration.</p>"
        ).addClass("hidden");
        $(".introduction").replaceWith(
            "<p class=introduction>Congratulations for having taken the first step! Get ready to explore the suburbs<span class=mobile-hidden> with us</span>..</p>"
        );
        $(".lets-play").replaceWith(
            "<h2 class=lets-play>Just one more choice to make:</h2>"
        );
        $(".btn-suburbs").hide();
        $("#stables")
            .removeClass("hide")
            .addClass("map-btns")
            .appendTo(".game-border");
        $("#cricket")
            .removeClass("hide")
            .addClass("map-btns")
            .appendTo(".game-border");
        $("#manor")
            .removeClass("hide")
            .addClass("map-btns")
            .appendTo(".game-border");
        $("#nature")
            .removeClass("hide")
            .addClass("map-btns")
            .appendTo(".game-border");
        $(".get-ready").text("Lets see what is in store of us today!");
        $(".explore").text("Go ahead, click on the most appealing photo:");
    });
});
//City button click actions
$(document).ready(function() {
    $(".btn-city").one("click", function() {
        $(".btn-suburbs").hide();
        $(".get-started").replaceWith(
            "<p class=get-started>The town center, while compact, has a variety of cultural, culinary and other leisure time activities to offer.</p>"
        );
        $(
            "<p>We will explore some of these here but be sure to check out others as well later on.</p>"
        ).addClass("hidden");
        $(".introduction").replaceWith(
            "<p class=introduction>Congratulations for having taken the first step! Get ready to explore the center<span class=mobile-hidden> with us</span>..</p>"
        );
        $(".lets-play").replaceWith(
            "<h2 class=lets-play>Just one more choice to make:</h2>"
        );
        $(".btn-city").hide();
        $("#grocery")
            .removeClass("hide")
            .addClass("map-btns")
            .appendTo(".game-border");
        $("#cafe")
            .removeClass("hide")
            .addClass("map-btns")
            .appendTo(".game-border");
        $("#library")
            .removeClass("hide")
            .addClass("map-btns")
            .appendTo(".game-border");
        $("#thrift")
            .removeClass("hide")
            .addClass("map-btns")
            .appendTo(".game-border");
        $(".get-ready").text("So lets see what is in store of us today!");
        $(".explore").text("Go ahead, click on the most appealing photo:");
    });
});
// Actions for Suburb route buttons
// Cricket challange click actions
$(document).one("click", "#cricket", function() {
    $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
    $(".top").addClass("top-final").removeClass("top");
    $(".banner-bottom")
        .addClass("banner-bottom-final")
        .removeClass("banner-bottom");
    $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
    $(".game").addClass("game-final").removeClass("game");
    $(".footer").addClass("footer-final").removeClass("footer");
    $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
    $(".game-border").removeClass();
    $(".get-ready").hide();
    $(".explore").hide();
    $("#manor").hide();
    $("#stables").hide();
    $("#nature")
        .hide()
        .replaceWith(
            "<div><p>Walk to the Kerava National Cricket Ground Pavilion and take a picture of yourself in front of the building. For additional challenge sign up for a cricket session <span class=mobile-hidden>with KCC to test your skills</span>!</p></div>"
        )
        .appendTo(".middle");
    $(".get-started").hide().closest("section.top-text").removeClass("top-text");
    $(".introduction").replaceWith(
        "<p>Finland's <strong>National Cricket Ground</strong><span class=mobile-hidden> in Kerava, located about</span> two kilometers from central station, is available for use under reservation. Make sure to register and pay<span class=mobile-hidden> if you wish to use these grounds</span>!</p>"
    );
    $(".lets-play-final").text("Get active for cricket!");
    $("#cricket")
        .removeClass("cricket")
        .removeClass("map-btns")
        .addClass("map")
        .appendTo(".game-final");
});
// Manor challange click actions
$(document).one("click", "#manor", function() {
    $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
    $(".top").addClass("top-final").removeClass("top");
    $(".banner-bottom")
        .addClass("banner-bottom-final")
        .removeClass("banner-bottom");
    $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
    $(".game").addClass("game-final").removeClass("game");
    $(".footer").addClass("footer-final").removeClass("footer");
    $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
    $(".game-border").removeClass();
    $(".get-started").hide().closest("section.top-text").removeClass("top-text");
    $(".get-ready").hide();
    $(".explore").hide();
    $("#cricket").hide();
    $("#stables").hide();
    $("#nature")
        .hide()
        .replaceWith(
            "<div><p>Support the manor and buy <span class=mobile-hidden>yourself </span>a <span class = hidden>snack or a </span>drink from the cafe <span class=hidden>located </span>on ground floor. Take a walk inside to view the art on display. For additional challange write and post a review on social media.</p></div>"
        )
        .appendTo(".middle");
    $(".introduction").replaceWith(
        "<p>While housing on this hill dates much further back<span class=mobile-hidden> in history</span>, the current look of <strong>Kerava Manor</strong> is from 1928. Since 1991 the Manor <span class=hidden>has been under the town ownership and </span>is used to host various <span class = hidden>cultural </span>events.</p>"
    );
    $(".lets-play-final").text("Enjoy the Kerava Manor!");
    $("#manor")
        .removeClass("manor")
        .removeClass("map-btns")
        .addClass("map")
        .appendTo(".game-final");
});
//Stables challenge click actions
$(document).one("click", "#stables", function() {
    $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
    $(".top").addClass("top-final").removeClass("top");
    $(".banner-bottom")
        .addClass("banner-bottom-final")
        .removeClass("banner-bottom");
    $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
    $(".game").addClass("game-final").removeClass("game");
    $(".footer").addClass("footer-final").removeClass("footer");
    $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
    $(".get-ready").hide();
    $("#cricket").hide();
    $(".explore").hide();
    $("#manor").hide();
    $(".game-border").removeClass();
    $("#nature")
        .hide()
        .replaceWith(
            "<div><p>Walk over to the fields next to the school to take a selfie with a horse on the background and post it on social media. For additional challenge sign up for a riding lesson<span class=hidden> with the school</span>.</p></div>"
        );
    $(".get-started").hide().closest("section.top-text").removeClass("top-text");
    $(".introduction").replaceWith(
        "<p><strong>Kerava Riding School</strong> <span class =hidden> has been operating in Ahjo, Kerava since 1975. The school</span> offers lessons for all levels and ages. The grounds include a riding hall, two riding fields and a cafe for those looking for refreshments.</p>"
    );
    $(".lets-play-final").text("Time to see some animal friends!");
    $("#stables")
        .removeClass("stables")
        .removeClass("map-btns")
        .addClass("map")
        .appendTo(".game-final");
});
//Nature walk challenge click actions
$(document).one("click", "#nature", function() {
    $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
    $(".top").addClass("top-final").removeClass("top");
    $(".banner-bottom")
        .addClass("banner-bottom-final")
        .removeClass("banner-bottom");
    $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
    $(".game").addClass("game-final").removeClass("game");
    $(".footer").addClass("footer-final").removeClass("footer");
    $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
    $(".get-ready").hide();
    $("#cricket").hide();
    $(".explore").hide();
    $("#manor").hide();
    $(".game-border").removeClass();
    $("#stables")
        .hide()
        .replaceWith(
            "<div><p>Go for the full 2.8 kilometer <span class=hidden>circular </span>walk on the marked <span class=hidden>nature</span> path and take a picture of the views. For additional challenge <span class=hidden>try to </span>spot a Pelloporus leporinus growing on a tree<span class=mobile-hidden> trunk</span>.</p></div>"
        )
        .appendTo(".middle");
    $(".get-started").hide().closest("section.top-text").removeClass("top-text");
    $(".introduction").replaceWith(
        "<p><strong>Haukkavuori</strong> nature reserve offers a great walk along the nature and is easy reach. Since this is a protected environment do stay on the marked path. <span class=hidden>Wildlife in the area like their homes undisturbed!</span></p>"
    );
    $(".lets-play-final").text("Lets start being active!");
    $("#nature")
        .removeClass("nature")
        .removeClass("map-btns")
        .addClass("map")
        .appendTo(".game-final");
});
// Actions for City route buttons
//Grocery story challenge click actions
$(document).one("click", "#grocery", function() {
    $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
    $(".top").addClass("top-final").removeClass("top");
    $(".banner-bottom")
        .addClass("banner-bottom-final")
        .removeClass("banner-bottom");
    $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
    $(".game").addClass("game-final").removeClass("game");
    $(".footer").addClass("footer-final").removeClass("footer");
    $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
    $(".get-ready").hide();
    $("#library").hide();
    $(".explore").hide();
    $("#thrift").hide();
    $(".game-border").removeClass();
    $("#cafe")
        .hide()
        .replaceWith(
            "<div><p>Google recipes starting with the first letter of your first name. Go to Prisma to buy the required ingredients and start cooking. For extra challange post a review of the recipe<span class=hidden> on social media</span>.</p></div>"
        )
        .appendTo(".middle");
    $(".get-started").hide().closest("section.top-text").removeClass("top-text");
    $(".introduction").replaceWith(
        "<p>Located at the very center of the town, <strong>Prisma shopping center</strong> and grocery store offers a large variety of consurmer goods for a reasonable price.<span class=hidden> We will get familiar with their food aisles today!</span></p>"
    );
    $(".lets-play-final").text("Explore the shops in town!");
    $("#grocery")
        .removeClass("grocery")
        .removeClass("map-btns")
        .addClass("map")
        .appendTo(".game-final");
});
//Library challenge click actions
$(document).one("click", "#library", function() {
    $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
    $(".top").addClass("top-final").removeClass("top");
    $(".banner-bottom")
        .addClass("banner-bottom-final")
        .removeClass("banner-bottom");
    $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
    $(".game").addClass("game-final").removeClass("game");
    $(".footer").addClass("footer-final").removeClass("footer");
    $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
    $(".get-ready").hide();
    $(".explore").hide();
    $("#cafe").hide();
    $("#thrift").hide();
    $(".game-border").removeClass();
    $("#grocery")
        .hide()
        .replaceWith(
            "<div><p>Find and read the first book available from first author whose last name begins with the same letter as yours. For an extra challenge write and post a review of the book online</p></div>"
        )
        .appendTo(".middle");
    $(".get-started").hide().closest("section.top-text").removeClass("top-text");
    $(".introduction").replaceWith(
        "<p>Founded back in 1925, <strong>Kerava library</strong> situated close to the railway station is a perfect destination for book lovers. So get your library card and head over there..</p>"
    );
    $(".lets-play-final").text("Let's find a book!");
    $("#library")
        .removeClass("library")
        .removeClass("map-btns")
        .addClass("map")
        .appendTo(".game-final");
});
//Cafe challenge click actions
$(document).one("click", "#cafe", function() {
    $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
    $(".top").addClass("top-final").removeClass("top");
    $(".banner-bottom")
        .addClass("banner-bottom-final")
        .removeClass("banner-bottom");
    $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
    $(".game").addClass("game-final").removeClass("game");
    $(".footer").addClass("footer-final").removeClass("footer");
    $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
    $(".get-ready").hide();
    $("#library").hide();
    $(".explore").hide();
    $("#thrift").hide();
    $(".game-border").removeClass();
    $("#grocery")
        .hide()
        .replaceWith(
            "<div><p>Buy yourself a coffee and sit down at a table. Write a small made up story about the next customer to walk into this cafe. For extra challenge post your story on social media.</p></div>"
        )
        .appendTo(".middle");
    $(".get-started").hide().closest("section.top-text").removeClass("top-text");
    $(".introduction").replaceWith(
        "<p>The Kerava center a variety of cafes<span class=hidden> for meeting up friends or taking a break from shopping</span>. One of the more establised cafes is <strong>Kulmakonditoria</strong>, also known as Kulmis. Lets go visit them this time!"
    );
    $(".lets-play-final").text("Relax and have a drink!");
    $("#cafe")
        .removeClass("cafe")
        .removeClass("map-btns")
        .addClass("map")
        .appendTo(".game-final");
});
//Thrift store challenge click actions
$(document).one("click", "#thrift", function() {
    $(".banner-top").addClass("banner-top-final").removeClass("banner-top");
    $(".top").addClass("top-final").removeClass("top");
    $(".banner-bottom")
        .addClass("banner-bottom-final")
        .removeClass("banner-bottom");
    $(".bottom-text").addClass("bottom-text-final").removeClass("bottom-text");
    $(".game").addClass("game-final").removeClass("game");
    $(".footer").addClass("footer-final").removeClass("footer");
    $(".lets-play").addClass("lets-play-final").removeClass("lets-play");
    $(".get-ready").hide();
    $("#library").hide();
    $(".explore").hide();
    $("#cafe").hide();
    $(".game-border").removeClass();
    $("#grocery")
        .hide()
        .replaceWith(
            "<div><p>Buy an item in color green closest <span class=mobile-hidden>possible </span>to the one used in this site. <span class=hidden>Spend no more than five euro on your purchase!</span> For additional challange post a picture of your item in it's new home on social media.</p></div>"
        )
        .appendTo(".middle");
    $(".get-started").hide().closest("section.top-text").removeClass("top-text");
    $(".introduction").replaceWith(
        "<p>Next to various department stores, Kerava also has a number of secondhand stores with interesting collections of used items. Today we will visit <strong>Fida secondhand</strong>.</p>"
    );
    $(".lets-play-final").text("Treasure hunting time!");
    $("#thrift")
        .removeClass("thrift")
        .removeClass("map-btns")
        .addClass("map")
        .appendTo(".game-final");
});