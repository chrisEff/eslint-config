# chrisEff's eslint config

[![GitHub license](https://img.shields.io/github/license/chrisEff/eslint-config.svg)](https://github.com/chrisEff/eslint-config/blob/master/LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/github/chrisEff/eslint-config/badge.svg?targetFile=package.json)](https://snyk.io/test/github/chrisEff/eslint-config?targetFile=package.json)

Basically just the "standard" code style with some adjusted rules here and there...

## Installation

```
npm i -D @chriseff/eslint-config
npm i -D eslint
npm i -D eslint-plugin-import
npm i -D eslint-plugin-node
npm i -D eslint-plugin-promise
npm i -D eslint-plugin-standard
```

## Usage

Create a file named `.eslintrc` in your project, containing:

```
{
	"extends": "@chriseff"
}
```