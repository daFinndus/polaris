import {FaEye} from "react-icons/fa6";
import {GiBreakingChain, GiBrute} from "react-icons/gi";
import {SiBurpsuite, SiHackthebox} from "react-icons/si";

interface Method {
    Icon: any,
    name: string,
    content: string,
    related: string[],
    href: string
}

const cybersecurity: Method[] = [
    {
        Icon: FaEye,
        name: "Network Scanning",
        content: "Scanning and mapping networks to identify live hosts, open ports, and services for vulnerability analysis.",
        related: ["Nmap"],
        href: "https://nmap.org/book/man.html"
    },
    {
        Icon: GiBrute,
        name: "Directory Fuzzing",
        content: "Automated discovery of hidden directories and files on web servers by brute-forcing possible URLs.",
        related: ["Gobuster"],
        href: "https://owasp.org/www-community/Vulnerability_Scanning/Tools_for_Fuzzing_and_Brute_Forcing"
    },
    {
        Icon: SiBurpsuite,
        name: "Web Application Testing",
        content: "Testing the security of web applications by identifying vulnerabilities like XSS, SQL injection, and authentication issues.",
        related: ["Burp Suite"],
        href: "https://portswigger.net/web-security"
    },
    {
        Icon: GiBreakingChain,
        name: "Exploitation and Validation",
        content: "Exploiting vulnerabilities to validate their impact and assess the security posture of systems.",
        related: ["Metasploit"],
        href: "https://www.metasploit.com/"
    },
    {
        Icon: SiHackthebox,
        name: "Theory & Practice",
        content: "Applying penetration testing skills to solve real-world scenarios in a controlled environment, focusing on problem-solving and methodology.",
        related: ["Hack The Box"],
        href: "https://www.hackthebox.com/"
    }
];

export default cybersecurity;
