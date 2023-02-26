function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota)

    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalei(valor) {
    if(valor) {
        console.log('E verdade... ' + valor)
        
    }
}
seForVerdadeEuFalei()
seForVerdadeEuFalei(null)
seForVerdadeEuFalei(undefined)
seForVerdadeEuFalei(NaN)
seForVerdadeEuFalei('')
seForVerdadeEuFalei(0)
seForVerdadeEuFalei(-1)
seForVerdadeEuFalei(' ')
seForVerdadeEuFalei('?')
seForVerdadeEuFalei([])
seForVerdadeEuFalei([1,2])
seForVerdadeEuFalei({})
