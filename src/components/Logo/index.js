import logo from '../../images/107 (Personalizado).jpg';
import styled from 'styled-components';

const LogoContainer = styled.div`

    display: flex;
    font-size: 30px;

`;

const LogoImage = styled.img`

    margin-right: 10px;

`;

function Logo() {

    return (

            <LogoContainer>
                <LogoImage src={logo} alt='logo'></LogoImage>
                <p><strong>Molter</strong> Books</p>
            </LogoContainer>

    )

}


export default Logo;