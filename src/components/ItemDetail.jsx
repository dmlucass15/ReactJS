import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail = ({productos}) => {
const {id} = useParams ()


const filteredProductos = productos.filter((producto) => producto.id === id)

    return (
    <div>
        { filteredProductos.map ((p) => {

            return(

                < div key= {p.id}>
                    <center p='1rem'>

                        <Card>
                            <CardHeader>
                                <Heading size='md'>{p.nombre}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>{p.descripcion}</Text>
                                <Text>{p.categoria}</Text>
                            </CardBody>
                            <CardFooter>
                                <ItemCount />
                            </CardFooter>
                        </Card>
                    </center>
                </div>
            
            )
        })}
        </div>
)
}

export default React.memo(ItemDetail)