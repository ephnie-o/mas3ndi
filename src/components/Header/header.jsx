import { Link2, Menu } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Image src='/assets/images/logo.jpeg' alt="logo" width={50} height={50} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="font-semibold text-gray-600 hover:text-emerald-600">Features</Link>
            <Link href="#pricing" className="font-semibold text-gray-600 hover:text-emerald-600">Pricing</Link>
            <Link href="#testimonials" className="font-semibold text-gray-600 hover:text-emerald-600">Testimonials</Link>
            <Link href="#faq" className="font-semibold text-gray-600 hover:text-emerald-600">FAQ</Link>
          </div>

          {/* Right side buttons - visible on all screens */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile Auth Buttons - visible on mobile */}
            <div className="flex md:hidden space-x-2">
              <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50">
                Login
              </Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Sign Up
              </Button>
            </div>

            {/* Mobile Dropdown Menu Trigger */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none"
                    aria-label="Toggle menu"
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 mt-2 py-2 border-gray-200 bg-white rounded-md shadow-lg"
                >
                  <DropdownMenuItem className="cursor-pointer my-2 mx-2 rounded-sm focus:outline-none">
                    <Link href="#features" className="w-full px-2 py-2 text-gray-600 text-sm font-medium hover:text-emerald-600">
                      Features
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer my-2 mx-2 rounded-sm focus:outline-none ">
                    <Link href="#pricing" className="w-full px-2 py-2 text-gray-600 text-sm font-medium hover:text-emerald-600">
                      Pricing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer my-2 mx-2 rounded-sm focus:outline-none">
                    <Link href="#testimonials" className="w-full px-2 py-2 text-gray-600 text-sm font-medium hover:text-emerald-600">
                      Testimonials
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer my-2 mx-2 rounded-sm focus:outline-none">
                    <Link href="#faq" className="w-full px-2 py-2 text-gray-600 text-sm font-medium hover:text-emerald-600">
                      FAQ
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Desktop Auth Buttons - hidden on mobile */}
            <div className="hidden md:flex space-x-2">
              <Button variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50">
                Login
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Header