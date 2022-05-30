import { FunctionComponent } from 'react';
import Authentifcation from '../atomes/Authenfication';
import Fluency from '../atomes/Fluency';
import Navigation from '../atomes/Navigation';

import "./style.css";

const Header : FunctionComponent = () => {
    return (
        <header>
            <Fluency/>
            <Navigation/>
            <Authentifcation/>
        </header>
    );
};

export default Header;