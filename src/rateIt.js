// @flow
import type {Algorithm} from './types';
import Player from './player';

type PlayerMap = Map<string, ?Player>;

class RateIt {
  _algorithm: Algorithm;
  _players: PlayerMap = new Map();

  constructor(algorithm: Algorithm) {
    this._algorithm = algorithm;
  }

  get players() {
    return this._players;
  }

  get algorithm() {
    return this._algorithm;
  }

  addPlayer(id: string, place: number, rating: number) {
    const player = new Player(id, rating || this._algorithm.defaultRating);

    this._players.set(id, player);

    return player;
  }

  race(positions: Player[] | [Player[]]) {
    positions.forEach(position => {

    });
  }

  duel(p1: Player, p2: Player, draw: boolean = false) {
    const [p1Rating, p2Rating] = this._algorithm.getRatingsByMatch(p1.rating, p2.rating, draw);
    const _p1 = this.players.get(p1.id);
    const _p2 = this.players.get(p2.id);

    if (_p1) {
      _p1.rating = p1Rating;
    }
    if (_p2) {
      _p2.rating = p2Rating;
    }

    return {getRanking: this.getRanking.bind(this)};
  }

  getRanking(): (?Player)[] {
    const players: (?Player)[] = [...this.players.values()];

    return players.sort((p1, p2) => (p1 && p2 ? p2.rating - p1.rating : 0));
  }
}

export {RateIt};
