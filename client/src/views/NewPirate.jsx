import {Link,navigate} from '@reach/router'
import { useState } from 'react';
import axios from 'axios'
import Form from '../components/Form';

const NewPirate=(props)=>{

    const [formInputs, setFormInputs] = useState(
        {
        name:'',
        imgUrl:'',
        NumOfChests:0,
        position:'',
        phrase:'',
        isPegLeg:true,
        isEyePatch:true,
        isHookHand:true
    });
    const [errors, setErrors] = useState([]);
     // create author
    const[nameErrMsg,setNameErrMsg]=useState("")
    const[imgUrlErrMsg,setimgUrlErrMsg]=useState("")
    const[NumOfChestsErrMsg,setNumOfChestsErrMsg]=useState("")
    const[phraseErrMsg,setPhraseErrMsg]=useState("")

        const onSubmission = (e) => {
            e.preventDefault()
        axios.post("http://localhost:8000/api/pirates", formInputs)
            .then((res) => {
                console.log(res.data)
                navigate("/api/pirate/"+res.data._id)
            })
            
            .catch((err) => {
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) {
              // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message);
            }
            // Set Errors
            setErrors(errorArr);
            });
        };

        const changeFunction = (e) => {
            if (e.target.name === "isPegLeg") {
                console.log("e.target.checked", e.target.checked);
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.checked,
                })
            }
            else if (e.target.name === "isEyePatch") {
                console.log("e.target.checked", e.target.checked);
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.checked,
                });
                }
            else if (e.target.name === "isHookHand") {
                console.log("e.target.checked", e.target.checked);
                setFormInputs({
                    ...formInputs,
                    [e.target.name]: e.target.checked,
                });
                }
            else{
                if(formInputs.name.length<3){
                    setNameErrMsg(" Name must be at least 3 characters.")
                }
                if(formInputs.imgUrl.length<3){
                    setimgUrlErrMsg(" imgURL must be at least 3 characters.")
                }if(formInputs.NumOfChests>0){
                    setNumOfChestsErrMsg(" Number of chests must greater than 0.")
                }if(formInputs.phrase.length<3){
                    setPhraseErrMsg(" Phrase must be at least 3 characters.")
                }

            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.value,
            });
            }
            }
    return(
        <div>
            <Link to="/"><button>Crew Board</button></Link>
            <h1>Add pirate</h1>
            {errors.map((err, index) => (
            <p key={index}>{err}</p>
            ))}
            <Form 
            phraseErrMsg={phraseErrMsg}
            NumOfChestsErrMsg={NumOfChestsErrMsg}
            imgUrlErrMsg={imgUrlErrMsg} 
            nameErrMsg={nameErrMsg} 
            changeFunction={changeFunction} 
            onSubmission={onSubmission} 
            formInputs={formInputs}/>
        </div>
    )
}

export default NewPirate;