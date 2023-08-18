# Final-Project-GIGIH

## GitHub Public Repo URL
[GitHub Back-end Update Repo](https://github.com/XLevi9/Final-Project-GIGIH/tree/back-end) <br>
[Github Front-end Update Repo](https://github.com/XLevi9/Final-Project-GIGIH/tree/front-end)

## Domain
[back-end](https://server-side-final.vercel.app/) <br>
[front-end](https://final-project-tokopedia-play.vercel.app/)

## Database Structure
                    +-------------------+
                    |      Comment      |
                    +-------------------+
                    | _id               |
                    | username          |
                    | comment           |
                    | timestamp         |---------+
                    +-------------------+         |
                                                  |
                                                  |
                                                  | 1 | n
             +-------------------+          +-------------------+
             |      Product      |          |       Video       |
             +-------------------+          +-------------------+
             | _id               |          | _id               |
             | id                |          | id                |
             | productUrl        |          | url               |
             | title             |          | title             |
             | price             |          | accountName       |
             | videoId ----------|----------| thumbnailUrl      |----|-+
             +-------------------+          +-------------------+    |
                                                                     |
                                                                     |
                                                                     |
                                                                   1 | n
                                                            +-------------------+
                                                            |       Video       |
                                                            +-------------------+
                                                            | _id               |
                                                            | id                |
                                                            | url               |
                                                            | title             |
                                                            | accountName       |
                                                            | thumbnailUrl      |
                                                            +-------------------+

### Comment <br>
The "Comment" table has the following attributes: <br>
- _id: Unique identifier for each comment.
- username: The username of the commenter.
- comment: The content of the comment submitted.
- timestamp: The time when the comment was submitted. <br>
### Product <br>
The "Product" table has the following attributes: <br>
- _id: Unique identifier for each product.
- id: Product ID.
- productUrl: Product URL.
- title: Product title.
- price: Product price.
- videoId: Foreign key connecting products to the related video. <br>
### Video <br>
The "Video" table has the following attributes: <br>
- _id: Unique identifier for each video.
- id: Video ID.
- url: Video URL.
- title: Video title.
- accountName: The account name that uploaded the video.
- thumbnailUrl: Video thumbnail URL.
- products: Collection of products associated with the video.


## API STRUCTURE 
### Video API
#### GET All Videos
- Endpoint: '/videos'
- Description: Retrieve all video data from the "Video" collection.
- Response: JSON array containing video data.

#### GET Single Video
- Endpoint: '/videos/:id'
- Description: Retrieve video data based on the given ID.
- Parameter: 'id' (ID of the video to be retrieved).
- Response: JSON object containing video data

### Comment API
#### GET Comments
- Endpoint: '/comments'
- Description: Retrieve all comments.
- Response: JSON array containing comment data

#### POST Add Comment
- Endpoint: '/comments'
- Description: Add a new comment to the "Comment" collection.
- Request: JSON object with attributes 'name', 'comment', and 'videoId'.
- Response: JSON object containing the newly added comment data.

### Product API
#### GET Products by Video ID
- Endpoint: '/products/:videoId'
- Description: Retrieve all products related to a specific video.
- Parameter: 'videoId' (ID of the video to view its products).
- Response: JSON array containing product data.

## FEATURES
- Displaying a curated list of videos sourced from the backend
- Providing the ability to view comprehensive video details upon clicking
- Showcasing a curated list of products associated with the videos
- Displaying user comments to foster engagement
- Enabling comment insertion with a simple username and comment input
Bonus: Offering the added functionality of revealing product descriptions upon clicking

## HOW TO RUN in Local
To run the API locally on your machine, follow these steps:

### Clone the repository back end:
- git clone https://github.com/XLevi9/Final-Project-GIGIH/tree/back-end.git
- cd back-end

### Clone the repository front-end:
- git clone https://github.com/XLevi9/Final-Project-GIGIH/tree/front-end.git
- cd front-end

### Install the dependencies in both of them:
- npm install
### Change cors origin URL (back-end)
- from 'https://client-ui-final-projects.vercel.app' to 'http://localhost:3001'
### Change VideoList.jsx URL (front-end)
- from 'https://server-side-final.vercel.app/videos' to 'http://localhost:3000/videos'
### Change VideoDetail.jsx URL (front-end)
- all of 'https://server-side-final.vercel.app' to 'http://localhost:3000'
### Set up your database (if required).
### Start the server:
- start back end first (npm start)
- The API should now be running on 'http://localhost:3000'
- start front-end (npm start)
- The web app should now be running on 'http://localhost:3001'
### Please ensure that you have Node.js and npm installed on your machine before running the API locally.

#### You can access code from back-end branch and front-end branch
If you encounter any issues while running the API, feel free to contact me at 
oky.b20@mhs.unsyiah.ac.id
