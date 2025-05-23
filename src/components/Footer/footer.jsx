import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center">
                <Image src='/assets/images/logo.jpeg' alt="logo" width={100} height={100} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-emerald-600">Features</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-emerald-600">Pricing</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-emerald-600">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-emerald-600">About</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-emerald-600">Blog</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-emerald-600">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-emerald-600">Documentation</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-emerald-600">Guides</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-emerald-600">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-emerald-600">Privacy</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-emerald-600">Terms</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-emerald-600">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="mt-4 border-t border-gray-200 flex flex-col justify-between items-center">
                <p className="mt-4 md:mt-0 text-sm text-gray-500">
                    © {new Date().getFullYear()} Mas3ndi. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer