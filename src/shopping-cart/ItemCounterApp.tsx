import { useState } from "react";



// import './ItemCounterApp.css'
import styles from './ItemCounterApp.module.css'


interface Props {
    name: string;
    quantity?: number;
}


export const ItemCounterApp = ({name, quantity = 1}: Props) => {
    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubtract = () => {
        if (count === 1) return;
        setCount(count - 1)
    }
    return (
        // <section className="item-row">
        <section className={styles['item-row']}>
            {/* <span className="item-text" style={{ */}
            <span className={styles['item-text']} style={{
                color: count === 1 ? "red" : "black"
            }}>
                { name }
            </span>
            
            <button onClick={handleAdd}>+1</button>

            <span>{ count }</span>

            <button onClick={handleSubtract}>-1</button>
        </section>
    )
}