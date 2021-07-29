const getFlagValue = require('./flags')
console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)

/*
    Comando do terminal
    node greetings --name "Alef Freitas" --greeting "Tudo bem com você?"
*/