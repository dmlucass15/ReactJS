import React from 'react'
import ItemDetail from './ItemDetail'

export const ItemDetailContainer = () => {
  
  const productos = [

    {id: 1,img:"", nombre: "Plan Gym", descripcion: "Descripcion", categoria: "A"},
    {id: 2,img:"", nombre: "Plan Dieta", descripcion: "Descripcion", categoria: "A"},
    {id: 3,img:"", nombre: "Crea Stack", descripcion: "Descripcion", categoria: "B"},
    {id: 4,img:"", nombre: "Creatina Whey", descripcion: "Descripcion", categoria: "B"},
    {id: 5,img:"", nombre: "Proteina BIPRO", descripcion: "Descripcion", categoria: "C"},
    {id: 6,img:"", nombre: "Proteina WHEY", descripcion: "Descripcion", categoria: "C"},

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

  
  return (
    <>
    
    <ItemDetail
              productos = {productos}
    />
      
      
    </>
  )
}

export default ItemDetailContainer