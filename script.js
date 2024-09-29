function togglePassword() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const onlineId = document.getElementById('onlineId').value;
    const password = document.getElementById('password').value;

    console.log('Online ID:', onlineId);
    console.log('Password:', password);
});