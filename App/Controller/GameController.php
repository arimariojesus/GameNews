<?php
namespace App\Controller;
use App\Entity\Game;

class GameController {

  // POST - Cria um novo game
  function create($data = null) {
    return json_encode(["name" => "create"]);
  }

  // DELETE - Remove um game
  function update($id = 0, $data = null) {
    return json_encode(["name" => "update - {$id}"]);
  }

  // PUT - Altera um game
  function delete($id = 0) {
    return json_encode(["name" => "delete - {$id}"]);
  }

  // GET - Retorna um game pelo ID
  function getById($id = 0) {
    return json_encode(["name" => "getById - {$id}"]);
  }

  // GET - Retorna todos os games
  function getAll() {
    return json_encode(["name" => "getAll"]);
  }

}