let userForm = document.getElementById('user_form');

const retrieveEntries = () => {
    let entries = localStorage.getItem('user-entries');
    if (entries) {
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
}

let userEntries = retrieveEntries();

const displayEntries = () => {
    const entries = retrieveEntries();
    const tableEntries = entries.map((entry) => {
        const nameCell = '<td>' + entry.name + '</td>';
        const emailCell = '<td>' +entry.email + '</td>';
        const PasswordCell = '<td>' +entry.password + '</td>';
        const dobCell = '<td>' +entry.dob + '</td>';
        const TermsCell = '<td>' +entry.acceptedTermsAndConditions + '</td>';
        
        const row = '<tr>' + nameCell + emailCell + PasswordCell + dobCell + TermsCell + '</tr>';
        return row;
    }).join('\n');
    let details = document.getElementById('user_data');
    details.innerHTML = tableEntries;
}



const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTermsAndConditions = document.getElementById('checkbox').checked;

    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions
    };

    userEntries.push(entry);
    
    localStorage.setItem('user-entries', JSON.stringify(userEntries));
    displayEntries();
}
userForm.addEventListener('submit',saveUserForm);