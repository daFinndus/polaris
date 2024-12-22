import {FaEye} from "react-icons/fa6";
import {SiBurpsuite, SiHackthebox, SiOpenvpn} from "react-icons/si";

interface Technology {
    Icon: any,
    name: string,
    content: string,
    version: string,
    href: string
}

const security_methods: Technology[] = [
    {
        Icon: FaEye,
        name: "Network Scanning",
        content: "Scanning and mapping networks to identify live hosts, open ports, and services for vulnerability analysis.",
        version: "",
        href: "https://nmap.org/book/man.html"
    },
    {
        Icon: FaEye,
        name: "Directory Fuzzing",
        content: "Automated discovery of hidden directories and files on web servers by brute-forcing possible URLs.",
        version: "",
        href: "https://owasp.org/www-community/Vulnerability_Scanning/Tools_for_Fuzzing_and_Brute_Forcing"
    },
    {
        Icon: SiBurpsuite,
        name: "Web Application Testing",
        content: "Testing the security of web applications by identifying vulnerabilities like XSS, SQL injection, and authentication issues.",
        version: "",
        href: "https://portswigger.net/web-security"
    },
    {
        Icon: FaEye,
        name: "Exploitation and Validation",
        content: "Exploiting vulnerabilities to validate their impact and assess the security posture of systems.",
        version: "",
        href: "https://www.metasploit.com/"
    },
    {
        Icon: SiOpenvpn,
        name: "Secure Communication Setup",
        content: "Establishing secure tunnels and VPNs to ensure safe remote access or secure communication channels.",
        version: "",
        href: "https://openvpn.net/"
    },
    {
        Icon: SiHackthebox,
        name: "Capture The Flag (CTF) Problem Solving",
        content: "Applying penetration testing skills to solve real-world scenarios in a controlled environment, focusing on problem-solving and methodology.",
        version: "",
        href: "https://www.hackthebox.com/"
    }
];

export default security_methods;
