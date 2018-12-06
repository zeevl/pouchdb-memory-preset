var PouchDB = require('pouchdb-core');
var MemPouch = require('pouchdb-adapter-memory');
var mapreduce = require('pouchdb-mapreduce');
var replication = require('pouchdb-replication');
var HttpPouch = require('pouchdb-adapter-http');

PouchDB.plugin(MemPouch)
  .plugin(HttpPouch)
  .plugin(mapreduce)
  .plugin(replication);

module.exports = PouchDB;

