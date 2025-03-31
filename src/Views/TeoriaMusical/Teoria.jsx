

import React, { useEffect, useState } from 'react';
import { MyNavbar } from '../../Components/MyNavbar/MyNavbar';
import '../TeoriaMusical/Teoria.css'
import { supabase } from '../../Database/Supabase';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sonido from '../../Img/parlante.jpg'
import Lenguaje from '../../Img/lenguajeMusical.jpg'
import Instrumentos from '../../Img/instrumentos.jpg'
import FormaMusical from '../../Img/forma.jpg'
import Historia from '../../Img/mozart.jpg'
import Grabacion from '../../Img/microfono.jpg'
import Academias from '../../Img/academias.jpg'
import teoriaHerrera from '../../Img/teoriaHerrera.jpg'
import { MyFooter } from '../../Components/MyFooter/MyFooter';



const Teoria = () => {


     const [libros, setLibros] = useState([]);
    
      useEffect(() => {
        const fetchLibros = async () => {
          const { data, error } = await supabase.storage.from("archivosPdf").list();
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
        const { data } = await supabase.storage.from("archivosPdf").getPublicUrl(libro);
        window.open(data.publicUrl, "_blank"); // Abrir en nueva pestaña
      };
    


    return(
       <>
       
        <MyNavbar/>

        <div className='contGral'>

            <div className='contOpciones'>

            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Sonido} />
      <Card.Body>
        <Card.Title>El Sonido</Card.Title>
        <Card.Text>
          Aqui encontraras todo lo que necesitas saber sobre el sonido y sus parametros!
        </Card.Text>
        <Button variant="primary" onClick={()=>handleOpenLibro('parametrosSonido.pdf')}>A Estudiar!</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Lenguaje} />
      <Card.Body>
        <Card.Title>Lenguaje Musical</Card.Title>
        <Card.Text>
          Aqui encontraras todo lo que necesitas saber sobre Lenguaje Musical!
        </Card.Text>
        <Button variant="primary" onClick={()=>handleOpenLibro('lenguajeMusical.pdf')}>A Estudiar!</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Instrumentos} />
      <Card.Body>
        <Card.Title>Instrumentos</Card.Title>
        <Card.Text>
          Aqui encontraras todo lo que necesitas saber sobre Familia de Instrumentos!
        </Card.Text>
        <Button variant="primary" onClick={()=>handleOpenLibro('clasificacionInstrumentos.pdf')}>A Estudiar!</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={FormaMusical} />
      <Card.Body>
        <Card.Title>Forma Musical</Card.Title>
        <Card.Text>
          Aqui encontraras todo lo que necesitas saber sobre Forma Musical!
        </Card.Text>
        <Button variant="primary" onClick={()=>handleOpenLibro('formaMusical.pdf')}>A Estudiar!</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Historia} />
      <Card.Body>
        <Card.Title>Historia</Card.Title>
        <Card.Text>
          Aqui encontraras todo lo que necesitas saber sobre Historia de la Música!
        </Card.Text>
        <Button variant="primary" onClick={()=>handleOpenLibro('historiaMusica.pdf')}>A Estudiar!</Button>
      </Card.Body>
    </Card>

 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Grabacion} />
      <Card.Body>
        <Card.Title>Elementos Grabación</Card.Title>
        <Card.Text>
          Aqui encontraras todo lo que necesitas saber sobre Grabacion de Audio!
        </Card.Text>
        <Button variant="primary" onClick={()=>handleOpenLibro('grabacionAudio.pdf')}>A Estudiar!</Button>
      </Card.Body>
    </Card>

    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={teoriaHerrera} />
      <Card.Body>
        <Card.Title>Teoria Herrera</Card.Title>
        <Card.Text>
        Aqui encontraras el libro de Herrera con toda la teoria de la musica que necesitas saber!
        </Card.Text>
        <Button variant="primary" onClick={()=>handleOpenLibro('teoriaMusicalHerrera.pdf')}>A Estudiar!</Button>
      </Card.Body>
    </Card>

            </div>


        </div>

 <MyFooter/>
       </>
    )
}

export { Teoria }