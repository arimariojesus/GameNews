"use strict";

// EVENTS

$(document).ready(function() {
  console.clear();
  getAll();

  $('#modalViewGame').on('hidden.bs.modal', function(e) {
    const bodyViewGame = document.querySelector('#gameInfo');
  bodyViewGame.innerHTML = "";
  });
});

$('#btnNew').click(function() {
  openModalCreate(true);
});

$('#formGame').submit(function(e) {
  e.preventDefault();
  sendForm();
});

// FUNCTION
function editGame(id) {
  if(id < 1)
    return;

  getById(id, false);
}

function openModalCreate(reset = true) {
  $('#modalNewGame').modal('show');

  if (reset)
    resetForm();
}

function hideModalCreate(reset = true) {
  $('#modalNewGame').modal('hide');
}

function openModalViewGame(id) {
  getById(id, true);
  $('#modalViewGame').modal('show');
}

function confirmDelete(id) {
  if(!confirm("Deseja realmente remover?"))
    return;
  
  deleteGame(id);
}

// SEND
function sendForm() {
  const obj = {
    id: $('#txtId').val(),
    titulo: $('#txtTitle').val(),
    descricao: $('#txtDescription').val(),
    videoid: $('#txtVideoid').val()
  };

  console.table(obj);

  const result = validate(obj);
  $('#dvAlert').text(result);

  if(result != "") {
    return;
  }

  if(obj.id == 0) {
    create(obj);
  }else {
    update(obj);
  }
}

function validate(obj) {
  if (obj.id < 0) {
    return "ID invalid";
  }

  if (obj.titulo.length < 4 || obj.titulo.length > 100) {
    return "Title invalid";
  }

  if (obj.descricao.length < 10 || obj.descricao.length > 250) {
    return "Description invalid";
  }

  if (obj.videoid == "" || obj.videoid.length > 15) {
    return "Video ID invalid";
  }

  return "";
}

function resetForm() {
  $('#txtId').val("0");
  $('#txtTitle').val("");
  $('#txtDescription').val("");
  $('#txtVideoid').val("");
  $('#dvAlert').html("&nbsp;");
  $('#btnSubmit').attr('disabled', false);
}

function createViewModal(data) {
  const title = document.querySelector('#titleView');
  title.innerHTML = data.Titulo;

  const bodyViewGame = document.querySelector('#gameInfo');
  bodyViewGame.innerHTML = `
    <div class="videoWrapper">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${data.Videoid}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <hr class="border-info">
    <div>${data.Descricao}</div>
  `;
}

function createTable(data) {
  if(data.length < 1)
    return;

  const section = document.querySelector('#section');
  section.innerHTML = "";

  data.forEach((data) => {
    const card = `
      <div class='col-md-4 mb-3'>
        <div class='card border-primary'>
          <div class='card-header'>${data.Titulo}</div>
          <div class='card-body'>
            <div class='videoWrapper'>
              <iframe width='560' height='315' src='https://www.youtube.com/embed/${data.Videoid}' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
            </div>
          </div>
          <div class='card-footer'>
            <div class='row'>
              <div class='col-md-3'>
                <button type='button' name='button' class='mt-2 w-100 btn btn-outline-warning' onclick="editGame(${data.Id})">Edit</button>
              </div>
              <div class='col-md-6'>
                <button type='button' name='button' class='mt-2 w-100 btn btn-outline-success' onclick='openModalViewGame(${data.Id})'>View</button>
              </div>
              <div class='col-md-3'>
                <button type='button' name='button' class='mt-2 w-100 btn btn-outline-danger' onclick='confirmDelete(${data.Id})'>Del</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    section.innerHTML += card;
  });
}

function editModal(data) {
  if(data == null)
    return;
  
  $('#txtId').val(data.Id);
  $('#txtTitle').val(data.Titulo);
  $('#txtDescription').val(data.Descricao);
  $('#txtVideoid').val(data.Videoid);

  openModalCreate(false)
}

// AJAX
function create(obj) {
  $.ajax({
    url: "api/game/",
    type: "POST",
    data: obj,
    dataType: "json",
    beforeSend: function() {
      // É chamado antes de enviar
      $('#btnSubmit').attr('disabled', true);
    },
    success: function(data) {
      // Quando a requisição for efetuada com sucesso
      console.log(data);
      if(data.result == "ok"){
        hideModalCreate();
        getAll();
      }else {
        $('#dvAlert').html("Houve um erro a tentar cadastrar");
      }
    },
    erro: function(error) {
      // Quando houver algum erro na requisição
      console.error(error);
      $('#dvAlert').html("Houve um erro a tentar cadastrar");
    },
    complete: function() {
      // Quando finaliza a operação
      $('#btnSubmit').attr('disabled', false);
    }
  });
}

function update(obj) {
  $.ajax({
    url: "api/game/" + obj.id,
    type: "PUT",
    data: obj,
    dataType: "json",
    beforeSend: function() {
      // É chamado antes de enviar
      $('#btnSubmit').attr('disabled', true);
    },
    success: function(data) {
      // Quando a requisição for efetuada com sucesso
      console.log(data);
      if(data.result == "ok"){
        hideModalCreate();
        getAll();
      }else {
        $('#dvAlert').html("Houve um erro a tentar alterar");
      }
    },
    erro: function(error) {
      // Quando houver algum erro na requisição
      console.error(error);
      $('#dvAlert').html("Houve um erro a tentar alterar");
    },
    complete: function() {
      // Quando finaliza a operação
      $('#btnSubmit').attr('disabled', false);
    }
  });
}

function getAll() {
  $.ajax({
    url: "api/game",
    type: "GET",
    data: {},
    dataType: "json",
    success: function(data) {
      console.table(data);
      createTable(data);
    },
    error: function(error) {
      console.erro(error);
    }

  });
}

function deleteGame(id) {
  $.ajax({
    url: "api/game/" + id,
    type: "DELETE",
    dataType: "JSON",
    data: {},
    success: function(data) {
      console.log(data);
      if(data.result == "ok") {
        getAll();
      }
    },
    error: function(error) {
      console.error(error);
    }
  });
}

// view = true || false => show modal or edit modal
function getById(id, view) {
  $.ajax({
    url: "api/game/" + id,
    type: "GET",
    data: {},
    datType: "JSON",
    success: function(data) {
      if(view) {
        // show modal
        createViewModal(data);
      }else {
        // edit modal
        editModal(data);
      }
    }
  });
}
