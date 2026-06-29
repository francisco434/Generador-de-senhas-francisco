function gerarSenha() {
    const input = document.getElementById('senha');
    
    // Caracteres disponíveis
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%*()_+-=[]{}|;:,.<>?';
    
    let senha = '';
    const tamanho = 16; // Senha de 16 caracteres (segura)

    for (let i = 0; i < tamanho; i++) {
        const aleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[aleatorio];
    }

    input.value = senha;
    
    // Animação
    input.classList.remove('animar');
    void input.offsetWidth; // Força reflow
    input.classList.add('animar');
}

// Gerar uma senha automaticamente ao carregar a página
window.onload = gerarSenha;