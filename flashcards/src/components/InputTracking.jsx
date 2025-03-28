import React, {useState} from "react";

//so passing props from App to this component
const InputTracking = ({question, answer, input, setInput, correct_input, setCheckedInput}) => {
    // const [input, setInput] = useState("");

    // const [correct_input, setCheckedInput] = useState();

    //fucntion for comparing the guess between what the user enters and what the answer is for the question
    const onSubmitGuess = (e) => {
        e.preventDefault();
        if (answer != input) {
            setCheckedInput(false);
        } else {
            setCheckedInput(true);
        }
    }

    return (
        <div>
            <form onSubmit={onSubmitGuess}>
                <div id={correct_input}>
                    <label htmlFor="input">Guess the answer here:</label>  
                    <input id="input" type="text" className={`${correct_input === true ? "correct" : correct_input === false ? "wrong" : ""}`}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
                    <button type="submit" className="button submit" value="Submit">Submit Guess</button>  
                </div>       
            </form>           
        </div>
    )
}

export default InputTracking;