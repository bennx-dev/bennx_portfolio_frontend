import { skills } from "./HardSkillsData.jsx";
import HardSkillsCard from "./HardSkillsCard.jsx";

export default function HardSkills() {

    const skillSections = [
        { title: "Software Development", key: "softwareDevelopment", className: "softwareDevelopment" },
        { title: "IT Operations", key: "itOperations", className: "itOperations" },
        { title: "Automation", key: "automation", className: "automation" },
        { title: "Best Practices", key: "bestPractices", className: "bestPractices" },
        { title: "AI", key: "ai", className: "ai" },
        { title: "Projects", key: "project", className: "project" }
    ];

    return (
        <div className="hard-skills">

            {/* DESKTOP */}
            <div className="desktop-skills">

                {/*x van 0 → 600*/}
                {/*y van 0 → 600*/}
                <svg className="svg-bg" viewBox="0 0 600 600" preserveAspectRatio="none">

                    {/* TOP LEFT */}
                    <path
                        d="M120 210 L240 210 L300 300"
                        className="wire"
                    />

                    {/* TOP RIGHT */}
                    <path
                        d="M480 210 L360 210 L300 300"
                        className="wire"
                    />

                    {/* BOTTOM LEFT */}
                    <path
                        d="M120 390 L240 390 L300 300"
                        className="wire"
                    />

                    {/* BOTTOM RIGHT */}
                    <path
                        d="M480 390 L360 390 L300 300"
                        className="wire"
                    />

                    {/* TOP CENTER */}
                    <path
                        d="M300 130 L300 280"
                        className="wire"
                    />

                    {/* BOTTOM CENTER */}
                    <path
                        d="M300 330 L300 480"
                        className="wire"
                    />

                    <circle r="4" fill="#c28f44" className="pulse pulse1"></circle>
                    <circle r="4" fill="#c28f44" className="pulse pulse2"></circle>
                    <circle r="4" fill="#c28f44" className="pulse pulse3"></circle>
                    <circle r="4" fill="#c28f44" className="pulse pulse4"></circle>
                    <circle r="4" fill="#c28f44" className="pulse pulse5"></circle>
                    <circle r="4" fill="#c28f44" className="pulse pulse6"></circle>
                </svg>

                {skillSections.map((section) => (
                    <HardSkillsCard
                        key={section.key}
                        title={section.title}
                        items={skills[section.key]}
                        className={section.className}
                    />
                ))}

                <div className="center-diamond" />

            </div>

            {/* MOBILE */}
            <div className="mobile-skills">
                {skillSections.map((section) => (
                    <HardSkillsCard
                        key={section.key}
                        title={section.title}
                        items={skills[section.key]}
                        mobile
                    />
                ))}
            </div>

        </div>
    );
}