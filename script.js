//ESCONDER CONTEUD NA TELA
wrapper_submit.style.display = "none";

//ESCOLHENDO VALOR DOS BUUTTON
function insertValues(num) {
  const btnSelect = document.getElementById("btnNumber").value;
  document.getElementById("btnNumber").toFixed = btnSelect;
  console.log(num);

  //MOSTRAR - ESCONDER CONTEUDO NA TELA APÓS EVENDO DE CLICK
  btn_submit.addEventListener("click", function () {
    wrapper_submit.style.display = "block";
    wrapper.style.display = "none";
  });
  document.getElementById("resultado").innerHTML = `You selected ${num}`;
}
