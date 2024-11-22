document.addEventListener("DOMContentLoaded", function () {
    const toggleDrops = document.querySelectorAll(".toggle_drop");

    toggleDrops.forEach(function (toggleDrop) {
        const dropDown = toggleDrop.closest('.drop_down').querySelector('.lesson_p'); 

        toggleDrop.addEventListener("click", function () {
            dropDown.classList.toggle("hidden");
        });
    });
});

