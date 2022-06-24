const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const timeElement = document.getElementById("time");
const cardBody = document.getElementById("film-list");
const clearAllElement = document.getElementById("clear-all");

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = Storage.getFilmFromStorage();
        UI.loadAllFilms(films);


    });

    cardBody.addEventListener("click", deleteFilm);
    clearAllElement.addEventListener("click", clearAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    const time = timeElement.value;

    if (title === "" || director === "" || url === "" || time === "") {
        UI.displayMessages("Tüm alanların doldurunuz...", "danger");
        
    } else {
        const newFilm = new Film(title, director, url, time);
        Storage.addFilmToStorage(newFilm);// Storage film ekleme işlemi
        UI.displayMessages("Ekleme işlemi başarılı bir şekilde gerçekleşti", "success");

        UI.addFilmToUi(newFilm);
    }

UI.clearInputs(titleElement, directorElement, timeElement, urlElement);



    e.preventDefault();
}
function deleteFilm(e){
    if (e.target.id === "delete-film") {

        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
    }

}

function clearAllFilms(){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
}