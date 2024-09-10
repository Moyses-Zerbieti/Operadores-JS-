function resolveoperacao(){
    var subtt = document.getElementById('subtt')
    var nn1 = document.getElementById('n1')
    var nn2 = document.getElementById('n2')
    var nn3 = document.getElementById('n3')
    var nn4 = document.getElementById('n4')
    var res = document.getElementById('res')

    var resposta1 = Number(nn1.value)
    var resposta2 = Number(nn2.value)
    var resposta3 = Number(nn3.value)
    var resposta4 = Number(nn4.value)

    var adicao = resposta1 + resposta2 + resposta3 + resposta4
    var subtracao = resposta1 - resposta2 - resposta3 - resposta4 
    var multiplicacao = resposta1 * resposta2 
    var divisao = resposta3 / resposta4 
    var potencia = resposta2**2
    var porcentagem = resposta1 % resposta4
    var simplficacao1= ++resposta3
    var simplficacao2= --resposta2

    var maior = resposta1 > resposta3 
    var menor = resposta2 < resposta1
    var maiorIGUAL = resposta4 >= resposta3
    var menorIGUAL = resposta1 <= resposta2 
    var igual = resposta3 == resposta2
    var igualABSOLUTO = resposta3 === resposta1
    var negacao = resposta4 != resposta1

    subtt.innerHTML = `<h3>Os valores a ser trabalhados serão: ${resposta1},${resposta2},${resposta3},${resposta4}</h3>`
    res.innerHTML += 
    `<p><b>Utilizando Operadores Aritiméticos do Javascript</b></p>
    Adição<b>(+)</b>: ${adicao}<br><br>
    Subtração <b>(-)</b>: ${subtracao}<br><br>
    Multiplicação <b>(*)</b>: ${multiplicacao}<br><br>
    Divisão<b>(*)</b>: ${divisao}<br><br>
    Potecialização<b>(**)</b>: ${potencia}<br><br>
    Porcentagem <b>(%)</b>: ${porcentagem}<br><br>
    Simplicando <b>(++)</b>: ${simplficacao1}<br><br>
    Simplicando <b>(--)</b>: ${simplficacao2}<br>

    <p><b>Utilizando Operadores Relacionais do Javascript</b></p>
    ${resposta1} <b> > </b> ${resposta3}: <b>${maior}</b><br><br> 
    ${resposta2} <b> < </b> ${resposta1}: <b>${menor}</b><br><br>
    ${resposta4} <b> >= </b> ${resposta3}: <b>${maiorIGUAL}</b><br><br>
    ${resposta1} <b> <= </b> ${resposta2}: <b>${menorIGUAL}</b><br><br>
    ${resposta3} <b> == </b> ${resposta2}: <b>${igual}</b><br><br>
    ${resposta3} <b> === </b> ${resposta1}: <b>${igualABSOLUTO}</b><br><br>
    ${resposta4} <b> != </b> ${resposta1}: <b>${negacao}</b><br><br>
    
    <p><b>Realizando expressões matematicas com os Operadores Lógicos do Javascript</b></p>
    (${resposta3} * 4 > 8) <b>&&</b> (${resposta1} % 4 <  7): ${resposta3 * 4 > 8 && resposta1 % 4 < 7}<br><br>
    (${resposta1} + 8 == 15) <b>||</b> (${resposta4} / 3 != 4): ${resposta1 + 8 == 15 || resposta4 / 3 != 4}<br><br>
    (${resposta2} ** > 17) <b>&&</b> (${resposta1} - 4 <= 15): ${resposta2**2 > 17 && resposta1 - 4 <= 15}<br><br>
    (${resposta4} != ${resposta3}) <b>||</b> (${resposta2} - ${resposta2} % 4 + 3 === ${resposta1}): ${resposta4 != resposta3 || resposta2 - resposta2 % 4 + 3 === resposta1}<br><br>
    (${resposta2} ++ <b>!==</b> 5: ${resposta2++ !==5}<br><br>
    (${resposta3} -- <b><=</b> 8): ${! resposta3-- <= 8}<br><br>
    (${resposta4} * 3 / 5 - ${resposta2} % 7 != 16) <b>&&</b> (${resposta3} == 5 * 2 / ${resposta1} <= 13): ${resposta4 * 3 / 5 - resposta2 % 7 != 16 && resposta3 == 5 * 2 / resposta1 <= 13}<br><br>`
}
