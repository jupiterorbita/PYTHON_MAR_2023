#  FUNCTIONS
# what is a function?
# a set of instructions
# could take in parameters
#! ALL functions ALWAYS RETURN something

# print(print("hello"))

# verbs
def greeting():
    print("hello ninja!")


# call / invoke the function
# greeting()

# parameters
def say_hello(unicorn):
    print("hello " + unicorn)
    return f"RETURN >> ***** hello {unicorn}"


message = say_hello("bob")
print(len(message))


def say_times(times, name):
    # print(times, name)
    for i in range(times):  # 0 - 9
        if i <= 3:
            print("COOL!!!")
        print(i, name)


say_times(10, "bob")
say_times(5, "meow")


# ---- default parameters and named arguments


def say_times2(times=3, name="john"):
    print(times, name)


say_times2()


def add(x, y):
    return x + y


print(add(y=1, x=2))


def number_of_great_lakes():
    print(5)


x = number_of_great_lakes()
print(x)

# Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
# Example: countdown(5) should return [5,4,3,2,1,0]


def countdown(num):
    list = []
    for i in range(num, -1, -1):
        # print(i)
        list.append(i)
    return list


print(countdown(5))  # [5,4,3,2,1,0]


# List of dictionaries
users = [
    {"first": "Ada", "last": "Lovelace"},  # index 0
    {"first": "Alan", "last": "Turing"},  # index 1
    {"first": "Eric", "last": "Idle"},  # index 2
]

# loop over and get the names
def loop_over_list(some_list):
    for item in some_list:
        print(item['first'])

loop_over_list(users)

# Dictionary of lists
resume_data = {
    #        	     0           1           2
    "skills": ["front-end", "back-end", "database"],
    #                0           1
    "languages": ["Python", "JavaScript"],
    #                0              1
    "hobbies": ["rock climbing", "knitting"],
}

for key in resume_data:
    print(key)
    for item in key:
        print(item)
