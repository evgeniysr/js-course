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
var container = document.getElementById('container');
createTree(container, data);

function createTree(container, data) {
  let innerText = '';
  innerText += createDom(innerText, data);
  container.innerHTML = innerText + '</ul>';
}

function createDom(innerText, data) {
  innerText += '<ul>';
  //debugger
  for (const elem of Object.keys(data)) {
    innerText += '<li>' + elem + '</li>';
    if (Object.keys(data[elem])) {
      innerText = createDom(innerText, data[elem])
    }
  }
  return innerText += '</ul>';
}