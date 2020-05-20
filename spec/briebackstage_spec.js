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
		expect(briebackstage.quality).toBe(26);
	});
});

describe("Brie Backstage items", function () {
	it("SellIn entre 5 et 10 jours, qualité augement de 2 points", function () {
		var briebackstage = new BrieBackstage("Aged Brie", 7, 20);
		briebackstage.updateQuality();
		expect(briebackstage.quality).toBe(22);
	});
});

describe("Brie Backstage items", function () {
	it("Apres la date de péremption, la qualité passe à 0", function () {
		var briebackstage = new BrieBackstage("Concert", -2, 5);
		briebackstage.updateQuality();
		expect(briebackstage.quality).toBe(0);
	});
});

describe("Brie Backstage items", function () {
	it("La qualité n'a jamais plus de 50 points", function () {
		var briebackstage = new BrieBackstage("Brie", 10, 51);
		briebackstage.updateQuality();
		expect(briebackstage.quality).not.toBeGreaterThan(50);
	});
});

describe("Brie Backstage items", function () {
	it("La qualité n'est jamais negative", function () {
		var briebackstage = new BrieBackstage("Brie", 10, -3);
		briebackstage.updateQuality();
		expect(briebackstage.quality).not.toBeLessThan(0);
	});
});
