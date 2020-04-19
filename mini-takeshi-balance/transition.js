document.addEventListener('DOMContentLoaded', () => {
    var colors = ['maroon', 'teal', 'royalblue', 'mediumslateblue','pink', 'silver'];
    var i = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        if (!colors[i]) {
            i = 0;
        }
        else {
            i++;
        }
    }, 3000);


});