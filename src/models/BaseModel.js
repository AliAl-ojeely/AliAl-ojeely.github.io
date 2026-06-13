export default class BaseModel {
    #attributes = {};

    constructor(attributes = {}) {
        this.#attributes = { ...attributes };
    }

    _get(key) {
        return this.#attributes[key];
    }

    _set(key, value) {
        this.#attributes[key] = value;
    }

    get attributes() {
        return { ...this.#attributes };
    }

    // Polymorphic method – override in subclasses
    display() {
        return JSON.stringify(this.#attributes);
    }

    static async findAll() {
        throw new Error('findAll() must be implemented by subclass');
    }
}