function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Loga no console para verificar se a seção foi encontrada

  let campoPesquisa = document.getElementById ("campo-pesquisa").value

  // se campoPesquisa for  uma string sem nada
  if (campoPesquisa == "") {
      section.innerHTML = "<p>Digite algo para pesquisar</p>"
      return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      // Se o titulo includes campoPesquisa ou descricao includes campoPesquisa
      if ((titulo.includes(campoPesquisa)) || (descricao.includes(campoPesquisa)) || (dado.tags && dado.tags.some(tag => tag.includes(campoPesquisa)))) {
          // Cria um novo elemento
          resultados += `
          <div class="item-resultado">
              <h2>
                  <a href=${dado.link} target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Saiba mais</a>
          </div>
          `;
      }
  }

  if (!resultados) {
    resultados = "Nada Foi encontrado"

  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}