DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  username TEXT,
  messageText TEXT,
  roomname TEXT,
  PRIMARY KEY(id)
  -- mysql -u root < ./server/schema.sql
  -- sudo service mysql start
);

/* Create other tables and define schemas for them here!*/

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  user TEXT,
  PRIMARY KEY(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

