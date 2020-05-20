import { Shop } from "./shop";
import { Sulfuras } from "./sulfuras";
import { BrieBackstage } from "./briebackstage";
import { NormalItem } from "./normalitem";
import { ConjuredItem } from "./conjured";

let itemList = [];
itemList.push(new Sulfuras("Sulfuras", 10, 80));
itemList.push(new BrieBackstage("Aged Brie", 10, 40));
itemList.push(new BrieBackstage("Aged Brie", 0, -5));
itemList.push(new NormalItem("Mana", -2, 52));
itemList.push(new ConjuredItem("Bobo", -3, 20));
// itemList.push(new BrieBackstage("Backstage", 40, 20));
console.log(itemList);
let shop = new Shop(itemList);

// shop.display();
shop.updateQuality();
shop.display();
