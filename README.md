# README


https://luvgrub.herokuapp.com/

Guest users can sign in with a premade account:
--the only disadvantage to this is that you won't be able to pick specific recipies that YOU like, but thats okay, you will get options from others!

Username/email: guest@aol.com
Password: 123456


My app, LuvGrub, is like Tinder, but for food. -As this is a social app, I decided to use the FB OTH for my user authentication.
-A user can also login with a regular username and password (this feature is built in devise)
-Once logged in, LuvGrub gives users random recipes that they can either like or dislike (this feature is built in React).
   ----I implemented logic so that when a recipe  has already been liked or disliked , the user won’t be shown that recipe again (logic was done in Ruby).
-A user can navigate to their favorites page to see any recipes that they have already liked (liked recipes are show in React).
-There is  a search bar just in case a user wants to search for a specific kind of recipe, or food (Search Bar is built in React).
-A user can also add their own recipes if they dont find what they are looking for(Form is built in Rails).
   ---This form also allows for pictures to be uploaded via CarrierWave and then they are stored in an Amazon S3 Bucket.


-In progress: making the whole application mobile friendly. Currently the mobile friendly parts are:
  The nav bar (it changes to a drop down menu)
  Th buttons are mobile friendly and scale to mobile
  The text scales down to a mobile device

Working on:
  The swipeLeft and handleSwipe and detectSwipe features in React
