# REVIEW  OOP, classes, attributes, methods
# TODO classmethod, staticmethod

class Ninja:
    
    # belong to the Class - NOT the instance
    all_ninjas = []
    
    # constructor
    def __init__(self, name, age_param, weapon, strength, headband = 'red'):
        # if Ninja.check_age(age_param):    
            self.name = name
            self.headband = headband
            self.weapon = weapon
            self.age = age_param
            self.health = 100000
            self.strength = strength
            Ninja.all_ninjas.append(self)
        # else:
        #     return
    # methods
    def display_stats(self):
        print(f"{self.name} is a {self.headband} ninja \nwith a {self.weapon.name}\nand health of {self.health}hp")
    
    def eat_strawberry(self, amount):
        self.health += amount
        print(f"{self.name} ate a strawberry for {amount} and their health is now {self.health}hp")
        
    def attack(self, another_instance):
        # print(another_instance.name, another_instance.weapon)
        another_instance.health -= self.strength
        print(f"{self.name} attacks {another_instance.name} with a {self.weapon.name} and they receive {self.weapon.damage} damage and their health is now {another_instance.health}")
        return self
    
    @classmethod
    def party(cls):
        print(cls.all_ninjas)
        for one_ninja in cls.all_ninjas:
            one_ninja.eat_strawberry(100)
    
    @staticmethod
    def check_age(age):
        is_valid = True
        if age < 18:
            is_valid = False
            print("you are not old enough to enter the dojo")
        return is_valid
        
        
        
    # __main__ - it ran directly from this file
    # __repr__ - overwrites <__main__.Ninja object at 0x0000021F74433AF0>
    # string representation of the instance
    # def __repr__(self) -> str:
    #     return f"this is {self.name}"

# ------------- ANOTHER CLASS ----------
class Weapon:
    def __init__(self, weapon_dict) -> None:
        self.name = weapon_dict['name']
        self.damage = weapon_dict['damage']
        self.type = weapon_dict['type']


katana = {
    'name': "katana",
    'damage': 33,
    'type': "melee"
}

lasers = {
    'name': "lasers",
    'damage': 9999,
    'type': "ranger"
}


shuriken_weapon = Weapon(katana)
sword_weapon = Weapon(lasers)
# sword_weapon = Weapon("Sword", 5, "melee" )


ninja1 = Ninja("Itachi", 17, shuriken_weapon, 9001)
ninja2 = Ninja("Barney", 25, sword_weapon, 9002, "grey")

# Ninja.party()


print(len(Ninja.all_ninjas))

ninja1.display_stats()
# ninja1.eat_strawberry(5000)

ninja1.attack(ninja2).attack(ninja2)
ninja2.attack(ninja1)
ninja2.eat_strawberry(5000)
# ninja2.display_stats()

# ? Classmethod
"""
do not have access to the instance
no self
they do not individually change any one instance
can only be called from the Class
"""

# ? Static method
"""
stationary / non-changing
no access to anything
independent
-- utility functions (methods)
"""