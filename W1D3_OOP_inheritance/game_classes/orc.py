from game_classes.human import Human

class Orc(Human):
    def __init__(self, name):
        super().__init__(name)
        self.strength = 22
        
    # Polymophism
    def defend(self, damage):
        self.health -= damage
        print(f"[DEFEND] {self.name} takes {damage} DMG and they are now at {self.health} HP ")

    def attack(self, enemy):
        print(f"[ATTACK] {self.name} is attacking {enemy.name}")
        enemy.defend(self.strength)
    
    def really_attack(self, enemy):
        print(f"[REALLY ATTACK] {self.name} is attacking {enemy.name}")
        enemy.defend(self.strength * 2)