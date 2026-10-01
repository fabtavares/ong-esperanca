const botaoAjudar = document.getElementById("btn-ajudar");
const toast = document.getElementById("toast");

botaoAjudar.addEventListener("click", function () {
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
});