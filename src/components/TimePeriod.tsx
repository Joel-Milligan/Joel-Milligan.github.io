import { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

const TimePeriod = ({ children }: Props) => <em>{children}</em>;

export default TimePeriod;