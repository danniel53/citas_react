import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {




  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll"> 

        {pacientes && pacientes.length ? (
        <>
         <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
             <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
            <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
         </p>

         { pacientes.map( paciente => (
                <Paciente 
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ))}

        </>)
         : (
           <>
           <h2 className="font-black text-3xl text-center">No tiene Pacientes inscritos</h2>
             <p className="text-xl mt-5 mb-10 text-center">
             Es necesario {''}
            <span className="text-indigo-600 font-bold "> agregar los pacientes</span>
            </p>
         </>
         )}

        






        
        
               
    </div>
  )
}

export default ListadoPacientes
