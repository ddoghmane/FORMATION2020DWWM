<?php

// src/Models/Album.php
class Album
{
    private $id;

    private $name;
    
    private $author;
    
    private $musics;
    
    public function __construct($id, $name, $author)
    {
        $this->id = $id;
        $this->name = $name;
        $this->author = $author;
    }
    
    public function getName()
    {
        return $this->name;
    }
    
    public function getMusics()
    {
        return $this->musics;
    }

    // ...
}