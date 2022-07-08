export class Item {
    name: string;
    sellIn: number; // number of days we have to sell the item
    quality: number; // how valuable the item is

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    private updateRegular(item: Item): Item {
        var factor: number = item.sellIn === 0 ? 2 : 1;
        item.quality = Math.max(0, item.quality - factor);
        item.sellIn = Math.max(0, item.sellIn - 1);
        return item;
    }

    private updateAgedBrie(item: Item): Item {
        var factor: number = item.sellIn === 0 ? 2 : 1;
        item.quality = Math.min(50, item.quality + factor);
        item.sellIn = Math.max(0, item.sellIn - 1);
        return item;
    }

    private updateBackstagePass(item: Item): Item {
        if (item.sellIn === 0) {
            return item;
        }

        var factor: number = 1;

        if (item.sellIn <= 10) factor = 2;
        if (item.sellIn <= 5) factor = 3;

        item.quality = Math.min(50, item.quality + factor);
        item.sellIn = Math.max(0, item.sellIn - 1);

        if (item.sellIn === 0) {
            item.quality = 0;
        }

        return item;
    }

    private updateConjured(item: Item) {
        var factor: number = item.sellIn === 0 ? 4 : 2;

        item.quality = Math.max(0, item.quality - factor);
        item.sellIn = Math.max(0, item.sellIn - 1);

        return item;
    }

    /**
     * for every item, checks its name and calls the corresponding update method
     * For specific behaviours for different items, the most legible option is
     * to separate the code in one function per item type.
     */
    public updateQuality() {
        this.items.map((item) => {
            switch (item.name) {
                case "Sulfuras, Hand of Ragnaros":
                    // Sulfuras never has to be sold so its sellin value is always 0
                    return item;
                case "Aged Brie":
                    // has to increase value
                    return this.updateAgedBrie(item);
                case "Backstage passes to a TAFKAL80ETC concert":
                    // increase depends on sellin value
                    return this.updateBackstagePass(item);
                case "Conjured":
                    // decreases at double rate
                    return this.updateConjured(item);
                default:
                    return this.updateRegular(item);
            }
        });
    }
}
