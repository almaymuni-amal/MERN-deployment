
const Form =({imgUrlErrMsg,NumOfChestsErrMsg,phraseErrMsg,nameErrMsg,changeFunction,onSubmission,formInputs})=>{
    return(
        <div>
            <form onSubmit={onSubmission}>
            <p>
                {
                nameErrMsg ?
                    <p style={{color:'red'}}>{ nameErrMsg }</p> :
                    ''
                }
                Name:
                <input
                type="text"
                name="name"
                value={formInputs.name}
                onChange={changeFunction}
                />
            </p>
            <p>
                {
                imgUrlErrMsg ?
                    <p style={{color:'red'}}>{ imgUrlErrMsg }</p> :
                    ''
                }
                imgUrl:
                <input
                type="text"
                name="imgUrl"
                value={formInputs.imgUrl}
                onChange={changeFunction}
                />
            </p>
            <p>
                {
                NumOfChestsErrMsg ?
                    <p style={{color:'red'}}>{ NumOfChestsErrMsg }</p> :
                    ''
                }
                # of chests box:{" "}
                <input
                type="number"
                name="NumOfChests"
                value={formInputs.NumOfChests}
                onChange={changeFunction}
                />
            </p>
            <p>
            {
                phraseErrMsg ?
                    <p style={{color:'red'}}>{ phraseErrMsg }</p> :
                    ''
                }
                Pirate catch phrase:
                <input
                type="text"
                name="phrase"
                value={formInputs.phrase}
                onChange={changeFunction}
                />
            </p>
            <p> position:
                <select value={formInputs.position} name="position" onChange={changeFunction}>
                <option defaultValue> -- select an option -- </option>
                <option  value="Captin">Captin</option>
                <option value="First Mate">First Mate</option>
                <option value="Quarter Master">Quarter Master</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Powder Monkey">Starships</option>
                </select>
            </p>
            <p>
                <input
                type="checkbox"
                name="isPegLeg"
                checked={formInputs.isPegLeg}
                value={formInputs.isPegLeg}
                onChange={changeFunction}
                />
                Peg Leg
            </p>
            <p>
                <input
                type="checkbox"
                name="isEyePatch"
                checked={formInputs.isEyePatch}
                value={formInputs.isEyePatch}
                onChange={changeFunction}
                />
                Eye Patch
            </p>
            <p>
                <input
                type="checkbox"
                name="isHookHand"
                checked={formInputs.isHookHand}
                value={formInputs.isHookHand}
                onChange={changeFunction}
                />
                Hook Hand
            </p>
            <button>Add Pirate</button>
            </form>
        </div>
    )
}

export default Form