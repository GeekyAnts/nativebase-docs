import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './styles.module.css';
import { PolicyAcceptDialog } from './../components/Home';
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} | A complete component library for React Ecosystem`}
      description="A complete component library for React Ecosystem"
    >
      <Head>
        <meta property="og:title" content="NativeBase" />
        <meta
          property="og:description"
          content="A Complete Component Library for the React Ecosystem"
        />
        <meta
          name="keywords"
          content="Open Source, OSS, Component Library, React, React Native, Accessible, Consistent, Responsive, Utility Props"
        />
        <meta
          property="og:url"
          content="[https://nativebase.io](https://nativebase.io/)"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="NativeBase" />
        <meta name="twitter:image:alt" content="NativeBase" />
        <meta property="og:image" content="/img/nativebase-og.png" />
        <meta name="twitter:site" content="@NativeBaseIO" />
      </Head>
      <main id="tailwind">
        <section
          className={
            styles.features + 'flex-1 font-inter overflow-hidden my-20 mx-5'
          }
        >
          <h1 className="h1 font-black">End User License Agreement</h1>
          <p>
            <strong>IMPORTANT. READ CAREFULLY:</strong>
          </p>
          <p>
            This End User License Agreement is deemed to have been executed in
            Bangalore, India, between GeekyAnts Software Private Limited and the
            End User, upon using the NativeBase:
          </p>
          <p>
            Whereas GeekyAnts Software Private Limited (Company) also referred
            to as ‘Company’,’Us’ ‘We’ and ‘Our’, is the proposition, planner,
            designer, and developer of the GeekyAnts Software, having its office
            at No. 18, 2nd Cross Road, N S Palya, 2nd Stage BTM Layout Bengaluru
            – 560076, Karnataka, India, and is thereby, the owner and proprietor
            of the said Software.
          </p>
          <p>
            And Whereas Person/Form/Association of Persons/Company may use the
            GeekyAnts Software for developing their respective products, other
            than developing similar product by using its methods etc., and such
            Person/Form/Association of Persons/Company is/are hereunder called
            and referred to as the ‘End User’, ‘Customer’ or ‘You’.
          </p>
          <p>
            This Agreement shall come into effect upon the commencement of use
            by End User either on payment of prescribed user fee, or upon
            commencement of use without fee.
          </p>
          <p>
            <strong>1. DEFINITIONS</strong>
          </p>
          <ul>
            <li>
              ‘Effective date’ means the date on which the Software is first
              made available to You.
            </li>
            <li>
              ‘NativeBase’ and ‘Software’ means the product called NativeBase
              and other web applications, owned and managed by GeekyAnts
              Software Private Limited.
            </li>
            <li>
              ‘Paid version’ means the use of licensed GeekyAnts Software on
              payment of prescribed Fee, with specified access to its features.
            </li>
            <li>
              ‘Trial version’ means use of GeekyAnts Software without payment of
              fees.
            </li>
            <li>
              ‘Updates’ means any modified versions and/or additions to the
              GeekyAnts Software.
            </li>
            <li>
              ‘Site’ means the website for GeekyAnts Software Private Limited (
              <a href="https://nativebase.io/">https://nativebase.io/</a>).
            </li>
            <li>
              ‘Service’ means creating projects by accessing{' '}
              <a href="https://nativebase.io/">https://nativebase.io/</a>.
            </li>
            <li>
              ‘You’ means the final and/or end user/consumer of GeekyAnts
              Software or his/her/its legally authorized representative/s.
            </li>
          </ul>
          <p>
            <strong> 2. TERMS OF USE OF NativeBase.</strong>
          </p>
          <ul>
            <li>
              <p>
                These Terms of Use of NativeBase (hereinafter referred to as
                ‘Terms’) constitute a legally binding agreement made between You
                and GeekyAnts Software Private Limited, having its registered
                office at No.18, 2nd Cross Road, N.S Palya, 2nd Stage BTM Layout
                Bengaluru – 560076, Karnataka, India (hereinafter referred to as
                ‘We’, ‘Us’, or ‘Company’) concerning your access to and use of
                the GeekyAnts Software (hereinafter referred to as ‘Software’).
              </p>
            </li>
            <li>
              <p>
                You agree by accessing the Software that You have read,
                understood and agree to be bound by all the Terms of Use of this
                End User Agreement.
              </p>
            </li>
            <li>
              <p>
                If You do not agree to these Terms, then You shall be prohibited
                from accessing/using/ browsing the Software. We recommend that
                you print a copy of these Terms of Use for future reference.
              </p>
            </li>
            <li>
              <p>
                We reserve the right to alter/change these End User Terms at our
                own discretion. The updated version of GeekyAnts Software End
                User Terms will be made available on the NativeBase website. The
                updated version shall stand in effect from the very moment that
                it becomes accessible to End User. The continued use of the Site
                by You shall be regarded as Your consent to use the updated
                version of the GeekyAnts Software End User Terms.
              </p>
            </li>
            <li>
              <p>
                In order to demonstrate changes as per the requirements of our
                users, product, legal and business, we reserve the right to
                update or change the Site whenever we deem it necessary. There
                is a possibility that the Site might contain certain kind of
                information pertaining to the Services which might not be
                entirely accurate. We reserve the right to remove such
                inaccuracies, defects and make up for the omissions. We reserve
                the right to change/update the information at any time without
                any prior notice to that effect.
              </p>
            </li>
            <li>
              <p>
                Additional policies which also apply to Your use of the Software
                include:
              </p>
              <ul>
                <li>
                  Our Privacy Policy ({' '}
                  <a href="/privacy-policy/">
                    https://nativebase.io/privacy-policy/
                  </a>
                  )
                </li>
                <li>
                  Our Cookie Policy ({' '}
                  <a href="/cookiepolicy">
                    https://nativebase.io/cookie-policy
                  </a>{' '}
                  )
                </li>
              </ul>
              <p>
                In case of conflict between the privacy policy and/or cookie
                policy and/or EULA, the EULA shall supersede.
              </p>
            </li>
          </ul>
          <p>
            <strong> 3. LICENSE</strong>
          </p>
          <ul>
            <li>
              The GeekyAnts Software is licensed and not sold, and We reserve
              all rights of the Software. The license remains valid only for the
              period for which payment is made.
            </li>
            <li>
              There are two basic versions of the Software which are available
              for use, namely a trial version and a paid version. You may use
              the Software free of cost via the trial version and it will
              continue to be made available to you via the paid version. The
              amount required to be paid in order to access the Paid version may
              undergo revision/ improvement/ upgrades from time to time. You may
              choose to discontinue the use of the Software from the following
              month in case the revised amount is not agreeable to You. These
              Terms of Use and any policies or operating rules posted by us on
              the Site or in respect to the use of the Software constitute the
              entire agreement and understanding between You and Us.
            </li>
            <li>
              The Company is and remains the owner of any intellectual property
              rights with respect to the Software.
            </li>
            <li>
              Your license is valid for a month from the date of purchase. (For
              instance, if You purchase the license on 24/07/2019, it shall be
              valid till 24/08/2019). You will have to renew this license, to
              continue using the Software, unless You have opted for auto
              renewal.
            </li>
            <li>
              If You fail to renew Your license, Your access shall fall back to
              the free-version of the Software, or be cancelled, whichever
              applicable.
            </li>
          </ul>
          <p>
            <strong>4. ACCEPTABLE USE</strong>
          </p>
          <p>
            You may not access or use the Software for any purpose other than
            what the Software is intended for and its use is permitted by us to
            you on payment of the prescribed Fee or without payment of Fee as
            Trial version. As an End User of this Software, You agree not to:
          </p>
          <ul>
            <li>
              Rent, lease, lend, sell, redistribute, sublicense, commercially
              exploit either the Paid version or the Trial version.
            </li>
            <li>
              Assign the paid version or the trial version to any third party.
            </li>
            <li>
              Use the paid or trial version for any unlawful or illegal activity
              or to facilitate any unlawful or illegal activity.
            </li>
            <li>
              Delete or alter any disclaimers, warnings, copyrights or other
              proprietary notices accompanying the Site.
            </li>
            <li>
              Copy, adapt, translate, decompile, reverse engineer, disassemble,
              attempt to derive the source code, modify or create derivative
              works of the Software or any part thereof, except to the extent
              permitted by the applicable law.
            </li>
            <li>
              Copy, store, host, send, use, publish or distribute any material
              which consists of any spyware, computer virus, trojan horse or any
              other malicious Software.
            </li>
            <li>Engage in unauthorized framing of or linkage of the Site.</li>
            <li>
              Use any information obtained from the Software in order to harass,
              abuse, or harm another person.
            </li>
            <li>
              Use the Software or our content as part of any effort to compete
              with us or to create a revenue- generating endeavor or commercial
              enterprise.
            </li>
            <li>
              Attempt to impersonate another user or person, or use the username
              of another user.
            </li>
          </ul>
          <p>
            <strong> 5. FEE PAYABLE BY USER for NativeBase:</strong>
          </p>
          <ul>
            <li>
              The End User shall pay the Fee for use of the Software, as
              indicated in the following{' '}
              <strong>
                <span className="underline">link</span>
              </strong>
              . Fees are mentioned exclusive of any taxes, levies, duties, or
              similar governmental assessments of any nature, including,
              value-added, sales, use or withholding taxes, which can be
              accessed by any jurisdiction (collectively, ‘Taxes’). Customer
              will be responsible for paying all Taxes associated with its
              purchases, except for those taxes based on our net income. Should
              any payment for the Services be subject to withholding tax by any
              government, Customer will reimburse us for such withholding tax.
            </li>
            <li>
              GeekyAnts Software Private Limited may accept the payment for
              licensing of the Software via its payment collection agent and/or
              Software distributor/ re-distributor located in different
              jurisdictions. Even if you are purchasing a license for use of the
              Software via one of the above, these Terms will still be
              applicable to you, unless specifically excluded.
            </li>
            <li>
              On successful receipt of payment by Us, We will communicate the
              same and permit You to use the Software with full access to its
              features, till Your permit expires, as per the Terms of this
              Agreement.
            </li>
            <li>
              On receipt of the Fee amount, a receipt to that effect will be
              generated, which is subject to further confirmation by us, through
              an email communication from Us, which will be received by You
              within 24 hours, from the time of transfer of fee, and immediately
              thereafter You will be able to get full access to the Software.
            </li>
            <li>
              If for any reason, the payment made by You is not credited in the
              account of the Company or is refunded back to you, then You are
              not permitted to use the Software.
            </li>
            <li>
              The End Users are hereby warned and prohibited from making any
              attempt to pay the Fee through fraudulent or unlawful means. If We
              comes to know about the same, then We reserve the right to cancel
              the permission/access granted to You to use the Software and also
              inform the concerned and/or jurisdictional Authorities to
              intervene and take necessary action against You.
            </li>
          </ul>
          <p>
            <strong> 6. USE OF DATA</strong>
          </p>
          <ul>
            <li>
              We receive your metadata which is sent with every request and it
              includes your system’s operating system details, browser details
              and IP address, for the sole purpose of generating usage
              statistics, analytics and crash reports in order to orchestrate a
              better experience for You while You use the Software. We collect
              your name, Email ID and may use this information for internal
              purposes like analytics, sending emails and support. We will not
              sell your information to any third party organization.
            </li>
            <li>
              We may send You emails regarding updates, promotions, license and
              any other relevant information. You have the option of opting out
              of promotional and update emails. To do so please write to us at
              legal@geekyants.com.
            </li>
            <li>
              It is up to You to share your app state with Us while reporting an
              issue.
            </li>
            <li>
              We use Google Analytics for tracking sessions of users which
              include pages and actions inside the pages. We use Google Adsense
              for advertisement and promotion of the Software. We use email
              service providers like MailChimp for email distribution and
              tracking. We use various Server Providers for hosting and managing
              of the Software.
            </li>
            <li>
              NativeBase can your basic information like Name, Profile Picture,
              your review of our website, on its website and other promotional
              publication materials under the clients section.
            </li>
          </ul>
          <p>
            <strong> 7. DISCLAIMER/ LIMITATION OF LIABILITY</strong>
          </p>
          <ul>
            <li>
              <p>
                You agree that the use of the Software by You will be solely at
                Your own risk, except as expressly set out in these Terms. All
                warranties, terms, conditions and undertakings, express or
                implied ( including by statute, custom, usage, a course of
                dealing or common law) in connection with the Software and
                respective services and Your use thereof, including the implied
                warranties of satisfactory quality, accuracy and
                non-infringement are excluded to the fullest extent permitted by
                the applicable law.
              </p>
            </li>
            <li>
              <p>
                We are not responsible or liable for any failure to perform or
                delay in performing our obligations under these Terms to the
                extent that the failure or delay is caused by circumstances
                beyond our reasonable control (including but not limited to
                Labour disputes, Act of God, War or Terrorist activity,
                Malicious damage, Accidents or Compliance with any applicable
                law or government order). We will endeavour to minimise the
                effects of any of these events and to perform the obligations
                that aren’t affected diligently.
              </p>
            </li>
            <li>
              <p>Our responsibility for loss or damage suffered by You:</p>
              <ul>
                <li>
                  We will be responsible for any loss or damage that You suffer
                  which arises out of Our failure in complying with these Terms,
                  provided that it is a foreseeable result of Our breach of
                  these Terms. Provided further, that we would not be
                  responsible for any loss(es) or damage(s) that was/were not
                  foreseeable at the time You started using the Site/Services.
                </li>
                <li>
                  Notwithstanding anything contrary to the clauses contained in
                  the Disclaimer/Limitation of Liability section, our liability
                  to You for any cause whatsoever and regardless of the form of
                  the action, will at all times be limited to a total aggregate
                  amount equal to the greater of (a) the sum of INR 1000 or (b)
                  the amount paid, if any, by You to us for the Services/Site
                  during the six (6) month period prior to any cause of action
                  arising.
                </li>
                <li>
                  We will not be liable to You for any loss or damage, whether
                  in contract, tort (including negligence), breach of statutory
                  duty, or otherwise, even if foreseeable, arising under or in
                  connection with the use of, or inability to use, our
                  Site/Services or with the use of or reliance on any content
                  displayed on our Site.
                </li>
                <li>
                  In particular, we will not be liable for:
                  <ul>
                    <li>loss of profits, sales, business, or revenue;</li>
                    <li>business interruption;</li>
                    <li>loss of anticipated savings;</li>
                    <li>
                      loss of business opportunity, goodwill or reputation;
                      and/or
                    </li>
                    <li>any indirect or consequential loss or damage.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            <strong>8. INDEMNITY</strong>
          </p>
          <p>
            You agree to hold harmless and indemnify GeekyAnts Software Private
            Limited and its holdings, subsidiaries, affiliates, officers,
            agents, and employees from and against any claim, suit or action
            arising from or in any way related to Your misuse of the Software or
            violation of this Agreement on Your part, including any liability or
            expense arising from all claims, losses, damages, suits, judgments,
            litigation costs and attorneys' fees, of every kind and nature.
          </p>
          <p>
            <strong>9. TERMINATION</strong>
          </p>
          <ul>
            <li>
              These Terms of Use shall remain in full force and effect while You
              use the Software as applicable. You may terminate Your use or
              participation at any time, for any reason by discontinuing Your
              use of the Software.
            </li>
            <li>
              Without limiting any other provision to these Terms, we reserve
              the right, at our sole discretion and without liability, to
              terminate access to the Software to any person for any reason,
              including, but not limited to breach of any representation,
              warranty or covenant contained in these Terms or of any applicable
              law or regulation.
            </li>
            <li>
              In the event where We terminate your account unreasonably and
              prior to the completion of services, we will refund the amount
              received from You for the said services for the unutilized period
              back to You, but You will not have any additional claim against us
              towards compensation or damages whatsoever. If we issue a refund,
              we are under no obligation to do the same in the future.
            </li>
            <li>
              If We terminate or suspend Your account before the stipulated
              period on account of non-compliance with the Terms, You are
              prohibited from using and/or accessing this Software and You shall
              not receive a refund of any amount, if paid by You.
            </li>
            <li>
              In addition to terminating or suspending Your account, we reserve
              the right to take appropriate legal action, including, but not
              limited to civil, criminal and injunctive redress.
            </li>
          </ul>
          <p>
            <strong>10. GENERAL</strong>
          </p>
          <ul>
            <li>
              <p>
                This agreement embodies the entire understanding between the
                parties with respect to the subject matter of this agreement. By
                downloading NativeBase, You consent to receive electronic
                communications and agree that all agreements, notices,
                disclosures, and other communications we provide to You
                electronically, via email or through Our Site, which shall
                satisfy any and all legal requirement/s shall be in writing.
              </p>
            </li>
            <li>
              <p>
                Our failure to exercise or enforce any right or provision of
                these Terms shall not operate as a waiver of such right or
                provision.
              </p>
            </li>
            <li>
              <p>
                We may assign all of our rights and obligations to others at any
                time.
              </p>
            </li>
            <li>
              <p>
                If any provision or part of a provision of these Terms is
                unlawful, void or unenforceable, that provision or part of the
                provision is deemed severable from these Terms and does not
                affect the validity and enforceability of the remaining
                provisions.
              </p>
            </li>
            <li>
              <p>
                There is no joint venture, partnership, employment or agency
                relationship created between You and Us as a result of these
                Terms or use of the Site or Services.
              </p>
            </li>
            <li>
              <p>
                You acknowledge that the configurations or the arrangements of
                NativeBase or Data which we have installed is subject to
                Copyright, and in the absence of our written permission, shall
                not construe that You have been granted a license or permission
                to copy the configuration or arrangement onto any system.
              </p>
            </li>
            <li>
              <p>
                We reserve the right to refuse granting any permissions to You
                if You are not aligned with our business operating principles
                and policies.
              </p>
            </li>
            <li>
              <p>
                We shall not be responsible or liable for any loss, damage,
                delay or failure to act which is beyond our control.
              </p>
            </li>
            <li>
              <p>
                These Terms shall be governed and construed in accordance with
                the Laws of India, and any dispute relating to these Terms will
                be subjected to the exclusive jurisdiction of the courts of
                Bengaluru, Karnataka, India.
              </p>
            </li>
            <li>
              <p>
                A person who is not a party to this End User License Agreement
                cannot enforce any of the Terms of the same of whatsoever
                nature.
              </p>
              <p>
                Notwithstanding anything contained in this End User License
                Agreement or any law of End User State/Country, You and the
                Company emphatically agree that each may bring claims against
                each other only in its individual capacity, and not through any
                purported class or representative action
              </p>
            </li>
          </ul>
          <p>
            <strong>11. CONTACT</strong>
          </p>
          <p>
            For any questions, comments, or clarifications about this policy,
            email us at legal@geekyants.com or by post to:
          </p>
          <p>
            Apoorva Sahu, Director
            <br />
            GeekyAnts Software Private Limited,
            <br />
            No. 18, 2nd Cross Road,
            <br />
            N S Palya, 2nd Stage BTM Layout
            <br />
            Bangalore – 560076, Karnataka, India.
          </p>
        </section>
        <PolicyAcceptDialog />
      </main>
    </Layout>
  );
}

export default Home;
