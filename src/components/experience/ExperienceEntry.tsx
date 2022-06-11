import ExperienceDescription from "./ExperienceDescription";
import TimePeriod from "../TimePeriod";
import { ReactNode } from "react";

interface Props {
    title: string,
    period?: string,
    children?: ReactNode
}

const ExperienceEntry = ({ title, period, children }: Props) => (
    <>
        <h3>{title}</h3>
        <TimePeriod>{period}</TimePeriod>
        <ExperienceDescription>{children}</ExperienceDescription>
    </>
);

export default ExperienceEntry;