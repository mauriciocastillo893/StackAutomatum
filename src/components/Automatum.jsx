import { useState } from "react";
import { GrammarValidatorRecepcionist } from "./GrammarValidator";
import '../style-sheets/Automatum.css'

export const Automatum = () => {
    const [textAreaState, setTextAreaState] = useState("")
    const [firstTerminal, setFirstTerminal] = useState("")
    const [stackTerminal, setStackTerminal] = useState("")

    const [isEmptyButton, setIsEmptyButton] = useState(false)
    const [clearButton, setClearButton] = useState(false)
    const [sizeButton, setSizeButton] = useState(false);

    const handleTextAreaCode = (e) => {
        let actualValue = e && e.target.value || ""
        console.log("I receive this data since event.target.value in text-area", actualValue)
        setTextAreaState(actualValue)
        // GrammarValidatorRecepcionist({value: actualValue})
        { <GrammarValidatorRecepcionist value={actualValue} /> }
    }

    const handleSizeButtonClick = () => {
        setSizeButton((prevState)=>!prevState);
    }

    const handleClearButtonClick = () => {
        setClearButton((prevState)=>!prevState);
    }

    const handleIsEmptyButtonClick = () => {
        setIsEmptyButton((prevState)=>!prevState);
    }

    return (
        <>
            <div className="header">DORIAN INDUSTRIES</div>
            <div className="div-text-area-code">
                <textarea
                    className="text-area-code"
                    value={textAreaState}
                    onChange={(e) => { handleTextAreaCode(e) }}
                >

                </textarea>
            </div>
            <div className="first-terminal">
                {firstTerminal}
            </div>
            <div className="stack-terminal">
                {stackTerminal}
            </div>
            <div className={"size-stack-button"} onClick={handleSizeButtonClick}>Verificar tamaño de la pila</div>
            <div className={"size-stack-button"} onClick={handleClearButtonClick}>Borrar pila a la fuerza</div>
            <div className={"size-stack-button"} onClick={handleIsEmptyButtonClick}>Verificar si la pila está vacia</div>
            <GrammarValidatorRecepcionist sizeButton={sizeButton} isEmptyButton={isEmptyButton} clearButton={clearButton}/>


        </>
    );
}
