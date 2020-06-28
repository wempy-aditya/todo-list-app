// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAoK_0FhGWmqNMMBe_E2JWyPC5C3J16Ukg",
    authDomain: "my-todo-list-5fe28.firebaseapp.com",
    databaseURL: "https://my-todo-list-5fe28.firebaseio.com",
    projectId: "my-todo-list-5fe28",
    storageBucket: "my-todo-list-5fe28.appspot.com",
    messagingSenderId: "644681755125",
    appId: "1:644681755125:web:a1a6af261d4cf68308d8bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var todoRef = firebase.database().ref().child('todos');

var todoList = document.getElementById('todoList');

todoRef.on('value', function (todos) {
    var temp = '';
    todos.forEach(function (todo) {
        var todoItem = todo.val();
        if (!todoItem.done) {
            temp += '<tr>' +
                '<td class="align-middle">' + todoItem.todo + '</td>' +
                '<td class="align-middle">' + '<span class="badge badge-warning">' + todoItem.done + '</span>' + '</td>' +
                '<td class="d-flex justify-content-center">' +
                '<button class="btn btn-outline-primary mr-3 mt-1" onclick=\'doneTodo(\"' + todo.key + '"\, \"' + todoItem.todo + '\")\'>' +
                'Done' +
                '</button>' +
                '<button class="btn btn-outline-danger mt-1" onclick=\'removeTodo(\"' + todo.key + '"\)\'>Delete</button>' +
                '</td>' +
                '</tr>';
        } else {
            temp += '<tr>' +
                '<td class="align-middle">' + todoItem.todo + '</td>' +
                '<td class="align-middle">' + '<span class="badge badge-success">' + todoItem.done + '</span>' + '</td>' +
                '<td class="d-flex justify-content-center">' +
                '<button class="btn btn-outline-secondary mr-3 mt-1" onclick=\'undoneTodo(\"' + todo.key + '"\, \"' + todoItem.todo + '\")\'>' +
                'unDone' +
                '</button>' +
                '<button class="btn btn-outline-danger mt-1" onclick=\'removeTodo(\"' + todo.key + '"\)\'>Delete</button>' +
                '</td>' +
                '</tr>';

        }
    });
    todoList.innerHTML = temp;
});

document.getElementById('myForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var todo = document.getElementById('txtTodo').value;

    saveTodo(todo);

    document.getElementById('myForm').reset();
}

function saveTodo(todo) {
    var newTodo = todoRef.push();
    newTodo.set({
        todo: todo,
        done: false
    });
}

function doneTodo(id, todo) {
    firebase.database().ref('todos/' + id).set({
        done: true,
        todo: todo
    });
}

function undoneTodo(id, todo) {
    firebase.database().ref('todos/' + id).set({
        done: false,
        todo: todo
    });
}

function removeTodo(id) {
    firebase.database().ref('todos/' + id).remove();
}