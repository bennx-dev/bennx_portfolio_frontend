import Github from "../icons/Github.jsx";
import LogoWebshop from "../icons/LogoWebshop.jsx";

import {
    Accessibility
} from "lucide-react";

export const skills = {
    softwareDevelopment: [
        {
            href: "https://www.java.com/",
            icon: <img src="/java.png" alt="Java"/>,
            label: "Java",
            tooltip: "Object-oriented programming language"
        },
        {
            href: "https://spring.io/projects/spring-framework",
            icon: <img src="/spring.svg" alt="Spring MVC"/>,
            label: "Spring",
            tooltip: "Model-view-controller web framework"
        },
        {
            href: "https://restfulapi.net/",
            icon: <img src="/rest.svg" alt="REST API"/>,
            label: "REST",
            tooltip: "Standardized HTTP communication architecture"
        },
        {
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            icon: <img src="/javascript.svg" alt="JavaScript"/>,
            label: "JavaScript",
            tooltip: "Dynamic web scripting language"
        },
        {
            href: "https://react.dev/",
            icon: <img src="/react.svg" alt="React"/>,
            label: "React",
            tooltip: "Component-based UI library"
        },
        {
            href: "https://www.mysql.com/",
            icon: <img src="/mysql.svg" alt="MySQL"/>,
            label: "MySQL",
            tooltip: "Relational database management system"
        }
    ],

    itOperations: [
        {
            href: "https://www.kernel.org/",
            icon: <img src="/linux.svg" alt="Linux"/>,
            label: "Linux",
            tooltip: "Linux is a clone of the operating system Unix, written from scratch by Linus Torvalds"
        },
        {
            href: "https://www.microsoft.com/en-us/windows/",
            icon: <img src="/windows.svg" alt="Windows"/>,
            label: "Windows",
            tooltip: "Operating System from Microsoft"
        },
        {
            href: "https://www.topdesk.com",
            icon: <img src="/topdesk.png" alt="topdesk"/>,
            label: "Asset Management",
            tooltip: "levenscyclus en inventaris van IT-middelen beheren"
        },
        {
            href: "https://learn.microsoft.com/en-us/microsoft-365",
            icon: <img src="/365.svg" alt="M365"/>,
            label: "M365",
            tooltip: "Microsoft Business Service"
        },
        {
            href: "https://learn.microsoft.com/en-us/azure",
            icon: <img src="/azure.svg" alt="active directory"/>,
            label: "Azure • Entra",
            tooltip: "Microsoft Azure cloud services"
        },
        {
            href: "https://www.cisco.com/site/us/en/index.html",
            icon: <img src="/router.svg" alt="Networking"/>,
            label: "Networking",
            tooltip: "IP, VLAN, WIFI"
        },
    ],

    automation: [
        {
            href: "https://www.docker.com/",
            icon: <img src="/docker.svg" alt="Docker"/>,
            label: "Docker",
            tooltip: "Containerized application platform"
        },
        {
            href: "https://learn.microsoft.com/en-us/powershell/",
            icon: <img src="/powershell.svg" alt="powershell"/>,
            label: "Powershell",
            tooltip: "Uniformed command-line interface for Windows"
        },
        {
            href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
            icon: <img src="/bash.svg" alt="bash"/>,
            label: "Bash",
            tooltip: "Unix Shell"
        },
        {
            href: "https://git-scm.com/",
            icon: <img src="/git.svg" alt="Git"/>,
            label: "Git",
            tooltip: "Distributed version control system"
        },
        {
            href: "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
            icon: <Github />,
            label: "CI/CD",
            tooltip: "aims to streamline and accelerate the software development lifecycle."
        },
    ],

    bestPractices: [

        {
            href: "https://refactoring.guru/design-patterns",
            icon: <img src="/designpatterns.png" alt="Design Patterns"/>,
            label: "Design Patterns",
            tooltip: "Reusable software architecture solutions"
        },
        {
            href: "https://junit.org/junit5/",
            icon: <img src="/junit5.svg" alt="JUnit5"/>,
            label: "JUnit5",
            tooltip: "Java unit testing framework"
        },
        {
            href: "https://www.freecodecamp.org/news/how-to-write-clean-code/",
            icon: <img src="/cleancode.svg" alt="clean code"/>,
            label: "Clean Code",
            tooltip: "Tips and Best Practices for clean code"
        },
        {
            href: "https://agilemanifesto.org/",
            icon: <img src="/scrum.png" alt="Scrum.org"/>,
            label: "Agile Scrum",
            tooltip: "Iterative team development methodology"
        },
        {
            href: "https://www.w3.org/WAI/",
            icon: <Accessibility size={24} color="#c28f44"/>,
            label: "Accessibility",
            tooltip: "Inclusive user interface practices"
        }
    ],

    ai: [

        {
            href: "https://www.ibm.com/think/topics/artificial-intelligence",
            icon: <img src="/llm.svg" alt="llm"/>,
            label: "LLMs",
            tooltip: "Technology enabling machines to simulate human learning and reasoning"
        },
        {
            href: "https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro",
            icon: <img src="/mcp.svg" alt="mcp"/>,
            label: "MCP",
            tooltip: "connect to external tool servers"
        },
        {
            href: "https://qdrant.tech",
            icon: <img src="/rag.svg" alt="rag"/>,
            label: "RAG",
            tooltip: "full-feature vector search"
        },
        {
            href: "https://hermes-agent.nousresearch.com/docs",
            icon: <img src="/agent.svg" alt="agent"/>,
            label: "AI Agents",
            tooltip: "self-improving AI agent"
        },
        {
            href: "https://cloud.google.com/discover/what-is-prompt-engineering",
            icon: <img src="/llm.svg" alt="prompt"/>,
            label: "Prompt Engineering",
            tooltip: "practice of designing, testing, and refining inputs"
        },
    ],

    project: [
        {
            href: "https://bennx.dev/webshop/",
            icon: <LogoWebshop />,
            label: "Webshop",
            tooltip: "Full-stack webshop application"
        },
        {
            href: "https://github.com/bennx-dev/Toys-Spring-Data-",
            icon: <Github />,
            label: "Toys",
            tooltip: "Spring Data school project"
        },
        {
            href: "https://github.com/bennx-dev/Movies-Spring-MVC",
            icon: <Github />,
            label: "Movies",
            tooltip: "Spring MVC school project"
        },
        {
            href: "https://github.com/bennx-dev/Luigi-Spring-MVC",
            icon: <Github />,
            label: "Pizzeria",
            tooltip: "Restaurant ordering school project"
        }
    ]
};