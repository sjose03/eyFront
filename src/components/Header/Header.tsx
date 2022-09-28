import React from 'react';
import LogoEyBranco from '../../assets/ey-logo-branco-header.png'

import { Container} from './Header.styled';
import {
  IoMdExit

} from 'react-icons/io';

const Header: React.FC = () => {
  return <Container>
    <img src={LogoEyBranco} alt="logo branco da ey" />

    <button type="button">
      <span>Sair</span>
        <IoMdExit
          style={{
            transform: 'rotateY(180deg) ',
            animation: 'transform 0.3s ease-in-out',
            marginLeft: 10,
          }}
          color={'#FFF'}
          size={20}
        />
      </button>
  </Container>;
}

export default Header;