from game_classes.human import Human

class Rogue(Human):
    def __init__(self, name):
        super().__init__(name)
        self.health = 80
        self.strength = 8
    
    def heal(self):
        self.health += 20
        print(f"[HEAL] {self.name} heals for 20 hp and they now have {self.health} HP")