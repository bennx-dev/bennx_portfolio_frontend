export default function LogoWebshop() {
    return (
        <svg
            viewBox="0 0 100 100"
            width={24}
            height={24}
            preserveAspectRatio="xMidYMid slice"
        >
            <g transform="translate(-3,10) scale(1.2)">
                <path d="M24 20 L74 20 L66 50 L32 50 Z" fill="#1E90FF" />

                <path
                    d="M14 20 Q4 20 9 30 L24 30"
                    stroke="#1E90FF"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                />

                <circle cx="38" cy="60" r="6" fill="#32CD32" />
                <circle cx="60" cy="60" r="6" fill="#32CD32" />

                <path
                    d="M32 10 Q40 5 50 10 Q60 5 68 10 L68 20 Q60 15 50 20 Q40 15 32 20 Z"
                    fill="#32CD32"
                />
            </g>
        </svg>
    );
}