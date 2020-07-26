const keyboardContainer = document.querySelector('.letter');
const firstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
//     secondRow: ['a', 's', 'f', 'g', 'h', 'j', 'k', 'l', ';', "/"],
// }

const row = {
    firstRow: ['Escape', 'f1', 'f2', '', 'f4', '', 'f6', 'f7', 'f8', 'f9', 'f10', '', 'f12'],
    secondRow: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    thirdRow: ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    fourthRow: ['CapsLock', 'a', 's', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    fifthRow: ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
}
for (let i = 0; i < Object.keys(row).length; i++) {
    console.log(Object.keys(row)[i]);
    const outerDiv = document.createElement('div');
    outerDiv.classList.add(Object.keys(row)[i]);
    keyboardContainer.appendChild(outerDiv);

    for (let j = 0; j < Object.values(row)[i].length; j++) {
        // console.log(Object.values(row)[i][j]);

        const div = document.createElement('div');
        div.textContent = Object.values(row)[i][j];
        if (div.textContent.length > 3) {
            div.classList.add('big');
        }
        // console.log('xd')
        // console.log(firstRow[i].toUpperCase().charCodeAt(0))
        div.setAttribute('key-code', Object.values(row)[i][j].toUpperCase().charCodeAt(0));
        div.classList.add('letter-key');
        // console.log(document.querySelector(`. ${Object.keys(row)[i]}`))
        document.querySelector(`.${Object.keys(row)[i]}`).appendChild(div);
    }
}
// for (let i = 0; i < firstRow.length; i++) {
//     const div = document.createElement('div');
//     div.textContent = firstRow[i];
//     // console.log('xd')
//     // console.log(firstRow[i].toUpperCase().charCodeAt(0))
//     div.setAttribute('key-code', firstRow[i].toUpperCase().charCodeAt(0));
//     div.classList.add('letter-key');
//     keyboardContainer.appendChild(div);
// }




const a = document.querySelectorAll('.letter-key');
document.body.addEventListener('keydown', function(e) {
    console.log(e.key)
        // if (e.keyCode > 64 && e.keyCode < 91) {
        //     console.log(e.keyCode);
    a.forEach(el => {
        if (e.key.toLowerCase() == el.textContent.toLowerCase()) {
            el.classList.add('clicked')
        }
    })

    // }
})