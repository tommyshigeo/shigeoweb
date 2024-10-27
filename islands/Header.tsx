// i need a header island that has a logo and a navigation menu, with abut and contact sections

export default function Header() {
    return (
        <header className="flex items-center p-4">
            <div className="flex-1">
                <h1 className="text-xl font-bold">Tom Shigeo</h1>
            </div>
            <nav className="flex gap-4 absolute left-1/2 transform -translate-x-1/2">
                <a href="/" className="hover:underline">Home</a>
                <a href="/portfolio" className="hover:underline">Portfolio</a>
                <a href="/about" className="hover:underline">About</a>
                <a href="/contact" className="hover:underline">Contact</a>
            </nav>
            <div className="flex-1"></div>
        </header>
    );
}
