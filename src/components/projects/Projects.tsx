import Project from "./Project";

const Projects = () => (
    <>
        <h2>Projects</h2>
        <section className="double-column" style={{ margin: "0px", padding: "0px" }}>
            <div className="project-column">
                <Project title="Resume Website (here!)" github="https://github.com/Joel-Milligan/joel-milligan.github.io">
                    A reactive website leveraging GitHub Pages and React to demonstrate my skills, education and experience.
                </Project>
                <Project title="Mushroom" github="https://github.com/Joel-Milligan/mushroom">
                    A prototype roguelike game built in Rust.
                </Project>
                <Project title="Sudoku Solver" github="https://github.com/Joel-Milligan/SudokuSolver">
                    Naive solver of sudoku puzzles, all in one C file.
                </Project>
            </div>

            <div className="project-column">
                <Project title="Tournament Tracker" github="https://github.com/Joel-Milligan/Tournament-Tracker">
                    Desktop Application built in .NET for tracking tournaments, focusing on SOLID design principles.
                </Project>
                <Project title="Midas" github="https://github.com/Joel-Milligan/Midas">
                    Blackjack built in Rust.
                </Project>
                <Project title="WA Town Name NewGRF" github="https://github.com/Joel-Milligan/openttd-wa-town-names">
                    A modification for the game 'OpenTTD' that adds Western Australian town names to the game.
                </Project>

            </div>
        </section>
    </>
);

export default Projects;