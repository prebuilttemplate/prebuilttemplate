import { Button } from "@/components/ui/button"
import Link from "next/link"

function page() {
  return (
    <div className="bg-black text-white min-h-screen">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <a className="text-sm font-medium text-gray-500 hover:text-gray-300" href="/templates">
          ← Back to Templates
        </a>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-500">by</span>
          
        </div>
      </div>
      <div className="mt-8 flex flex-col lg:flex-row lg:space-x-24">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-6">
            <img
              alt="Vercel Logo"
              className="h-6 w-6"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "24/24",
                objectFit: "cover",
              }}
              width="24"
            />
            <span className="text-3xl font-bold">Next.js Boilerplate</span>
          </div>
          <p className="mb-6">Get started with Next.js and React in seconds.</p>
          <div className="flex space-x-4 mb-6">
            <Button className="bg-white text-black">Deploy</Button>
            <Button variant="outline">View Demo</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium mb-1">Framework</div>
              <div className="text-lg">Next.js</div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">Use Case</div>
              <div className="text-lg">Starter</div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">CSS</div>
              <div className="text-lg">CSS Modules</div>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 flex-1">
          <div className="bg-white text-black rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm">
                Get started by editing <span className="font-medium">app/page.js</span>
              </div>
              <Button variant="ghost">+ Vercel</Button>
            </div>
            <div className="text-9xl font-extrabold tracking-tighter mb-6">NEXT.js</div>
            <div className="grid grid-cols-2 gap-4">
              <Link className="text-sm" href="#">
                Docs →
              </Link>
              <Link className="text-sm" href="#">
                Learn →
              </Link>
              <Link className="text-sm" href="#">
                Templates →
              </Link>
              <Link className="text-sm" href="#">
                Deploy →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-3xl font-bold mb-4">
          This is a Next.js project bootstrapped with <span className="font-mono">create-next-app</span>.
        </p>
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p className="mb-4">First, run the development server:</p>
          <div className="bg-black rounded-md p-4 text-sm font-mono">
            <p className="mb-2">npm run dev</p>
            <p className="mb-2"># or</p>
            <p className="mb-2">yarn dev</p>
            <p className="mb-2"># or</p>
            <p className="mb-2">pnpm dev</p>
            <p className="mb-2"># or</p>
            <p>bun dev</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page