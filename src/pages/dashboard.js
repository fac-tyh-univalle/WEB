import React, { useState } from 'react';


const App = () => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [foto, setFoto] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleDireccionChange = (e) => {
    setDireccion(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleFotoChange = (e) => {
    setFoto(e.target.value);
  };

  const handleUbicacionChange = (e) => {
    setUbicacion(e.target.value);
  };

  return (
    <div className="container">
      <div className="columna-1">
        <h2>Formulario de Registro</h2>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} />

          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" value={direccion} onChange={handleDireccionChange} />

          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" value={descripcion} onChange={handleDescripcionChange}></textarea>

          <label htmlFor="foto">Foto:</label>
          <input type="file" id="foto" onChange={handleFotoChange} />

          {/* Aquí puedes agregar cualquier otra información adicional que desees registrar */}

        </form>
      </div>
      <div className="columna-2">
        <h2>Ubicación</h2>
        <p>{ubicacion}</p>
      </div>
    </div>
  );
};

export default App;
