import React from "react";

function Filter({ text, setText, cat, setCategoria }) {
  const handleInputChange = ({ target }) => {
    setText(target.value);
    console.log(target.value);
  };
  const handleChange = ({ target }) => {
    setCategoria(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(text);
  };

  return (
    <>
      <div className=" pt-24 pb-6 flex justify-center">
        <div className=" sm:block sm:ml-6 lg:block lg:ml-6">
          <div className="flex space-x-4">
            <form
              onSubmit={handleSubmit}
              className="flex-row lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
            >
              <select
                name="categoria"
                onChange={handleChange}
                className="relative block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option selected value="Todos">
                  Todos
                </option>
                <option value="Personaje">Filtrar por Personaje</option>
                <option value="Ubicacion">Filtrar por Ubicacion</option>
                <option value="Episodio">Filtrar por Episodio</option>
              </select>
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                      name="buscar"
                      placeholder={cat}
                      value={text}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
