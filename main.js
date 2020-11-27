document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ 

        'Be the change that you wish to see in the world. "Mahatma Gandhi"', 
        'Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. "H. Jackson Brown Jr."',
        'A friend is someone who knows all about you and still loves you. "Elbert Hubbard"', 
        'You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth. "William W. Purkey"',
        'To live is the rarest thing in the world. Most people exist, that is all. "Oscar Wilde"',
        'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. "Ralph Waldo Emerson"' 
    ]

    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector("#likes").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 1000);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 1000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });