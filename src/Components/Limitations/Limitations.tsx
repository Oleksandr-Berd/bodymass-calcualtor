import React from 'react';

import * as SC from "./LimitationsStyled"
import LimitationsTitle from './LimitationsTitle/LimitationsTitle';
import { ReactComponent as Lim1Svg } from 'assets/images/limitation1.svg';
import { ReactComponent as Lim2Svg } from 'assets/images/limitation2.svg';
import { ReactComponent as Lim3Svg } from 'assets/images/limitation3.svg';
import { ReactComponent as Lim4Svg } from 'assets/images/limitation4.svg';
import { ReactComponent as Lim5Svg } from 'assets/images/limitation5.svg';
import limitations from "dataBase/limitations.json"
import LimitationItem from './LimitationItem/LimitationItem';


interface Limitation {
    id: number;
    icon: string;
    title: string;
    text: string;
}

const limitIcons: Record<string, React.FC> = {
    limitation1: Lim1Svg,
    limitation2: Lim2Svg,
    limitation3: Lim3Svg,
    limitation4: Lim4Svg,
    limitation5: Lim5Svg,

};

const Limitations: React.FC = () => {
    return (<SC.Container>
        <LimitationsTitle />
        <SC.List>
            {limitations.map(({ id, title, icon, text }: Limitation) => {
                const IconComponent = limitIcons[icon];
                return <LimitationItem key={id} title={title} icon={< IconComponent />} text = { text } />}
            ) }
        </SC.List>
    </SC.Container> );
}
 
export default Limitations;