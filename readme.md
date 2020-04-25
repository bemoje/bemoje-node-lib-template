# @bemoje/node-lib-template

Node library template package with full ESM support. All features available as npm scripts: Jest testing. Rollup build. Rename package - affecting all relevant files. Readme generator. Markdown and HTML API-documentation. Npm publish and version bumping. Github repository create, delete and commit. Jsdoc block comment description triggers package description updates. Package keyword-extraction from block comments in source code.

#### Version

<span><a href="https://npmjs.org/@bemoje/node-lib-template" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/node-lib-template" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/node-lib-template" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-node-lib-template.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/node-lib-template" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-node-lib-template.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/node-lib-template" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/node-lib-template" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-node-lib-template/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-node-lib-template" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/node-lib-template
npm install --save @bemoje/node-lib-template
npm install --save-dev @bemoje/node-lib-template
```

## Usage

```javascript
import nodeLibTemplate from '@bemoje/node-lib-template'

nodeLibTemplate()
//=> undefined

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### nodeLibTemplate

Node library template package with full ESM support. All features available as npm scripts: Jest testing. Rollup build. Rename package - affecting all relevant files. Readme generator. Markdown and HTML API-documentation. Npm publish and version bumping. Github repository create, delete and commit. Jsdoc block comment description triggers package description updates. Package keyword-extraction from block comments in source code.

##### Parameters

-   `num` **[number][9]** number

-   `name` **[string][10]** name

-   `callback` **[theCallback][11]** An addable instance is passed to the callback.

##### Returns
**void** 

## theCallback

Callback type definition.

Type: [Function][12]

##### Parameters

-   `addable` **[Addable][13]** The string

##### Returns
**void** 

## Addable

**Extends Number**

A class that extends the native Number-class and

##### Parameters

-   `num` **[number][9]** The number

-   `name`   (optional, default `'myAddable'`)

#### add

Adds 'n'

##### Parameters

-   `n` **[number][9]** The number to add

##### Returns
**[Addable][13]** 

[1]: #nodelibtemplate

[2]: #parameters

[3]: #thecallback

[4]: #parameters-1

[5]: #addable

[6]: #parameters-2

[7]: #add

[8]: #parameters-3

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[10]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[11]: #thecallback

[12]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[13]: #addable