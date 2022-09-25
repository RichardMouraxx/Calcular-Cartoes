// Botão limpar, recarrega a pagina
var btn = document.querySelector("#limpar");
btn.addEventListener("click", function Limpar() {
    location.reload();
});

// Evento 'Enter' chama a função Calcular()
window.addEventListener('keyup', (e) => {
    if (e.key == 'Enter'){
        Calcular()
    }
})

function Calcular() {

    let a1 = Number(document.getElementById('a1').value)
    let a2 = Number(document.getElementById('a2').value)
    let a3 = Number(document.getElementById('a3').value)
    let a4 = Number(document.getElementById('a4').value)
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let n3 = Number(document.getElementById('n3').value)
    let res1 = document.getElementById('res1')
    let res2 = document.getElementById('res2')
    let res3 = document.getElementById('res3')
    let res4 = document.getElementById('res4')
    let res5 = document.getElementById('res5')

    // Validação de campos a1 e n1
    if (a1 == ''|| n1 == '') {
        res1.innerHTML = ''
        res2.innerHTML = ''
        res3.innerHTML = ''
        res4.innerHTML = ''
        return res5.innerHTML = '*Insira ao menos um valor em cada seção*'
    } else {
        res5.innerHTML = ''
    }

    // Calcula os valores
    let somaCartao = a1 + a2 + a3
    let soma = n1 + n2 + n3
    let total = a4 + soma

    // Imprime o texto com os valores no HTML
    res1.innerHTML = 'O Total dos cartões é de: R$ ' + somaCartao.toFixed(2)
    res2.innerHTML = 'O dinheiro total que você tem é: R$ ' + soma.toFixed(2)
    res3.innerHTML = ' '
    res4.innerHTML = ' '

    //Verifica se sobrou ou faltou dinheiro e imprime na tela
    if (somaCartao > total) {
        res4.innerHTML = 'Você ainda deve: R$ ' + (somaCartao - total).toFixed(2)
    } else {
        res3.innerHTML = 'Sobrou para você esse mês: R$ ' + (total - somaCartao).toFixed(2)
    }
}