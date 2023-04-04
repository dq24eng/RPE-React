export const data = [
    {
        id: 1,
        name: "Aceite de Cuidado 100 ml ABC",
        description: "Aceite ligero que se esparce fácilmente sin dejar grasoso. Reduce el frizz, sella las puntas abiertas y da un acabado brillante y suave.",
        price: 2500,
        code: "ACEI100",
        url: "./images/ACEI100.png",
        urlDetail: "../images/ACEI100.png"
    },
    {
        id: 2,
        name: "Shampoo+Acond Primont SILVER",
        description: "Un cabello fresco, más vital y manejable en pocos pasos, de la mano de Primont.",
        price: 1900,
        code: "POLSP12",
        url: "./images/POLSP12.png",
        urlDetail: "../images/POLSP12.png"
    },
    {
        id: 3,
        name: "Shock Keratina PRIMONT QTN",
        description: "Primont Queration Shock De Keratina otorga brillo, control, hidratación y suavidad. Elimina el frizz.",
        price: 1700,
        code: "SHQE140",
        url: "./images/SHQE140.png",
        urlDetail: "../images/SHQE140.png"
    },
    {
        id: 4,
        name: "Shampoo+Ac PRIMONT Maroc Oil",
        description: "Primont Maroc Oil con Aceite de Argán. Aporta brillo intenso y extrema suavidad a la fibra capilar. Ayuda a cerrar las puntas y reduce la rotura. ",
        price: 3735,
        code: "SHMO350",
        url: "./images/SHMO350.png",
        urlDetail: "../images/SHMO350.png"
    }
]

const getFetch = new Promise ((res,rej)=>{
    let condition = true
    if (condition) {
        setTimeout(()=>{ res(data) }, 2000);
    } else {
        rej (console.log("No hay datos"))
    }
})

export default getFetch;