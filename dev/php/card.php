<?php
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
      $this->__set("name", "Black Lotus");
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
        print_r($result_array['name']);
        $this->__set("set", $result_array['set_name']);
        $this->__set("type", $result_array['type_line']);
        $this->__set("cmc", $result_array['cmc']);
        $this->__set("rules_text", $result_array['oracle_text']);
        $this->__set("image_large", $result_array['image_uris']['large']);
        $this->__set("image_medium", $result_array['image_uris']['normal']);
        $this->__set("image_small", $result_array['image_uris']['small']);
      }
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
  }

  $cardTest = new Card;
  $vars = get_object_vars($cardTest);
  print_r ($vars);
  echo $cardTest->__get("name");
 ?>
