const cpf = document.getElementById('cpf')
const telefone = document.getElementById('telefone')

cpf.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3) value = value.replace(/^(\d{3})(\d)/, '$1.$2');
    if (value.length > 7) value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    if (value.length > 11) value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    e.target.value = value;
});

telefone.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    if (value.length > 6) value = value.replace(/^(\(\d{2}\)) (\d{4})(\d)/, '$1 $2-$3');
    if (value.length > 10) value = value.replace(/^(\(\d{2}\)) (\d{5})(\d)/, '$1 $2-$3');
    e.target.value = value;
});

function validateForm() {
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const errorMessage = document.getElementById('error-message');

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

    if (!nome || !cpfRegex.test(cpf) || !email || !telefoneRegex.test(telefone)) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert('Formulário enviado com sucesso!');
        document.getElementById('form').reset();
    }
}