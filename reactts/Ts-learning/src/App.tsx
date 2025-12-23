
import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter'
import ChaiList from './components/ChaiList'
import type { Chai } from './types'
import OrderForm from './components/OrderForm'
import Card from './components/Card'

const menu : Chai[]=[
  {id:1,name:"Masala" , price:25},
  {id:2,name:"Ginger" , price:55},
  {id:3,name:"Lemon" , price:15}
  
]
function App() {
  

  return (
    <>
      <div>
        <h1>Vite+React</h1>
        <ChaiCard
        name="headphone"
        price={5000}
        />
        <ChaiCard
        name="iphone"
        price={95000}
        />
        
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
      <div>
        <OrderForm
        onSubmit={(order)=>{
          console.log("Places",order.name,order.cups)
        }}
        />
      </div>
      <div>
        <Card
        tittle="chai"
        footer = {<button>Order now</button>}
        />
      </div>
    </>

  )
}

export default App
