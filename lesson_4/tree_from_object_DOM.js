var data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

const container = document.getElementById('container');
createTree(container, data);

function createTree(container, data) {
  const ul = document.createElement('ul');

  for (const elem of Object.keys(data)) {
    const liElem = document.createElement('li');
    liElem.innerHTML = elem;
    ul.appendChild(liElem);

    if (Object.keys(data[elem])) {
      createTree(liElem, data[elem]);
    }
  }

  return container.appendChild(ul);
}
