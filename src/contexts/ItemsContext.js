import { createContext, useState } from "react";
export const ItemsCart = createContext(); // Creamos el contexto utilizando el Hook

let initialCart = 0;
let q = JSON.parse(localStorage.getItem('quantity')) || [0, 0, 0, 0];
let cant = [{id: q[0], q: 0}, {id: q[1], q: 0}, {id: q[2], q: 0}, {id: q[3], q: 0}];
let isDeleted = false;
let update = false;

export const ItemsCartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart)
  const [allProductsCart, setAllProductsCart] = useState(cant)
  const [productosCarrito, setProductosCarrito] = useState([])
  const [total, setTotal] = useState(0);

  const addProduct =(item, quantity) =>{
    setCart(cart+1)
    if(isInCart(item.id)){
      setProductosCarrito (productosCarrito.map(product =>{
        return product.id === item.id ? {...product,quantity:product.quantity + 1} : product
      }));
    }else{
      quantity = 1;
      setProductosCarrito ([...productosCarrito,{...item,quantity}]);
    }
    update = true;
  }
  const isInCart = (id) => productosCarrito.find((product) => product.id === id) ? true : false;
  const removeProduct = (id) => {
    setProductosCarrito(productosCarrito.filter((product) => product.id !== id));
    isDeleted = true;
    update = true;
  }
  const onCleanCart = () => {
    setProductosCarrito([])
    isDeleted = true;
    update = true;
  }
  if (isDeleted) {
    let newCart = 0;
    for (let i=0;i<productosCarrito.length;i++) newCart = newCart + productosCarrito[i].quantity
    productosCarrito.length === 0 ? setCart(0) : setCart(newCart)
    isDeleted = false;
  }
  if (update) {
    const total1 = productosCarrito.reduce((acumProduct, product) => acumProduct += product.price*product.quantity, 0)
    setTotal(total1)
    update = false;
  }

  return (
    <ItemsCart.Provider 
      value={{cart, setCart, addProduct, allProductsCart, removeProduct, productosCarrito, onCleanCart, total}}>
        {children}
    </ItemsCart.Provider>
  )
}

/*

  return (
    <ItemsCart.Provider 
      value={{cart, setCart, añadirCarrito, allProductsCart, onCleanCart, onDeleteProduct, productosCarrito}}>
        {children}
    </ItemsCart.Provider>
  )

*/


  /*if((productos.length != 0) && (productos.length != undefined)) {productos.map((producto) => {
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
    }*/