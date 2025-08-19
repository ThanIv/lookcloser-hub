import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function AboutSection(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  const {about, aboutDescription} = siteConfig.customFields as {
    about: string;
    aboutDescription: string;
  };

  return (
    <section className={clsx('hero')}>
      <div className="container">
        <Heading as="h3" className="hero__title">{about}</Heading>
        <p className="hero__subtitle">{aboutDescription}</p>
      </div>
    </section>
  );
}
