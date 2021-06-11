import {navigate} from '@reach/router'
import DeleteButton from './DeleteButton'


const PiratesList=(props)=>{
    const { pirates, setPirates } = props;
    
    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId))
    }

    
        const style={
            width: "200px",
            height:"200px"
        }
        
        const styleDiv={
            border:" black solid thin",
            width: 640,
            paddingTop: 30,
            paddingBottom: 30,
            backgroundColor: "darkgrey"
        }
    return(
        <div>
        {pirates.length > 0 && pirates.map((pirate,idx) => {
            return(
                <div style={styleDiv}>
                <div style={{display:"flex",justifyContent:"space-evenly",width: 500}}>
                    <img style={style} src={pirate.imgUrl} alt="pirate" />
                    <h3 style={{marginTop: 100,marginLeft: 90}}>{pirate.name}</h3>
                </div>
                <div style={{marginLeft: 330}}>
                    <button class="btn btn-primary" onClick={(e) => navigate(`/api/pirate/${pirate._id}`)}>View Pirate</button>{" "}{" "}
                    <DeleteButton pirateId={pirate._id} successCallback={()=>removeFromDom(pirate._id)}/>
                </div>
                {" "}
                {" "}
            </div>
            )
            })}
        </div>
    )
}

export default PiratesList;
