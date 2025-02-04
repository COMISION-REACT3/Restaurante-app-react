import { MenuCard } from '../../components';
import './Menu.css';

const desayuno = [
  {
    id:1,
    name:'Cafe Con Tostadas', 
    description:'Cafe, Pan, Jamón y queso',
    price: '$4500' ,
  },
  {
    id:2,
    name:'Tostadas con Palta y huevo', 
    description:'Pan tostado, Palta, Huevo revuelto y queso crema',
    price: '$7500' ,
  },
  {
    id:3,
    name:'Cafe y 2 medialunas o Tortillas', 
    description:'Cafe, 2 medialunas o tortillas',
    price: '$4000' ,
  },

]

const almuerzo = [
  {
    id:1,
    name:'Napolitana con papas',
    description:'Napolitana, papas, queso crema y salsa',
    price: '$10000' ,
  },
  {
    id:2,
    name:'Pollo al horno',
    description:'Pollo al horno, salsa, queso crema y cebolla',
    price: '$25000' ,
  },
  {
    id:3,
    name:'Cabrito con papas doradas',
    description:'Cabrito, papas doradas, queso crema y cebolla',
    price: '$35000' ,
  }
]

const cena = [
  {
    id:1,
    name:'Pizza Especial',
    description:'Pizza con jamon, queso, morrones',
    price: '$25000' ,
  },
  {
    id:2,
    name:'Sorrentinos',
    description:'Sorrentinos, cebolla, tomate, aceite, perejil y salsa',
    price: '$20000' ,
  },
  {
    id:3,
    name:'Sanguche de Milanesa (Mexicano)',
    description:'Sanguche de Milanesa, tomate, cebolla, perejil, aceite y salsa',
    price: '$20000' ,
  }
]

const postre = [
  {
    id:1,
    name:'Brownie',
    description:'Brownie, chocolate, leche y azúcar',
    price: '$6000' ,
  },
  {
    id:2,
    name:'Tiramisu',
    description:'Tiramisu, leche condensada, azúcar, crema y chocolate',
    price: '$6500' ,
  },
  {
    id:3,
    name:'Flan con dulce leche y crema',
    description:'Flan, dulce y crema',
    price: '$5000' ,
  }
]



function Menu() {
  return (
    <div className='menu-page'>

        <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
              <h1 className='text-light'>Menu</h1>
          </div>
        </header>

        <MenuCard
          menu={desayuno}
          img='https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          title='Desayuno'
          bg='bg-white'
          text=''
        />


        <MenuCard
          menu={almuerzo}
          img='https://images.pexels.com/photos/1860204/pexels-photo-1860204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          title='Almuerzo'
          bg='bg-dark'
          text='text-white'
        />

      <MenuCard
          menu={cena}
          img='https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          title='Cena'
          bg='bg-white'
          text=''
        />

        <MenuCard
          menu={postre}
          img='https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          title='Postre'
          bg='bg-dark'
          text='text-white'
        />


    </div>
  )
}

export default Menu