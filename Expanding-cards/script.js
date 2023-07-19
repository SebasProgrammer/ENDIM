const pais = document.querySelectorAll('.pais');

const quitarPaisActivo = () => {
    pais.forEach(pais => {
        pais.classList.remove('active');
    });
};

pais.forEach(pais => {
    pais.addEventListener('click', () => {
        quitarPaisActivo();
        pais.classList.add('active');
    });
});