import BaseModel from './BaseModel';

export default class Certificate extends BaseModel {
    static #records = [];
    static #idIndex = null;

    constructor({
        id,
        title,
        description,
        duration,
        startDate,
        endDate,
        percentage = null,
        pdfLink = '',
    } = {}) {
        super({ id, title, description, duration, startDate, endDate, percentage, pdfLink });
    }

    get id() { return this._get('id'); }
    get title() { return this._get('title'); }
    get description() { return this._get('description'); }
    get duration() { return this._get('duration'); }
    get startDate() { return this._get('startDate'); }
    get endDate() { return this._get('endDate'); }
    get percentage() { return this._get('percentage'); }
    get pdfLink() { return this._get('pdfLink'); }

    // Active Record methods
    static find(id) {
        if (Certificate.#idIndex) return Certificate.#idIndex.get(id) || null;
        return Certificate.#records.find(r => r.id === id) || null;
    }

    static findAll() {
        return Certificate.#records;
    }

    static async loadFromSource(dataArray) {
        Certificate.#records = dataArray.map(item => new Certificate(item));
        Certificate.#idIndex = new Map(
            Certificate.#records.map(record => [record.id, record])
        );
    }
}