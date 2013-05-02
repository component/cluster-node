
function Node(obj) {
  this.name = obj.name;
  this.procs = [];
}

Node.prototype.add = function(proc){
  this.procs.push(proc);
};
