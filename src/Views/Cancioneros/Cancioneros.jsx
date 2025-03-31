

import React, { useEffect, useState } from 'react';
import '../Cancioneros/Cancioneros.css'
import { MyNavbar } from '../../Components/MyNavbar/MyNavbar';
import { MyFooter } from '../../Components/MyFooter/MyFooter';
import { supabase } from '../../Database/Supabase';
import Button from 'react-bootstrap/Button';

const Cancioneros = () => {

    

      const [libros, setLibros] = useState([]);
    
      useEffect(() => {
        const fetchLibros = async () => {
          const { data, error } = await supabase.storage.from("Cancioneros").list();
          if (error) {
            console.error("Error al obtener libros:", error);
          } else {
            setLibros(data);
          }
        };
    
        fetchLibros();
      }, []);
    
      const handleOpenLibro = async (libro) => {
        // Obtener la URL pública del archivo
        const { data } = await supabase.storage.from("Cancioneros").getPublicUrl(libro.name);
        window.open(data.publicUrl, "_blank"); // Abrir en nueva pestaña
      };
    






    return(
     <>

     <MyNavbar/>
     <div className='contGralLibros'>
    <h1 className='titulo'>Lista de Cancioneros</h1>
    <div className='contBotones'>
     
      {libros.length === 0 ? (
        <p>No hay Cancioneros disponibles</p>
      ) : (
        libros.map((libro) => (

            <Button className='btn' variant="primary" size="lg" key={libro.name} onClick={() => handleOpenLibro(libro)}>
         {libro.name}
      </Button>

    

        ))
      )}
    </div>



    </div>


     <MyFooter/>
     
     </>
    )
}

export { Cancioneros }