const themes = document.querySelectorAll('.theme');

themes.forEach(theme => {
    theme.addEventListener('click', (e) => {
        
        switch (e.target.id) {
            case "dark":
                document.body.style.backgroundColor = 'black';
                break;

            case "salmon":
                 document.body.style.backgroundColor = 'salmon';
                break;

            case "red":
                 document.body.style.backgroundColor = 'red';
                break;
        }
    })
})