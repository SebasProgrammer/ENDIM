const pais = document.querySelectorAll('.pais');
const quitarPaisActivo = () => {
    pais.forEach(pais => {
        pais.classList.remove('active');
    });
};

for (let element of pais) {
    element.addEventListener('click', () => {
        quitarPaisActivo();
        element.classList.add('active');
    });
}