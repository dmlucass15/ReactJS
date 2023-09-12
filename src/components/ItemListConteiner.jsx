import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListConteiner = ({greeting}) => {
  
  const {categoria} = useParams ()
  
  
  const productos = [

    {id: 1,img:"", nombre: "Plan Gym", descripcion: "PLAN GYM 2 MESES, TE DAMOS TU ENTRENAMIENTO EN BASE A TU PESO Y METAS", categoria: "A"},
    {id: 2,img:"", nombre: "Plan Dieta", descripcion: "PLAN DIETARIO, TE DAMOS UNA BUENAS RECETAS, FACIL Y SENCILLAS PARA PODER ALCANZAR TUS METAS", categoria: "A"},
    {id: 3,img:"", nombre: "Crea Stack", descripcion: "CREATINA CREA STACK 60 SERVICIOS, PARA AUMENTAR MASA MUSCULAR Y RESISTENCIA", categoria: "B"},
    {id: 4,img:"", nombre: "Creatina Whey", descripcion: "CREATINA WHEY 70 SERVICIOS, AUMENTA FUERZA Y RESISTENCIA", categoria: "B"},
    {id: 5,img:"", nombre: "Proteina BIPRO", descripcion: "PROTEINA BIPRO EN BASE DE SUERO DE LECHE. HUEVO Y AVENA PARA AUMENTAR MASA MUSCULAR", categoria: "C"},
    {id: 6,img:"", nombre: "Proteina WHEY", descripcion: "PROTEINA WHEY, PARA AUMENTAR MASA MUSCULAR ", categoria: "C"},

    ]

    const getProductos = new Promise ((resolve, reject) => {
      if (productos.length > 0){
        setTimeout (()=> {
          resolve(productos)
        }, 2000)
      } else {
        reject (new Error ("No hay datos"))
      }
    })

    getProductos
        .then ((res)=> {
      })
      .catch ((error) => {
        console.log(error)
      })

      const filteredProductos = productos.filter((producto) => producto.categoria === categoria)

  return (
<>
    {

      categoria ? <ItemList productos={filteredProductos} /> : <ItemList productos={productos} />

    }
</>
  )
  }

export default ItemListConteiner