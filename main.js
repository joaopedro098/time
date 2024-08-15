let idade 
let mei=0
let mai=0
for(let time=1;time<4;time++){
    for(let jogador=1;jogador<7;jogador++){
        idade=prompt(`informe a idade do ${jogador}ª jogador do ${time}º time: `)
        if((time==1) && (jogador==1)){
            mai=(idade)
            mei=(idade)
        }
        else{
            if(idade>mai){
                mai=(idade)
            }
            else if(idade<mei){
                mei=(idade)
            }
        }
    }
}
document.write(`a idade do jogador mais velho é: ${mai}`)
document.write("<br>")
document.write( `a idade do jogador mais novo é: ${mei}`)