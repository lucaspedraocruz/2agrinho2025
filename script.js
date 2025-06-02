const itens = document.querySelectorAll('.item');
const areas = document.querySelectorAll('.area');
const resultado = document.getElementById('resultado');

itens.forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

areas.forEach(area => {
  area.addEventListener('dragover', dragOver);
  area.addEventListener('drop', dropItem);
});

function dragStart(e) {
  e.dataTransfer.setData('id', e.target.id);
}

function dragOver(e) {
  e.preventDefault(); // permite soltar o item
}

function dropItem(e) {
  e.preventDefault();

  const itemId = e.dataTransfer.getData('id');
  const item = document.getElementById(itemId);
  const areaId = e.currentTarget.id;

  if (!item) {
    resultado.textContent = `❌ Item não encontrado!`;
    resultado.style.color = 'red';
    return;
  }

  const certo = item.dataset.local === areaId;

  if (certo) {
    e.currentTarget.appendChild(item);
    resultado.textContent = `✔️ Acertou!`;
    resultado.style.color = 'green';
  } else {
    resultado.textContent = `❌ Errou! Esse item pertence ao ${item.dataset.local}.`;
    resultado.style.color = 'red';
  }
}
