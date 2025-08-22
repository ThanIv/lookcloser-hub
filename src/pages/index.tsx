import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/Course';
import AboutSection from '../components/AboutUs';
import Heading from '@theme/Heading';
import HomepageFeatures from '../components/HomepageFeatures';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';
import { CardRow } from '../components/CardRow/CardRow';
import { ResourceList } from '../utils/outline/resources';
import { Card } from '../components/Card';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {titleHeader} = siteConfig.customFields as {titleHeader: string}
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="siteConfig.titleHeader">
            {titleHeader}
          </Translate>
        </Heading>
        
          <p className="hero__subtitle">
            <Translate id="siteConfig.subtitle">
              {siteConfig.tagline}
            </Translate>
          </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/learn-more">
            <Translate>Learn more</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const heading = "Our Resources"
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CardRow
          cardContents={ResourceList} 
          heading={heading}/>
        <AboutSection />
      </main>
    </Layout>
  );
}
