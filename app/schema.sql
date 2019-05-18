CREATE DATABASE todo;
USE todo;

CREATE TABLE 'todo_items'(
  
`id
` Int
( 11 ) AUTO_INCREMENT NOT NULL,
isDone boolean
not null default 0
PRIMARY KEY
(`id`)
)