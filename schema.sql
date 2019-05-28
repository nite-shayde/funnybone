DROP DATABASE IF EXISTS funny-bone;

CREATE DATABASE funnyt-bone;

USE funnyt-bone;


CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  url VARCHAR(120) NOT NULL,
  name VARCHAR(40) NOT NULL,
  nativeName VARCHAR(40),
  PRIMARY KEY (id)
);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
