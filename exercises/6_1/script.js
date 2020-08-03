

//when the user click on the btn toggle btween hidding and showing the dropdown content
function myFunction() {
    document.getElementById('myDropdown').classList.toggle("show");
};

function states () {
    const array = ['AC', 'AL', 'AP', 'AM','BA','CE','DF', 'ES', 'GO', 'MA', 'MT',  'MS', 'MG', 'PA', 'PB', 'PR','PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    
    for (index = 0; index < states.length; index += 1) {
        let option = document.createElement('option');
        states.appendChild(option);
        states.lastChild.innerHTML = states[index];
    }
}