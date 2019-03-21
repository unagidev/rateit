import RateIt, {Elo} from '../lib/rateit.js';

export default () => {
  const rateIt = new RateIt(new Elo());
  let jhon = rateIt.addPlayer('jhon');
  let jane = rateIt.addPlayer('jane');

  console.log('players \n', rateIt.players.entries(), '\n');
  const match1 = rateIt.duel(jhon, jane).getRanking();

  console.log('match1: Jhon wins \n', match1, '\n');

  const match2 = rateIt.duel(jhon, jane, true).getRanking();

  console.log('match2: draws \n', match2, '\n');

  const match3 = rateIt.duel(jane, jhon).getRanking();

  console.log();
  console.log('match3: Jane wins \n', match3, '\n');

  console.log('players \n', rateIt.players.entries());

};

