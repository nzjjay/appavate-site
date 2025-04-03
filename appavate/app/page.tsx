import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Smartphone, Code, Zap, Shield, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Building Exceptional Android Apps
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Appavate transforms your ideas into powerful, user-friendly Android applications that stand out in the
                  marketplace.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="#services">Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=550&width=450"
                alt="Android app development"
                width={450}
                height={550}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Android Development Services
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We specialize in creating custom Android applications that deliver exceptional user experiences.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <Smartphone className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Custom App Development</h3>
              <p className="text-center text-muted-foreground">
                Tailored Android applications designed to meet your specific business requirements.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">App Modernization</h3>
              <p className="text-center text-muted-foreground">
                Upgrade legacy Android applications with modern features and improved performance.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Performance Optimization</h3>
              <p className="text-center text-muted-foreground">
                Enhance your Android app's speed, responsiveness, and battery efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Appavate?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of expert Android developers delivers quality applications that exceed expectations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
            <div className="flex items-start space-x-4">
              <Shield className="mt-1 h-6 w-6 text-green-600 dark:text-green-400" />
              <div>
                <h3 className="text-xl font-bold">Android Expertise</h3>
                <p className="text-muted-foreground">
                  Our developers specialize in Android development, staying current with the latest platform updates and
                  best practices.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Zap className="mt-1 h-6 w-6 text-green-600 dark:text-green-400" />
              <div>
                <h3 className="text-xl font-bold">Performance Focused</h3>
                <p className="text-muted-foreground">
                  We build apps that are fast, responsive, and optimized for the Android ecosystem.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Smartphone className="mt-1 h-6 w-6 text-green-600 dark:text-green-400" />
              <div>
                <h3 className="text-xl font-bold">Device Compatibility</h3>
                <p className="text-muted-foreground">
                  Our applications work seamlessly across the diverse range of Android devices and screen sizes.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Code className="mt-1 h-6 w-6 text-green-600 dark:text-green-400" />
              <div>
                <h3 className="text-xl font-bold">Clean Code</h3>
                <p className="text-muted-foreground">
                  We write maintainable, well-documented code that makes future updates and enhancements easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Build Your Android App?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your project requirements and get started on your Android app journey.
              </p>
            </div>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Contact Us <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

