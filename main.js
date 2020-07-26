const keyboardContainer = document.querySelector('.letter');
const firstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
for (let i = 0; i < firstRow.length; i++) {
    const div = document.createElement('div');
    div.textContent = firstRow[i];
    // console.log(firstRow[i].toUpperCase().charCodeAt(0))
    div.setAttribute('key-code', firstRow[i].toUpperCase().charCodeAt(0));
    div.classList.add('letter-key');
    keyboardContainer.appendChild(div);
}


const a = document.querySelectorAll('.letter-key');
document.body.addEventListener('keydown', function(e) {
    if (e.keyCode > 64 && e.keyCode < 91) {
        console.log(e.keyCode);
        a.forEach(el => {
            if (e.keyCode == el.getAttribute('key-code')) {
                el.classList.add('clicked')
            }
        })

    }
})