import { useState } from "react";
import { GrammarValidatorRecepcionist } from "./GrammarValidator";
import '../style-sheets/Automatum.css'

export const Automatum = () => {
    const [textAreaState, setTextAreaState] = useState("")
    const [firstTerminal, setFirstTerminal] = useState("")
    const [stackTerminal, setStackTerminal] = useState("")

    // const [isEmptyButton, setIsEmptyButton] = useState(false)
    // const [clearButton, setClearButton] = useState(false)
    const [sizeButton, setSizeButton] = useState(false);

    const handleTextAreaCode = (e) => {
        let actualValue = e && e.target.value || ""
        console.log("I receive this data since event.target.value in text-area", actualValue)
        setTextAreaState(actualValue)
        // GrammarValidatorRecepcionist({value: actualValue})
        { <GrammarValidatorRecepcionist value={actualValue} /> }
    }
    const handleSizeButtonClick = () => {
        setSizeButton((prevEstado)=>!prevEstado);
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
            <div className={"size-stack-button"} onClick={handleSizeButtonClick}>
                Ver tamaño de la pila
            </div>
            {/* Renderiza GrammarValidatorRecepcionist con sizeButton */}
            <GrammarValidatorRecepcionist value={textAreaState} sizeButton={sizeButton} />


        </>
    );
}
