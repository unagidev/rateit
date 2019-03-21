// @flow
export interface Algorithm {

  /**
   * Default rating for current Algorithm
   */
  get defaultRating(): number,

  /**
   * Returns a new rating based on a result of a One vs One match
   * @param winnerRating
   * @param looserRating
   * @param draw: number If true order does not matter
   * @return {number[]} New Ratings
   */
  getRatingsByMatch(winnerRating: number, looserRating: number, draw: boolean): number[],

  /**
   * Returns new ratings based on a result of a multi player match
   * @param ratings
   * @return {number[]} New Ratings
   */
  getRatingsByPlayers(ratings: number[]): number[],

  /**
   * Returns new ratings based on a result of a multi team match
   * @param teams
   * @return {[number[]]} New Ratings
   */
  getRatingsByTeams(teams: [number[]]): [number[]],
}
