document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const errorMessage = document.getElementById('error-message');

    document.getElementById('add-contact-btn').addEventListener('click', function (event) {
        event.preventDefault();
        console.log('Add Contact button clicked');

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        errorMessage.textContent = '';

        if (!name) {
            errorMessage.textContent = 'Namnfältet är tomt. Det är obligatoriskt att fylla.';
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            errorMessage.textContent = 'Namnfältet måste endast innehålla bokstäver.';
            return;
        }

        if (!phone) {
            errorMessage.textContent = 'Telefonfältet är tomt. Det är obligatoriskt att fylla.';
            return;
        }

        if (!/^\+?\d+$/.test(phone)) {
            errorMessage.textContent = 'Telefonfältet måste endast innehålla siffror och kan börja med ett + tecken.';
            return;
        }

        const contactItem = createContactItem(name, phone);
        document.getElementById('contact-list').appendChild(contactItem);

        nameInput.value = '';
        phoneInput.value = '';
    });

    function createContactItem(name, phone) {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');
        contactItem.appendChild(createInputField(name));
        contactItem.appendChild(createInputField(phone));
        contactItem.appendChild(createEditButton(contactItem));
        contactItem.appendChild(createDeleteButton(contactItem));

        return contactItem;
    }

    function createInputField(value) {
        return Object.assign(document.createElement('input'), {
            type: 'text',
            value: value,
            disabled: true
        });
    }

    function createEditButton(contactItem) {
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Ändra';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => toggleEdit(contactItem, editBtn));
        return editBtn;
    }

    function toggleEdit(contactItem, editBtn) {
        const [nameField, phoneField] = contactItem.querySelectorAll('input');
        const isEditing = !nameField.disabled;

        if (isEditing) {
            if (nameField.value.trim() === '' || phoneField.value.trim() === '') {
                document.getElementById('error-message').textContent = 'Kontakt kan inte sparas tom. Var god fyll i båda fälten.';
                return;
            }
            editBtn.textContent = 'Ändra';
        } else {
            editBtn.textContent = 'Spara';
        }

        nameField.disabled = isEditing;
        phoneField.disabled = isEditing;
    }

    function createDeleteButton(contactItem) {
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Ta bort';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => contactItem.remove());
        return deleteBtn;
    }

    document.getElementById('delete-list-btn').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('contact-list').innerHTML = '';
    });
});
