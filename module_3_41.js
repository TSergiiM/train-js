const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const { potions } = this;
    for (const potion of potions)
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;
    for (const potion of potions)
      if (potion.name === potionName) {
        return potions.splice(potions.indexOf(potion), 1);
      }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (const potion of potions) {
      if (potion.name === oldName) {
        return (potion.name = newName);
      }
      return `Potion ${oldName} is not in inventory!`;
    }
  },
};

console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
console.log(atTheOldToad.removePotion('Dragon breath'));
console.log(atTheOldToad.removePotion('Stonedvxvd'));
console.log(atTheOldToad.updatePotionName('Speed', 'Tanja'));
console.log(atTheOldToad.updatePotionName('Speed potion', 'Tanja'));
