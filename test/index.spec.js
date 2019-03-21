/* global describe, it, before */
import * as chai from 'chai';
import RateIt from '../lib/rateit.js';

const expect = chai.expect;

let rateIt;

describe('Given an instance of RateIt', () => {
  before(() => {
    rateIt = new RateIt(RateIt.algorithms.elo);
  });
  describe('rateIt.algorithm', () => {
    it('should return RateIt.algorithms.elo', () => {
      expect(rateIt.algorithm).to.be.equal(RateIt.algorithms.elo);
    });
  });
  describe('rateIt.addPlayer', () => {
    const player = rateIt.addPlayer('damian', 1);

    it('should return RateIt.algorithms.elo', () => {
      expect(rateIt.addPlayer('damian', 1)).to.be.equal(player);
    });
  });
});

describe('Given an instance of RateIt', () => {
  before(() => {
    rateIt = new RateIt(RateIt.algorithms.bbt);
  });
  describe('rateIt.algorithm', () => {
    it('should return RateIt.algorithms.bbt', () => {
      expect(rateIt.algorithm).to.be.equal(RateIt.algorithms.bbt);
    });
  });
});

