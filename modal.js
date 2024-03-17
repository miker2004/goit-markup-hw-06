const btn = document.querySelector(".btn-open");
const backdrop = document.querySelector(".backdrop");

const toggleModal = () => {
    backdrop.classList.toggle("is-open");
}

backdrop.addEventListener("click", toggleModal);
btn.addEventListener("click", toggleModal);