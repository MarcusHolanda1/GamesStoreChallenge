import { ButtonStyle } from './styles'
import { Text } from '../Text'

const Button = (props) =>{
    return (
        <ButtonStyle><Text>{props.children}</Text></ButtonStyle>
    )
}
export default Button