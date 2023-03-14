-- joins
SELECT * FROM users;
SELECT * FROM tweets;
SELECT * FROM faves;

-- get all the users with the tweets they made
SELECT * FROM users 
LEFT JOIN tweets 
ON tweets.user_id = users.id;

-- get all the tweets a users has made
SELECT * FROM users
LEFT JOIN tweets
ON users.id = tweets.user_id
WHERE users.id = 1
ORDER BY tweets.created_at;

SELECT * from tweets
JOIN users
ON users.id = tweets.user_id
WHERE users.id = 5;

-- many to many
-- get a user and the tweets they made
SELECT * FROM users
LEFT JOIN faves
ON faves.user_id = users.id
LEFT JOIN tweets
ON tweets.id = faves.tweet_id
WHERE users.id = 5;

-- find who faved a tweet
-- tweet id 2 ? who faved it?
SELECT * FROM tweets
JOIN faves
ON faves.tweet_id = tweets.id
JOIN users
ON faves.user_id = users.id
WHERE tweets.id = 4;


