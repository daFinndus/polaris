import {FaEye} from "react-icons/fa6";
import {SiBurpsuite, SiHackthebox, SiOpenvpn, SiWireshark} from "react-icons/si";

interface Technology {
    Icon: any,
    name: string,
    content: string,
    version: string,
    href: string
}

const security_techs: Technology[] = [
    {
        Icon: FaEye,
        name: "Nmap",
        content: "Nmap is a free and open-source network scanner created by Gordon Lyon. Nmap is used to discover hosts and services on a computer network by sending packets and analyzing the responses.",
        version: "7.91",
        href: "https://nmap.org/"
    },
    {
        Icon: SiWireshark,
        name: "Wireshark",
        content: "Wireshark is a free and open-source packet analyzer. It is used for network troubleshooting, analysis, software and communications protocol development, and education.",
        version: "3.4.6",
        href: "https://www.wireshark.org/"
    },
    {
        Icon: SiBurpsuite,
        name: "Burp Suite",
        content: "Burp Suite is a leading range of cybersecurity tools, brought to you by PortSwigger. It is the world's most widely used web application security testing software.",
        version: "2021.8.3",
        href: "https://portswigger.net/burp"
    },
    {
        Icon: FaEye,
        name: "Metasploit",
        content: "Metasploit is a penetration testing platform that enables you to find, exploit, and validate vulnerabilities. It provides the infrastructure, content, and tools to perform penetration tests and extensive security auditing.",
        version: "6.0.48",
        href: "https://www.metasploit.com/"
    },
    {
        Icon: SiOpenvpn,
        name: "OpenVPN",
        content: "OpenVPN is an open-source commercial software that implements virtual private network techniques to create secure point-to-point or site-to-site connections in routed or bridged configurations and remote access facilities.",
        version: "2.5.4",
        href: "https://openvpn.net/"
    },
    {
        Icon: SiHackthebox,
        name: "Hack The Box",
        content: "Hack The Box is an online platform allowing you to test your penetration testing skills and exchange ideas and methodologies with other members of similar interests.",
        version: "",
        href: "https://www.hackthebox.eu/"
    }
];

export default security_techs;
