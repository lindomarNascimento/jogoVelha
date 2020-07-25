let a1 = document.querySelector("div#a1")
let a2 = document.querySelector("div#a2")
let a3 = document.querySelector("div#a3")
let b1 = document.querySelector("div#b1")
let b2 = document.querySelector("div#b2")
let b3 = document.querySelector("div#b3")
let c1 = document.querySelector("div#c1")
let c2 = document.querySelector("div#c2")
let c3 = document.querySelector("div#c3")
let quadradoBotao = document.querySelector("div#quadradoBotaoPlay2")
let quadradoBotaoMelhor3OU5 = document.querySelector("div#quadradoBotaoMelhor3OU5")
let pontosX = document.querySelector("div#pontosX")
let pontosO = document.querySelector("div#pontosO")
var troca = true
let pontosJogadorX = 0
let pontosJogadorO = 0
let controleBotao = 0
let comecarJogo = document.querySelector("div#jogar")
let reiniciar = document.querySelector("div#reiniciar")
let historicoJogadasNomeJogador = document.querySelector("div#nomeJog")
let historicoJogadasQuadrado = document.querySelector("div#quadradoClicado")
let historicoJogadasXO = document.querySelector("div#xo")
let nomeJogador1 = document.getElementById("jogador1")
let nomeJogador2 = document.getElementById("jogador2")
let divs =document.querySelector(".resposta")
let desabilitarComecar = true
let vezDoJogador = 0
let contadorNomeJogador = 0
let vetorJogador2Maquina = []
reiniciar.addEventListener('click', reinicio)
quadradoBotao.addEventListener('click', clickBotao)
quadradoBotaoMelhor3OU5.addEventListener('click', clickBotaoMelhor3OU5)

function desabilitarJogar() {
    const desativarComecar = document.querySelector('.desabilitar')
    desativarComecar.disabled = true 
    desativarComecar.classList.add('desativado')
}

function habilitarJogar() {
    desativarComecar = document.querySelector('.desabilitar')
    desativarComecar.disabled = false
    desativarComecar.classList.remove('desativado')
}

function comecaJogo() {
    desabilitarJogar()
    if(desabilitarComecar) {
            alert(`Começando pelo jogador ${nomeJogador1.value}`)
            a1.addEventListener('click', function(){entrar(a1)})
            a2.addEventListener('click', function(){entrar(a2)})
            a3.addEventListener('click', function(){entrar(a3)})
            b1.addEventListener('click', function(){entrar(b1)})
            b2.addEventListener('click', function(){entrar(b2)})
            b3.addEventListener('click', function(){entrar(b3)})
            c1.addEventListener('click', function(){entrar(c1)})
            c2.addEventListener('click', function(){entrar(c2)})
            c3.addEventListener('click', function(){entrar(c3)})

    }
    desabilitarJogar()

}

function entrar(campo) {
    if(campo.innerHTML == "x" || campo.innerHTML == "o") {
        return
    } else {
        campo.innerHTML = xOUo()
        historicoJogadas(troca)
    }
    verificaGanhador()
} 

function reinicio() {
    a1.innerHTML = ""
    a2.innerHTML = ""
    a3.innerHTML = ""
    b1.innerHTML = ""
    b2.innerHTML = ""
    b3.innerHTML = ""
    c1.innerHTML = ""
    c2.innerHTML = ""
    c3.innerHTML = ""
    pontosJogadorX = 0
    pontosJogadorO = 0
    

    document.querySelector("div#pontosX").innerHTML = `${pontosJogadorX}`
    document.querySelector("div#pontosO").innerHTML = `${pontosJogadorO}`
    if(controleBotao % 2 == 1) {
        document.querySelector("div#bolinhaBotaoMelhor3OU5").style.marginLeft = "2px";
    }
    desabilitarJogar()
}
/* botao do player 2 para saber se joga com o cpu ou outra pessoa */
function clickBotao() {
    if(quadradoBotao.click && controleBotao % 2 == 0){
        document.querySelector("div#bolinhaBotao").style.marginLeft = "33px";
        document.querySelector("div#quadradoBotaoPlay2").style.backgroundColor = ' #63df3e'
        maquinaJogador2()
    } else {
        document.querySelector("div#bolinhaBotao").style.marginLeft = "2px";
        document.querySelector("div#quadradoBotaoPlay2").style.backgroundColor = 'rgba(59, 115, 219, 0.979)'
    }
    controleBotao ++
}
/* botao para saber se é melhor de 3 ou 5 */
function clickBotaoMelhor3OU5() {
    if(quadradoBotao.click && controleBotao % 2 == 0){
        document.querySelector("div#bolinhaBotaoMelhor3OU5").style.marginLeft = "33px";
    } else {
        document.querySelector("div#bolinhaBotaoMelhor3OU5").style.marginLeft = "2px";
    }
    controleBotao ++
}

function xOUo() {
    contadorNomeJogador ++
    if(troca) {
        troca = false
        return "x"
    } else {
        troca = true
        return "o";
    }
    
}

function verificaGanhador(campo) {
    if ((a1.innerHTML == b1.innerHTML && a1.innerHTML == c1.innerHTML && a1.innerHTML != "")) {
        cenarioAnterior()
        vencedor(a1)
    } else if ((a1.innerHTML == a2.innerHTML && a1.innerHTML == a3.innerHTML && a1.innerHTML != "")) {
        cenarioAnterior()
        vencedor(a1)
    } else if ((a1.innerHTML == b2.innerHTML && a1.innerHTML == c3.innerHTML && a1.innerHTML != "")) {
        cenarioAnterior()
        vencedor(a1)
    } else if ((b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML && b1.innerHTML != "")) {
        cenarioAnterior()
        vencedor(b1)
    } else if ((b2.innerHTML == a2.innerHTML && b2.innerHTML == c2.innerHTML && b2.innerHTML != "")) {
        cenarioAnterior()
        vencedor(b2)
    } else if ((b2.innerHTML == a3.innerHTML && b2.innerHTML == c1.innerHTML && b2.innerHTML != "")) {
        cenarioAnterior()
        vencedor(b2)
    } else if ((c1.innerHTML == c2.innerHTML && c1.innerHTML == c3.innerHTML && c1.innerHTML != "")) {
        cenarioAnterior()
        vencedor(c1)
    } else if ((c1.innerHTML == c2.innerHTML && c1.innerHTML == c3.innerHTML && c1.innerHTML != "")) {
        cenarioAnterior()
        vencedor(c1)
    } else if ((c3.innerHTML == b3.innerHTML && c3.innerHTML == a3.innerHTML && c3.innerHTML != "")) {
        cenarioAnterior()
        vencedor(c3)
    } else if (a1.innerHTML != "" && a2.innerHTML != "" && a3.innerHTML != "" && b1.innerHTML != "" && 
    b2.innerHTML != "" && b3.innerHTML != "" && c1.innerHTML != "" && c2.innerHTML != "" && c3.innerHTML != "") {
            alert(`Empate!!, não houve ganhador`)
            cenarioAnterior()
            comecarDenovo()
    }
}

function comecarDenovo() {
    a1.innerHTML = ""
    a2.innerHTML = ""
    a3.innerHTML = ""
    b1.innerHTML = ""
    b2.innerHTML = ""
    b3.innerHTML = ""
    c1.innerHTML = ""
    c2.innerHTML = ""
    c3.innerHTML = ""
}

 async function vencedor(campo) {
    if (campo.innerHTML == "x") {
        await passaTempo(50)
        alert(`O jogador "${nomeJogador1.value}" Ganhou`)
        pontosJogadorX++
        pontosX.innerHTML = `${pontosJogadorX}`
        comecarDenovo()   
    } else {
        await passaTempo(50)
        alert(`O jogador "${nomeJogador2.value}" Ganhou`)
        pontosJogadorO++
        pontosO.innerHTML = `${pontosJogadorO}`
        comecarDenovo()
    }   
    acabouJogo()
    
}

function acabouJogo() {
    if(controleBotao % 2 == 0) {
        if(pontosJogadorX == 3) {
            alert(`O jogador ${nomeJogador1.value} ganhou, parabens!!!`)
            reinicio()
        } else if ( pontosJogadorO == 3) {
            alert(`O jogador ${nomeJogador2.value} ganhou, parabens!!!!`)
            reinicio()
        }
    } else {
        if(pontosJogadorX == 5) {
            alert(`O jogador ${nomeJogador1.value} ganhou, parabens!!!`)
            reinicio()
        } else if ( pontosJogadorO == 5) {
            alert(`O jogador ${nomeJogador2.value} ganhou, parabens!!!!`)
            reinicio()
        }
    }
}

function historicoJogadas(campo) {
    let createDiv = document.createElement('div')
    createDiv.classList.add("divsHistorico")


    if(a1.innerHTML != "") {
        createDiv.innerText = ""
        createDiv.append("Primeiro Quadrado" + '')
    }
    if(a2.innerHTML != "") {
        createDiv.innerText = ""
        createDiv.append("Segundo Quadrado")
    }
    if(a3.innerHTML != "") {
        createDiv.innerText = ""
        createDiv.append("Terceiro Quadrado")
    }
    if(b1.innerHTML != "") {
        createDiv.innerText = ""
        createDiv.append("Primeiro Quadrado")
    }
    if(b2.innerHTML != "") {
        createDiv.innerText = ""
        createDiv.append("Segundo Quadrado")
    }
    if(b3.innerHTML != "") {
        createDiv.innerText = ""
        createDiv.append("Terceiro Quadrado")
    }
    if(c1.innerHTML != "") {
        createDiv.innerText = ""
        createDiv.append("Primeiro Quadrado")
    }
    if(c2.innerHTML != "") {
        createDiv.innerText = ""
        createDiv.append("Segundo Quadrado")
    }
    if(c3.innerHTML != "") {
        createDiv.innerText = ""
        createDiv.append("Terceiro Quadrado")
    }
    if(contadorNomeJogador % 2 == 0) {
        createDiv.innerHTML += "<p>" + `${nomeJogador2.value}` + " 'O' </p>"
    } else {
        createDiv.innerHTML += "<p>" + `${nomeJogador1.value}` + " 'X' </p>"
    }
    divs.appendChild(createDiv)
    vezDoJogador ++
    }


function cenarioAnterior() {
    let a1Pequeno = document.querySelector("div#a1Pequeno")
    let a2Pequeno = document.querySelector("div#a2Pequeno")
    let a3Pequeno = document.querySelector("div#a3Pequeno")
    let b1Pequeno = document.querySelector("div#b1Pequeno")
    let b2Pequeno = document.querySelector("div#b2Pequeno")
    let b3Pequeno = document.querySelector("div#b3Pequeno")
    let c1Pequeno = document.querySelector("div#c1Pequeno")
    let c2Pequeno = document.querySelector("div#c2Pequeno")
    let c3Pequeno = document.querySelector("div#c3Pequeno")

    a1Pequeno.innerText = a1.innerHTML
    a2Pequeno.innerHTML = a2.innerHTML
    a3Pequeno.innerHTML = a3.innerHTML
    b1Pequeno.innerHTML = b1.innerHTML
    b2Pequeno.innerHTML = b2.innerHTML
    b3Pequeno.innerHTML = b3.innerHTML
    c1Pequeno.innerHTML = c1.innerHTML
    c2Pequeno.innerHTML = c2.innerHTML
    c3Pequeno.innerHTML = c3.innerHTML
}

function passaTempo(tempo) {
    return new Promise(resolve => setTimeout(resolve, tempo))
}

function maquinaJogador2() {
    let casa = Math.floor(Math.random() * 9)
   
    switch(casa) {
        case 0:
            if(a1.innerHTML == "") {
                a1.innerHTML = xOUo()
                vencedor()
            } else {
                casa = Math.floor(Math.random() * 9)
                alert(`preenchido ${casa}`)
            }
            break;
        case 1: 
            if(a1.innerHTML == "") {
                a2.innerHTML = xOUo()
                vencedor()
            } else {
                casa = Math.floor(Math.random() * 9)
                alert(`preenchido ${casa}`)
            }
            break;
        case 2: 
            if(a1.innerHTML == "") {
                a3.innerHTML = xOUo()
                vencedor()
            } else {
                casa = Math.floor(Math.random() * 9)
                alert(`preenchido ${casa}`)
            }
            break;
        case 3: 
            if(b1.innerHTML == "") {
                b1.innerHTML = xOUo()
                vencedor()
            }else {
                casa = Math.floor(Math.random() * 9)
                alert(`preenchido ${casa}`)
            }
            break;
        case 4:
            if(b2.innerHTML  == "") {
                b2.innerHTML = xOUo()
                vencedor()
            }else {
                casa = Math.floor(Math.random() * 9)
                 alert(`preenchido ${casa}`)
            } 
            break;
        case 5: 
            if(b3.innerHTML == "") {
                b3.innerHTML = xOUo()
                vencedor()
            }else {
                casa = Math.floor(Math.random() * 9)
                alert(`preenchido ${casa}`)
            }
            break;
        case 6: 
            if(c1.innerHTML == "") {
                c1.innerHTML = xOUo()
                vencedor()
            }else {
                casa = Math.floor(Math.random() * 9)
                alert(`preenchido ${casa}`)  
            }
            break;
        case 7: 
            if(c2.innerHTML == "") {
                c2.innerHTML = xOUo()
                vencedor()
            }else {
                casa = Math.floor(Math.random() * 9)
                alert(`preenchido ${casa}`)
            }
            break;
        case 8: 
            if(c3.innerHTML == "") {
                c3.innerHTML = xOUo()
                vencedor()
            }else {
                casa = Math.floor(Math.random() * 9)
                alert(`preenchido ${casa}`)
            }
            break;
      }
}