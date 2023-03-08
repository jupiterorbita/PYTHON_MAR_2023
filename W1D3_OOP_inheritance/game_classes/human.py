class Human:
    def __init__(self, name):
        self.name = name
        self.intelligence = 10
        self.strength = 10
        self.dexterity = 5
        self.health = 100
        self.defense = 50
    
    def attack(self, enemy):
        print(f"[ATTACK] {self.name} is attacking {enemy.name}")
        enemy.defend(self.strength)
        
    # taking damage
    def defend(self, damage):
        self.health -= damage
        print(f"[DEFEND] {self.name} takes {damage} DMG and they are now at {self.health} HP")


