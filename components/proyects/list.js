import Item from './item'

import { Pagination } from 'antd'

const proyectos = [{
    id: 1,
    title: 'Aplicacion web y movil para productos en almacen y despacho',
    description: 'Necesito que mi cliente pueda tener una aplicacion que ingrese los productos que el nos entrega para almacenar y despachar y que el tenga vision de eso',
    time: 'Hace 1 hora',
    price: 1500,
    currency: 'USD',
    flexibilty: 1,
    send: 1,
    category: 'Diseño web'
},{
    id: 2,
    title: 'Programar juegos para tablet Android sin internet',
    description: 'Necesito desarrollar varios juegos sencillos para promocionar marcas en aplicaciones para tablet android sin internet. Una de las app es una ruleta, otra es un juego de agarrar latas que caen, otro es un who is who, y el ultimo es una trivia de preguntas con animación para el ganador. Una o dos de ellas necesita relevar datos del participante mediante el formulario',
    time: 'Hace 31 minutos',
    price: 250,
    currency: 'USD',
    flexibilty: 0,
    send: 0,
    category: 'APP Android/iOS'
},{
    id: 3,
    title: 'Rpa / Desarrollo / Automation Anywhere',
    description: 'Hola! Somos del equipo de reclutamiento de Workana Enterprise. Estamos ayudando a uno de nuestros clientes corporativos a encontrar el profesional ideal para su proyecto. Por favor, lee la descripción del proyecto antes de enviar tu propuesta e intenta brindarnos la mayor cantidad de información alineada a lo que solicitamos en ella.',
    time: 'Hace casi una hora',
    price: 4250,
    currency: 'USD',
    flexibilty: 1,
    send: 0,
    category: 'Programación web'
},{
    id: 4,
    title: 'Tres libros digitales para fundacion vivir agradecidos.org',
    description: 'Hola, necesitamos convertir 3 libros en ebook y mobi para vender en nuestra tienda online. Partimos con los archivos indesign',
    time: 'Hace 1 hora',
    price: 150,
    currency: 'USD',
    flexibilty: 0,
    send: 0,
    category: 'Redacción y/o traducción'
}]

export default function List(){
    return(
        <>
            <div>
                {
                    proyectos.map((proyect) => {
                        return(
                            <Item key={ proyect.id } proyect={ proyect } />
                        )
                    })
                }
                <Pagination defaultCurrent={1} total={10} />
            </div>
        </>
    )
}