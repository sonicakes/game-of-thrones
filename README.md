# Game Of Thrones


## Instructions
To run the project, you have to have to have node installed on your computer. Clone the repository on your local computer and on CLI run `npm start`. It will start a local server and you can access the project. 

*Author*: Sonia Parker

*Technology Used*: React (create-react-app to bootstrap the project), Bootstrap for design (react-bootstrap library).

*Design*:
![design]: (https://github.com/sonicakes/game-of-thrones/blob/master/Design.jpg "Design Mockup")


## After:

1. What features would you like to build?
I'd like to finiish sorting method using the second user story. I would also make the site responsive, making use of react-bootstrap class names. I would add custom font and colors. I'd make sure the website is accessible as well. On top of that, I would use fade-in animation when episodes are loaded or switched between oldest and newest.


2. What third-party services would you like to use?
https://developers.themoviedb.org/3/tv/get-popular-tv-shows
I'd use The MovieDB API to load information about other TV shows to potentially compare it to GoT.

3. What technologies would you like to use?
- Lo Dash library for writing javascript, allows you to shorten methods
- Writing SASS for custom CSS
- If we have more functionality related to changing state, Redux would be useful



### User stories:

1. As a user, I would like to be able to sort the episode results by the date in both
ascending and descending order. By default, the episodes will display in ascending
order.
2. As a user, I would like to be able to filter the episodes by the season they were
released in. By default, all the episodes for all the seasons will be shown.

### Implementation Note:

I have episodes displaying on the screen dynamically. We can sort the episodes by oldest or newest. By default they are sorted by newest. Therefore, the first user story has been completed. My time has come to an end, so the second user story will be implemented at a later stage.

Design is based on React Bootstrap library, which creates <Row> etc. components with className classes as in usual Bootstrap. Button on the intro element is being overwritten by custom CSS - color taken from the mock up.

The main functionality is written in Items component, which is called in App.js



