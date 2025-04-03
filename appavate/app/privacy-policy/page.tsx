import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/" className="flex items-center">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: April 3, 2025</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p>
            Appavate ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use our Android applications.
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our applications, you acknowledge that you
            have read, understood, and agree to be bound by all the terms of this Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Information We Collect</h2>
          <p>We may collect several types of information from and about users of our applications, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Data:</strong> We may collect personal information that you provide to us, such as your
              name, email address, and phone number when you register for an account or contact us.
            </li>
            <li>
              <strong>Usage Data:</strong> We may automatically collect information about how you interact with our
              applications, including the features you use, the time spent on the application, and other usage
              statistics.
            </li>
            <li>
              <strong>Device Information:</strong> We may collect information about your device, including the hardware
              model, operating system and version, unique device identifiers, and mobile network information.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our applications</li>
            <li>To notify you about changes to our applications</li>
            <li>To allow you to participate in interactive features of our applications</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our applications</li>
            <li>To monitor the usage of our applications</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Disclosure of Your Information</h2>
          <p>We may disclose your personal information in the following situations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>To Service Providers:</strong> We may share your information with third-party vendors, service
              providers, contractors, or agents who perform services for us.
            </li>
            <li>
              <strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion
              of our business to another company.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with
              your consent.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do
              so.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the
            security of any personal information we process. However, please also remember that we cannot guarantee that
            the internet itself is 100% secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Your Data Protection Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access, update, or delete your information</li>
            <li>The right to rectification</li>
            <li>The right to object to processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <div className="pl-6">
            <p>Appavate</p>
            <p>Email: privacy@appavate.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </section>
      </div>
    </div>
  )
}

