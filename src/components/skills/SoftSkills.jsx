import Github from "../icons/Github.jsx";
import Linkedin from "../icons/Linkedin.jsx";

export default function SoftSkills() {

    return (
        <div className="soft-skills">

            <div className="hero-header">

                <h1 className="title">Benny</h1>

                <div className="mindset-group">
                    <span className="mindset-pill">Fast Learner</span>
                    <span className="mindset-pill">Problem Solver</span>
                    <span className="mindset-pill">Team Player</span>
                </div>
            </div>

            <h4 className="subtitle">
                    IT <span className="developer-subtitle">PROFESSIONAL</span>
            </h4>

            <div className="availability">
                <span className="dot"></span>
                Onmiddellijk beschikbaar voor werk
            </div>

            <p className="intro-text intro-text-p">
                Software Development • IT Operations • Automation
            </p>

            <div className="action-row">
                <div className="github soft-skills-icons">
                    <a
                        href="https://github.com/bennx-dev"
                        target="_blank"
                        aria-label="GitHub"
                        title={"Github van Benny"}
                    >
                        <Github/>
                    </a>
                </div>

                <div className="soft-skills-icons">
                    <a
                        href="https://www.linkedin.com/in/bennx-dev/"
                        target="_blank"
                        aria-label="LinkedIn"
                        title={"LinkedIn van Benny"}
                    >
                        <Linkedin/>
                    </a>
                </div>
            </div>
        </div>
    );
}