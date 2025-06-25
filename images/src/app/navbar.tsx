import Link from "next/link";

export default function NavBar() {
    return (
        // Full width for class
        <nav className="w-full">
            {/* unordered list*/}
            <ul className="flex justify-betweeen items-center max-w-lg m-auto">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/create-post">Create Post</Link>
                </li>
            </ul>
        </nav>
    )
}