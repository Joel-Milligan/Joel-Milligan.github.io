interface DegreeProps {
    university: string;
    title: string;
    period: string;
    children: JSX.Element[];
}

const Degree = ({ university, title, period, children }: DegreeProps) => (
    <>
        <strong>{title}</strong> {university}, {period}
        <ul>
            {children}
        </ul>
    </>
)

export default Degree;