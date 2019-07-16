<?php
  include "server.php";

  class Card{
    public $name = "";
    public $set = "";
    public $type = "";
    public $subtype = "";
    public $cmc = "";
    public $rules_text = "";
    public $power = "";
    public $toughness = "";
    public $image_large = "";
    public $image_medium = "";
    public $image_small = "";

    // intialize card object
    public function __construct(){
      $this->__set("name", "Survival of the Fittest");
      $url = "http://api.scryfall.com/cards/named?exact=" . rawurlencode($this->__get('name'));
      // use key 'http' even if you send the request to https://...
      $options = array(
          'http' => array(
              'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
              'method'  => 'POST'
          )
      );
      $context = stream_context_create($options);
      $result = file_get_contents($url, false, $context);

      if($result === FALSE){

      }else{
        var_dump($result);
        $result_array = json_decode($result, true);
        $this->__set("set", $result_array['set_name']);
        $this->__set("type", $result_array['type_line']);
        $this->__set("cmc", $result_array['cmc']);
        $this->__set("rules_text", $result_array['oracle_text']);
        $this->__set("image_large", $result_array['image_uris']['large']);
        $this->__set("image_medium", $result_array['image_uris']['normal']);
        $this->__set("image_small", $result_array['image_uris']['small']);
      }

      $this->addToDatabase();
    }

    public function __get($property){
      if(property_exists($this, $property)){
        return $this->$property;
      }
    }

    public function __set($property, $value) {
      if (property_exists($this, $property)) {
        $this->$property = $value;
      }

      return $this;
    }

    public function isInDatabase(){
      $sql = "SELECT * FROM cards WHERE name='" . $this->__get('name') . "'";
      $sql_connection = connectToDatabase();
      $result = $sql_connection->query($sql);
      $assoc_array = $result->fetch_assoc();
      if($assoc_array){
        return true;
      }else{
        return false;
      }
    }

    public function addToDatabase(){
      $sql = "INSERT INTO cards (name, set_name, type, subtype, cmc, rules_text, power, toughness, image_large, image_medium, image_small)
      VALUES ('" .  $this->__get('name') . "', '" . $this->__get('set_name') . "', '" . $this->__get('type') . "', '" . $this->__get('subtype') . "', '" . $this->__get('cmc') . "', '" . $this->__get('rules_text') . "', '" . $this->__get('power') . "', '" . $this->__get('toughness') . "', '" . $this->__get('image_large') . "', '" . $this->__get('image_medium') . "', '" . $this->__get('image_small') . "')";

      if(!$this->isInDatabase()){
        $sql_connection = connectToDatabase();

        if($sql_connection->query($sql) === TRUE){
          print_r("Added to database successfully");
        }else{
          echo "Error: " . $sql . "<br>" . $sql_connection->error;
        }

        closeDatabaseConn($sql_connection);
      }else{
        print_r("Card already in database");
      }




    }
  }

  $cardTest = new Card;
  $vars = get_object_vars($cardTest);
 ?>
