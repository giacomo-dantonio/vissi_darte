import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Article from './components/Article';
import Technologies from './components/technologies';
import Experience from './components/Experience';

function App() {
    return (
        <div className="App">
            <Header/>
            <Section title="About me">
                <div className="tj">
                    <p>Hi! I'm Giacomo. I am a software engineer in Bremen, Germany.</p>
                    <p>
                        I have a bachelor degree in computer science
                        and a PhD in mathematics.
                        I enjoy both topics and like to work on challenging
                        problems which also requires mathematical thinking.
                        I have the mentality of a mathematician, which means
                        I like to reason about the code I write and
                        prove logically that it works correctly.
                    </p>
                    <p>
                        I like 3D visualization, CAD, geometric algorithms,
                        optimization, and scientific computing.
                        I enjoy writing JavaScript, Rust and Webassembly,
                        but I also work with many other technologies.
                    </p>
                </div>
            </Section>
            <Section title="Technologies">
                <Technologies/>
            </Section>
            <Section title="Experience">
                <Experience
                    company="Elise GmbH"
                    jobtitle="Software engineer"
                    from="Jan 2020"
                    to="now"
                    description={() => <div/>}
                >
                    <p>At Elise I am one of the <b>developers</b> of a CAD/CAE
                    application for generative engineering.
                    I am part of a Scrum team.
                    I work on integration of simulation and optimization
                    solvers and I write geometry algorithms.
                    </p>

                    <p>I am also the <b>product owner</b> of our services,
                    which include a customer portal and a license
                    activation server.
                    </p>

                    <p>
                    I write C#, C++, and some JavaScript and TypeScript.
                    </p>
                </Experience>
                <Experience
                    company="Contact Software GmbH"
                    jobtitle="Senior software engineer"
                    from="Oct 2012"
                    to="Dec 2019"
                    description={() => <div/>}
                >
                    <p>At Contact I was a developer of <b>PLM web applications</b>.
                        I used Python for the backend and JavaScript with
                        the React/Redux framework for the frontend.
                    </p>

                    <p>I was the product owner of
                        the products <b>3D Visualization</b>, 
                        <b>Variant management</b>, 
                        and <b>BOM/Virtual product</b>.
                    </p>

                    <p>I was also manager of several agile development
                        processes. We were using an hybrid process
                        between waterfall and agile.
                    </p>
                </Experience>
                <Experience
                    company="Contact Software GmbH"
                    jobtitle="Software engineer"
                    from="Juli 2011"
                    to="Sep 2012"
                    description={() => <div/>}
                >
                    During my PhD at the university of Bremen I had
                    a part time developer position at Contact.
                    In this time I worked on the packages <b>KPI/metrics</b>
                    and <b>Variant management</b> of the PLM software.
                </Experience>
                <Experience
                    company="Universität Bremen"
                    jobtitle="Wissentschaftlicher Mitarbeiter"
                    from="Feb 2010"
                    to="Sep 2012"
                    description={() => <div/>}
                >
                    During my PhD I had a part time position
                    as a research and teaching assistant
                    (Wissentschaftlicher Mitarbeiter)
                    at the mathematics department.

                    I did some research related to my PhD thesis and teached
                    exercise classes in algebra and topology.
                </Experience>
            </Section>
            <Section title="Education">
                <Experience
                    company="Universität Bremen"
                    jobtitle="PhD"
                    from="2010"
                    to="2012"
                    description={() => <div/>}
                >
                    <p><i>Summa cum Laude</i>.</p>
                    <p>I wrote my <a
                            href="https://media.suub.uni-bremen.de/handle/elib/404?locale=de"
                        >PhD thesis</a> on the combinatorics
                        and algebraic topology of toric arrangements
                        at the mathematics department
                        of the university of Bremen.
                    </p>
                </Experience>
                <Experience
                    company="Università di Pisa"
                    jobtitle="Master degree in Mathematics"
                    from="2006"
                    to="2009"
                    description={() => <div/>}
                >
                    <p><i>110 cum Laude/110</i>.</p>
                    <p>Master degree in mathematics at the university of Pisa.
                        I had a focus on abstract algebra and algebraic topology.
                        My master thesis was about representation theory
                        and hyperplane arrangements.
                    </p>
                </Experience>
                <Experience
                    company="Università di Pisa"
                    jobtitle="Bachelor degree in Computer Science"
                    from="2002"
                    to="2006"
                    description={() => <div/>}
                >
                    <p><i>110 cum Laude/110</i>.</p>
                    <p>Bachelor degree in computer science at the university of Pisa.
                        I had a focus on optimization and operational research.
                        My bachelor thesis was about optimization methods
                        for non differentiable convex problems.
                    </p>
                </Experience>
            </Section>
        </div>
    );
}

export default App;
