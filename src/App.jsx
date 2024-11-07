import Card from "./components/Card";
import { useState } from "react";
import Forms from "./components/Forms";
import styles from "./styles/app.module.css";

function App() {
  const [datosFormulario, setDatosFormulario] = useState (null);

  const handleFormSubmit = (datos) => {
    setDatosFormulario (datos);
  };

  return (
    <div className={styles.container}>
      <h1>Encuesta Musical</h1>
      <div className={styles.form}></div>
      <Forms onSubmitForm={handleFormSubmit} />
      {datosFormulario && <Card {...datosFormulario} className={styles.card} /> }
    </div>
  );
}

export default App;
