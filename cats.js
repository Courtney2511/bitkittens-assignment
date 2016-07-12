$(document).ready(function() {
  $('button').click(function(event) {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: { },
      dataType: 'json'
    }).done(function(responseData){
      var kittenJSON = responseData;
      var kittenList = kittenJSON["cats"];

      for(i=0; i<3; i++) {
        var catBox = document.createElement('img');
        var cat = kittenList[i];
        $('#cat' + (i+1)).empty();
        $('#cat' + (i+1)).append(catBox);
        catBox.src = cat.photo;
      }
    });
  });
});
