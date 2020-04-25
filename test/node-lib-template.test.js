import nodeLibTemplate from '../src/node-lib-template'

describe('nodeLibTemplate', () => {
	test('works', () => {
		expect(() => nodeLibTemplate()).not.toThrow()
		expect(nodeLibTemplate()).toBe(undefined)
	})
})
