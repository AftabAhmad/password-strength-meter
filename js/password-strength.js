/* 
 * MIT Liecense
 * Author: Aftab Ahmad
 * Twitter: @AftabAhmadAwan
 * Built on JavaScript Password Strength Meter by Aaron Snowberger http://codepen.io/jekkilekki/pen/ZOvqGq
 */
$(function(){
   function detect_upper(str) {
   // Pretty clever - if the string changes when going to lowercase, then there must be uppercase there
   return str.toLowerCase() !== str;
 }

 function detect_lower(str) {
   return str.toUpperCase() !== str;
 }

 // Find regex patterns for JS: https://regex101.com/#javascript
 function count_nums(string) {
   if (string.match(/[0-9]/g)) {
     var one = 1;
     return one;
   } else {
     var zero = 0;
     return zero;
   }
 }

 function count_symbols(string) {
   // You have to decide which symbols count
   var res = string.match(/[!@#$%^&*\-_+=?.,;:]/g);
   if (res === null) {
     var zero = 0;
     return zero;
   } else if (res === NaN) {
     var zero = 0;
     return zero;
   } else {
     var one = 1;
     return one;
   }
 }

 function password_strength(password) {
   var strength = 0;
   var length = password.length;
   if (length < 5) {
     $('#meter').removeClass();
   } else {
     if (length >= 5) {
       strength += 1;
     }
     if (detect_upper(password)) {
       strength += 1;
     }
     if (detect_lower(password)) {
       strength += 1;
     }
     strength += count_nums(password);
     strength += count_symbols(password);
     switch (strength) {
       case 1:
         $('#meter').removeClass();
         $('#meter').addClass('rating-' + strength);
         $('#meter > div').addClass('tint');
         $('#meter > div:nth-child(n+' + strength + ')').removeClass('tint');
         break;
       case 2:
         $('#meter').removeClass();
         $('#meter').addClass('rating-' + strength);
         $('#meter > div').addClass('tint');
         $('#meter > div:nth-child(n+' + strength + ')').removeClass('tint');
         break;
       case 3:
         $('#meter').removeClass();
         $('#meter').addClass('rating-' + strength);
         $('#meter > div').addClass('tint');
         $('#meter > div:nth-child(n+' + strength + ')').removeClass('tint');
         break;
       case 4:
         $('#meter').removeClass();
         $('#meter').addClass('rating-' + strength);
         $('#meter > div:nth-child(' + strength + ')').addClass('tint');
         $('#meter > div:nth-child(n+' + strength + ')').removeClass('tint');
         break;
       case 5:
         $('#meter').removeClass();
         $('#meter').addClass('rating-' + strength);
         $('#meter > div').addClass('tint');
         $('#meter > div:nth-child(n+' + strength + ')').removeClass('tint');
         break;

       default:
         $('#meter').addClass('rating-' + strength);
         $('#meter > div:nth-child(' + strength + ')').removeClass('tint');
     }
     if (strength > 0) {
       $('#meter').addClass('rating-' + strength);
       $('#meter > div:nth-child(' + strength + ')').addClass('tint');
     }
   }
 }
 /**
  * KEYBOARD LISTENER
  *
  * Setup the keyboard to detect keypresses and BACKSPACE
  * onkeypress events, we update the password rating 
  * onkeydown events, we only listen for the BACKSPACE key - which doesn't fire onkeypress events
  * if BACKSPACE, recalculate password rating
  */
 $("#password").on('keypress keydown keyup', function() {
 var password = $(this).val();
 password_strength(password);
 });
});
