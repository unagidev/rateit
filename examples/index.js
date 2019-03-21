import {argv} from 'yargs';
import elo from './elo';

if (argv.example) {
  switch (argv.example) {
    case 'elo':
      elo();
      break;
    default:
      throw Error('exmaple_name should be: "elo" ');
  }
} else {
  throw Error('--example=[exmaple_name] is required');
}
