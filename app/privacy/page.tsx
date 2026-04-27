import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - GitInsights',
  description: 'Privacy Policy for GitInsights - How we handle your data',
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-neutral-400 mb-2">
            Last Updated: December 24, 2025
          </p>

          <div className="prose prose-invert max-w-none mt-8 space-y-6 text-neutral-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                GitInsights ("we", "our", or "us") is committed to protecting your privacy. This 
                Privacy Policy explains how we handle information when you use our service.
              </p>
              <p className="mt-3 font-semibold text-white">
                Important: GitInsights is a client-side application. We do not collect, store, or 
                transmit any of your personal data to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">2. Information We Don't Collect</h2>
              <p>
                GitInsights operates entirely in your browser. We do NOT collect or store:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Your GitHub username or account information</li>
                <li>Your GitHub Personal Access Token</li>
                <li>Your repository data or contribution statistics</li>
                <li>Your browsing history or activity</li>
                <li>Any personal identifiable information (PII)</li>
                <li>Cookies for tracking purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">3. How GitInsights Works</h2>
              <p>
                GitInsights is a fully client-side application that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Runs in your browser:</strong> All processing happens locally on your device
                </li>
                <li>
                  <strong>Calls GitHub API directly:</strong> Your browser makes API requests directly 
                  to GitHub, not through our servers
                </li>
                <li>
                  <strong>Stores data locally:</strong> Your GitHub token (if provided) is stored only 
                  in your browser's Local Storage
                </li>
                <li>
                  <strong>No server communication:</strong> We don't have any backend servers that receive 
                  your data
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">4. GitHub Personal Access Token</h2>
              <p>
                If you choose to provide a GitHub Personal Access Token:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>It is stored ONLY in your browser's Local Storage</li>
                <li>It is NEVER sent to our servers (we don't have servers to send it to)</li>
                <li>It is used exclusively to make API requests from your browser to GitHub</li>
                <li>You can clear it at any time by clearing your browser's Local Storage</li>
                <li>It remains on your device and is not shared with anyone</li>
              </ul>
              <p className="mt-3 text-yellow-400">
                <strong>Security Tip:</strong> Only create tokens with the minimum required permissions. 
                GitInsights only needs read access to your public repositories.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">5. GitHub API Usage</h2>
              <p>
                When you use GitInsights:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Your browser communicates directly with GitHub's API</li>
                <li>GitHub's Privacy Policy applies to data retrieved from their API</li>
                <li>We only request publicly available information (unless you provide a token)</li>
                <li>All API calls are subject to GitHub's rate limits and terms</li>
              </ul>
              <p className="mt-3">
                For more information about GitHub's data handling, please review{' '}
                <a 
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  GitHub's Privacy Policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">6. Analytics</h2>
              <p>
                We use Vercel Analytics to understand general usage patterns:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Basic page view counts</li>
                <li>General geographic region (country level)</li>
                <li>Browser and device type</li>
                <li>Referral sources</li>
              </ul>
              <p className="mt-3">
                Vercel Analytics is privacy-friendly and does not use cookies. It does not track 
                individual users or collect personal information. For more details, see{' '}
                <a 
                  href="https://vercel.com/docs/analytics/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Vercel's Analytics Privacy Policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">7. Third-Party Services</h2>
              <p>
                GitInsights integrates with the following third-party services:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>GitHub API:</strong> To fetch your repository and contribution data
                </li>
                <li>
                  <strong>Vercel:</strong> For hosting the application
                </li>
                <li>
                  <strong>Razorpay:</strong> For optional payment processing (Buy Me a Coffee feature)
                </li>
              </ul>
              <p className="mt-3">
                Each service has its own privacy policy, and your interactions with them are governed 
                by their respective policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">8. Payment Information</h2>
              <p>
                If you choose to support us via the "Buy Me a Coffee" feature:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>All payment processing is handled by Razorpay</li>
                <li>We do not store or have access to your payment card details</li>
                <li>Razorpay's privacy policy governs the handling of your payment information</li>
                <li>We only receive confirmation of successful payments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">9. Data Security</h2>
              <p>
                Since GitInsights doesn't collect or transmit your data to our servers:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>There is no central database that could be breached</li>
                <li>Your data remains on your device</li>
                <li>You have full control over your information</li>
                <li>All communication with GitHub's API uses HTTPS encryption</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">10. Your Rights</h2>
              <p>
                Since we don't collect your personal data, there's no data for you to request, 
                modify, or delete from our servers. However:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>You can clear your browser's Local Storage at any time to remove your stored token</li>
                <li>You can revoke GitHub tokens at any time through your GitHub settings</li>
                <li>You control what data GitHub shares via their API</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">11. Children's Privacy</h2>
              <p>
                GitInsights is not directed to children under 13. We do not knowingly collect 
                information from children. Since we don't collect any data at all, this is not a concern.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">12. Open Source</h2>
              <p>
                GitInsights is open source. You can review our code on{' '}
                <a 
                  href="https://github.com/dharanidharansr/GitInsights" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  GitHub
                </a>{' '}
                to verify our privacy claims and see exactly how the application works.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">13. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify users of any 
                material changes by updating the "Last Updated" date at the top of this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">14. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p className="mt-2">
                Email: <a href="mailto:support@gitinsights.dev" className="text-blue-400 hover:text-blue-300">support@gitinsights.dev</a>
              </p>
              <p className="mt-2">
                GitHub: <a href="https://github.com/dharanidharansr/GitInsights" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">github.com/dharanidharansr/GitInsights</a>
              </p>
            </section>

            <div className="mt-8 p-6 bg-green-900/20 border border-green-800 rounded-lg">
              <h3 className="text-xl font-semibold text-green-400 mb-3">Summary</h3>
              <p className="text-neutral-300">
                <strong>TL;DR:</strong> GitInsights is a privacy-first application. We don't collect, 
                store, or transmit your personal data. Everything runs in your browser. Your GitHub 
                token (if provided) stays on your device. We use privacy-friendly analytics to understand 
                general usage. That's it!
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
