export const command = 'add <habits>';

export const describe = 'add a habit to my CLI habit tracker';

export const builder = (yargs) => {
    return yargs.positional('habits', {
        describe: 'The name of the habit to add',
        type: 'string',
    });
};

export const handler = (argv) => {
    console.log(`Successfully added: ${argv.habits}`)
}