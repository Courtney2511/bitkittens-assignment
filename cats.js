$(document).ready(function(){

  $('button').click(function(event){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: { },
      dataType: 'json'
    }).done(function(responseData){
      var kittenJSON = responseData;
      var kittenList = kittenJSON["cats"];
      var catBox1 = document.createElement('img');
      cat = kittenList[0];
      console.log(cat.photo);
      $('#cat1').append(catBox1);
      $('#cat1 img').attr('src', cat.photo);


    });
  });

});
