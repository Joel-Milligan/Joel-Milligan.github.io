import TimePeriod from "./TimePeriod";
import { ReactNode } from "react";

interface Props {
    title: string,
    period?: string,
    children?: ReactNode
}

const TimedEntry = ({ title, period, children }: Props) => (
    <section>
        <h3>{title}</h3>
        <TimePeriod>{period}</TimePeriod>
        <p>{children}</p>
    </section>
);

export default TimedEntry;