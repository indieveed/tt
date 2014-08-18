var imgLoad = imagesLoaded($(".js-browser-icon"));

imgLoad.on( 'progress', function( instance, image ) {
  $(image.img).parents(".js-browser-item").addClass("with-img");
})

function solve(numbers, target, hasNegatives) {
  var result = [];
  searchCombination(numbers, target);
  function searchCombination(numbers, target, combination) {
    if (combination === undefined) {
      combination = [];
    }
    var sum = combination.reduce(function(a,b) {
      return a+b;
    },0);
    if (sum == target) {
      result.push(combination);
    }
    if (!hasNegatives && sum >= target || hasNegatives && hasNegatives && combination.length == numbers.length) {
      return;
    }
    numbers.forEach(function(number, i) {
      var remaining = numbers.slice(i+1);
      searchCombination(remaining, target, combination.concat(number));
    })
  }
  return result;
}