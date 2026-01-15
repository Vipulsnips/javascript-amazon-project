console.log("hi");
async function input(){
  const response=await fetch("https://supersimplebackend.dev/greeting");
  const text= await response.text();
  console.log(text);
}
function input2() {
  return fetch("https://supersimplebackend.dev/greeting")
    .then(response => response.text())
    .then(text => {
      console.log(text);
      return text;
    });
}
function input3(){
  const xhr=new XMLHttpRequest();
  xhr.addEventListener('load',()=>{
    console.log(xhr.response);
  });
  xhr.open('GET','https://supersimplebackend.dev/greeting');
  xhr.send();
}
async function send(){
  const response = await fetch('https://supersimplebackend.dev/greeting',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      name:'vipul'
    })
  });
  const text= await response.text();
  console.log(text);
}
async function errorHandling(){
  try{
    const response = await fetch('https://supersimplebackend.dev/greeting',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
    });
    if(response.status >= 400){
        throw response;
    }
  }catch(error){
    if(error.status === 400){
      const out=await error.json();
      console.log(out);
    }
    else{
      console.log('network error')
    }
  }
}
input();
input2();
input3();
send();
errorHandling();