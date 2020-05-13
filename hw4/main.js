$(document).ready(function()
{
    var body = $(document.body);
    $('#backgrounds').bind('change', function(event){
        var bg = $(this).val();
        if(bg == null || typeof bg === 'undefined' || $.trim(bg) === '')
            body.css('background-image', '');
        else
            body.css('background-image', "url('" + bg + "')");
    });
});


// Make sure service workers are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
    .register('sw_cached_pages.js')
    .then(reg => console.log('Service Worker: Registered'))
    .catch(err => console.log(`Service Worker: Error: ${err}`))
  })
}
