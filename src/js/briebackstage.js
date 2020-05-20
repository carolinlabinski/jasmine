import { Item } from "./item.js";

class BrieBackstage extends Item {
	constructor(name, sellIn, quality) {
		super(name, sellIn, quality);
	}

	updateQuality() {
		if (this.sellIn > 10) {
			this.quality++;
		} else if (this.sellIn > 0 && this.sellIn <= 5) {
			this.quality += 3;
		} else if (this.sellIn > 6) {
			this.quality += 2;
		} else {
			this.quality = 0;
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

export { BrieBackstage };
