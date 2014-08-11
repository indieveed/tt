var imgLoad = imagesLoaded($(".js-browser-icon"));

imgLoad.on( 'progress', function( instance, image ) {
  $(image.img).parents(".js-browser-item").addClass("with-img");
})