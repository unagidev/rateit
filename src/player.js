// @flow

class Player {
  id = '';
  _rating: number;
  _history: number[] = [];

  constructor(id: string, rating: number) {
    this.id = id;
    this._rating = rating;
    this._history.push(rating);
  }

  get rating() {
    return this._rating;
  }

  set rating(rating: number) {
    this._rating = rating;
    this._history.push(rating);
  }

  get history() {
    return this._history;
  }

  set history(rating: number) {
    this._history.push(rating);
  }

}

export default Player;
