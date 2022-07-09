import { Item } from "./item-library";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    /**
     * for every item, checks its name and calls the corresponding update method
     * For specific behaviours for different items, the most legible option is
     * to separate the code in one function per item type.
     */
    public updateQuality() {
        this.items.map((item) => {
            item.update();
        });
    }
}
