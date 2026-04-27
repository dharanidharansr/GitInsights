import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms and Conditions - GitInsights',
  description: 'Terms and Conditions for using GitInsights',
}

export default function TermsPage() {
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
            Terms and Conditions
          </h1>
          <p className="text-neutral-400 mb-2">
            Last Updated: December 24, 2025
          </p>

          <div className="prose prose-invert max-w-none mt-8 space-y-6 text-neutral-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using GitInsights ("the Service"), you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily use GitInsights for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on GitInsights</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">3. User Accounts and GitHub Integration</h2>
              <p>
                GitInsights uses GitHub's API to fetch your public repository data and contribution 
                statistics. By using this service:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>You must comply with GitHub's Terms of Service</li>
                <li>You are responsible for maintaining the security of your GitHub Personal Access Token</li>
                <li>You understand that your token is stored locally in your browser and never sent to our servers</li>
                <li>You agree to use the service only with your own GitHub account or accounts you have permission to access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Disclaimer</h2>
              <p>
                The materials on GitInsights are provided on an 'as is' basis. GitInsights makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including, without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property or 
                other violation of rights.
              </p>
              <p className="mt-3">
                Further, GitInsights does not warrant or make any representations concerning the 
                accuracy, likely results, or reliability of the use of the materials on its website 
                or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">5. Limitations</h2>
              <p>
                In no event shall GitInsights or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use GitInsights, even if GitInsights or a 
                GitInsights authorized representative has been notified orally or in writing of the 
                possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">6. GitHub API Usage</h2>
              <p>
                GitInsights accesses the GitHub API on your behalf. You acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>GitHub API rate limits apply to your usage</li>
                <li>We are not responsible for any changes to the GitHub API that may affect the service</li>
                <li>Your use of the service is subject to GitHub's API Terms and Conditions</li>
                <li>All data displayed is fetched in real-time from GitHub's public API</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">7. Accuracy of Materials</h2>
              <p>
                The materials appearing on GitInsights could include technical, typographical, or 
                photographic errors. GitInsights does not warrant that any of the materials on its 
                website are accurate, complete or current. GitInsights may make changes to the 
                materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">8. Links</h2>
              <p>
                GitInsights has not reviewed all of the sites linked to its website and is not 
                responsible for the contents of any such linked site. The inclusion of any link 
                does not imply endorsement by GitInsights of the site. Use of any such linked 
                website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">9. Modifications</h2>
              <p>
                GitInsights may revise these terms of service at any time without notice. By using 
                this website you are agreeing to be bound by the then current version of these terms 
                of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">10. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">11. Open Source</h2>
              <p>
                GitInsights is an open-source project. The source code is available under the MIT 
                License on GitHub. Contributions are welcome and subject to the project's contribution 
                guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="mt-2">
                Email: <a href="mailto:support@gitinsights.dev" className="text-blue-400 hover:text-blue-300">support@gitinsights.dev</a>
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 text-center text-neutral-500 text-sm">
          <p>© 2025 GitInsights. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
