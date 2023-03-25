import Skill from "./Skill";

const Skills = () => (
    <>
        <h2>Skills</h2>
        <section className="double-column">
            <div className="project-column">
                <h3>Programming Languages</h3>
                <ul>
                    <Skill>.NET / C#</Skill>
                    <Skill>React</Skill>
                    <Skill>Rust</Skill>
                    <Skill>Go</Skill>
                    <Skill>Python</Skill>
                    <Skill>Java</Skill>
                </ul>
            </div>

            <div className="project-column">
                <h3>Technologies</h3>
                <ul>
                    <Skill>Dynamics 365</Skill>
                    <Skill>Power Apps</Skill>
                    <Skill>Git</Skill>
                    <Skill>Azure Portal</Skill>
                    <Skill>Azure DevOps</Skill>
                </ul>
            </div>
        </section>
    </>
);

export default Skills;