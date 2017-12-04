$(document).ready(function(){
  $("#oneBigForm").submit(function(){
    event.preventDefault();
    var input = $("input#paragraph").val();
    var unq = countWords(input);
    $("#wordList").empty();


    for (var key of Object.keys(unq)){
      $("#wordList").append(key + ": " + unq[key] + "</br>");
    }

  })
})

function countWords(input){
  var words = input.split(' ');
  var uniques = {};

  for (i=0;i<words.length;i++){
    var word = words[i]
    if (uniques[word] !== undefined){
      uniques[word]++
    } else {
      uniques[word] = 1;
    }
  }

  return uniques;
}
