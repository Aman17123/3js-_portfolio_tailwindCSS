import { useState } from "react"; // Importing the useState hook from React
import { navLinks } from "../constant"; // Importing navigation links data from the constants file
import { Link } from "react-router-dom"; // Import Link from react-router-dom


const Navbar = () => { // Defining the Navbar component
    
    const [isOpen, setIsOpen] = useState(false); // State to track whether the menu is open or closed

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen); // Function to toggle the menu state

    const NavItems = () => { // Component to render navigation items
        return (
            <ul className="nav-ul"> {/* Unordered list for navigation items */}
                {navLinks.map(({ id, href, name }) => ( // Mapping through navLinks array
                    <li key={id} className="nav-li"> {/* List item with unique key */}
                        <a href={href} className="nav-li_a" onClick={() => {}}> {/* Anchor tag for navigation */}
                            {name} {/* Displaying the link name */}
                        </a>
                    </li>
                ))}
            </ul>
        );
    };

    return ( // Returning JSX for the Navbar
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90"> {/* Header with fixed position */}
            <div className="max-w-7xl mx-auto"> {/* Container for centering content */}
                <div className="flex justify-between items-center py-5 mx-auto c-space"> {/* Flex container for layout */}
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"> {/* Logo */}
                        BOMBA 
                    </a>

                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white ==
                        focus:outline-none sm:hidden flex" aria-label="Toggle Menu"> {/* Button to toggle mobile menu */}
                        <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="toggle" className="w-6 h-6"/> {/* Dynamic icon */}
                    </button>

                    <nav className="sm:flex hidden"> {/* Navigation menu for larger screens */}
                        <NavItems/> {/* Rendering navigation items */}
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}> {/* Mobile menu with dynamic height */}
                <nav className="p-5"> {/* Mobile navigation container */}
                    <NavItems/> {/* Rendering navigation items */}
                </nav>
            </div>
        </header>
    );
};

export default Navbar; // Exporting Navbar component for use in other files
