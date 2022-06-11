import { ReactNode } from "react";

interface Props {
    title: string,
    github: string,
    children?: ReactNode
}

const Project = ({ title, github, children }: Props) => (
    <>
        <h3>{title}</h3>
        <p>{children}</p>
        <a href={github}>GitHub</a>
    </>
);

export default Project;