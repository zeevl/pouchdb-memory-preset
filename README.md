pouchdb-memory-preset
======

PouchDB, the in-memory-only edition.

Well, not completely. It also contains the replication, HTTP, and map/reduce plugins.

Use this preset if you like to forget what you're doing.

### Usage

```bash
npm install pouchdb-memory-preset
```

```js
var PouchDB = require('pouchdb-memory-preset');
var db = new PouchDB('mydb');
```
