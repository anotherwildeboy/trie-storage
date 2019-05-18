var treenode = function(a) {
  this.key = a;
  this.pointer = 0;
  this.data;
  this.branches = [];
  this.alive = !0;
};
module.exports.root = function() {
  this.length = 0;
  this.rootnode = new treenode("root");
  this.store = storeData;
  this.get = retrieveData;
  this.remove = removeData;
};
function checkDone(a, b) {
  return b.length - 1 <= a ? !0 : !1;
}
function storeData(a, b) {
  this.length++;
  recursiveInsert(this.rootnode, 0, b, a);
}
function retrieveData(a) {
  return recursiveRetrieve(this.rootnode, 0, a);
}
function removeData(a) {
  (a = recursiveRemove(this.rootnode, 0, a)) && this.length--;
  return a;
}
function recursiveInsert(a, b, d, e) {
  for (var c = d.substring(b, b + 1), f = 0; f < a.pointer; f++) {
    if (a.branches[f].key == c) {
      if (checkDone(b, d)) {
        return a.branches[f].data = e, a.branches[f].alive = !0, a.branches;
      }
      a = a.branches[f];
      b++;
      return recursiveInsert(a, b, d, e);
    }
  }
  c = new treenode(d.substring(b, b + 1));
  a.branches.push(c);
  a.pointer++;
  a = c;
  if (checkDone(b, d)) {
    return a.data = e, a.branches;
  }
  b++;
  return recursiveInsert(a, b, d, e);
}
function recursiveRetrieve(a, b, d) {
  for (var e = d.substring(b, b + 1), c = 0; c < a.pointer; c++) {
    if (a.branches[c].key == e) {
      if (checkDone(b, d) && a.branches[c].alive) {
        return a.branches[c].data;
      }
      a = a.branches[c];
      b++;
      return recursiveRetrieve(a, b, d);
    }
  }
}
function recursiveRemove(a, b, d) {
  for (var e = d.substring(b, b + 1), c = 0; c < a.pointer; c++) {
    if (a.branches[c].key == e) {
      if (checkDone(b, d)) {
        return b = a.branches[c].data, a.branches[c].alive = !1, b;
      }
      a = a.branches[c];
      b++;
      return recursiveRetrieve(a, b, d);
    }
  }
}
;
