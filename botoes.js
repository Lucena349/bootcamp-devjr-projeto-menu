const cards = document.querySelectorAll('.card-body');

cards.forEach(card => {
  const plusButton = card.querySelector('.btn-plus');
  const minusButton = card.querySelector('.btn-minus');
  const valueInput = card.querySelector('.value');

  let count = 0;
  let intervalId = null;

  const updateValue = () => {
    valueInput.value = count;
  };

  // +
  plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
      count++;
      updateValue();
    }, 100);
  });

  // -
  minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
      if (count > 0) {
        count--;
        updateValue();
      }
    }, 100);
  });

  // parar ao soltar
  document.addEventListener('mouseup', () => {
    clearInterval(intervalId);
  });
});

var prods = [
  { id: 1, name: "Bife com batata", price: 30.0, total: 0.0},
  { id: 2, name: "Coxa de Franco Crocante", price: 25.0, total: 0.0},
  { id: 3, name: "Carne de panela", price: 22.0, total: 0.0},
  { id: 4, name: "Farofa", price: 10.0, total: 0.0},
  { id: 5, name: "Salada", price: 8.0, total: 0.0},
  { id: 6, name: "Torresmo", price: 12.0, total: 0.0},
]


function calc(){
  var quantities = document.getElementsByName("quantity");
  var output = document.getElementById("output");
  var total = 0;
  const nomeCliente = document.getElementById("nome").value;

  output.innerHTML = `Caro <b>${nomeCliente}</b>
                      </br>Seguem os dados do seu pedido</br></br>.
                      O seu pedido é:</br></br>`


  for (var input of quantities) {
    var id = input.id;
    var quantidade = Number(input.value);

    if (quantidade > 0){
    output.innerHTML += `<b>Prato:</b> ${prods[id-1].name} // 
                        <b>Preço unitário:</b> R$ ${prods[id-1].price} // 
                        <b>Quantidade:</b> ${input.value} // 
                        <b>Total:</b> R$ ${input.value*prods[id-1].price}
                        </br>`;
    total += prods[id-1].price * input.value; 
    }

  }
  output.innerHTML += `</br><h4><b>Preço final: R$ ${total}</b></h4>`
  
}





