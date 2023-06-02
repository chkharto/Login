const btnEl = document.querySelector("button");

const aEl = document.querySelector(".forgot-password");

const emailEl = document.querySelector(".mail");

btnEl.addEventListener('click', function() {
    const email = emailEl.value;    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(email)) {
        Swal.fire("Email Is Valid! :) Good Luck");
    } else {
        Swal.fire('Email Is Invalid! :( Try Again');
    }
});

aEl.addEventListener('click', function() {
    Swal.fire('Nobady Cares :)');
});
