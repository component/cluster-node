
/**
 * Module dependencies.
 */

var html = require('./template').trim();
var reactive = require('reactive');
var domify = require('domify');

module.exports = Node;

function Node(obj) {
  this.name = obj.name;
  this.el = domify(html);
  reactive(this.el, obj, this);
  this.list = this.el.querySelector('.processes');
  this.procs = [];
}

Node.prototype.add = function(proc){
  // TODO: reactive iteration
  var li = document.createElement('li');
  li.appendChild(proc.el);
  this.list.appendChild(li);
  this.procs.push(proc);
};
