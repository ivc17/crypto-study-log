export function debounce(func, wait, immediate?:any) {
  var timeout;
  return function fnc (this:typeof fnc) {
      var context = this, args = arguments;
      var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
  };
};