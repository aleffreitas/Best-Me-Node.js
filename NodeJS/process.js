// lista de argumentos
// console.log(process.argv)

const firsName = process.argv[2]
const lastName = process.argv[3]

//console.log('seu nome é', process.argv[2] + '' + process.argv[3])

console.log(`Seu nome é ${firsName} ${lastName}`)


/*
    # Flag usada no terminal

    node process --name "Alef Freitas"  --greeting "Tudo bem com você?"
    (deixar o console.log(process.argv)) habilitado

*/