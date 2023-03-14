-- sakila
-- What query would you run to get all the customers inside city_id = 312? 
-- Your query should return customer first name, last name, email, and address.

SELECT first_name, last_name, email, address FROM customer
JOIN address
ON address.address_id = customer.address_id
WHERE address.city_id = 312;