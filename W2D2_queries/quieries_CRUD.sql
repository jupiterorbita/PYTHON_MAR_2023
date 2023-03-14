-- this is a comment
/*
this is a multi line
comment here
*/

-- SELECT
-- SELECT {{what we want to display}} FROM {{where we want to get it from}}
SELECT * FROM users;
SELECT email, first_name FROM users;
SELECT * FROM w2d1_erds_schema.tickets;
SELECT * FROM comments; -- comments
SELECT * FROM posts;
SELECT * FROM toppings;
SELECT * FROM pizzas;
SELECT * FROM toppins_has_pizzas;

-- functions
-- get the count of all the users
SELECT COUNT(*) AS 'total users' FROM users;



-- INSERT 
INSERT INTO users 
	(email, first_name, last_name) 
VALUES 
	('f@f.com', "fred", "Smith");
    
-- multi insert
insert into users
	(email, last_name, first_name)
VALUES
	('ben@ben.c', 'smith', 'ben'), 
    ('a@a.com', 'alison', 'alice'),
    ('fred@email.com', 'smith', 'fred');

INSERT INTO posts
	(title, content, user_id)
VALUES ('first post', 'this is cool', 2);

INSERT INTO toppings
	(name, is_veggie)
VALUES 
	('peppers', 1),
    ('pepperoni', 0);

INSERT INTO pizzas (size, sauce)
VALUES (10, 'marinara'), ('12' , "bbq");

-- creating pizzas with toppings
INSERT INTO toppins_has_pizzas
(topping_id, pizza_id)
VALUES (2,2), (2,1);


-- UPDATE
UPDATE users
SET 
	first_name = "bob",
	last_name = "bobbers",
    email = "b@b.com"
WHERE 
	id = 5;

-- DELETE
DELETE FROM users
WHERE id=6;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM users
WHERE first_name = "fred";

DELETE FROM users
WHERE id IN (1,3);