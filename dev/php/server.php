<?php

  function connectToDatabase(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "deckbox";

    $sql_connection = new mysqli($servername, $username, $password, $dbname);

    if($sql_connection->connect_error){
      die("connection failed");
    }

    return $sql_connection;
  }

?>
