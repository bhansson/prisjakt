<?php
require_once 'php/functions.php';
?>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" href="/css/style.css" title="style" />
    <script type='text/javascript' src='http://code.jquery.com/jquery-latest.js'></script>
    <script type='text/javascript' src='/js/search.js'></script>
    <title>Sök</title>
  </head>
  <body>
    <h1>Sök produkter</h1>
    <div id="supersearchdiv">
      <input title="Sök produkt, kategori m.m." id="super_search_textbox" name="query" type="text" placeholder="Sök produkt, kategori m.m." value="" class="" /> <div id="magic">prova t.ex. magic</div>
    </div>
    <div>
      <h2>Produkter</h2>
      <div id="hit-list">
        <?php listAll(); ?>        
      </div>
    </div>

    <div class="clear"></div>
    <footer>
      <p>
        <a href="http://jigsaw.w3.org/css-validator/check/referer">
          <img style="border:0;width:88px;height:31px"
               src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
               alt="Valid CSS!" />
        </a>
      </p>    
    </footer>
  </body>
</html>