metalsmith-collection-metadata
==============================

[![npm package version](https://img.shields.io/npm/v/metalsmith-collection-metadata.svg)](https://www.npmjs.com/package/metalsmith-collection-metadata)
[![Dependency status](https://img.shields.io/david/rbardini/metalsmith-collection-metadata.svg)](https://david-dm.org/rbardini/metalsmith-collection-metadata)
[![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


A [Metalsmith](https://github.com/metalsmith/metalsmith) plugin to add metadata to every file in a collection.

Requires [metalsmith-collections](https://github.com/segmentio/metalsmith-collections).

## Installation

```
$ npm install metalsmith-collection-metadata
```

## Usage

To add metadata to a collection, you must assign a metadata object to a property that points to the location of that collection. For example:

```js
import collections from 'metalsmith-collections'
import metadata from 'metalsmith-collection-metadata'

metalsmith
  .use(collections({
    pages: 'pages/*.md',
    posts: 'posts/*.md'
  }))
  .use(metadata({
    pages: { type: 'page' },
    posts: { type: 'post' }
  }))
```

Adds a `type` property to every file in the `pages` and `posts` collections.

## License

MIT
