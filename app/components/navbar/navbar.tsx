import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="h-14 bg-linear-to-t from-sky-500 to-indigo-500"> 
            <ul>
                <li>
                    <Link href="/home">FreeCycle App</Link>
                </li>
                <p>test</p>
                <li>
                    <Link href="/profile/:userId">Profile</Link>
                </li>
            </ul>
        </nav>
    );
}