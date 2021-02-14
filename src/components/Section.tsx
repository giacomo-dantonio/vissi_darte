import React from 'react';

interface SectionProps {
    title?: string,
    children: React.ReactNode
}

export default function Section(props: SectionProps) {
    const {title, children} = props;
    const head = title !== undefined
        ? <h2 className="dark-blue f1 fw5 ph3 ph0-l">{title}</h2>
        : null;

    return <section className="mw8 center">
        {head}
        {children}
    </section>;
}