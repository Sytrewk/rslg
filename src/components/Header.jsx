import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const NavLink = (props) => (
    <Link {...props} className="
        text-xl font-bold text-gray-200 transition-colors 
        duration-100 transform hover:text-red-400" 
    />
);

const Header = () => (
    <header>
        <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center">
                <StaticImage src="../images/logo.png" />
            </div>

            <div class="flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                <NavLink>Home</NavLink>
                <NavLink>About Us</NavLink>
            </div>
        </nav>
    </header>
);

export default Header;