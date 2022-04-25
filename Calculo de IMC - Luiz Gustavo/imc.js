let $calcular = document.getElementById("calcular");
$calcular.addEventListener("click", imc); 
let $resultado = document.getElementById("valor");
//Quando o botão calcular for clicado, será chamada a função imc.


function imc(){
    let $nome = document.getElementById("nome").value; 
    let $altura = document.getElementById("altura").value;
    let $peso = document.getElementById("peso").value;
    
    if($nome != "" || $altura != "" || $peso != "") {
        
        $altura = $altura.replace(",",".");
        $peso = $peso.replace(",",".");

        
        $altura = parseFloat($altura);
        $peso = parseFloat($peso);
        
        let calcIMC = ($peso/($altura*$altura)).toFixed(1);
        
        let $classificacao = '';

        if (calcIMC < 18.5) {
                $classificacao = "abaixo do peso";
            }
            else if(calcIMC < 25){
                $classificacao = "no peso ideal";
            }
                else if(calcIMC < 30){
                $classificacao = "levemente acima do peso";
            }
                else if(calcIMC < 35 ){
                $classificacao = "obesidade grau I";
                }
                else if(calcIMC < 40 ){
                $classificacao = "obesidade grau II";
                }
                else {
                    $classificacao ="com obesidade grau III";   
                }


            calcIMC = calcIMC.replace(".",",");
            $resultado.textContent = (`${$nome}, seu IMC é: ${calcIMC} e está ${$classificacao}.`)
    } 
    
    else{
        $resultado.textContent = "Obrigatório o preenchimento dos campos"
    }
}