import Skill from "./Skill";

const Skills = () => (
    <>
        <h2>Skills</h2>
        <section className="double-column">
            <div className="project-column">
                <h3>Languages</h3>
                <ul>
                    <Skill>.NET (C#)</Skill>
                    <Skill>Javascript</Skill>
                    <Skill>Typescript</Skill>
                    <Skill>Rust</Skill>
                    <Skill>C++</Skill>
                </ul>

                <h3>Frontend Frameworks</h3>
                <ul>
                    <Skill>React</Skill>
                    <Skill>Angular</Skill>
                    <Skill>Durandal</Skill>
                    <Skill>Knockout.js</Skill>
                </ul>

                <h3>Backend Frameworks</h3>
                <ul>
                    <Skill>.NET WebAPI</Skill>
                    <Skill>.NET MVC</Skill>
                    <Skill>Entity Framework</Skill>
                </ul>
            </div>

            <div className="project-column">
                <h3>Mobile Frameworks</h3>
                <ul>
                    <Skill>React Native</Skill>
                    <Skill>Ionic</Skill>
                </ul>
                <h3>Databases</h3>
                <ul>
                    <Skill>MS SQL</Skill>
                    <Skill>RavenDB</Skill>
                    <Skill>CosmosDB</Skill>
                </ul>

                <h3>Tools / Other</h3>
                <ul>
                    <Skill>Azure</Skill>
                    <Skill>D365 and Power Apps</Skill>
                    <Skill>Git and GitHub</Skill>
                    <Skill>Azure DevOps</Skill>
                </ul>
            </div>
        </section>
    </>
);

export default Skills;