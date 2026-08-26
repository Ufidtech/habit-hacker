#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import * as addCommand from './commands/add.js';
import * as listCommand from './commands/list.js';

yargs(hideBin(process.argv))
  .command(addCommand)
  .command(listCommand)
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .parse();