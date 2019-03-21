// @flow
import type {Algorithm} from '../types';

class Elo implements Algorithm {
  _k: number | (number)=>number = 32;
  _defaultRating: number = 1500;

  constructor(config: Object) {
    if (config) {
      this._k = config.k || 32;
      this._defaultRating = config.defaultRating || 1500;
    }
  }

  _getE(pRating: number, oRating: number) {
    return 1 / (1 + Math.pow(10, (oRating - pRating) / 400));
  }

  _getElo(rating: number, s: number, E: number) {
    let k;

    if (typeof this._k === 'function') {
      k = this._k(rating);
    } else {
      k = this._k;
    }
    return rating + Math.round(k * (s - E));
  }

  get defaultRating() {
    return this._defaultRating;
  }

  getRatingsByMatch(winnerRating: number, looserRating: number, draw: boolean): number[] {
    const winnerE = this._getE(winnerRating, looserRating);
    const looserE = this._getE(looserRating, winnerRating);
    const winnerS = draw ? 0.5 : 1;
    const looserS = draw ? 0.5 : 0;

    return [
      this._getElo(winnerRating, winnerS, winnerE),
      this._getElo(looserRating, looserS, looserE)
    ];
  }

  getRatingsByPlayers(ratings: number[]): number[] {
    return [];
  }

  getRatingsByTeams(teams: [number[]]): [number[]] {
    return [[]];
  }
}

export {Elo};
