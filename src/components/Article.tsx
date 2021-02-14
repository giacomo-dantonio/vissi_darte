import React from 'react';
import classNames from 'classnames';

interface ArticleProps {
    title?: string,
    left?: React.ReactNode,
    children: React.ReactNode
}

function Left(props: {children: React.ReactNode}) {
    return <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
        {props.children}
    </div>;
}

export default function Article(props: ArticleProps) {
    const {title, children, left} = props;

    const head = title !== undefined
        ? <h1 className="dark-blue f3 mt0 lh-title">{props.title}</h1>
        : null;
    const leftPanel = left !== undefined
        ? <Left>{left}</Left>
        : null;

    return <article
        className="db pv4 ph3 ph0-l no-underline black sans-serif"
    >
        <div className="flex flex-column flex-row-ns">
            {leftPanel}
            <div className={classNames(
                'mw7-ns',
                'center',
                {
                    ['w-60-ns']: left !==undefined,
                    ['pl3-ns']: left !==undefined,
                }
            )}>
                {head}
                {children}
            </div>
        </div>
    </article>;
}