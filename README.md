# Final-Project-GIGIH

## GitHub Public Repo URL
[GitHub Public Repo](https://github.com/XLevi9/Mid-Term_GIGIH)

## Database Structure
                    +-------------------+
                    |      Comment      |
                    +-------------------+
                    | _id               |
                    | name              |
                    | comment           |
                    | videoId ----------|---------+
                    +-------------------+         |
                                                  |
                                                  |
                                                  | 1 | n
             +-------------------+          +-------------------+
             |      Product      |          |       Video       |
             +-------------------+          +-------------------+
             | _id               |          | _id               |
             | link              |          | title             |
             | title             |          | url               |
             | price             |          | thumbnail         |
             | videoId ----------|          | products    ------|----|-+
             +-------------------+          +-------------------+    |
                                                                     |
                                                                     |
                                                                     |
                                                                   1 | n
                                                            +-------------------+
                                                            |       Video       |
                                                            +-------------------+
                                                            | _id               |
                                                            | title             |
                                                            | url               |
                                                            | thumbnail         |
                                                            | products          |
                                                            +-------------------+

- The "Comment" entity has attributes _id, name, comment, and videoId. The videoId is a foreign key that connects comments with a specific video in the "Video" entity.
- The "Product" entity has attributes _id, link, title, price, and videoId. The videoId is a foreign key that connects products with a specific video in the "Video" entity.
- The "Video" entity has attributes _id, title, url, thumbnail, and products. The products attribute is an array that contains IDs or names of products associated with a specific video in the "Product" entity.


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
#### GET Comments by Video ID
- Endpoint: '/comments/:videoId'
- Description: Retrieve all comments related to a specific video.
- Parameter: 'videoId' (ID of the video to view its comments).
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

## HOW TO RUN in Local
To run the API locally on your machine, follow these steps:

### Clone the repository:
- git clone https://github.com/XLevi9/Mid-Term_GIGIH.git
- cd Mid-Term_GIGIH
### Install the dependencies:
- npm install
### Set up your database (if required).
### Start the server:
- npm start
- The API should now be running on 'http://localhost:5000'
### Please ensure that you have Node.js and npm installed on your machine before running the API locally.

#### You can access code from master branch
If you encounter any issues while running the API, feel free to contact me at 
oky.b20@mhs.unsyiah.ac.id
