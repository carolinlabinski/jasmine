import { Item } from "./item.js";
class ConjuredItem extends Item {
	constructor(name, sellIn, quality) {
		super(`Conjured ${name}`, sellIn, quality);
	}
	updateQuality() {
		if (this.sellIn >= 0) {
			this.quality -= 2;
		} else {
			this.quality -= 4;
		}

		if (this.quality > 50) {
			this.quality = 50;
		}

		this.sellIn--;

		if (this.quality < 0) {
			this.quality = 0;
		}
	}
}
export { ConjuredItem };
