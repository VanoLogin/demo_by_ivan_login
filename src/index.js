// import ky from 'ky';

// const button = document.querySelector('.button');
// const buttonGet = document.querySelector('.button_get');
// const buttonSubmit = document.querySelector('.button_submit');
// const formSubmit = document.querySelector('.form_submit');
// async function getAllTodos() {
//   try {
//     const todos = await ky
//       .get('https://jsonplaceholder.typicode.com/todos')
//       .json();
//     console.log(todos);
//   } catch (err) {
//     console.log(err.message);
//   }
// }
// async function addTodos() {
//   const newTodo = {
//     title: 'abc ',
//     completed: false,
//     userId: 1222,
//   };
//   try {
//     const todos = await ky
//       .post('https://jsonplaceholder.typicode.com/todos', { json: newTodo })
//       .json();
//     console.log(todos);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// async function submitNewTodo(event) {
//   event.preventDefault();
//   const form = event.target;
//   const formData = new FormData();
//   formData.append('title', form.todo.value);
//   formData.append('comleted', false);
//   formData.append('userId', 1);
//   try {
//     const todos = await ky
//       .post('https://jsonplaceholder.typicode.com/todos', { body: formData})
//       .json();
//     console.log(todos);
//   } catch (err) {
//     console.log(error.message);
//   }
// }

// formSubmit.addEventListener('click', submitNewTodo);
// buttonGet.addEventListener('click', addTodos);
// button.addEventListener('click', getAllTodos);
import ky from 'ky';

const button = document.querySelector('.button');
const buttonGet = document.querySelector('.button_get');
const buttonSubmit = document.querySelector('.button_submit');
const formSubmit = document.querySelector('.form_submit');

async function getAllTodos() {
  try {
    const todos = await ky
      .get('https://jsonplaceholder.typicode.com/todos')
      .json();
    console.log(todos);
  } catch (err) {
    console.log(err.message);
  }
}

async function addTodos() {
  const newTodo = {
    title: 'abc',
    completed: false,
    userId: 1222,
  };
  try {
    const todos = await ky
      .post('https://jsonplaceholder.typicode.com/todos', { json: newTodo })
      .json();
    console.log(todos);
  } catch (err) {
    console.log(err.message);
  }
}

async function submitNewTodo(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData();
  formData.append('title', form.todo.value);
  formData.append('completed', false);
  formData.append('userId', 1);
  try {
    const todos = await ky
      .post('https://jsonplaceholder.typicode.com/todos', { body: formData })
      .json();
    console.log(todos);
  } catch (err) {
    console.log(err.message);
  }
}

formSubmit.addEventListener('click', submitNewTodo);
buttonGet.addEventListener('click', addTodos);
button.addEventListener('click', getAllTodos);
