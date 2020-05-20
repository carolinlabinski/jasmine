var { NormalItem } = require("../src/js/normalitem.js");

describe("Normal item", function () {
	it("Diminuer le sellIn d'un jour", function () {
		var normalitem = new NormalItem("Mana", 10, 20);
		normalitem.updateQuality();
		expect(normalitem.sellIn).toBe(9);
	});
});

describe("Normal item", function () {
	it("Diminuer la qualité d'un point", function () {
		var normalitem = new NormalItem("Mana", 10, 20);
		normalitem.updateQuality();
		expect(normalitem.quality).toBe(19);
	});
});

describe("Normal item", function () {
	it("La qualité n'a jamais plus de 50 points", function () {
		var normalitem = new NormalItem("Mana", 10, 51);
		normalitem.updateQuality();
		expect(normalitem.quality).toBe(50);
	});
});

describe("Normal item", function () {
	it("La qualité n'est jamais négative", function () {
		var normalitem = new NormalItem("Mana", 10, -1);
		normalitem.updateQuality();
		expect(normalitem.quality).toBe(0);
	});

	describe("Normal item", function () {
		it("La qualité n'est jamais négative", function () {
			var normalitem = new NormalItem("Mana", -3, 10);
			normalitem.updateQuality();
			expect(normalitem.quality).toBe(8);
		});
	});
});
