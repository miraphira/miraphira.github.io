const buttons = document.querySelectorAll(".detail-btn");
buttons.forEach(button => {
    button.onclick = function(event){
        event.preventDefault();
        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    }
});

const closeButtons = document.querySelectorAll(".close-btn");
closeButtons.forEach(button => {
    button.onclick = function(){
        button.closest(".modal").style.display = "none";
    }
});
