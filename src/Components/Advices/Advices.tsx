import React from 'react';

import advices from 'dataBase/advices.json';
import AdviceItem from './Advices.Item';
import { ReactComponent as Advice1Svg } from 'assets/images/advice1.svg';
import { ReactComponent as Advice2Svg } from 'assets/images/advice2.svg';
import { ReactComponent as Advice3Svg } from 'assets/images/advice3.svg';

import * as SC from "./AdvicesStyled"

interface Advice {
    id: number;
    icon: string;
    title: string;
    text: string;
}

const adviceIcons: Record<string, React.FC> = {
    advice1: Advice1Svg,
    advice2: Advice2Svg,
    advice3: Advice3Svg,
};

const Advices: React.FC = () => {
    return (
        <SC.AdvicesContainer>
            <SC.List>
                {advices.map(({ id, icon, title, text }: Advice) => {
                    const IconComponent = adviceIcons[icon];
                    return <AdviceItem key={id} icon={<IconComponent/>} title={title} text={text} />;
                })}
            </SC.List>
        </SC.AdvicesContainer>
    );
};

export default Advices;
