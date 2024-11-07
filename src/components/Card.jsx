import React from "react";
import styles from "../styles/app.module.css";

const Card = ({nombre, edad, generoMusical, artistaFavorito, ultimoConcierto}) => {
  return (
    <div className= {styles.title}>
      <h2 className= {styles.title}> Perfil Musical </h2>
      <p> Nombre: {nombre} </p>
      <p> Edad: {edad} </p>
      <p> Genero Musical Favorito: {generoMusical} </p>
      <p> Artista favorito {artistaFavorito} </p>
      <p> Último concierto al que asistió: {ultimoConcierto} </p>
    </div>
  );
};



export default Card;