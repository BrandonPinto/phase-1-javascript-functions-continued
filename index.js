function saturdayFun(Saturday='roller-skate') {
    return `This Saturday, I want to ${Saturday}!` 
}
function mondayWork(monday='go to the office') { 
    return `This Monday, I will ${monday}.`
}
function wrapAdjective(adj= "*") {
    return function(word="special"){
    return `You are ${adj}${word}${adj}!`
    }
}
