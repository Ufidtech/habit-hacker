export const command = 'list';

export const describe = 'bringing pout all my habits to be seen';

export const builder = (yargs) => {
    return yargs.positional('habits', {
        describe: 'The name of the habit to list',
        type: 'string',
    });
}

export const handler = (argv) => {
    console.log('Here are all your habits: (none yet!)');
}

