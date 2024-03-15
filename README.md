# movies-webapplication

## Project setup
download files from github, start backend from different IDE(inteelij or something), go to moviemanager->src->manin->java->localhost.manager->MoviemanagerApplicationand psuh the play button near public static void main, this starts the backend application
```
npm install
```
## Create mysql database querys manually
Some how spring boot doesnt create tables automatically, I have the code in backend but it doesnt to that, so you have to do it manually, use mysql for that

CREATE DATABASE moviemanager;

use moviemanager;

CREATE TABLE movies (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  genre VARCHAR(255),
  director VARCHAR(255),
  release_year INT NOT NULL,
  image_url VARCHAR(255),
  movie_code VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  customer_name VARCHAR(255),
  customer_email VARCHAR(255),
  booking_date DATE,
  seatNumber VARCHAR(255)
);

INSERT INTO movies (id, name, genre, director, release_year, image_url, movie_code)
VALUES
  (1, 'The Shawshank Redemption', 'Drama', 'Frank Darabont', 1994, 'https://www.example.com/shawshank.jpg', 'EFGH5678'),
  (2, 'The Lord of the Rings: The Fellowship of the Ring', 'Fantasy, Adventure', 'Peter Jackson', 2001, 'https://www.example.com/lotr.jpg', 'EFGH5679'),
  (3, 'Inception', 'Sci-Fi, Action', 'Christopher Nolan', 2010, 'https://www.example.com/inception.jpg', 'EFGH5680'),
  (4, 'The Dark Knight', 'Action, Crime', 'Christopher Nolan', 2008, 'https://www.example.com/darkknight.jpg', 'EFGH5681'),
  (5, 'Pulp Fiction', 'Crime, Drama', 'Quentin Tarantino', 1994, 'https://www.example.com/pulpfiction.jpg', 'EFGH5682'),
  (6, 'Forrest Gump', 'Drama, Romance', 'Robert Zemeckis', 1994, 'https://www.example.com/forrestgump.jpg', 'EFGH5683'),
  (7, 'The Matrix', 'Action, Sci-Fi', 'Lana and Lilly Wachowski', 1999, 'https://www.example.com/matrix.jpg', 'EFGH5684'),
  (8, 'The Godfather', 'Crime, Drama', 'Francis Ford Coppola', 1972, 'https://www.example.com/godfather.jpg', 'EFGH5685'),
  (9, 'Schindlers List', 'Biography, Drama', 'Steven Spielberg', 1993, 'https://www.example.com/schindlerslist.jpg', 'EFGH5686');




```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
