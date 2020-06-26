# Trace of Kerava

This is a website made for the **2nd Milestone Project** of the Code Institute Full Stack Web Developer Course.  It represents a website made for a **fictional campaign** to promote a Finnish town called Kerava. 
The main purpose is to showcase the different aspects for the town and its surroundings and to help promote the town in a fun way.

_All activity and location details in this site are real but the site is not associated with any party mentioned. This is made purely for the purpose of MileStone Project 2_

## Demo

Here is the [Live Demo]()
![static Demo](Documents/Layout/xxx.jpg)

## UX
The website is intended for users who are interested in Kerava and want to know more about what the town has to offer. It is not made to be a standalone website but one that is accessable via links from the official website of the city and the participating companies and organisations.
The aim is to broaden the visibility of the town and the services and activities available both for people planning to move there and for those already living there but wanting to experience the area in a different way.

Color scheme chosen is a combination of green and blue main colors and neutral regular text color.
The green was selected as this is the color of the official town logo and the blue is one of the shades in the picture selected for the top and bottom sections.


### User Stories:

- As a user, I want to click on a button and get to the next pert of the game/challenge
- As a user, I want to find out a bit about the town and the goods/services offered
- As a user, I want to be able to see the location of the destination
- As a user, I want to get back to start when I am finished

### Design documents 

Design documents are located [here](https://github.com/VAhola/xxx)

## Features


### Existing Features

The site uses bottoms that allow users to access chosen options. These are presented as pictures to allow for a bit of mystery behind each selection.

The footer is sticky, placed at the bottom of the page for more balanced look accross different screen sizes.

There are links to the various social media accounts in the bottom of the page to allow users to quickly access official Kerava social media as well as a hyper link to the official website.

Due to the nature of the site, a navigation bar is not included but a link back to start is accessable at every stage.

The bottons on the site reflect the options presented to the users:

-Landing page has 2 buttons:
    - Visitor can select a botton representing center or 
    - Visitor can select a botton representing more outskirts location
- Each selection leads to 4 bottons from which the user should select one to see the challange chosen for this item.
- Each end page with location and challenge includes a map (via Google Maps API) to make it easier to find the locations for people who are not familiar with the town.


### Features Left to Implement

A few features that were excluded from the current version:
 This was skipped due to lack of time.
- Adding alternative options in each challenge so that returning users can opt for a new version of the challenge and users with travel limitations have an option to choose something closer to them.
- An image gallery of the pictures posted in social media with tag
- The botton with a link to contact in case a company wants to be included in the site whereby visitors can leave their contact request, by clicking on "here" and hyperlink and filling out the form.

## Technologies Used
-	Bootstrapcdn
    -	Bootstrap for modifiable design elements
    -   Font-awesome for adding icons
- JQuery
- HTML
- CSS
- Google Maps API

## Testing

The follow tests were made to ensure the buttons are working properly:
1. Landing page
    1. Click on button for Center
	1. Check that landing page buttons are no longer available and four new button are now visible
	1. Check that the text at the top of the page has been replaced with the text designated for the center route
    2. Click on button for Suburb
	1. Check that landing page buttons are no longer available and four new button are now visible
	1. Check that the text at the top of the page has been replaced with the text designated for the center route
2. Each challenge button
	1. Check that no previous buttons available anymore
	1. Check that the text at the top of the page has been replaced with the text designated for the each challenge location
	1. Check that the actual challange is displayed
	1. Check that the Google map and the Marker are showing and in correct location 


In addition, social media links and the link to official town website at the bottom were all tested to make sure they work as expected.

The site was reviewed on laptop, mobile phone and a large monitor using 1E11, Chrome, Edge and FireFox.

## Deployment

The project is hosted on GitHub pages and is deployed directly from the master branch. As is required by GitHub pages the landing page file naming is kept as index.html.
Any new commits to the master branch will automatically reflect on the deployed site.

## Credits

The textual content on this site is written by me.

The fixed bottom was made based on the instructions [here](https://css-tricks.com/couple-takes-sticky-footer/) and [here](https://codepen.io/cbracco/pen/zekgx)


Button on click [here](https://stackoverflow.com/questions/30984557/google-maps-api-loading-map-on-button-click/30984720)

Basis for maps [here](https://www.nicklitten.com/how-to-display-multiple-google-maps-in-html/)

Custom colored map marker inspiration from [here](https://medium.com/free-code-camp/how-to-change-javascript-google-map-marker-color-8a72131d1207)


### Media

The photos used in this site roaylty free photos obtained from:
- pexels.com 
- pixabay.com and 


### Acknowledgements

I want to say special thank you to the following parties for making this project possible:
- Code Institute by providing me the training materials and support
- And a special thank you to my menter seun_mentor