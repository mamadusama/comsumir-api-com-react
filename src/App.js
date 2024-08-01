import { useEffect, useState } from "react";
import './style.css';

function App() {
  const[nutriApi , setNutriApi] = useState([]) // nº1 finálizado

  useEffect(()=>{
    function loadApi(){
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts ";

      fetch(url)
      .then((r)=> r.json())
      .then((json)=> {
        setNutriApi(json);
      }) 
      .catch((error)=>{
        document.write(`Ops: Algo deu Errado! o Erro aparente a:  ${error}`);
        setNutriApi([]);
      })
      
      
    }
    loadApi();

  }, []);

  return (
    <>
      <div className="container">
        <header>
          <h1>Lista de Nutricionistas</h1>
        </header>
        {nutriApi.map((item) =>{
          return(
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo}/>
              <p className="subtitulo">{item.subtitulo}</p>
              <h2>Categoria: {item.categoria}</h2>
              <a className="botao" href="#">Acessar conteúdo</a>
             
            </article>
          );
        })}

      </div>
    </>
  );
}

export default App;
