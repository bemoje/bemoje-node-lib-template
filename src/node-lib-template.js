/**
 * Node library template package with full ESM support. All features available as npm scripts: Jest testing. Rollup build. Rename package - affecting all relevant files. Readme generator. Markdown and HTML API-documentation. Npm publish and version bumping. Github repository create, delete and commit. Jsdoc block comment description triggers package description updates. Package keyword-extraction from block comments in source code.
 * @method nodeLibTemplate
 * @param {number} num - number
 * @param {string} name - name
 * @param {theCallback} callback - An addable instance is passed to the callback.
 * @returns {void}
 */
export default function nodeLibTemplate(num, name, callback) {
	if (callback) callback(new Addable(num, name))
}

/**
 * Callback type definition.
 * @callback theCallback
 * @param {Addable} addable - The string
 * @returns {void}
 */

/**
 * A class that extends the native Number-class and
 */
export class Addable extends Number {
	/**
	 * @param {number} num - The number
	 */
	constructor(num, name = 'myAddable') {
		super(num)
		this.name = name
	}

	/**
	 * Adds 'n'
	 * @param {number} n - The number to add
	 * @returns {Addable}
	 */
	add(n) {
		return new Addable(this + n)
	}
}
