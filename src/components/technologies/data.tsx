import React from 'react';

import cpp_icon from '../../icons/cplusplus.svg';
import csharp_icon from '../../icons/csharp.svg';
import dotnet_icon from '../../icons/dot-net.svg';
import haskell_icon from '../../icons/haskell.svg';
import js_icon from '../../icons/javascript.svg';
import jenkins_icon from '../../icons/jenkins.svg';
import python_icon from '../../icons/python.svg';
import react_icon from '../../icons/react.svg';
import redux_icon from '../../icons/redux.svg';
import rust_icon from '../../icons/rust.svg';
import typescript_icon from '../../icons/typescript.svg';
import wasm_icon from '../../icons/webassembly.svg';

export interface TechnologyProps {
    icon?: string,
    label: string,
    title?: string,
    description: () => React.ReactNode,
    selected?: Boolean
}

// Some descriptions are used for more than one tags.
// For those I use the module functions here.

function csharp() {
    return <React.Fragment>
        <p>I started using <b>.Net</b> and <i>C#</i> at Elise.</p>
        <p>Before that I used to think that all programming languages
        are more or less the same. I used to call myself <i>language-agnostic</i>.
        Getting in touch with the <i>.Net</i> world I realized
        that, while most programming languages are almost equivalent,
        the <b>culture</b> and the <b>communities</b> around one technology
        are not.
        </p>
        <p>In the <b>.Net</b> community a lot of emphasis is placed
        on <b>OOP principles</b> and <b>patterns</b>.
        I am talking about things like <b>SOLID</b>, <b>MVVM</b>, and so on.
        The functional programming principles I was used to in the
        JavaScript community are on the other hand not much known
        among .Net developers.
        I learned all that stuff, but I must say I'm still not
        a big fan of idiomatic OOP. I prefer functional programming.
        </p>
        <p>On the other hand <b>.Net</b> is the perfect framework for
        business applications. I was able to become proficient in a couple
        of weeks. Unlike C++, it is very difficult to write bad
        code which breaks everything in C#. The framework promotes code
        quality by design. Also <b>.Net</b> has a solution for all
        common use cases you will find in Desktop and Cloud development.
        C# may not be the most beautiful language out there, but it is
        perfect to get things done quickly and safe.
        </p>
        <p>Also I find it great that Microsoft open sourced <b>.Net core</b> and
        that Linux is now a first class citizen for <b>.Net</b>.
        Now Windows developers are able to write Linux server applications,
        how cool is that!
        </p>
    </React.Fragment>;
}

function fem() {
    return <React.Fragment>
        <p>The <b>Finite Elements Method</b> is the heart of a
        generative engineering system like <i>Elise</i>.
        You use it for topology optimization,
        for <b>Design of Experiments</b> (DoE) and for validating
        your parts.
        At <i>Elise</i> I implemented pre and post-processing for
        FEM simulations.
        </p>

        <p>My mathematics studies focused on algebra and geometry.
        So, I didn't learn FEM at university. However I did read
        a university textbook on the topic after I started at <i>Elise</i>.
        I actually did not implement an FEM solver, but I wanted to know
        how an FEM solver works.
        </p>
    </React.Fragment>;
}

function cicd() {
    return <React.Fragment>
        <p>During my time at <i>Contact Software</i> I learned
        the importance of test coverage, code analysis and a good CI pipeline.
        </p>

        <p>When I came to <i>Elise</i> they already had a pretty decent
        pipeline.
        I worked on the Jenkins Pipeline to add code coverage and
        C++ testing and code analyis.</p>
    </React.Fragment>;
}

function databases() {
    return <React.Fragment>
        <p>At <i>Contact Software</i> we were using <b>SQL</b> relational
        databases as data layer.
        </p>
        <p>
        I wrote quite some complex recursive queries to retrieve data.
        I also optimized them for performance.
        I used <b>Oracle</b> and <b>Microsoft SQL Server</b> database
        management systems.</p>
    </React.Fragment>;
}

function javascript() {
    return <React.Fragment>
        <p>I learned <b>HTML</b> in the late 90's as a teenager
        (using Netscape and Opera),
        but I started writing serious <b>JavaScript</b> code
        at <i>Contact Software</i>.
        We were pioneers. We started writing web applications with ES5.
        React did not exist yet.
        </p>
        <p>Across the years we experimented with many frameworks,
        did some work ẃith <i>Ember.js</i>, until we decided to use <b>React</b>.
        After that I wrote a lot of <b>React</b> code.
        We were using <b>Redux</b> and <b>Redux Saga</b> for state management
        and <b>Sass</b> for styling.
        </p>
        <p>Today is <b>JavaScript</b> one of my favorite languages.
        When I need a UI for my personal projects, I always use
        JavaScript and React. For the business logic I like to
        use <b>WebAssembly</b> whenever possible.
        </p>
        <p>The only issue I had with JavaScript is the lack of
        static analysis, which often lead to bugs in my code.
        Recently I started using <b>TypeScript</b> for that, and that
        fixed the problem completely.
        </p>
        <p>So now <b>TypeScript</b> + <b>React/Redux</b> +
        <b>Rust/Webassembly</b> is my favorite stack.
        </p>
    </React.Fragment>;
}

export const technologies : Array<TechnologyProps> = [
    {
        label: '3D',
        description: () => <React.Fragment>
            <p>During my time at <i>Contact Software</i> I was
            responsible for the <b>3D Visualization</b> module,
            which I developed from the beginning.
            After a while more developers joined the team.</p>

            <p>The purpose of the <b>3D Visualization</b> module was
            to visualize CAD data which could be reassembled according
            to the BOM and variants defined in the system.
            Several different use cases needed to be supported. Such
            as measuraments, annotations, collaboration and navigation
            to other modules.
            </p>

            <p>At <i>Elise</i> I was less involved in the viewer module,
            but more in the handling of 3D geometries
            in form of triangle meshes and curves and surface geometries.
            </p>
        </React.Fragment>
    },
    {
        label: 'Agile',
        description: () => <React.Fragment>
            <p>At <i>Contact Software</i> I partecipated in the introduction
            of an hybrid-agile development process.
            As a product owner I also covered the role of the project
            manager. I was responsible for planning the iterations,
            assigning tasks to the team members and moderating
            the reviews.</p>

            <p>At <i>Elise</i> I was part of a Scrum team.
            We implement the agile process pretty much like the manuals say.</p>
        </React.Fragment>
    },
    {
        icon: cpp_icon,
        label: 'C++',
        description: () => <React.Fragment>
            <p>The first real thing I did with <b>C++</b> was my bachelor thesis.
            I implemented several optimization algorithms and
            benchmarked them in different problems.</p>

            <p>At <i>Contact Software</i> I used C++ to manipulate
            CAD models using a commercial library.
            It was a non-trivial piece of code and quite interesting.</p>

            <p>At <i>Elise</i> I used C++ for computationally critical
            algorithms.
            Performance was very important in this code, so we tried to
            optimize things as much as possible.
            We also used modern C++ (C++ 17, template metaprogramming, etc.).
            </p>
        </React.Fragment>
    },
    {
        icon: csharp_icon,
        label: 'C#',
        description: csharp,
    },
    {
        label: 'CAD',
        title: 'Computer-aided design',
        description: () => <React.Fragment>
            <p>At <i>Contact Software</i> CAD data was the source
            for the PLM process. I started working with CAD data when I did
            the first <b>3D visualization</b> project. The requirement was to
            load the CAD data, rearrange and enrich them, and visualize
            them in a web browser.
            So, I did quite a lot things with CAD data, but I never did actually
            use a CAD system to construct something.
            </p>
            <p>At <i>Elise</i> we build CAD functionality for generative
            engineering. So now I know the details of how CAD systems handle
            geometry.
            </p>
        </React.Fragment>
    },
    {
        label: 'CAE',
        title: 'Computer-aided engineering',
        description: fem
    },
    {
        label: 'CI/CD',
        title: 'Continuos integration/Continuous deployment',
        description: cicd
    },
    {
        label: 'Databases',
        description: databases
    },
    {
        label: 'FEM',
        title: 'Finite elements method',
        description: fem
    },
    {
        icon: haskell_icon,
        label: 'Haskell',
        description: () => <React.Fragment>
            <p>In my opinion <b>Haskell</b> is the most beautiful
            programming language out there. It's elegant and clean.
            It is very easy to write unperformant code with it, though.
            Because of the level of abstraction you don't always know
            how the compiler will translate your code.</p>

            <p>I used Haskell for some personal projects,
            but I didn't do anything serious with that until now.
            The most advanced thing I did was a parser for the
            Wavefront OBJ format.</p>
            
            <p>Still Haskell is one of my favorite languages (the other
            one is Rust).</p>
        </React.Fragment>
    },
    {
        icon: js_icon,
        label: 'JavaScript',
        description: javascript
    },
    {
        icon: jenkins_icon,
        label: 'Jenkins',
        description: cicd
    },
    {
        icon: dotnet_icon,
        label: '.Net',
        description: csharp
    },
    {
        label: 'Optimization',
        description: () => <React.Fragment>
            <p><b>Operational research</b> and <b>Optimization</b> was
            the focus of my computer science studies.
            My bachelor thesis is in optimization.</p>

            <p>In my further studies I didn't do optimization anymore.
            But I kept reading stuff about that, as I was still interested
            in the topic.
            </p>

            <p>I recently started again reading papers and books in
            optimization and implementing algorithms, just because I enjoy it.
            </p>
        </React.Fragment>
    },
    {
        icon: python_icon,
        label: 'Python',
        description: () => <React.Fragment>
            <p><b>Python</b> was the first language I used at my first job
            at <i>Contact Software</i>.
            I used it before that to do some computations for my PhD thesis,
            but Contact was my first Python job as a developer.
            </p>
            <p>At <i>Contact Software</i> our backend was in Python 2.7.
            So I did write backend code in Python for quite some years.
            </p>
        </React.Fragment>
    },
    {
        icon: react_icon,
        label: 'React',
        description: javascript
    },
    {
        icon: redux_icon,
        label: 'Redux',
        description: javascript
    },
    {
        icon: rust_icon,
        label: 'Rust',
        description: () => <React.Fragment>
            <p>I discovered <b>Rust</b> in 2020 and immediately fall in love
            with it. I read somewhere that Rust is like
            if <b>Haskell</b> and <b>C++</b> had a love child.
            It has a lot of Haskell's
            abstractions with the performance of C++. On top it has
            reference safety.</p>

            <p>Since then I've been using Rust for my personal projects.
            I wouldn't say I'm an advanced Rust developer, but I think
            I'm a good intermediate. I still fight with the borrow checker
            occasionaly, but not that often.
            </p>

            <p>Through Rust I also got introduced to <b>WebAssembly</b>,
            which I now like a lot.</p>
        </React.Fragment>
    },
    {
        label: 'SQL',
        title: 'Structured Query Language',
        description: databases
    },
    {
        label: 'TDD',
        title: 'Test-driven development',
        description: () => <React.Fragment>
            <p><b>Test-driven development</b> is a practice which I learned
            to appreciate during the years. I became a testing advocate.
            </p>

            <p>Writing unit tests before the actual implementation helps
            me actively thinking about my code. I also find that I have
            a lot less bugs in my code when I'm doing TDD.</p>

            <p>Writing tests is hard. At first it may seem
            that TDD complicates the process instead of making it easier.
            But once you have the tests in place, the rest is much easier.
            </p>
        </React.Fragment>
    },
    {
        icon: typescript_icon,
        label: 'TypeScript',
        description: javascript
    },
    {
        icon: wasm_icon,
        label: 'WebAssembly',
        description: () => <React.Fragment>
            <p>When I was learning <b>Rust</b>,
            I read the <i>Rust and WebAssembly book</i>.
            After that I started using WebAssembly for my personal projects.
            </p>
            <p>
            It is perfect to write complex business logic and computations
            for your Web UI.
            It is also interesting as interop format using the
            <i>WebAssembly System Interface</i>.
            </p>
        </React.Fragment>
    },
];
