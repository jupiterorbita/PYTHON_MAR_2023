-- world
-- 1. What query would you run to get all the countries that speak Slovene? 
-- Your query should return the name of the country, language and language percentage. 
-- Your query should arrange the result by language percentage in descending order. (1)

-- SELECT * FROM cities;
SELECT name, language, percentage FROM countries
JOIN languages
ON languages.country_id = countries.id
WHERE languages.language = "Slovene"
ORDER BY percentage DESC;

-- 2. What query would you run to display the total number of cities for each country? 
-- Your query should return the name of the country and the total number of cities. 
-- Your query should arrange the result by the number of cities in descending order. (3)

SELECT countries.name, COUNT(cities.name) AS 'total cities' FROM cities
JOIN countries
ON countries.id = cities.country_id
group by countries.name
ORDER BY COUNT(cities.name) DESC; 




