const a = document.querySelectorAll('.letter-key');
document.body.addEventListener('keydown', function(e) {
    if (e.keyCode > 64 && e.keyCode < 91) {
        console.log(e.key);
        a.forEach(el => {
            if (e.keyCode == el.getAttribute('key-code')) {
                el.classList.add('clicked')
            }
        })

    }
})