# OOP

# ? objects? != dictionary
# an instance of a class

# ? class?
# template or blueprint for our instances(objects)

dog1 = {
    'name' : 'Spot',
    'age' : 4,
    'breed' : 'malti poo'
}

dog2 = {
    'name' : 'Buddey',
    'age' : 6,
    'breed' : 'black lab'
}

# ----------- CREATE A CLASS ----------
class Dog:
    # constructor - creates defaults and builds the instance
    def __init__(self, name, age, breed='lab'):
        # ? attributes
        self.name = name
        self.breed = breed
        self.age = age
        
    # ? -- methods ---
    def bark(self):
        print(f"{self.name} make a loud WOOF!")
        return self
    
    def birthday(self):
        self.age += 1
        print(f"{self.name} is {self.age} years old")
        # print(self)
        return self


# create an instance of the class?
# dog3 = Dog("rufus", 5, "poochie")
# dog6 = Dog("Bailey", 8, "golden retriever")
dog3 = Dog("rufus", 5)
dog6 = Dog("Bailey", 8)

bob = Dog("bob", 3, "lab")
# bob.age
# bob.name
bob.bark()
bob.birthday()

# dog3.birthday().bark().birthday()
# dog3.bark()
# dog3.birthday()
# dog3.birthday()




# print(dog6.age) # ??

# dog3.bark()
# dog6.bark()

# print(dog6.name)

# print(dog3.name)
# print(dog3.breed)
# print(dog3.age)