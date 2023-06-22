var dicas = [];
var listaLi = [];

function adicionarDica() {
    var materialSelecionado = document.getElementById("material").value;
    var dicaTexto = document.getElementById("dica").value;
    var lista = document.getElementById("dicas-list");
    var novoItem = document.createElement("li");
    var aux = "";
    
    if (materialSelecionado === '' || dicaTexto === '') {
      alert("Preencha todos os campos.");
      return;
    }


    if(localStorage.arr){
      listaLi = JSON.parse(localStorage.getItem("arr"));
    }
    aux = materialSelecionado+"|"+dicaTexto;
    listaLi.push(aux);
    localStorage.arr = JSON.stringify(listaLi)
    var listaAux = aux.split("|");
    novoItem.setAttribute("data-material", listaAux[0]);
    novoItem.innerText = listaAux[1];
    lista.appendChild(novoItem);
    exibirDicas();
     // Limpa os campos do formulário
     document.getElementById('material').value = '';
     document.getElementById('dica').value = '';
  }

function exibirDicas() {
  var dicasList = document.getElementById("dicas-list");
  dicasList.innerHTML = "";
  
  if(localStorage.arr){
    listaLi = JSON.parse(localStorage.getItem("arr"));
  }

  for (var i in listaLi) {
    var aux = listaLi[i].split("|");
    var dicaElement = document.createElement("li");
    dicaElement.classList.add("dica", aux[0]);
    dicaElement.innerHTML = "<h3>" + aux[0]+ "</h3><p>" + aux[1] + "</p>" + "<button id='excluir-por-material-btn' onclick='excluirPorMaterial("+i+")'>Excluir</button>";
    dicasList.appendChild(dicaElement);
  }
  console.log(listaLi)
  document.getElementById("material").value = "";
}

exibirDicas();

function excluirPorMaterial(numero) {
    var lista = document.getElementById("dicas-list");

    document.querySelector(".dica")

    if(localStorage.arr){
      listaLi = JSON.parse(localStorage.getItem("arr"));
    }
    
    listaLi.splice(numero,1)
    console.log(lista.childNodes)
    
    localStorage.arr = JSON.stringify(listaLi);
    exibirDicas();
  }
  
  // Função para filtrar as dicas cadastradas por material
function filtrarPorMaterial() {
    var materialSelecionado = document.getElementById("material").value;
    var lista = document.getElementById("dicas-list");
    var itens = lista.getElementsByTagName("li");
    var alertar = false;
    console.log(materialSelecionado)
    for (var i = 0; i < itens.length; i++) {
      var item = itens[i];

      if (item.className == "dica Organico" && materialSelecionado == "Organico"){
        item.style.display = "block";
      }else if(item.className == "dica Plastico" && materialSelecionado == "Plastico"){
        item.style.display = "block";
      }else if(item.className == "dica Metal" && materialSelecionado == "Metal"){
        item.style.display = "block";
      }else if(item.className == "dica Vidro" && materialSelecionado == "Vidro"){
        item.style.display = "block";
      }else if(item.className == "dica Papel" && materialSelecionado == "Papel"){
        item.style.display = "block";
      }else if(materialSelecionado == ""){
        alertar = true
        
      }else{
        item.style.display = "none";
      }

    }
    if(alertar == true){
      alert("Escolha um material!")
      exibirDicas()
    }
    document.getElementById("material").value = ""
  }

  function mostrarDiasColeta() {
    var coletaList = document.getElementById("coleta-residuos");
    if (coletaList.style.display === "none") {
      coletaList.style.display = "block";
    } else {
      coletaList.style.display = "none";
    }
  }