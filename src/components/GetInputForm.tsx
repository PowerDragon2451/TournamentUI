import React, { useState } from 'react';
import { addNewPlayer } from '../api/players';


interface LabelProps {

    labelName: string;

}
interface InputProps {

    inputType: string;
    inputId: string;

    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;//onChange is a function, not a string so we have to use a event variables, since usestate will store the preivous state and current state its stored as an event variable

}
interface ButtonProps {

    buttonLabel: string;


    onclick: () => void;
}


interface formProps {

    labelProps: LabelProps;
    inputProps: InputProps;
    buttonprops: ButtonProps;

}

export function Label({ labelName }: LabelProps) {
    return (
        <label >{labelName}</label>
    )
}
export function Input({ inputType, inputId, onChange }: InputProps) {
    return (
        <input type={inputType} id={inputId} onChange={onChange}></input>
    )
}

export function Button({ buttonLabel, onclick }: ButtonProps) {
    return (
        <button onClick={onclick}>{buttonLabel}</button>
    )
}



export function GetInputForm({ labelProps, inputProps, buttonprops }: formProps) {

    const [response, setResponse] = useState("");
    const [playerName, setPlayerName] = useState("");

    //event prevent defautl on submit so we dont lose out response after a second

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <Label labelName={labelProps.labelName} />
            <Input inputType={inputProps.inputType} inputId={inputProps.inputId} onChange={(event) => setPlayerName(event.target.value)} />
            <Button buttonLabel={buttonprops.buttonLabel} onclick={async () => { const result = await addNewPlayer(playerName); setResponse(result); }}></Button>
            <p>{response}</p>
        </form>

    )
};