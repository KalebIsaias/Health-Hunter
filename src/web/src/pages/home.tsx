import React from 'react';

function Home() {
  const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const medications = [
    {
      day: 'Segunda',
      time: '08:00 AM',
      name: 'Remédio A',
      pills: 2,
      notes: 'Tomar com comida.',
    },
    {
      day: 'Segunda',
      time: '12:00 PM',
      name: 'Remédio B',
      pills: 1,
      notes: 'Tomar com água.',
    },
    {
      day: 'Terça',
      time: '08:00 AM',
      name: 'Remédio A',
      pills: 2,
      notes: '',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      
      <nav className="bg-green-500 p-4 shadow-lg">
        <div className="container mx-auto flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Health Hunter Logo"
            className="w-10 h-10 mr-3"
          />
          <span className="text-white text-2xl font-semibold">Health Hunter</span>
        </div>
      </nav>
      
      <div className="p-8">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna da esquerda: Informações do Idoso */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg lg:col-span-1">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold text-green-900 mb-2">Nome do Idoso</h2>
              <p className="text-gray-600 mb-4">Informações sobre o idoso</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">Remédios</h3>
              <ul>
                <li className="flex items-center mb-2">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Medicamento"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-green-700">Remédio 1</span>
                </li>
                <li className="flex items-center mb-2">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Medicamento"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-green-700">Remédio 2</span>
                </li>
                {/* Adicione mais remédios conforme necessário */}
              </ul>
            </div>
          </div>

          {/* Coluna da direita: Linha dos dias da semana e blocos de remédios */}
          <div className="lg:col-span-2">
            {/* Linha dos dias da semana */}
            <div className="grid grid-cols-5 gap-4 mb-8">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center font-semibold text-lg text-green-900">
                  {day}
                </div>
              ))}
            </div>

            {/* Blocos de remédios */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {medications.map((med, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg border-l-4 border-green-500">
                  <h3 className="text-md font-semibold mb-2 text-green-900">{med.name}</h3>
                  <p className="text-gray-600 mb-1">Hora: {med.time}</p>
                  <p className="text-gray-600 mb-1">Pílulas: {med.pills}</p>
                  <p className="text-red-500 mb-4">Notas: {med.notes || 'Nenhuma nota.'}</p>
                  <textarea
                    className="w-full p-2 border rounded border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Adicione uma nota..."
                  ></textarea>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
