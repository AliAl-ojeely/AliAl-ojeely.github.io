import BaseModel from './BaseModel';

export default class PortfolioItem extends BaseModel {
    static #records = [];
    static #idIndex = null;

    constructor({ id, title, description, image, technologies = [] } = {}) {
        super({ id, title, description, image, technologies });
    }

    // Public getters (encapsulation with convenience)
    get id() { return this._get('id'); }
    get title() { return this._get('title'); }
    get description() { return this._get('description'); }
    get image() { return this._get('image'); }
    get technologies() { return [...this._get('technologies')]; } // return a copy

    // ---- Active Record instance methods ----
    save() {
        const existingIndex = PortfolioItem.#records.findIndex(
            (r) => r._get('id') === this._get('id')
        );
        if (existingIndex >= 0) {
            PortfolioItem.#records[existingIndex] = this;
        } else {
            PortfolioItem.#records.push(this);
        }
        if (PortfolioItem.#idIndex) {
            PortfolioItem.#idIndex.set(this._get('id'), this);
        }
        return this;
    }

    // ---- Active Record static finders ----
    static find(id) {
        if (PortfolioItem.#idIndex) {
            return PortfolioItem.#idIndex.get(id) || null;
        }
        // O(n) fallback
        return PortfolioItem.#records.find((r) => r._get('id') === id) || null;
    }

    static findAll() {
        return PortfolioItem.#records;
    }

    static async loadFromSource(dataArray) {
        PortfolioItem.#records = dataArray.map(
            (item) => new PortfolioItem(item)
        );
        PortfolioItem.#idIndex = new Map(
            PortfolioItem.#records.map((record) => [record._get('id'), record])
        );
    }

    // Override polymorphic display
    display() {
        return `${this.title} – ${this.description}`;
    }
}