<?php
  class deck(){
    public $cardlist = [];
    public $deckboxImg = "";
    public $name = "";

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

    public function addCard($cardName){
        
    }
  }
 ?>
