document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("booking-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var city = document.getElementById("city").value;

        if (!(/^\d{10}$/.test(phone))) {
            alert("Phone number should contain exactly 10 digits.");
            return;
        }

        if (!(/@/.test(email)) || (!email.includes('.com') && !email.includes('.in'))) {
            alert("Enter valid Email id");
            return;
        }

        if (name === "" || email === "" || phone === "" || city === "") {
            alert("Please fill out all fields.");
            return;
        }
    });
});

