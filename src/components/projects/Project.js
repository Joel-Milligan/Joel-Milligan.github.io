const Project = ({ title, github, children }) => (
    <>
        <h3>{title}</h3>
        <p>{children}</p>
        <a href={github}>GitHub</a>
    </>
);

export default Project;