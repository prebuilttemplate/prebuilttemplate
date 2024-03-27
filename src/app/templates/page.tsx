import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="bg-[#0c0c0c] min-h-screen text-white">
      <header className="py-12">
        <h1 className="text-center text-6xl font-bold">Find your Template</h1>
        <p className="mt-4 text-center text-xl">
          Jumpstart your app development process with pre-built solutions from Vercel and our community.
        </p>
      </header>
      <div className="flex">
        <aside className="w-1/4 px-8">
          <div className="space-y-6">
            <Input placeholder="Search..." />
            <div>
              <p className="mb-2 font-semibold">Use Case</p>
              <div className="space-y-2">
                <Checkbox id="ai" />
                <label className="text-sm" htmlFor="ai">
                  AI
                </label>
                <Checkbox id="starter" />
                <label className="text-sm" htmlFor="starter">
                  Starter
                </label>
                <Checkbox id="ecommerce" />
                <label className="text-sm" htmlFor="ecommerce">
                  Ecommerce
                </label>
                <Checkbox id="blog" />
                <label className="text-sm" htmlFor="blog">
                  Blog
                </label>
                <Checkbox id="edge-functions" />
                <label className="text-sm" htmlFor="edge-functions">
                  Edge Functions
                </label>
                <Checkbox id="edge-middleware" />
                <label className="text-sm" htmlFor="edge-middleware">
                  Edge Middleware
                </label>
                <Checkbox id="edge-config" />
                <label className="text-sm" htmlFor="edge-config">
                  Edge Config
                </label>
                <Checkbox id="portfolio" />
                <label className="text-sm" htmlFor="portfolio">
                  Portfolio
                </label>
                <Checkbox id="saas" />
                <label className="text-sm" htmlFor="saas">
                  SaaS
                </label>
                <Checkbox id="cms" />
                <label className="text-sm" htmlFor="cms">
                  CMS
                </label>
              </div>
            </div>
          </div>
        </aside>
        <main className="w-3/4 px-8">
          <div className="grid grid-cols-3 gap-6">
            <Card className="w-full">
              <CardContent>
                <img
                  alt="Next.js Boilerplate"
                  className="h-48 w-full object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="mt-4 text-lg font-semibold">Next.js Boilerplate</h3>
                <p className="mt-2 text-sm text-gray-400">Get started with Next.js and React in seconds.</p>
                <p className="mt-4 text-sm">by Vercel</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent>
                <img
                  alt="Image Gallery Starter"
                  className="h-48 w-full object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="mt-4 text-lg font-semibold">Image Gallery Starter</h3>
                <p className="mt-2 text-sm text-gray-400">An image gallery built on Next.js and Cloudinary.</p>
                <p className="mt-4 text-sm">by Vercel</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent>
                <img
                  alt="Next.js AI Chatbot"
                  className="h-48 w-full object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="mt-4 text-lg font-semibold">Next.js AI Chatbot</h3>
                <p className="mt-2 text-sm text-gray-400">
                  A full-featured, hackable Next.js AI chatbot built by Vercel.
                </p>
                <p className="mt-4 text-sm">by Vercel</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent>
                <img
                  alt="Nextra: Docs Starter Kit"
                  className="h-48 w-full object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="mt-4 text-lg font-semibold">Nextra: Docs Starter Kit</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Simple, powerful and flexible markdown-powered docs site. Built with Next.js.
                </p>
                <p className="mt-4 text-sm">by Vercel</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent>
                <img
                  alt="Admin Dashboard Template"
                  className="h-48 w-full object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="mt-4 text-lg font-semibold">Admin Dashboard Template</h3>
                <p className="mt-2 text-sm text-gray-400">Tailwind CSS, Postgres, and Auth set up.</p>
                <p className="mt-4 text-sm">by Vercel</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent>
                <img
                  alt="Next.js Commerce"
                  className="h-48 w-full object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="mt-4 text-lg font-semibold">Next.js Commerce</h3>
                <p className="mt-2 text-sm text-gray-400">Starter kit for high-performance commerce with Shopify.</p>
                <p className="mt-4 text-sm">by Vercel</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

