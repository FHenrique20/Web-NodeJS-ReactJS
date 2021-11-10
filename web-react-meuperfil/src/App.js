import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
 
  render(){
    return(
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"></link>
        

        <div class="form-row text-center">
        <div class="col-12">
          <h1>Meu Perfil</h1>
          <img></img>
        </div>
        </div>
        <h3>Dados Pessoas</h3>
        <FotoPerfil />

        <p>Nome: Fábio Silva</p>
        <p>Idade: 21</p>
        
        <h3>Formação</h3>
        <p>Ensino Superior: Sistema de Informação</p>
        <h3>Experiência</h3>
        <p>Nenhuma</p>
        <h3>Projetos</h3>
        <p>Nenhum</p>
      </div>
    );
  }
}
 
export default App;
 
class FotoPerfil extends Component {
  render(){

    let img = 'https://files.tecnoblog.net/wp-content/uploads/2021/03/My-Hero-Academia-700x420.jpeg';
 
    return(
        <img src={img} width={250} height={180} />
    );
  }
}