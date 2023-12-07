import { useEffect, useState } from "react";
import { stateMapOneExpression } from "./data/Grammar";
import { stateMapDoubleExpression } from "./data/Grammar";


export const GrammarValidatorRecepcionist = ({ value = "", sizeButton = false, isEmptyButton = false, clearButton = false }) => {
    const [items, setItems] = useState([]);
    const [sizeBool, setSizeBool] = useState(false)
    const [isEmptyBool, setIsEmptyBool] = useState(false)
    const [clearBool, setClearBool] = useState(false)
    const [protectedField, setProtectedField] = useState(false)

    // Método para agregar un elemento a la pila
    const push = (elemento) => {
        setItems([...items, elemento]);
    };

    // Método para eliminar el elemento superior de la pila
    const pop = () => {
        if (isEmpty()) {
            return "La pila está vacía";
        }
        const newItems = [...items];
        newItems.pop();
        setItems(newItems);
    };

    // Método para obtener el elemento superior de la pila sin eliminarlo
    const peek = () => {
        if (isEmpty()) {
            return "La pila está vacía";
        }
        return items[items.length - 1];
    };

    // Método para verificar si la pila está vacía
    const isEmpty = () => {
        return items.length === 0;
    };

    // Método para obtener el tamaño de la pila
    const size = () => {
        return items.length
    };

    // Método para vaciar la pila
    const clear = () => {
        setItems([])
    };

    useEffect(()=>{protectedField ? setClearBool(true) : setProtectedField(true)},[clearButton])
    useEffect(() => {
        clearBool ? (setItems([]) , console.log("Pila borrada a la fuerza"), setClearBool(false)) : null
    }, [clearBool])

    useEffect(()=>{protectedField ? (setSizeBool(true)) : setProtectedField(true)},[sizeButton])
    useEffect(() => {
        // console.log("Entre aqui en el tamaño total de la pila")
        sizeBool ? (console.log("Tamaño total de la pila:", items.length), setSizeBool(false)) : null
    }, [sizeBool])

    useEffect(()=>{protectedField ? setIsEmptyBool(true) : setProtectedField(true)},[isEmptyButton])
    useEffect(() => {
        isEmptyBool ? (console.log("¿Está vacia la pila?:", items.length === 0), setIsEmptyBool(false)) : null
    }, [isEmptyBool])

    return (
        <>
            {value && value.length !== 0  && isEmptyBool && sizeBool && clearBool ? (
                console.log("I receive this value since GrammarValidatorRecepcionist: ", value)
            ) : null}
        </>
    );

}

