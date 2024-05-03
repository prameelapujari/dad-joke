const jokeE1=document.getElementById('joke');
const jokeHere=document.getElementById('jokeHere');
const jokeBtn=document.getElementById('jokeBtn');

const generateJoke = async () =>{

     const config={
        headers:{Accept:"application/json"},
    };

     const res=await fetch("https://icanhazdadjoke.com/",config);

     const data=await res.json();
     jokeE1.innerHTML=data.joke;

     const result=await fetch("https://official-joke-api.appspot.com/random_joke",config);

     const dat=await result.json();
     jokeHere.innerHTML=dat.type;
     
     // jokeHere.innerHTML=`setup : ` + dat.setup + "punchline : " + dat.punchline ;
};

// fetch("https://icanhazdadjoke.com/", config)
// .then((res)=>res.json()) //=={retuen res.json()}
// .then((data)=>{
//      jokeE1.innerHTML=data.joke;
// })

generateJoke();

jokeBtn.addEventListener('click',()=>{
     generateJoke();
});