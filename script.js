document.getElementById('carregar').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'usuarios.json', true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const usuarios = JSON.parse(xhr.responseText);
            let output = '';
            usuarios.forEach(function(usuario) {
                output += `
                    <div class="usuario">
                        <h3>${usuario.nome}</h3>
                        <p>Email: ${usuario.email}</p>
                    </div>
                `;
            });
            document.getElementById('usuarios').innerHTML = output;
        } else {
            console.error('Erro ao carregar usuários');
        }
    };

    xhr.onerror = function() {
        console.error('Erro na requisição AJAX');
    };

    xhr.send();
});

document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('usuarios').innerHTML = '';
});
