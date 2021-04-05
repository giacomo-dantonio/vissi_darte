import React from 'react';

interface SectionProps {
    title?: string,
    children: React.ReactNode
}

export default function Section(props: SectionProps) {
    const {title, children} = props;
    const head = title !== undefined
        ? <h2 className="dark-blue f2">{title}</h2>
        : null;

    return <section className="mw7-ns center sans-serif">
        {head}
        {children}
    </section>;
}