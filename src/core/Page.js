export class Page {
    constructor(params) {
        this.params = params
    }

    getRooot() {
        throw new Error('Method "getRoot" should be implemented')
    }

    afterRender() {}

    destroy() {}
}