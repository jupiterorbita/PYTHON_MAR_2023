# FUNDAMENTALS
# this is a comment! - it does NOT get read by the interperter
"""
this is a multiline
comment!
"""

#* VARIABLES
#  primitive

my_float = 3.14
my_name = "bob"
is_admin = False
my_num = 11

format_string = f"we can inject {my_num} variables here "
# print(format_string)

# print("hello ninja, " + str(my_num)) 


# snake_casing

#? === COMPOSITE TYPES ====
# --- LIST
# aka array in JS

my_nums = [2,3,1,4,5]
my_nums.sort(reverse=True)
print(my_nums)

#          0        1         2      3     4
#                                         0 1 2 3 4

names = ["bob", "alice", "carter"]
names.sort(reverse=True)
print(names)

# print(names[1])
names[2] = "john"

names.append("🦄")

names.pop()
names.pop(2)

# print(names)
# print(len("bob"))

# len()
# print()

# --- DICTIONARY
# aka objects in JS
# are not indexed/ 
# ? key - value pairs
# all keys are comma separated
# all keys are 'strings'
dog_dict = {
    "name": 'Mochi',
    'age' : 3,
    'color': "black",
    'is_a_good_boy' : True
}
dog_dict2 = {
    "name": 'Rex',
    'age' : 6,
    'colors': [
        "black",
        "brown"
        ],
    'is_a_good_boy' : True
}
print(dog_dict2['colors'][0])

my_var = "name"
dog_dict2[my_var] = 'bobby'
# print(dog_dict2['name'])

removed = dog_dict2.pop('age')
print(removed)
# del dog_dict2['age']
# print(dog_dict2)


# if 'breed' in dog_dict:
#     print(dog_dict2['breed'])
# else:
#     print("breed not found")






# --- TUPLES
# ----- immutable ---- cannot be changed
tup = (1,3,5,7, {'name' : "bob"}, [123,123,123])
print(tup[0])
tup[0] = "bob"












