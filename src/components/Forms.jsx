import React, { useState } from "react";
import styles from "../styles/app.module.css";

const Forms = ({ onSubmitForm }) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [generoMusical, setGeneroMusical] = useState("");
  const [artistaFavorito, setArtistaFavorito] = useState("");
  const [ultimoConcierto, setUltimoConcierto] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleImputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 3) {
      setError("Debes ingresar un nombre de al menos tres caracteres");
      setMensaje("");
      return;
    }
    if (parseInt(edad) < 15) {
      setError("Debes tener al menos 15 años para responder el formulario");
      setMensaje("");
      return;

    }
    setError("");
    setMensaje("Formulario enviado exitosamente");

    onSubmitForm({
      nombre,
      edad,
      generoMusical,
      artistaFavorito,
      ultimoConcierto,
    });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />

<input
          type="numero"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad (e.target.value)}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />

<input
          type="texto"
          placeholder="Genero musical favorito"
          value={generoMusical}
          onChange={(e) => setGeneroMusical(e.target.value)}
          className= {styles.input}
        />

        <input
          type="texto"
          placeholder="Artista Favorito"
          value={artistaFavorito}
          onChange={(e) => setArtistaFavorito(e.target.value)}
          className= {styles.input}
        />

        <input
          type="texto"
          placeholder="Último concierto al que asististe"
          value={ultimoConcierto}
          onChange={(e) => setUltimoConcierto(e.target.value)}
          className= {styles.input}
        />
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>} 
      {mensaje && !error && <p className={styles.success}>{mensaje}</p>} 
    </div>
  );
};

export default Forms;
