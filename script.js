import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-red-500 text-2xl font-bold mb-4">RAFCART</h2>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, porro.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          {[1, 2].map((_, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-gray-900 font-semibold mb-4">SOLUTIONS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Marketing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Analytics</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Commerce</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Insights</a></li>
              </ul>
            </div>
          ))}
          {[1, 2].map((_, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-gray-900 font-semibold mb-4">SUPPORT</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">API Status</a></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© RAFCART - All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['visa', 'mastercard', 'paypal', 'maestro', 'stripe', 'amex'].map((card) => (
              <Image
                key={card}
                src={`/placeholder.svg?height=20&width=32`}
                alt={`${card} logo`}
                width={32}
                height={20}
                className="h-5 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
