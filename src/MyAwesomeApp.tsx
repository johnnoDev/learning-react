import { CSSProperties } from "react";

// Impresión de variables
const firstName: string = 'Johnny'
const lastName: string = 'López'
const fruits: string[] = ['manzana', 'pera', 'uva', 'melon']
const isActive = false;

// Object literal
const Person = {
    'firstname': 'Carlos',
    'lastname': 'Lucio',
    'age': 22,
}

const styles: CSSProperties = {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 30,
    fontSize: 40,
    font: 'small-caption'
}

export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{ firstName }</h1>
            <h2>{ lastName }</h2>
            <p style={styles}>{ fruits.join(', ').toUpperCase()}</p>
            <h3>{ isActive ? 'Activo' : 'Inactivo' }</h3>
            <h4>{ JSON.stringify(Person)}</h4>
        </>
    )
}