import Degree from "./Degree";

const Education = () => (
    <>
        <h2>Education</h2>
        <Degree
            university="UWA"
            title="BBiomedSc (Medical Sciences and Computer Science)"
            period="2019 - 2021"
        >
            <li>Data Structures and Algorithms</li>
            <li>Operating Systems</li>
            <li>Computer Networks</li>
            <li>Web Development</li>
            <li>Database Systems</li>
        </Degree>
    </>
);

export default Education;