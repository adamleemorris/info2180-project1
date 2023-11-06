/* Add your JavaScript to this file */
window.addEventListener("DOMContentLoaded",(event)=>{
    /*let submitbtn= document.getElementsByClassName('btn')[0]
    let message= document.getElementById('message')
    let form= document.getElementById('form')
    const email= document.getElementById('email')

    if(submitbtn){
        submitbtn.addEventListener('submit',submit);
    }

    function submit(){
        event.preventDefault();
        if(email.value ==='' || email.value == null){
            window.alert("Please enter a valid email address.")
        }
        else{
            message.innerHTML=(`Thank you! your email address ${email.value} has been added to our mailing list!`)
        };
    }*/
    const form = document.querySelector('form');
        const emailInput = document.getElementById('email');
        const messageArea = document.querySelector('.message');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = emailInput.value.trim();

            if (!email) {
                messageArea.textContent = 'Please enter a valid email address.';
            } else {
                messageArea.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            }
        });


});