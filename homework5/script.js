    
    const todoForm = document.getElementById('todo-form');
    const addInput = document.getElementById('add-input');
    const todoList = document.getElementById('todo-list');
    const todoItems = document.querySelectorAll('.todo-item');

    //wish constructor

    function createTodoItem(title) {
        const checkbox = createElement('input', { type: 'checkbox', className: 'checkbox' });
        const label = createElement('label', { className: 'title' }, title);
        const editInput = createElement('input', { type: 'text', className: 'textfield' });
        const editButton = createElement('button', { className: 'edit' }, 'Change');
        const deleteButton = createElement('button', { className: 'delete' }, 'Delete');
        const listItem = createElement('li', { className: 'todo-item' }, checkbox, label,
            editInput, editButton, deleteButton);

        bindEvents(listItem);

        return listItem;
    }

    //add functions by buttons

    function bindEvents(todoItem) {
        const checkbox = todoItem.querySelector('.checkbox');
        const editButton = todoItem.querySelector('button.edit');
        const deleteButton = todoItem.querySelector('button.delete');

        checkbox.addEventListener('change', toggleTodoItem);
        editButton.addEventListener('click', editTodoItem);
        deleteButton.addEventListener('click', deleteTodoItem);

    }

    //complete wish

    function toggleTodoItem() {
        const listItem = this.parentNode;
        listItem.classList.toggle('completed');

    }

    //edit wish

    function editTodoItem() {
        const listItem = this.parentNode;
        const title = listItem.querySelector('.title');
        const editInput = listItem.querySelector('.textfield');
        const isEditing = listItem.classList.contains('.editing');

        if (!isEditing) {
            title.innerText = editInput.value;
            console.log(title.value, editInput.value, 1);
            this.innerText = 'Change';
        } else {
            editInput.value = title.innerText;
            console.log(title.innerText, editInput.value, 2);
            this.innerText = 'Save';
        }

        listItem.classList.toggle('editing');
    }

    //delete with

    function deleteTodoItem() {
        const listItem = this.parentNode;
        todoList.removeChild(listItem);
    }

    //add new li-element to the list

    function addTodoItem(event) {
        event.preventDefault();

        let value = addInput.value;

        if (value === '') return alert('need add event describe!');

        const listItem = createTodoItem(value);
        todoList.appendChild(listItem);
        addInput.value = '';

    }

    //constructor of wish constructor

    function createElement(tag, props, ...children) {
        const element = document.createElement(tag);

        Object.keys(props).forEach(key => element[key] = props[key]);

        if (children.length > 0) {
            children.forEach(child => {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }
                element.appendChild(child);
            });
        }
        return element;
    }

    //calling function in main function

    function main() {
        todoForm.addEventListener('submit', addTodoItem);
        todoItems.forEach(item => bindEvents(item));
    }
   main();
