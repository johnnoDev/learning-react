import { ItemCounterApp } from "./shopping-cart/itemCounterApp";

interface ItemsInCar {
    productName: string,
    quantity: number,
}

// Lista de objetos
const itemsInCar: ItemsInCar[] = [
    {productName: 'Nintendo Switch', quantity: 20},
    {productName: 'Pro Controller', quantity: 50},
    {productName: 'Super Smash', quantity: 12},
]

export function FirsStepsApp() {
    return (
        <>
            <h1>Carrito de Compra</h1>
            {
                itemsInCar.map( ({productName, quantity}) => (
                    <ItemCounterApp name={productName} quantity={quantity}/>
                ))
            }
            {/* <ItemCounterApp name='Nintendo Switch' quantity={50}/>
            <ItemCounterApp name='Pro controller' quantity={20}/>
            <ItemCounterApp name='Super Smash' quantity={30}/> */}
        </>
    );
}