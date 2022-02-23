const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length || typeof position !== 'number' || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chain = this.chain.map(item => `( ${item} )`).join('~~');
    this.chain = [];
    return chain;
  }
};


// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4))

module.exports = {
  chainMaker
};
