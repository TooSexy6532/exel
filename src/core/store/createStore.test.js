import { expect } from "@jest/globals"
import { createStore } from "./createStore"

describe('test', () => {
    test('TEST', () => {
        const store = createStore(() => { }, {})
        expect(store).toBeDefined()
    })
})