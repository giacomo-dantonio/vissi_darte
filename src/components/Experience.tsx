import React, { Children, ReactNode } from 'react';
import classNames from 'classnames';
import Article from './Article';
import Title from './Title';

interface ExperienceProps {
    jobtitle: string,
    company: string,
    from: string,
    to: string,
    children: ReactNode,
    description: () => ReactNode
}

export default function Experience(props: ExperienceProps) {
    const left = <React.Fragment>
        <Title>{props.company}</Title>
        <div className="tl">{props.from} to {props.to}</div>
    </React.Fragment>;

    return <Article
        left={left}
        title={props.jobtitle}
    >
        {props.children}
    </Article>;
}