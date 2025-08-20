import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';

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
        <Heading as="h3" className="hero__title">
          <Translate id="aboutUs.title">
            {about}
          </Translate>
          </Heading>
        <p className="hero__subtitle">
          <Translate id="aboutUs.subtitle">
            {aboutDescription}
          </Translate></p>
      </div>
    </section>
  );
}
