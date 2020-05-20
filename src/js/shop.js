class Shop {
	constructor(items = []) {
		this.items = items;
	}
	updateQuality() {
		this.items.forEach((el) => el.updateQuality());
	}
	display() {
		this.items.forEach((el) => console.log(el));
	}
}
export { Shop };
