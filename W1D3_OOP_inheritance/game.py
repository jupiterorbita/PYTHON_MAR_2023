# from game_classes.human import Human
from game_classes.orc import Orc
from game_classes.rogue import Rogue
import random

bob = Orc("Bob")
flynn = Rogue("Flynn")

# bob.attack(flynn)
# flynn.attack(bob)
# flynn.heal()

while bob.health > 0 and flynn.health > 0:
    print("you are a great Rogue, you approach an orc!, his name is bob")
    response = ""
    
    while not response == "1" and not response == "2":
        response = input("What do you do?\n1)attack?\n2)heal?")

        # -- player
        if response == "1":
            flynn.attack(bob)
        elif response == "2":
            flynn.heal()
        else:
            print(">>> please choose a valid response")
            
        print("-------------------")
        # -- CPU
        dice_roll = random.randint(1,2)
        if dice_roll == 1:
            bob.attack(flynn)
        else:
            bob.really_attack(flynn)