import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Easy to Use",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

const Features = () => (
  <div className="custom_row">
    <div className="wrapper homeWrapper">
      <div className="row">
        <div>
          <img
            src="/img/NB-feature-icons/SVG/Accessible.svg"
            height="58px"
            width="80px"
          ></img>
          <h3
            style={{
              fontFamily: "Roboto",
              fontSize: "20px",
              color: "#000000",
              letterSpacing: 0,
            }}
          >
            Accessible
          </h3>
          <p>Maximise app usage with our accessible design.</p>
        </div>

        <div>
          <img
            src="/img/NB-feature-icons/SVG/Responsive.svg"
            height="58px"
            width="80px"
          ></img>
          <h3
            style={{
              fontFamily: "Roboto",
              fontSize: "20px",
              color: "#000000",
              letterSpacing: 0,
            }}
          >
            Responsive
          </h3>
          <p>Create responsive apps with ease from the get-go.</p>
        </div>

        <div>
          <img
            src="/img/NB-feature-icons/SVG/Themeable.svg"
            height="58px"
            width="80px"
          ></img>
          <h3
            style={{
              fontFamily: "Roboto",
              fontSize: "20px",
              color: "#000000",
              letterSpacing: 0,
            }}
          >
            Themeable
          </h3>
          <p>Customise your app theme and component styles.</p>
        </div>
        <div>
          <img
            src="/img/NB-feature-icons/SVG/Consistent.svg"
            height="58px"
            width="80px"
            style={{ transform: "scale(1.2)" }}
          ></img>
          <h3
            style={{
              fontFamily: "Roboto",
              fontSize: "20px",
              color: "#000000",
              letterSpacing: 0,
            }}
          >
            Consistent
          </h3>
          <p>Make accurate predictions for web, Android & iOS.</p>
        </div>
      </div>
    </div>
  </div>
);
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="row">
            <Features />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
