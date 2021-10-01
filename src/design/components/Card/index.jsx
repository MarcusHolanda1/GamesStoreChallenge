import {DivCard} from './styles'


const Card = (props) =>{
    return (
        <DivCard>
            {props.children}
        </DivCard>
    )
}
export default Card