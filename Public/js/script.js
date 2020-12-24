"use strict";

$('#btnNew').click(function() {
  openModalCreate(true);
});

function openModalCreate(reset = true) {
  $('#modalNewGame').modal('show');
}

function openModalViewGame(id) {
  $('#modalViewGame').modal('show');
}

function deleteGame(id) {
  if(!confirm("Deseja realmente remover?"))
    return;
  
    console.log(id);
}