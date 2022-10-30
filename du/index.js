import { TaskList } from './TaskList/index.js';

const listsElement = document.querySelector('#lists');


fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
  .then((response) => response.json())
  .then((data) => {
    listsElement.innerHTML += TaskList({ items: data });
  });
