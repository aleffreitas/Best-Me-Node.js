//const events = require('events')

//console.log(events)


////const {EventEmitter} = require('events')
////const ev = new EventEmitter()
////console.log(ev)

const {EventEmitter} = require('events')
const ev = new EventEmitter()

// ev.once Executa somente uma vez, independente de quantos disparos

ev.on('saySomething', (message) => {
    console.log('Eu ouvi você:', message)
})

ev.emit('saySomething', "Alef")
ev.emit('saySomething', "Alef")
ev.emit('saySomething', "Alef")


//const {inherits} = require ('util')  Puxar do módulo Útil puxar a função inherits. Ela vai herdar o que? herdar as funcionalidades do EventEmitter para a função Character
// const {EventEmitter} = require('events')
// function Character (name) {this.name = name} quando executar essa função fazendo um new Character, eu vou querer que traga as opções que tem no EventEmitter

//inherits (Character, EventEmitter) função inherits está recebendo como primeiro argumento a função acima que é uma construtora e dentro dela terá opções do Eventemitter, on e emit vai fazer parte dessa função (function Character)

const chapolin = new Character('Chapolin');
chapolin.on('hel', () => console.log(`Eu! o ${chapolin.name} colorado!`))
console.log('Oh! E agora, quem poderá me denfender?')
chapolin.emit('help')