import BaseModel from './BaseModel';

export default class PortfolioItem extends BaseModel {
    static #records = [];
    static #idIndex = null;

    constructor({
        id,
        title,
        description,
        image,
        technologies = [],
        reason = '',
        githubLink = '',
        images = [],         // optional array of additional image paths
    } = {}) {
        super({ id, title, description, image, technologies, reason, githubLink, images });
    }

    get id() { return this._get('id'); }
    get title() { return this._get('title'); }
    get description() { return this._get('description'); }
    get image() { return this._get('image'); }
    get technologies() { return [...this._get('technologies')]; }
    get reason() { return this._get('reason'); }
    get githubLink() { return this._get('githubLink'); }
    get images() { return [...this._get('images')]; }

    // ---- Active Record methods unchanged ----
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

    static find(id) {
        if (PortfolioItem.#idIndex) {
            return PortfolioItem.#idIndex.get(id) || null;
        }
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

    display() {
        return `${this.title} – ${this.description}`;
    }
}