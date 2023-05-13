import { createContext, useState, useEffect } from "react";
export const ItemsCart = createContext(); // Creamos el contexto utilizando el Hook

let initialCart = 0;
let q = JSON.parse(localStorage.getItem('quantity')) || [0, 0, 0, 0];
let cant = [{id: q[0], q: 0}, {id: q[1], q: 0}, {id: q[2], q: 0}, {id: q[3], q: 0}];
let productos = JSON.parse(localStorage.getItem('products')) || {}
let total = 0
let productosCarrito = []
let newCart = []

export const ItemsCartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart)
  const [allProductsCart, setAllProductsCart] = useState(cant)

  if((productos.length != 0) && (productos.length != undefined)) {productos.map((producto) => {
    for (let i=0;i<allProductsCart.length;i++){
        if ((producto.id == allProductsCart[i].id)&&(allProductsCart[i].q>0)){
          producto.quantity = parseInt(allProductsCart[i].q)
          productosCarrito.push(producto)
        }
      }
  })}

  const onDeleteProduct = (product) => {
    const results = productosCarrito.filter(item => item.id !== product.id);
    newCart = results;
    console.log(results);
  }

  useEffect(()=>{
    productosCarrito=newCart;
  },[newCart]);

  function onCleanCart () {
    //return productosCarrito = []
  }

  const añadirCarrito = product => {
    setCart (cart+1);
    for (let i=0; i<q.length; i++) {
      if (product.id == cant[i].id){
        cant[i].q = cant[i].q + 1
      }
    }
  }

  return (
    <ItemsCart.Provider 
      value={{cart, setCart, añadirCarrito, allProductsCart, onCleanCart, onDeleteProduct, productosCarrito}}>
        {children}
    </ItemsCart.Provider>
  )
}


    /*if (allProductsCart.length == 0) {
      setAllProductsCart({id: product.id, q: 1})
    } else {
      for(let i=0; i < allProductsCart.length; i++ ){
        if (allProductsCart[i].id == product.id) {
          allProductsCart.q++;
          flag=true;
        }
      }
    }

    if(!flag) setAllProductsCart({id: product.id, q: 1})*/


    /*

      const añadirCarrito = product => {
    setCart (cart+1);
    q = JSON.parse(localStorage.getItem('quantity'))
    console.log(q)
    for (let i=0;i<q.length;i++) {
      if (product.id == q[i].id) {
        q[i].q ++
      }
    }
  }

  useEffect(()=>{
    localStorage.setItem('quantity', JSON.stringify(q))
  },[q])
  //console.log(localStorage.getItem('quantity'))



    */