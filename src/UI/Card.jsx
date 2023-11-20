/* eslint-disable react/prop-types */


const Card = (props) =>{
    return(
        <div className='card'>
                {props.children}
        </div>
    )
}

export default Card