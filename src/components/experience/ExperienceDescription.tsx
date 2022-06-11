import { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

const ExperienceDescription = ({ children }: Props) => (
    <p>{children}</p>
);

export default ExperienceDescription;