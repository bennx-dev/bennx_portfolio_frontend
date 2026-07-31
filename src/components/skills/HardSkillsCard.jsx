import SkillLinks from "./HardSkillsLinks.jsx";

export default function HardSkillsCard({ title, items, className }) {

    return (
        <div className={`skill-card ${className}`}>

            <h4>{title}</h4>

            <SkillLinks items={items} />

        </div>
    );
}