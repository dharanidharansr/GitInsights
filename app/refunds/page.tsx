import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cancellations and Refunds - GitInsights',
  description: 'Cancellation and Refund Policy for GitInsights',
}

export default function RefundsPage() {
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
            Cancellations and Refunds Policy
          </h1>
          <p className="text-neutral-400 mb-2">
            Last Updated: December 24, 2025
          </p>

          <div className="prose prose-invert max-w-none mt-8 space-y-6 text-neutral-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Overview</h2>
              <p>
                GitInsights is a free, open-source service. We do not charge for the use of our 
                application. However, we offer an optional "Buy Me a Coffee" feature that allows 
                users to support the project through voluntary donations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">2. Free Service</h2>
              <p>
                The core GitInsights service is completely free to use:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>No subscription fees</li>
                <li>No premium tiers</li>
                <li>No hidden charges</li>
                <li>Full access to all features without payment</li>
              </ul>
              <p className="mt-3">
                Since the service is free, there are no cancellations or refunds related to service usage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">3. Voluntary Donations ("Buy Me a Coffee")</h2>
              <p>
                Users can choose to support GitInsights through voluntary donations:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Donations are completely optional</li>
                <li>Donations do not unlock additional features</li>
                <li>Donations are processed through Razorpay</li>
                <li>Donations help support the development and maintenance of GitInsights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Donation Refund Policy</h2>
              <p>
                <strong>Important:</strong> Donations made through the "Buy Me a Coffee" feature are 
                considered final and non-refundable under normal circumstances.
              </p>
              <p className="mt-3">
                However, we may consider refund requests in the following exceptional cases:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Duplicate charges:</strong> If you were charged multiple times for the same 
                  donation due to a technical error
                </li>
                <li>
                  <strong>Unauthorized charges:</strong> If you did not authorize the donation and can 
                  provide proof
                </li>
                <li>
                  <strong>Technical errors:</strong> If a payment processing error resulted in an 
                  incorrect charge amount
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">5. Refund Request Process</h2>
              <p>
                If you believe you qualify for a refund under the exceptional circumstances listed above, 
                please follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-3">
                <li>
                  Contact us at{' '}
                  <a href="mailto:support@gitinsights.dev" className="text-blue-400 hover:text-blue-300">
                    support@gitinsights.dev
                  </a>{' '}
                  within 7 days of the transaction
                </li>
                <li>Include the following information:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Transaction ID or payment reference number</li>
                    <li>Date and amount of the transaction</li>
                    <li>Detailed explanation of why you're requesting a refund</li>
                    <li>Any supporting documentation (screenshots, receipts, etc.)</li>
                  </ul>
                </li>
                <li>We will review your request within 5-7 business days</li>
                <li>If approved, refunds will be processed within 7-14 business days</li>
                <li>Refunds will be issued to the original payment method</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">6. Non-Refundable Situations</h2>
              <p>
                Refunds will NOT be provided in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Change of mind after making a voluntary donation</li>
                <li>Dissatisfaction with the free service (since it's free and optional to donate)</li>
                <li>Failure to use the service after making a donation</li>
                <li>Donations made more than 30 days ago</li>
                <li>Partial refund requests (donations are refunded in full or not at all)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">7. Payment Gateway Policies</h2>
              <p>
                All donations are processed through Razorpay. In addition to this policy, Razorpay's 
                refund policies may also apply. For more information, please review{' '}
                <a 
                  href="https://razorpay.com/terms/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Razorpay's Terms and Conditions
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">8. Chargebacks</h2>
              <p>
                If you initiate a chargeback with your bank or credit card company:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Please contact us first to try to resolve the issue</li>
                <li>Chargebacks may result in additional processing fees</li>
                <li>We will provide all necessary documentation to your financial institution</li>
                <li>Fraudulent chargebacks may result in legal action</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">9. No Subscription Cancellations</h2>
              <p>
                GitInsights does not operate on a subscription model:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>There are no recurring charges</li>
                <li>Each donation is a one-time transaction</li>
                <li>There are no subscriptions to cancel</li>
                <li>You will never be charged automatically</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">10. Service Discontinuation</h2>
              <p>
                In the unlikely event that GitInsights is discontinued:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Past donations will not be refunded</li>
                <li>The open-source code will remain available on GitHub</li>
                <li>Users can self-host the application if desired</li>
                <li>We will provide advance notice when possible</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">11. Contact for Refund Requests</h2>
              <p>
                For any questions about donations or refund requests, please contact us:
              </p>
              <p className="mt-2">
                Email: <a href="mailto:support@gitinsights.dev" className="text-blue-400 hover:text-blue-300">support@gitinsights.dev</a>
              </p>
              <p className="mt-2">
                Please include "Refund Request" in the subject line for faster processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">12. Changes to This Policy</h2>
              <p>
                We reserve the right to modify this Cancellations and Refunds Policy at any time. 
                Changes will be effective immediately upon posting to the website. Continued use of 
                the donation feature after changes constitutes acceptance of the modified policy.
              </p>
            </section>

            <div className="mt-8 p-6 bg-blue-900/20 border border-blue-800 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Summary</h3>
              <p className="text-neutral-300">
                <strong>TL;DR:</strong> GitInsights is free to use. Donations are voluntary and 
                generally non-refundable. We'll consider refunds only for technical errors, duplicate 
                charges, or unauthorized transactions within 7 days. Contact us if you have concerns.
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
