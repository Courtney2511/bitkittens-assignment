$(document).ready(function(){
  $('button').click(function(event){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: { },
      dataType: 'json'
    });
  });
});
