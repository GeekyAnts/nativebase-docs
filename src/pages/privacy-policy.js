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
          <h1 className="h1 font-black">Privacy Policy</h1>
          <p>
            This privacy policy has been compiled to better serve those who are
            concerned with how their ‘Personal Information’ or 'Personally
            Identifiable Information' (PII) is being used online.
          </p>
          <p>
            Personal Information, as per the General Data Protection Regulation
            (GDPR) means and includes all the information relating to an
            identified or identifiable natural person.
          </p>
          <p>
            PII, as described in US privacy law and information security, is
            information that can be used on its own or with other information to
            identify, contact, or locate a single person, or to identify an
            individual in context.
          </p>
          <p>
            Please read our privacy policy carefully to get a clear
            understanding of how we collect, use, protect or otherwise handle
            your Personal Information or Personally Identifiable Information in
            accordance with our website.
          </p>
          <p>
            This privacy policy shall be applicable for the users of{' '}
            <a href="https://nativebase.io">https://nativebase.io</a>.
          </p>
          <p>
            <strong>
              What personal information do we collect from the people that visit
              our blog, website or app?
            </strong>
          </p>
          <p>
            When ordering or registering on our site, as appropriate, you may be
            asked to enter your name, email address, mailing address, phone
            number, credit card information or other details to help you with
            your experience.
          </p>
          <p>
            When using the web app, we collect your system's operating system
            details, browser details and IP address, for the sole purpose of
            generating usage statistics, analytics and crash reports in order to
            orchestrate a better experience for You while You use the Software.
            We collect your name, Email ID and may use this information for
            internal purposes like analytics, sending emails and support.
          </p>
          <p>
            It is upto you to share your app state while reporting an issue.
          </p>
          <p>
            <strong>When do we collect information?</strong>
          </p>
          <p>
            We collect information from you when you register on our site, when
            you use the NativeBase website or app, place an order, subscribe to
            a newsletter, respond to a survey, fill out a form, use live chat,
            open a support ticket or enter information on our site or use the
            app.
          </p>
          <p>
            <strong>How do we use your information?</strong>
          </p>
          <p>
            We may use the information we collect from you when you register,
            make a purchase, sign up for our newsletter, respond to a survey or
            marketing communication, surf the website, or use certain other site
            features in the following ways:
          </p>
          <ul>
            <li>
              To personalize your experience and to allow us to deliver the type
              of content and product offerings in which you are most interested.
            </li>
            <li>
              To improve our website and app in order to better serve you.
            </li>
            <li>
              To allow us to better service you in responding to your customer
              service requests.
            </li>
            <li>
              To administer a contest, promotion, survey or other site feature.
            </li>
            <li>To quickly process your transactions.</li>
            <li>To ask for ratings and reviews of services or products.</li>
            <li>
              To follow up with them after correspondence (live chat, email or
              phone inquiries).
            </li>
          </ul>
          <p>
            <strong>How do we protect your information?</strong>
          </p>
          <p>
            Our website is scanned on a regular basis for security holes and
            known vulnerabilities in order to make your visit to our site as
            safe as possible.
          </p>
          <p>We use regular Malware Scanning.</p>
          <p>
            Your personal information is contained behind secured networks and
            is only accessible by a limited number of persons who have special
            access rights to such systems, and are required to keep the
            information confidential. In addition, all sensitive/credit
            information you supply is encrypted via Secure Socket Layer (SSL)
            technology.
          </p>
          <p>
            We implement a variety of security measures when a user places an
            order enters, submits, or accesses their information to maintain the
            safety of your personal information.
          </p>
          <p>
            All transactions are processed through a gateway provider and are
            not stored or processed on our servers.
          </p>
          <p>
            <strong>Do we use 'cookies'?</strong>
          </p>
          <p>
            Yes. Cookies are small files that a site or its service provider
            transfers to your computer's hard drive through your Web browser (if
            you allow) that enables the site's or service provider's systems to
            recognize your browser and capture and remember certain information.
            For instance, we use cookies to help us remember and process the
            items in your shopping cart. They are also used to help us
            understand your preferences based on previous or current site
            activity, which enables us to provide you with improved services. We
            also use cookies to help us compile aggregate data about site
            traffic and site interaction so that we can offer better site
            experiences and tools in the future.
          </p>
          <p>
            <strong>We use cookies to:</strong>
          </p>
          <ul>
            <li>Help remember and process the items in the shopping cart.</li>
            <li>Understand and save user's preferences for future visits.</li>
            <li>Keep track of advertisements.</li>
            <li>
              Compile aggregate data about site traffic and site interactions in
              order to offer better site experiences and tools in the future. We
              may also use trusted third-party services that track this
              information on our behalf.
            </li>
          </ul>
          <p>
            <strong>If users disable cookies in their browsers</strong>
          </p>
          <p>
            If you turn cookies off, it will turn off some of the features of
            the site.
          </p>
          <p>
            For more information, please refer to our cookie policy{' '}
            <a href="https://nativebase.io/cookie-policy">
              https://nativebase.io/cookie-policy
            </a>
            .
          </p>
          <p>
            <strong>Data Retention</strong>
          </p>
          <p>
            We will hold your information for as long as necessary to fulfill
            the purposes set forth in this Policy or as long as we are legally
            required or permitted to do so. Information may persist in copies
            made for backup and business continuity purposes for additional
            time.
          </p>
          <p>
            <strong>Your Choices and Rights</strong>
          </p>
          <p>You have,</p>
          <ul>
            <li>the right to be informed;</li>
            <li>the right of access;</li>
            <li>the right to rectification;</li>
            <li>the right to erasure;</li>
            <li>the right to restrict processing;</li>
            <li>the right to data portability;</li>
            <li>the right to object; and,</li>
            <li>
              the right not to be subject to automated decision-making including
              profiling.
            </li>
          </ul>
          <p>
            You have the right to complain to us if you think there is an issue
            in how we are handling your data via email to
            <a href="mailto:legal@geekyants.com">legal@geekyants.com</a> or
            reach out to relevant government authority.
          </p>
          <p>
            <strong>Access To Your Personal Data</strong>
          </p>
          <p>
            Upon request we will provide you with information about whether we
            hold, or process on behalf of a third party, any of your personal
            data. You may access, correct, or request deletion of your personal
            data by logging into your account, contacting us at{' '}
            <a href="mailto:legal@geekyants.com">legal@geekyants.com</a> . We
            will respond to you within 1 month of your request.
          </p>
          <p>
            <strong>Deleting your account</strong>
          </p>
          <p>
            You may choose to close your account at any time. You can request
            that we close it for you by writing to us at{' '}
            <a href="mailto:legal@geekyants.com">legal@geekyants.com</a> .
          </p>
          <p>
            <strong>Third-party disclosure</strong>
          </p>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your
            Personally Identifiable Information unless we provide users with
            advance notice. This does not include website hosting partners and
            other parties who assist us in operating our website, marketing,
            advertising, conducting our business, or serving our users, so long
            as those parties agree to keep this information confidential. We may
            also release information when it's release is appropriate to comply
            with the law, enforce our site policies, or protect ours or others'
            rights, property or safety.
          </p>
          <p>
            <strong>Third-party links</strong>
          </p>
          <p>
            Occasionally, at our discretion, we may include or offer third-party
            products or services on our website. These third-party sites have
            separate and independent privacy policies. We therefore have no
            responsibility or liability for the content and activities of these
            linked sites. Nonetheless, we seek to protect the integrity of our
            site and welcome any feedback about these sites.
          </p>
          <p>
            <strong>Google</strong>
          </p>
          <p>
            Google's advertising requirements can be summed up by{' '}
            <a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en">
              Google's Advertising Principles
            </a>
            . They are put in place to provide a positive experience for users.
          </p>
          <p>We use Google AdSense Advertising on our website.</p>
          <p>
            Google, as a third-party vendor, uses cookies to serve ads on our
            site. Google's use of the DART cookie enables it to serve ads to our
            users based on previous visits to our site and other sites on the
            Internet. Users may opt-out of the use of the DART cookie by
            visiting the Google Ad and Content Network privacy policy.
          </p>
          <p>
            <strong>We have implemented the following</strong>
          </p>
          <ul>
            <li>Remarketing with Google AdSense</li>
            <li>Google Display Network Impression Reporting</li>
            <li>Demographics and Interests Reporting</li>
            <li>DoubleClick Platform Integration</li>
          </ul>
          <p>
            We, along with third-party vendors such as Google use first-party
            cookies (such as the Google Analytics cookies) and third-party
            cookies (such as the DoubleClick cookie) or other third-party
            identifiers together to compile data regarding user interactions
            with ad impressions and other ad service functions as they relate to
            our website.
          </p>
          <p>
            <strong>Opting out</strong>
          </p>
          <p>
            Users can set preferences for how Google advertises to you using the
            Google Ad Settings page. Alternatively, you can opt out by visiting
            the Network Advertising Initiative Opt Out page or by using the
            Google Analytics Opt Out Browser add on.
          </p>
          <p>
            <strong>California Online Privacy Protection Act</strong>
          </p>
          <p>
            CalOPPA is the first state law in the USA to require commercial
            websites and online services to post a privacy policy. The law's
            reach stretches well beyond California to require any person or
            company in the United States (and conceivably the world) that
            operates websites collecting Personally Identifiable Information
            from California consumers to post a conspicuous privacy policy on
            its website stating exactly the information being collected and
            those individuals or companies with whom it is being shared. To see
            more at:{' '}
            <a href="http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf">
              Click here
            </a>
          </p>
          <p>
            <strong>According to CalOPPA, we agree to the following</strong>
          </p>
          <p>Users can visit our site anonymously.</p>
          <p>
            Once this privacy policy is created, we will add a link to it on our
            home page or as a minimum, on the first significant page after
            entering our website.
          </p>
          <p>
            Our Privacy Policy link includes the word 'Privacy' and can easily
            be found on the page specified above.
          </p>
          <p>You will be notified of any Privacy Policy changes:</p>
          <ul>
            <li>On our Privacy Policy Page</li>
          </ul>
          <p>Can change your personal information:</p>
          <ul>
            <li>By logging in to your account</li>
          </ul>
          <p>
            <strong>How does our site handle Do Not Track signals?</strong>
          </p>
          <p>
            We honor Do Not Track signals and Do Not Track, plant cookies, or
            use advertising when a Do Not Track (DNT) browser mechanism is in
            place.
          </p>
          <p>
            <strong>
              Does our site allow third-party behavioral tracking?
            </strong>
          </p>
          <p>
            It's also important to note that we allow third-party behavioral
            tracking
          </p>
          <p>
            <strong>COPPA (Children’s Online Privacy Protection Act)</strong>
          </p>
          <p>
            When it comes to the collection of personal information from
            children under the age of 13 years old, the Children's Online
            Privacy Protection Act (COPPA) puts parents in control. The Federal
            Trade Commission, United States' consumer protection agency,
            enforces the COPPA Rule, which spells out what operators of websites
            and online services must do to protect children's privacy and safety
            online.
          </p>
          <p>
            We do not specifically market to children under the age of 13 years
            old.
          </p>
          <p>
            <strong>Fair Information Practices</strong>
          </p>
          <p>
            The Fair Information Practices Principles form the backbone of
            privacy law in the United States and the concepts they include have
            played a significant role in the development of data protection laws
            around the globe. Understanding the Fair Information Practice
            Principles and how they should be implemented is critical to comply
            with the various privacy laws that protect personal information.
          </p>
          <p>
            <strong>
              In order to be in line with Fair Information Practices we will
              take the following responsive action, should a data breach occur
            </strong>
          </p>
          <p>We will notify you via email</p>
          <ul>
            <li>Within 7 business days</li>
          </ul>
          <p>
            We also agree to the Individual Redress Principle which requires
            that individuals have the right to legally pursue enforceable rights
            against data collectors and processors who fail to adhere to the
            law. This principle requires not only that individuals have
            enforceable rights against data users, but also that individuals
            have recourse to courts or government agencies to investigate and/or
            prosecute non-compliance by data processors.
          </p>
          <p>
            <strong>Contacting Us</strong>
          </p>
          <p>
            If there are any questions regarding this privacy policy, you may
            email us at{' '}
            <a href="mailto:legal@geekyants.com">legal@geekyants.com</a> or send
            us a post to:
          </p>
          <p>
            Apoorva Sahu (Director)
            <br />
            GeekyAnts Software Pvt. Ltd.
            <br />
            No. 18, 2nd Cross Road,
            <br />
            N.S Palya, 2nd Stage BTM Layout
            <br />
            Bangalore – 560076, Karnataka, India
          </p>
        </section>
        <PolicyAcceptDialog />
      </main>
    </Layout>
  );
}

export default Home;
