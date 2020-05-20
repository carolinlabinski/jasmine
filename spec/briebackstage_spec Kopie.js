var { BrieBackstage } = require("../src/js/briebackstage.js");

describe("Brie Backstage items", function () {
	it("SellIn de plus de 10 jours,qualité augement d'un point", function () {
		var briebackstage = new BrieBackstage("Aged Brie", 11, 20);
		briebackstage.updateQuality();
		expect(briebackstage.quality).toBe(21);
	});
});

describe("Brie Backstage items", function () {
	it("SellIn entre 0 et 5 jours, qualité augement de 3 points", function () {
		var briebackstage = new BrieBackstage("Aged Brie", 4, 23);
		briebackstage.updateQuality();
		expect(briebackstage.quality).toBe(21);
	});
});

describe("Brie Backstage items", function () {
	it("SellIn entre 5 et 10 jours, qualité augement de 2 points", function () {
		var briebackstage = new BrieBackstage("Aged Brie", 6, 20);
		briebackstage.updateQuality();
		expect(briebackstage.quality).toBe(22);
	});
});
