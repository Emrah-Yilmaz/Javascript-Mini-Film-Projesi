class UI{

  static addFilmToUi(newFilm){


    const filmList = document.getElementById("films");
    filmList.innerHTML += `

    <div class="col-4" id="deneme">
    <div class="p-3 border bg-light">
        <div class="card-group">
            <div class="card">
              <img src="${newFilm.url}" class="figure-img img-fluid rounded" alt="...">
              <div class="card-body">
                <h5 class="card-title">${newFilm.title}</h5>
                <p class="card-text">${newFilm.director}</p>
                <p class="card-text"><small class="text-muted">${newFilm.time}</small></p>
                <div class="button">
                <a href="#" id="delete-film" class="btn btn-danger container">Filmi Sil</a>
                </div>
                
              </div>
            </div>

          </div>

        </div>
  

                    `;

}
static clearInputs(element1, element2, element3, element4){
  element1.value = "";
  element2.value = "";
  element3.value = "";
  element4.value = "";
}
static displayMessages(message, type){
  const formBody = document.getElementById("form-body");

  //alert divi oluşturma

  const div  = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent =  message;
  formBody.appendChild(div);
  
  setTimeout(function(){
    div.remove();
  }, 1500)

}

static loadAllFilms(films){
  const filmList = document.getElementById("films");
  films.forEach(function(film){
    filmList.innerHTML += `

    <div class="col-4" id="deneme">
    <div class="p-3 border bg-light">
        <div class="card-group">
            <div class="card">
              <img src="${film.url}" class="figure-img img-fluid rounded" alt="...">
              <div class="card-body">
                <h5 class="card-title">${film.title}</h5>
                <p class="card-text">${film.director}</p>
                <p class="card-text"><small class="text-muted">${film.time}</small></p>
                <div class="button">
                <a href="#" id="delete-film" class="btn btn-danger container">Filmi Sil</a>
                </div>
                
              </div>
            </div>

          </div>

        </div>
  

                    `;

  });
}

static deleteFilmFromUI(element){
  element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
}
static clearAllFilmsFromUI(){
  const filmList = document.getElementById("film-list");

  if(filmList.firstElementChild !== null){
    filmList.firstChild.remove();

  }
  else{
    console.log(filmList);

  }
 
  

}

}
