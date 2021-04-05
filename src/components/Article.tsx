import React from 'react';
import classNames from 'classnames';
import Title from './Title';

interface ArticleProps {
    title?: string,
    left?: React.ReactNode,
    children: React.ReactNode
}

function Left(props: {children: React.ReactNode}) {
    return <div className="pr3-ns mb4 mb0-ns w-100 w-30-ns">
        {props.children}
    </div>;
}

export default function Article(props: ArticleProps) {
    const {title, children, left} = props;

    const head = title !== undefined
        ? <Title>{props.title}</Title>
        : null;
    const leftPanel = left !== undefined
        ? <Left>{left}</Left>
        : null;

    return <article
        className="db pv4 ph3 ph0-l no-underline black"
    >
        <div className="flex flex-column flex-row-ns w-100 tj">
            {leftPanel}
            <div className={classNames(
                'mw7-ns',
                'center',
                {
                    ['w-70-ns']: left !== undefined,
                    ['pl3-ns']: left !== undefined,
                }
            )}>
                {head}
                {children}
            </div>
        </div>
    </article>;
}