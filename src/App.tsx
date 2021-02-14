import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Article from './components/Article';
import Technologies from './components/technologies';

function App() {
    return (
        <div className="App">
            <Header/>
            <Section>
                <Article title="About me">
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
                </Article>

                <Article title="Technologies">
                    <Technologies/>
                </Article>
            </Section>
        </div>
    );
}

export default App;
