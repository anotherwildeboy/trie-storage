# trie-storage
![MIT Licence](https://img.shields.io/badge/licence-MIT-brightgreen.svg?style=flat) ![0 dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat) ![runtime O(M)](https://img.shields.io/badge/runtime-O(M)-blue.svg?style=flat)


JavaScript implementation of a Trie structure for high speed data storage and retrival.

Runtime of <b>O(M)</b>, where M is the character count of an object's key. 
  
## Setup 


Create a new tree using the `root` constructor inside the `tree-storage` module.

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

Fetches the stored data which is using a key of `datakey`. 

Returns `undefined` if no data is found.

Example: 

```js

let data = trie.get("myKey");

```

##

### remove(datakey)

Returns the data stored using a key of `datakey` before removing it from the trie. 

Example: 

```js

trie.store(myData, "myKey");

trie.remove("myKey");

let data = trie.get("myKey"); // Returns undefined

```

### .length

Returns the number of accessible elements inside a given tree.

Example:

```js

let nodeCount = trie.length; 

```
