import React from 'react';
import { MyNavbar } from '../../Components/MyNavbar/MyNavbar';
import '../Home/Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TeoriaImg from '../../Img/infoImg.jpg'
import LibrosImg from '../../Img/libros.jpg'
import CancioneroImg from '../../Img/cancionero.jpg'
import Servicios from '../../Img/profesor.jpg'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyFooter } from '../../Components/MyFooter/MyFooter';
import LogoHome from '../../Img/logoPortada.png'


const Home = () => {

    const navigate = useNavigate();

    const navegar = (pagina) => { 

        navigate(pagina)
    }



    return(
        <> 
       <MyNavbar/>
       <div className='contGralHome'>

       
        <img src={LogoHome} alt="" className='logoHome' />


            <div className='contImgSuperior'>

            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={TeoriaImg} />
      <Card.Body>
        <Card.Title>Teoria Musical</Card.Title>
        <Card.Text>
          Aqui encontraras toda la teoria necesaria para realizar tus trabajos practicos de Música.
        </Card.Text>
        <Button variant="primary" onClick={()=>navegar('/Teoria')}>A Musiquear!</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={LibrosImg} />
      <Card.Body>
        <Card.Title>Libros</Card.Title>
        <Card.Text>
          Aqui encontraras diferentes libros necesarios para complementar tu aprendizaje musical!
        </Card.Text>
        <Button variant="primary" onClick={()=>navegar('/Libros')}>A Musiquear</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CancioneroImg} />
      <Card.Body>
        <Card.Title>Cancioneros</Card.Title>
        <Card.Text>
        Aqui encontraras diferentes cancioneros para disfrutar cantantando en el aula!
        </Card.Text>
        <Button variant="primary" onClick={()=>navegar('/Cancioneros')}>A Musiquear</Button>
      </Card.Body>
    </Card>

    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Servicios} />
      <Card.Body>
        <Card.Title>Servicios Musicales</Card.Title>
        <Card.Text>
        Aqui encontraras Profesores, Luthiers  y todo lo que necesitas para complementar tu estudio!
        </Card.Text>
        <Button variant="primary">A Musiquear</Button>
      </Card.Body>
    </Card> */}



            </div>


           

       </div>
       <MyFooter/>
       </>
    )
}

export { Home }