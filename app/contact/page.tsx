import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Github, Twitter, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - GitInsights',
  description: 'Get in touch with the GitInsights team. We\'d love to hear from you!',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-neutral-400 text-lg mb-8">
            We'd love to hear from you! Get in touch with the GitInsights team.
          </p>

          <div className="space-y-6">
            <div className="border-t border-neutral-800 pt-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
              
              <div className="space-y-4">
                <a 
                  href="mailto:support@gitinsights.dev" 
                  className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-neutral-700 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm text-neutral-500">support@gitinsights.dev</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/dharanidharansr/GitInsights" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-neutral-700 transition-colors">
                    <Github size={24} />
                  </div>
                  <div>
                    <div className="font-medium">GitHub Repository</div>
                    <div className="text-sm text-neutral-500">Report issues or contribute</div>
                  </div>
                </a>

                <a 
                  href="https://twitter.com/dharanidharansr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-neutral-700 transition-colors">
                    <Twitter size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Twitter</div>
                    <div className="text-sm text-neutral-500">@dharanidharansr</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-white mb-2">How do I report a bug?</h3>
                  <p className="text-neutral-400">
                    Please open an issue on our GitHub repository with details about the bug, 
                    steps to reproduce it, and your browser/system information.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-white mb-2">Can I request a feature?</h3>
                  <p className="text-neutral-400">
                    Absolutely! We welcome feature requests on GitHub or via email. 
                    Let us know what you'd like to see in GitInsights.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-white mb-2">Is my GitHub token secure?</h3>
                  <p className="text-neutral-400">
                    Yes! Your token is only stored in your browser's local storage and is never 
                    sent to our servers. All API calls are made directly from your browser to GitHub.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-white mb-2">How can I contribute?</h3>
                  <p className="text-neutral-400">
                    We're open source! Check out our GitHub repository, fork it, make your changes, 
                    and submit a pull request. We appreciate all contributions!
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Business Inquiries</h2>
              <p className="text-neutral-400">
                For partnerships, sponsorships, or other business inquiries, please email us at{' '}
                <a href="mailto:business@gitinsights.dev" className="text-blue-400 hover:text-blue-300 transition-colors">
                  business@gitinsights.dev
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-neutral-500 text-sm">
          <p>© 2025 GitInsights. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
