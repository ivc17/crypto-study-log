export const replaceAll=(input:string,search:string|RegExp, replacement:string)=>{
  return input.replace(new RegExp(search, 'g'), replacement)
}

export const cleanUpTitle=(title)=>{
  return HtmlEncode(title.split(' ').join('-'))
} 

export const restoreTitle = (title) => {
  return decodeHtmlCharCodes(title.split('-').join(' '))
}

function HtmlEncode(s:string)
{
  s.replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");      

  // var el = document.createElement("div");
  // el.innerText = el.textContent = s
  // s = el.innerHTML
  // console.log(2,s)
  return s
}

function decodeHtmlCharCodes(s: string) { 
  // console.log(str,str.replace(/(&#(\d+);)/g, function(match, capture, charCode) {
  //   return String.fromCharCode(charCode);
  // }))
  // return str.replace(/(&#(\d+);)/g, function(match, capture, charCode) {
  //   return String.fromCharCode(charCode);
  // })
  return s.replace(/&lt;/g , "<").replace(/&gt;/g , ">").replace(/&quot;/g , "\"").replace(/&#39;/g , "'").replace(/&amp;/g , "&");
}