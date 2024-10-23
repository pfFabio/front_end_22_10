var cont = 0
function Feliz() {
  return (
    <div className="App-header">
        <img id="imagem" src="https://media.tenor.com/6G8KXj9IaiMAAAAd/memes-happy.gif" className="App-logo"/>
        <button onClick={troca}> troca </button>
    </div>
  );
}

function troca(){
    if(cont == 0){
        console.log("eu funciono")
        document.getElementById("imagem").src = "https://c.tenor.com/aUxESgWNsk0AAAAd/tenor.gif"
        cont = 1
    }else{
        document.getElementById("imagem").src = "https://media.tenor.com/6G8KXj9IaiMAAAAd/memes-happy.gif"
        cont = 0
    }
}

export default Feliz;
