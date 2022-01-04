# Pupr

Pupr is a web application for uploading and storing photos. It was
 inspired by Flickr and built using React.js and Express.

Sign up and Upload at [pupr-aa-project.herokuapp.com/](https://pupr-aa-project.herokuapp.com/)



# Features of Pupr

All features require user authorization. Demo login is provided.

## 1. Image Post CRUD
* Users are able to select a file from their computer to be uploaded to an AWS S3 Bucket.

### Image Upload Page:
* Page users land on upon sigining up/logging in.

![](https://i.gyazo.com/8294c5901a0c9a8a93a73c98f3f80bc1.jpg)

### Image Tile:
* Uploaded images are able to be favorited.

![](https://i.gyazo.com/9349a1d53bd0293bbf14b669dc09cc1e.png)


### Edit Image:
* An image can be edited by uploading a new file and/or by changing the album it is assigned to.

![](https://i.gyazo.com/ee61b91a69df4429c7440261423877f1.jpg)



### Albums Bar:
* Users are able to create and view their albums. Clicking on an album will filter out all photos that are not in that album.

![](https://i.gyazo.com/dbe16247dd3484f297dab877a3be3736.png)

### Home View:

![](https://i.ibb.co/DzDhnny/a3318844eccf2d9cb0f535c323e4ba61.jpg)

### Technical Details:
* Pupr allows for people to create accounts that they can use to upload photos of their pets and animals. A user is not required to specify an album when uploading a photo. If the user decides to afterwards, however, they are also able to. After an file is provided, it is uploaded to an AWS S3 Bucket, and the page should refresh with the photo now rendered on the page. Upon clicking on an album, the user can expect the photos that are not in that album to be filtered.


### Features
* Sign up/in with email and username
* AWS S3 upload/storage
* Edit photos
* Delete Photos
* Create albums
* Delete albums

### To-Do:
* [ ] Comments
* [ ] Search
* [ ] Photo browsing
* [ ] Tags
