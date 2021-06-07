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
      title={`Cookie Policy - ${siteConfig.title} | A complete component library for React Ecosystem`}
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
      <main className="tailwind">
        <section
          className={
            styles.features + 'flex-1 font-inter overflow-hidden my-20 mx-5'
          }
        >
          <h1 className="h1 font-black">Cookie Policy</h1>
          <p>
            GeekyAnts Software Pvt. Ltd. having registered office at No. 18, 2nd
            Cross Road, N.S Palya, 2nd Stage BTM Layout Bengaluru – 560076,
            Karnataka, India ( hereinafter referred to as “We” or “Us”)
            understands that your privacy is important to you and are committed
            to being transparent about the technology it uses. This cookie
            policy explains how and why cookies and other technologies (
            hereinafter referred to as “Cookies and Other tracking Technology”)
            may be stored on and accessed from your device when you use or visit
            any website or an app that posts a link to this Policy( hereinafter
            referred to as “Sites”). This cookie policy must be read with our
            Privacy Policy.
          </p>
          <p>
            <strong>
              By continuing to browse or use our Sites (“
              <a href="https://nativebase.io">https://nativebase.io</a>”), you
              agree that we can store, and access Cookies and Other Tracking
              Technologies as described in this Cookie Policy.
            </strong>
          </p>
          <ul>
            <li>
              What are Cookies and Other Tracking Technologies? A cookie is a
              small text file that can be stored on and accessed from your
              device when you visit one of our Sites, to the extent you agree.
              The other tracking technologies work similarly to cookies and
              place small data files on your devices or monitor your website
              activity to enable us to collect information about how you use our
              Sites. This allows our Sites to recognize your device from those
              of other users of the Sites. The information provided below about
              cookies also applies to these other tracking technologies.
            </li>
            <li>
              How do our sites use Cookies and Other Tracking Technologies?We
              use Cookies and Other Tracking Technologies to identify you and
              your interests, to remember your preferences, and to track your
              use of our Sites. We also use Cookies and Other Tracking
              Technologies to control access to certain content on our Sites,
              protect the Sites, and to process any requests that you make of
              us.To administer our Sites and for research purposes, We may also
              have contracted with third-party service providers to track and
              analyze statistical usage and volume information from our Site
              users. These third-party service providers may use persistent
              Cookies to help us to improve the user experience, manage our site
              content, and analyze how users navigate and utilize the Sites.
            </li>
            <li>
              First and Third-party Cookies“First-party cookies” are cookies
              that belong to us and that we place on your device. “Third-party
              Cookies” are cookies that another party place on your device
              through our Site. We may contract with third-party service
              providers to send emails to users who have provided us with their
              contact information. To help measure and improve the effectiveness
              of our email communications, and/or to determine whether messages
              have been opened and links clicked on, the third-party service
              providers may place Cookies on the devices of these users.
            </li>
          </ul>
          <p>
            <strong>
              For more information on how these companies collect and use the
              information on our behalf, please refer to their privacy policies
              as indicated below.
            </strong>
          </p>
          <p>
            <strong>Persistent Cookies:</strong> We use persistent Cookies to
            improve your experience of using the Sites. This includes recording
            your acceptance of our Cookie Policy to remove the cookie message
            which first appears when you use the Sites.
            <strong>Session Cookies:</strong> Session Cookies are temporary and
            deleted from your machine when your web browser closes. We use
            session cookies to help us track internet usage as described above.
          </p>
          <p>
            You may refuse to accept browser Cookies by activating the
            appropriate setting on your browser. However, if you select this
            setting you may be unable to access certain parts of the Sites.
            Unless you have adjusted your browser setting so that it will refuse
            cookies, our system will issue Cookies when you direct your browser
            to our Sites. If you continue browsing the website, you will accept
            cookie use.
          </p>
          <p>
            The data collected by the Sites and/or through Cookies that may be
            placed on your computer will not be kept for longer than is
            necessary to fulfill the purposes mentioned above. In any event,
            such information will not be kept for longer than one year.
          </p>
          <p>
            <strong>Our Cookies are used for the following purposes:</strong>
          </p>
          <ul>
            <li>
              <strong>Strictly Necessary/Technical:</strong>These Cookies are
              necessary to allow us to operate our Sites so you may access them
              as you have requested. These cookies, for example, let us
              recognize that you have created an account and have logged into
              that account to access Site content. They also include Cookies
              that enable us to remember your previous actions within the same
              browsing session and secure our Sites.
            </li>
            <li>
              <strong>Analytical/Performance:</strong>These Cookies are used by
              us or third-party service providers to analyze how the Sites are
              used and how they are performing. For example, these cookies track
              what pages are most frequently visited, and from what locations
              our visitors come from. If you subscribe to a newsletter or
              otherwise register with the Sites, these Cookies may be correlated
              to you. These Cookies include, for example, Google Analytics
              cookies.
            </li>
            <li>
              <strong>Functionality:</strong>These cookies let us operate the
              Sites in accordance with the choices you make. These cookies
              permit us to "remember" you in-between visits. For instance, we
              will recognize your user name and remember how you customize the
              Sites and services, for example by adjusting text size, fonts,
              languages and other parts of web pages that are alterable, and
              provide you with the same customizations during future visits.
            </li>
            <li>
              <strong>Third-Party Advertising:</strong>These cookies collect
              information about your activities on these and other sites to
              provide you targeted advertising. We may also allow our
              third-party service providers to use Cookies on the Sites for the
              same purposes identified above, including collecting information
              about your online activities over time and across different
              websites. The third-party service providers that generate these
              cookies, such as Adobe, Google, LinkedIn, and Facebook, have their
              own privacy policies and may use their cookies to target
              advertising to you on other websites, based on your visit to our
              Sites.
            </li>
          </ul>
          <p>
            <strong>
              How do I refuse or withdraw my consent to the use of Cookies?
            </strong>
          </p>
          <p>
            If you do not want cookies to be dropped on your device, you can
            adjust the settings of your Internet browser to reject the setting
            of all or some cookies and to alert you when a cookie is placed on
            your device. Please note that if you use your browser settings to
            block all cookies (including strictly necessary Cookies) you may not
            be able to access or use all or parts or functionalities of our
            Sites.
          </p>
          <p>
            If you want to remove previously-stored cookies, you can manually
            delete the cookies at any time. However, this will not prevent the
            sites from placing further cookies on your device unless and until
            you adjust your Internet browser setting as described above. For
            more information on this please write to us at{' '}
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
