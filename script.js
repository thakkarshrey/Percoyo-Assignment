
const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault()
    let name1 = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let number = document.getElementById('number').value;
    let description = document.getElementById('description').value;
    alert(`Data of the user:
         Name : ${name1},
         Email : ${email},
         Number : ${number},
         Description : ${description}`)
})