const jsonfile = require('jsonfile')
const jsonMerger = require('json-merger')
const fs = require('fs')

const result = jsonMerger.mergeFiles([
  'config.json', 
  'users.json',
  'apartments.json',
  'apartmentSearches.json',
  'reservations.json'
])

jsonfile.writeFile('db.json', result, { spaces: 2 }, (err, result) => {
  if (err) { console.error(err) }
})