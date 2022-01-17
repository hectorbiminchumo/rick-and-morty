import React, { useState, useContext } from "react";
import CharacterContext from "../../context/Character/CharacterContext";

function Create() {
  const ctx = useContext(CharacterContext);
  const { createCharacter } = ctx;

  //1. HOOKS
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    gendre: "",
    location: "",
    image: "",
  });
  const [charactersCreated, setCharactersCreated] = useState([]);
  const [error, setError] = useState(null);
  console.log(setCharactersCreated);
  //2. FORMULARIO
  const handleChange = (e) => {
    e.preventDefault();
    setNewCharacter({
      ...newCharacter,
      [e.target.name]: e.target.value,
    });
  };

  //3. CREAR

  const addCharacter = (event) => {
    event.preventDefault();

    setError(null);
    createCharacter(newCharacter);
  };

  return (
    <>
      {/* FORMULARIO */}
      <div className="pl-96 pt-6">
        <form onSubmit={addCharacter}>
          <h3 className="text-lg leading-6 font-medium text-gray-900 py-3">
            Title:
          </h3>
          <input
            name="name"
            className="w-64 border shadow-sm mt-2 p-2 border-gray-200 block w-full focus:ring-blue-700 focus:border-blue sm:text-sm"
            placeholder="Nombre"
            onChange={(e) => handleChange(e)}
            value={newCharacter.name}
          />
          <input
            name="gendre"
            className="w-64 border shadow-sm mt-2 p-2 border-gray-200 block w-full focus:ring-blue-700 focus:border-blue sm:text-sm"
            placeholder="Genero"
            onChange={(e) => handleChange(e)}
            value={newCharacter.gendre}
          />
          <input
            name="location"
            className="w-64 border shadow-sm mt-2 p-2 border-gray-200 block w-full focus:ring-blue-700 focus:border-blue sm:text-sm"
            placeholder="Ubicacion"
            onChange={(e) => handleChange(e)}
            value={newCharacter.location}
          />
          <input
            name="image"
            className="w-64 border shadow-sm mt-2 p-2 border-gray-200 block w-full focus:ring-blue-700 focus:border-blue sm:text-sm"
            placeholder="Imagen"
            onChange={(e) => handleChange(e)}
            value={newCharacter.image}
          />

          <button class="mt-5 w-100 bg-[#557C55] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-[#A6CF98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
            Crear
          </button>
        </form>

        {error ? (
          <div className="bg-[#F2FFE9] p-4 my-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="whitespace-nowrap text-sm font-medium text-yellow-800">
                  {error}
                </h3>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* LISTADO DE PERSONAJES */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        {charactersCreated.length === 0 ? (
          <div className="bg-[#F2FFE9] p-4 my-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="whitespace-nowrap text-sm font-medium text-blue-800">
                  No hay personajes todavia
                </h3>
              </div>
            </div>
          </div>
        ) : (
          charactersCreated.map((element, i) => (
            <article
              className="flex justify-between pb-5 pt-5 border-b border-gray-200"
              key={i}
            >
              <div className="max-w-6xl">
                <h2 className="mb-5 text-lg leading-6 font-medium text-gray-900">
                  Personaje
                </h2>
                <h3 className="text-sg leading-6 font-medium text-gray-900">
                  {element.name}
                </h3>
                <p className="mt-2 max-w-4xl text-sm text-gray-500">
                  {element.gendre}
                </p>
                <p className="mt-2 max-w-4xl text-sm text-gray-500">
                  {element.location}
                </p>
                <p className="mt-2 max-w-4xl text-sm text-gray-500">
                  {element.image}
                </p>
              </div>
            </article>
          ))
        )}
      </div>
    </>
  );
}

export default Create;
