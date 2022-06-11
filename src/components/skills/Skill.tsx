import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

const Skill = ({ children }: Props) => <li>{children}</li>;

export default Skill;