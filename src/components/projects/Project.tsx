import { ReactNode } from "react";

interface Props {
    title: string,
    github: string,
    children?: ReactNode
}

const Project = ({ title, github, children }: Props) => (
    <section>
        <h3><a href={github}>{title}</a></h3>
        <p>{children}</p>
    </section>
);

export default Project;