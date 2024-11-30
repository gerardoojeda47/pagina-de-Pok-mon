let listacomentario = document.querySelector("#comentario tbody");

fetch("https://pokeapi.co/api/v2/pokemon")
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log(datos);
    datos.results.forEach(pokemon => {
      fetch(pokemon.url)
        .then(respuesta => respuesta.json())
        .then(detalles => {
          let item = document.createElement('tr');
          item.innerHTML = `
            <td>${detalles.name}</td>
            <td>${detalles.base_experience}</td>
            <td><img src="${detalles.sprites.front_default}" alt="${detalles.name}"></td>
            <td>${detalles.description}</td>
          `;
          listacomentario.appendChild(item);
        });
    });
  });
