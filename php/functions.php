<?php
/*
 * Functions used by the search 
 * 
 */


/**
 * List all products in alphabetical order
 */
function listAll() {
  $list = json_decode(file_get_contents('products.json'));
  $orderedList = null;
  foreach ($list as $key => $value) {
    $orderedList[$value->produkt_namn . $value->kategori_namn] = $value;
  }
  ksort($orderedList);
  //$output = '<div id="pre-list">'.count($orderedList).' artiklar hittade</div>';
  $output = '<div id="pre-list">'.count($list).' produkter hittade</div>';
  $output .= '<ul id="item-list">';
  $output .= '<li><div class="header">Produkt</div><div class="header">Kategori</div></li>';
  foreach ($orderedList as $key => $value) {
    $output .= '<li><div class="produkt">' . $value->produkt_namn . '</div> <div  class="kategori">' . $value->kategori_namn . '</div></li>';
  }
  $output .= '</ul>';
  echo $output; 
}