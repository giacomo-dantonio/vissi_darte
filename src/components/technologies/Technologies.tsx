import './Technologies.css';
import React, {useState} from 'react';
import classNames from 'classnames';

import {TechnologyProps, technologies} from './data';

function TechnologyButton(props: TechnologyProps) {
    const {icon, label, title, selected} = props;

    const hasIcon = icon != undefined;
    const iconImg = hasIcon
        ? <img src={icon} className="svg-icon"/>
        : null;

    return <a
        className={
            classNames(
                'inline-flex',
                'items-center',
                'grow',
                'no-underline',
                'black-70',
                'ml2',
                'mb2',
                'pv2',
                'ph3',
                'ba',
                'v-mid',
                {['bg-light-blue']: selected},
                // {['white-70']: selected}
            )
        }
        href="#0"
        title={title}
    >
        {iconImg}
        <span
            className={
                classNames(
                    'technology-label',
                    'f6',
                    {ml2: hasIcon},
                )
            }
        >{label}</span>
    </a>;
}



export default function Technologies() {
    const [selected, setSelected] = useState('');

    const selectButton = (label: string) => {
        if (selected === label) {
            setSelected('');
        }
        else {
            setSelected(label);
        }
    };

    const selectedTechnology = technologies
        .find(technology => technology.label == selected);

    const description = selectedTechnology !== undefined
        ? <div className="tj ba ph3">
            {selectedTechnology.description()}
        </div>
        : null;

    return <React.Fragment>
        <div
            className="flex flex-wrap justify-between"
            style={{
                marginLeft: "-.5rem"
            }}
        >
            {technologies.map(props =>
                <span onClick={() => selectButton(props.label)}>
                    <TechnologyButton
                        selected={selected == props.label}
                        {...props}
                    />
                </span>
            )}
        </div>
        {description}
    </React.Fragment>;
}