import React, {useContext} from "react";
import CharacterContext from "../../context/Character/CharacterContext";

function Locations() {

  const {text,locationsFilter} = useContext(CharacterContext)

  if (locationsFilter.length === 0)
    return <p>No hay coincidencias de ubicaciones con "{text}"</p>;

  return (
    <>
      <div className="bg-gray-700 pt-6 pl-6 pr-6">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-row">
          {locationsFilter.map((location) => {
            return (
              <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                <div class="flex-4 flex flex-col p-8">
                  <h3 className="mt-6 text-gray-900 text-sm font-medium">
                    {" "}
                    {location.name}{" "}
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm">
                      {" "}
                      Tipo: {location.type}{" "}
                    </dd>
                    <dd className="text-gray-500 text-sm">
                      {" "}
                      Dimension: {location.dimension}
                    </dd>
                    <dd className="text-gray-500 text-sm">
                      {" "}
                      Residentes: {location.residents.length}
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        {location.created}
                      </span>
                    </dd>
                  </dl>
                </div>
                <div></div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Locations;
