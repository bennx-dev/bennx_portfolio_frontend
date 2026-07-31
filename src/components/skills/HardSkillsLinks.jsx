export default function HardSkillsLinks({ items, mobile = false }) {

    return (
        <div className={`skill-links ${mobile ? "" : ""}`}>
            {items.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={item.label === "GitHub" ? "" : "skill-link"}
                    title={item.tooltip}
                >
                    {item.icon}
                    {!mobile && <span>{item.label}</span>}
                </a>
            ))}
        </div>
    );
}