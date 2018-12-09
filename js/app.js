window.onload = () => {
  events();
}

function createTask(text, list) {
  const textValue = text.value;  
  const newTask = document.createTextNode(textValue);
  const item = document.createElement('li');
  const span = document.createElement('span');
  item.classList.add('item');

  const btnDone = document.createElement('button');
  const doneText = document.createTextNode('Concluída!')
  btnDone.classList.add('btn-done');
  btnDone.setAttribute('type', 'button');
  btnDone.appendChild(doneText);

  const btnDel = document.createElement('button');
  const delText = document.createTextNode('Deletar');
  btnDel.classList.add('btn-del');
  btnDel.setAttribute('type', 'button');
  btnDel.appendChild(delText);

  if (textValue === '') {
    text.setAttribute('placeholder', 'Digite alguma coisa...');
    text.classList.add('error');
    return false;
  }
  
  span.appendChild(btnDone);
  span.appendChild(btnDel);
  item.appendChild(newTask);  
  item.appendChild(span)
  list.appendChild(item);

  text.value = '';

  btnDel.addEventListener('click', removeTask);
  btnDone.addEventListener('click', taskDone);  
}

function validate(text) {
  text.value = '';
  text.setAttribute('placeholder', 'Lembrar de...');
  text.classList.remove('error');
}

function taskDone() {
  const listDone = document.getElementById('list-done');
  listDone.appendChild(this.parentNode.parentNode).className = 'item-done';
  this.remove(this);  
}

function removeTask() {
  this.parentNode.parentNode.remove();
}

function events() {
	const text = document.getElementById('text');
  const list = document.getElementById('list');
  const btnSave = document.getElementById('btn-save');

  btnSave.addEventListener('click', () => {
    createTask(text, list);  
  });
  
  text.addEventListener('click', () => {
    validate(text);
  });

  for (i = 0; i <= list.children.length -1; i++) {
    list.children[i].addEventListener('click', taskDone)
  }

  for (i = 0; i <= list.children.length -1; i++) {
    list.children[i].addEventListener('click', removeTask);
  }
}