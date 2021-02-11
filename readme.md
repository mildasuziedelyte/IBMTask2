# Task 2 - Youtube API app
First of all let me thank you for checking my project and spending your time for reviewing it. Please find a short description of this project below. If you got any questions I'm more than happy to answer them all.

# Description 

My task was to build am application based on YouTube API. User should be able to see optimal layout, depending on their device size and get a full experience on both wide screens and mobile devices.
User is able to search for a video title and see results. Clicking on selected video opens a page with selected video and videos related to it on the right side. Furthermore, search results (as well as, sidebar results) are implemted with infinite scroll. However, due to strict YouTube API restrictions and quatas for API usage, app allows to get maximum of 50 images. Therefore, application is loading 8 images at the time, instead of 20 as per task.
Lastly, user actions on UI a recorded in the back end (searched keywords and videos user clicked).

# Technologies

To complete this project I used the following technologies:

## Frontend:

ReactJS, React Router Dom, Axios, TailwindCss, React Infinite Scrolling Component, SCSS for custom styling

## Backend:
NodeJS, Express, Atlas MongoDB,

# Setup

## In order to launch app : 
1. Please visit [Link to built app](https://github.com/ugniusnor/utubeNodeApp) and downlaod the files. 
2. Run npm install in the terminal and downlaod missing dependencies
3. Run npm start to run aplication on http://localhost:3001/
4. At the moment project is running on my account on Atlas MongoDB, therefore you might need to register on https://cloud.mongodb.com/ and obtain personal connection credentials 

## In order to launch only frontend React app:
1. Downloand client files from this repositorie, client folder
2. cd client
3. npm install
4. npm start to run on  http://localhost:3000/

## Deployment

Application is available for try out and deployed [HERE](https://ibm-youtube-task2.herokuapp.com/)
