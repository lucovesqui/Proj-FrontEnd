var dicas = [];

function adicionarDica() {
    var materialSelecionado = document.getElementById("material").value;
    var dicaTexto = document.getElementById("dica").value;
  
    var lista = document.getElementById("dicas-list");
    var novoItem = document.createElement("li");

    novoItem.setAttribute("data-material", materialSelecionado);
    novoItem.innerText = dicaTexto;
    lista.appendChild(novoItem);

    
     // Limpa os campos do formulário
     document.getElementById('material').value = '';
     document.getElementById('dica').value = '';
  }

function exibirDicas() {
  var dicasList = document.getElementById("dicas-list");
  dicasList.innerHTML = "";

  dicas.forEach(function(dica) {
    var dicaElement = document.createElement("li");
    dicaElement.classList.add("dica", dica.material);
    dicaElement.innerHTML = "<h3>" + dica.material.charAt(0).toUpperCase() + dica.material.slice(1) + "</h3><p>" + dica.dica + "</p>";

    dicasList.appendChild(dicaElement);
    
  });
}

function excluirPorMaterial() {
    var materialSelecionado = document.getElementById("material").value;
    var lista = document.getElementById("dicas-list");
    var itens = lista.getElementsByTagName("li");
  
    for (var i = itens.length - 1; i >= 0; i--) {
      var item = itens[i];
      var itemMaterial = item.getAttribute("data-material");
  
      if (itemMaterial === materialSelecionado) {
        lista.removeChild(item);
      }
    }
  }
  
  // Função para filtrar as dicas cadastradas por material
function filtrarPorMaterial() {
    var materialSelecionado = document.getElementById("material").value;
    var lista = document.getElementById("dicas-list");
    var itens = lista.getElementsByTagName("li");
  
    for (var i = 0; i < itens.length; i++) {
      var item = itens[i];
      var itemMaterial = item.getAttribute("data-material");
  
      if (itemMaterial === materialSelecionado || materialSelecionado === "todos") {
        item.style.display = "block"; // Exibe o item
      } else {
        item.style.display = "none"; // Oculta o item
      }
    }
  }
  
  // Event listener para o botão "Filtrar por Material"
  var filtrarPorMaterialBtn = document.getElementById("filtrar-por-material-btn");
  filtrarPorMaterialBtn.addEventListener("click", filtrarPorMaterial);