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