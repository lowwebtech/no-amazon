document.addEventListener('DOMContentLoaded', ()=>{
  const hostname = getOriginHostname().replace('www.', '');
  document.querySelector('h1 span').innerText = hostname;
})

function getOriginHostname(){
  const queryString = window.location.search.substring(1);
  const urlParams = new URLSearchParams(queryString);
  const from = urlParams.get('from');
  return from
}
