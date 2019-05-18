# trie-storage
![MIT Licence](https://img.shields.io/badge/licence-MIT-brightgreen.svg?style=flat) ![0 dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat) ![runtime O(M)](https://img.shields.io/badge/runtime-O(M)-blue.svg?style=flat)


JavaScript implementation of a Trie structure for high speed data storage and retrival (at the expense of storage space).

Runtime of O(M), where M is the number of characters in an object's key.
  
## Setup 


A new tree can be created using the `root` constructor inside the `tree-storage` module.

Example: <i>(Omitted from future examples for simplicity)</i>

```js

const ts = require('./trie-storage.js'); // Require the trie module

let trie = new ts.root(); // Create a new tree 

```


## Usage

### store(data, datakey)

Stores the value `data` using `datakey`as it's key.

Example: 

```js

trie.store(myData, "myKey");

```

##

### get(datakey)

Fetches the stored data which is using a key of `datakey`. Returns `undefined` if no data is found.

Example: 

```js

let data = trie.get("myKey");

```

##

### remove(datakey)

Returns the data stored using a key of `datakey` before removing it from all future searches. 

Example: 

```js

trie.store(myData, "myKey");

trie.remove("myKey");

let data = trie.get("myKey"); // Returns undefined

```

### .length

Returns the number accessible elements inside a given tree.

Example:

```js

console.log(trie.length); 

```
