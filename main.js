// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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
