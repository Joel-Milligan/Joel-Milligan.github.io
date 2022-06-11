import ExperienceDescription from "./ExperienceDescription";
import TimePeriod from "../TimePeriod";

const ExperienceEntry = ({ title, period, children }) => (
    <>
        <h3>{title}</h3>
        <TimePeriod>{period}</TimePeriod>
        <ExperienceDescription>{children}</ExperienceDescription>
    </>
);

export default ExperienceEntry;