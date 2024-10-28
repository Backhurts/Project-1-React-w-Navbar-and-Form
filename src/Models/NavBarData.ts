import { NavItem } from "./NavItem";
// importing the format of navitem so I can set the correct type of array
// that goes into the props through app.tsx > navbar.tsx

export const NavBarData: NavItem[] = [
    // first link - Home
    {
        title: "Home",
        theURL: "/Home"
    },
    // second link - Products
    {
        title: "Products",
        theURL: "/Products"
    },
    // last link - Signup
    {
        title: "Signup",
        theURL: "/Signup"
    }






]

