// -- Node readFile example ------------------------------------------
import { curry, head, prop, split } from '@mostly-adequate/support';
const Task = require('data.task');
const fs = require('fs');

// readFile :: String -> Task Error String
const readFile = (filename) =>
  new Task((reject, result) => {
    fs.readFile(filename, 'utf8', (err, data) => (err ? reject(err) : result(data)));
  });

readFile('./ch08/metamorphosis.txt')
  .map(split('\n'))
  .map(head)
  .fork(
    (e) => {
      console.error(e);
    },
    (value) => {
      console.log(value);
    }
  );

// -- jQuery getJSON example -----------------------------------------

// getJSON :: String -> {} -> Task Error JSON
const getJSON = curry(
  (url, params) =>
    new Task((reject, result) => {
      $.getJSON(url, params, result).fail(reject);
    })
);

getJSON('/video', { id: 10 }).map(prop('title'));
// Task('Family Matters ep 15')

// -- Default Minimal Context ----------------------------------------

// We can put normal, non futuristic values inside as well
Task.of(3)
  .map((three) => three + 1)
  .fork(
    (e) => {
      console.error('err', e);
    },
    (value) => {
      console.log('value', value);
    }
  );
