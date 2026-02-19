const calcForm = document.getElementById('calc-form');
const dialog = document.getElementById('result-dialog');
const resultDiv = document.getElementById('result-text');

calcForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const h = Number(document.getElementById('h').value);
    const sz = Number(document.getElementById('sz').value);
    const m = Number(document.getElementById('m').value);

    if (h > 0 && sz > 0 && m > 0) {
        const erdm = h * sz * m;
        resultDiv.innerHTML = `Eredmény: Maximum ${erdm} cm<sup>3</sup> térkitöltőre lenne szükséged.`;
        dialog.showModal(); 
        calcForm.reset(); 
    } else {
        alert("Hiba: Minden adatnak 0-nál nagyobbnak kell lennie!");
    }
});

const buttons = document.querySelectorAll('.category-button');
const items = document.querySelectorAll('.category-item');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const cat = btn.dataset.cat;
        
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        items.forEach(item => {
            if (cat === 'all' || item.id === cat) {
                item.style.display = 'list-item';
            } else {
                item.style.display = 'none';
            }
        });
    });
});