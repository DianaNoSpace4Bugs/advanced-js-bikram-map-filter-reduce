//RESUELVE LOS EJERCICIOS AQUI
// let numbers = [4, 5, 6, 7, 8, 9, 10]
// function elevados(numbers){
//     numbers**numbers   
// }
// numbers.map(elevados);


//1
let numbers = [4, 5, 6, 7, 8, 9, 10]
function elevados() {
    return numbers.map(n => n**n)
}

//2
let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

let result2 = foodList.map((food, i) => {
    switch (i) {
        case 0:
            return `Como soy de Italia, amo comer ${food}`;
            break;
        case 1:
            return `Como soy de Japón, amo comer ${food}`;
            break;
        case 2:
            return `Como soy de Valencia, amo comer ${food}`;
            break;
        case 3:
            return `Aunque no como carne, el ${food} es sabroso`;
            break;
    }
})

//3
let staff =[
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];

  let result3 = staff.map(objeto =>{
    return `${objeto.name} es ${objeto.role} y le gusta ${objeto.hobbies[0]} y ${objeto.hobbies[1]}`
  })
  
  //4
  const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result4 = numbers2.filter((number)=>number%2 != 0)

  //5
  const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];
    let veggie = foodList2.filter(food => {
        return food.isVeggie == true;
     })
     let result5 = veggie.map((a, i) => {
         if (i == 0) {
             return `Que rico ${a.name} me voy a comer!`
         } else {
             return `Que rica ${a.name} me voy a comer!`
         }
     })
     //6
     
const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];
  let filtroObjetos = inventory.filter((precio)=>precio.price>300)
  let result6 = filtroObjetos.map(nombreInventario => nombreInventario.name)

  //7
  let numeros3 = [39, 2, 4, 25, 62]
  let result7 = numeros3.reduce((accumulator,value)=>accumulator*value)

  //8
  const sentenceElements = [
    'Me',
    'llamo',
    "Maria",
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];
  
  // Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
let result8 = sentenceElements.reduce((acc,value)=>acc+" "+value)

//9
const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];
  // Resultado --> 60
let filtro = books.filter(categoria =>categoria.category == "code")  
let result9 = filtro.reduce((acc,value) => {
    return acc.price+value.price
})


