import { Item } from "./item.js";
class ConjuredItem extends Item {
	constructor(name, sellIn, quality) {
		super(`Conjured ${name}`, sellIn, quality);
	}
	updateQuality() {
		if (this.sellIn >= 0) {
			this.quality -= 2;
		}
		if (this.sellIn < 0) {
			this.quality -= 4;
		}
		if (this.quality > 50) {
			this.quality = 50;
		}
		if (this.quality < 0) {
			this.quality = 0;
		}
		this.sellIn--;
	}
}
export { ConjuredItem };
