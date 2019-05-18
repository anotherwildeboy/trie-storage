let treenode = class {
	constructor(key) {
		this.key = key;
		this.pointer = 0;
		this.data;
		this.branches = [];
		this.alive = true;
	}
}
module.exports.root = class {
	constructor() {
		this.length = 0;
		this.rootnode = new treenode("root");
		this.store = storeData;
		this.get = retrieveData;
		this.remove = removeData;
	}
}

function checkDone(depth, datakey) {
	return (datakey.length - 1 <= depth ? true : false);
}

function storeData(data, datakey) {
	this.length++;
	recursiveInsert(this.rootnode, 0, datakey, data);
}

function retrieveData(datakey) {
	return recursiveRetrieve(this.rootnode, 0, datakey);
}

function removeData(datakey) {
	let result = recursiveRemove(this.rootnode, 0, datakey);
	if (result) {
		this.length--;
	}
	return result;
}

function recursiveInsert(currentNode, depth, datakey, data) {
	let subkey = datakey.substring(depth, depth + 1);
	for (let i = 0; i < currentNode.pointer; i++) {
		if (currentNode.branches[i].key == subkey) {
			if (checkDone(depth, datakey)) {
				currentNode.branches[i].data = data;
				currentNode.branches[i].alive = true;
				return currentNode.branches;
			}
			else {
				currentNode = currentNode.branches[i];
				depth++;
				return recursiveInsert(currentNode, depth, datakey, data);
			}
		}
	}
	let newEmptyNode = new treenode(datakey.substring(depth, depth + 1));
	currentNode.branches.push(newEmptyNode);
	currentNode.pointer++;
	currentNode = newEmptyNode;
	if (checkDone(depth, datakey)) {
		currentNode.data = data;
		return currentNode.branches;
	}
	else {
		depth++;
		return recursiveInsert(currentNode, depth, datakey, data);
	}
}

function recursiveRetrieve(currentNode, depth, datakey) {
	let subkey = datakey.substring(depth, depth + 1);
	for (let i = 0; i < currentNode.pointer; i++) {
		if (currentNode.branches[i].key == subkey) {
			if (checkDone(depth, datakey) && currentNode.branches[i].alive) {
				return currentNode.branches[i].data;
			}
			else {
				currentNode = currentNode.branches[i];
				depth++;
				return recursiveRetrieve(currentNode, depth, datakey);
			}
		}
	}
	return undefined;
}

function recursiveRemove(currentNode, depth, datakey) {
	let subkey = datakey.substring(depth, depth + 1);
	for (let i = 0; i < currentNode.pointer; i++) {
		if (currentNode.branches[i].key == subkey) {
			if (checkDone(depth, datakey)) {
				let data = currentNode.branches[i].data;
				currentNode.branches[i].alive = false;
				return data;
			}
			else {
				currentNode = currentNode.branches[i];
				depth++;
				return recursiveRetrieve(currentNode, depth, datakey);
			}
		}
	}
	return undefined;
}
