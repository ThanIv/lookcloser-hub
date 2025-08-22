import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function AboutSection(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  const {titleHeader, about, aboutDescription} = siteConfig.customFields as {
    titleHeader: string;
    about: string;
    aboutDescription: string;
  };

  return (
    <section className={clsx('hero')}>
      <div className="container">
        <h2>
          <Translate id="aboutUs.title">
            {about}
          </Translate>
        </h2>
        <p className = {styles.paragraphFont}>
          <Translate id="aboutUs.subtitle">
            {aboutDescription}
          </Translate>
        </p>
      </div>
    </section>
  );
}
