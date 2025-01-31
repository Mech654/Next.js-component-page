interface HeaderProps {
    headertext: string;
}

function Header({ headertext }: HeaderProps) {
    return (
        <header className="w-full h-20 flex items-center justify-center">
            <h1 className="opacity-100 text-white text-2xl font-bold text-center">
                Welcome, {headertext}
            </h1>
        </header>
    );
}


export default Header;

