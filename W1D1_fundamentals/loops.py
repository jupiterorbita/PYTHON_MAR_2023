#  LOOPS

# For loops

# ? for _iterator_ in _collection_ :

# range() a function that returns a sequence of numbers
# range(start, stop, end)
#  start --- inclusive, optional - default 0
#  stop --- EXCLUSIVE, required
#  step -- optional, increment value (-/+)

# 1-10
for i in range(1, 10 + 1):
    print(i)

# 1-10 every 2
for x in range(1, 11, 2):
    print(x)

# 100-1 down by 20
for x in range(100, 1, -20):
    print(x)

x = 10
y = 20
for some_var in range(x, y + 1):
    print(some_var)

    #     01234
for x in "Hello":
    print(x)

    #           0       1         2         3        4

for i in range(len(anime_list)):
    print(i + 1, anime_list[i])

anime_list = ["Goku", "Beerus", "Asta", "Naruto", "jojo"]  # 5

for hero in anime_list:
    print(hero)

# ---------------------------
cat1 = {"name": "Cinnamon", "age": 2, "color": "orange"}
cat2 = {"name": "Meow", "age": 2, "color": "black"}
# loop over a dict
for each_key in cat1:
    print(f"{each_key} : {cat1[each_key]}")
# print(f"name is {cat1['name']}")


dog_dict = {"name": "bobby", "age": 10}

for some_key in dog_dict:
    print(f"the key is '{some_key}' and the value is {dog_dict[some_key]}")

# we have to pull out all the values of the dict


capitals = {
    "Washington": "Olympia",
    "California": "Sacramento",
    "Idaho": "Boise",
    "Illinois": "Springfield",
    "Texas": "Austin",
    "Oklahoma": "Oklahoma City",
    "Virginia": "Richmond",
}

for val in capitals.values():
    print(val)
    
for key in capitals.keys():
    print(key)

for bob, alice in capitals.items():
    print(bob, alice)
    
