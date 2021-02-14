import React from 'react';
import './Header.css';
import GithubIcon from '../icons/github';
import StackOverflow from '../icons/stackoverflow';
import LinkedIn from '../icons/linkedin';

function DownloadButton() {
    return <a
        className="f6 fw4 hover-white grow no-underline white-70 dib ml2 pv2 ph3 ba"
        href="/"
    >Download CV</a>;
}

interface SectionLinkProps {
    label: string,
}

function SectionLink(props: SectionLinkProps) {
    const {label} = props;

    return <a
        className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
        href="/"
    >{label}</a>;
}

interface SocialProps {
    title: string,
    link: string,
    children: React.ReactNode
}

function Social(props: SocialProps) {
    const {title, link, children} = props;

    return <a
        className="link white-80 grow dib w2 mr3"
        href={link}
        title={title}
    >
        {children}
    </a>;
}

export default function Header() {
    return (
        <header className="sans-serif page-header">
            <div className="cover bg-left bg-center-l vh-100">
                <div className="pb5 pb6-m pb7-l">
                    <nav className="dt w-100 mw8 center"> 
                        <div className="dtc v-mid pa3">
                            <DownloadButton/>
                        </div>
                        <div className="dtc v-mid tr pa3">
                            <SectionLink label="About"/>
                            <SectionLink label="Technologies"/>
                            <SectionLink label="Experience"/>
                            <SectionLink label="Education"/>
                            <SectionLink label="Skills"/>
                            <SectionLink label="Personal"/>
                        </div>
                    </nav> 
                    <div className="tc-l mt4 mt5-m mt6-l ph3">
                        <h1 className="f1 white-90 mb0 lh-title">Giacomo d'Antonio</h1>
                        <h2 className="fw1 f3 white-80 mt3 mb4">Software engineer and mathematician</h2>
                        <Social
                            link="https://github.com/giacomo-dantonio"
                            title="Github"
                        >
                            <GithubIcon />
                        </Social>
                        <Social
                            link="https://stackoverflow.com/users/785542/giacomo-dantonio"
                            title="Stack Overflow"
                        >
                            <StackOverflow />
                        </Social>
                        <Social
                            link="http://www.linkedin.com/in/giacomo-d-antonio-97273227"
                            title="Linkedin"
                        >
                            <LinkedIn />
                        </Social>
                    </div>
                </div>
            </div> 
        </header>
    );
}
