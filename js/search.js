/*!
 * Search for the users input in the json data
 * 
 * Author Kristian Erendi
 * http://reptilo.se
 * Date: 2013-09-08
 */
jQuery(document).ready(function($) {
  var hits = [];

  /**
   * Search the data
   * @param {type} userInput
   * @returns {undefined}
   */
  function searchData(userInput, callback) {
    console.log(userInput);
    hits.length = 0;
    if (userInput === "magic") {
      var item = new Object();
      item.produkt_namn = 'Qm9udXMgLSByZXR1cm4gc29tZXRoaW5nIHdoZW4gc2VhcmNoIHRlcm0gaXMgImJhc2U2NCI=';
      item.kategori_namn = '';
      hits.push(item);
      callback(true);
    } else {
      $.getJSON('products.json', function(data) {
        $.each(data, function(index, item) {
          getHits(userInput, item);
        });
        if (hits.length === 0) {
          hits.length = 0;
        }
        console.log('length:' + hits.length);
        console.log(hits);
        callback(true);
      });
    }
  }

  /**
   * Looks for matches in both category and product name. 
   * Stores the matches to the hits array, with type and position.
   * Case insesitive. 
   * 
   * @param {type} item
   * @returns {Array}
   */
  function getHits(userInput, item) {
    var start = 0, hit = false;
    var matchString = userInput.toLowerCase();
    var stop = matchString.length;
    start = item.produkt_namn.toLowerCase().indexOf(matchString)
    if (start != -1) {
      item.start = start;
      item.stop = start + stop;
      item.produkt = true;
      hit = true;
    }
    start = item.kategori_namn.toLowerCase().indexOf(matchString)
    if (start != -1) {
      item.start = start;
      item.stop = start + stop;
      item.kategori = true;
      hit = true;
    }
    if (hit) {
      hits.push(item);
    }
  }


  /**
   * Display the results of the hits array
   */
  function displayResult() {
    var html = '';
    if (hits.length === 0) {
      html += '<div id="pre-list">Inga träffar</div>';
    } else {
      html += '<div id="pre-list">' + hits.length + ' produkter hittade</div>';
      html += '<ul id="item-list">';
      html += '<li><div class="header">Produkt</div><div class="header">Kategori</div></li>';
      $.each(hits, function(index, item) {
        html += '<li><div class="produkt">' + item.produkt_namn + '</div> <div  class="kategori">' + item.kategori_namn + '</div></li>';
      });
      html += '</ul>';
    }
    $('#hit-list').html(html);
  }




  //All events below
  
  /**
   * catch keyup from the search box 
   */
  $("#super_search_textbox").keyup(function() {
    var userInput = $(this).val();
    if (userInput.length !== 0) {
      searchData(userInput, function() {
        displayResult();
      });
    } else {
      hits.length = 0;
      displayResult();
    }
  });

});