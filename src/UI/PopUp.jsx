import Card from "./Card"

const PopUp = (props) =>{
    return(
<div className="pop-up">
<div className="overlay">
<div className="form-wrapper">
<Card>
{props.children}
</Card>
</div>
</div>
</div>
    )
}

export default PopUp