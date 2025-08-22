import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  imageSrc: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Resource', // Static string for default (English) content
    imageSrc: '/img/resource.jpg',
    description:
      'Resources are structured learning materials designed to build Media and Information Literacy skills. They include courses, guides, toolkits, and practical exercises that help educators, youth, and communities learn step by step and apply what they’ve learned.',
  },
  {
    title: 'Webinar',
    imageSrc: '/img/webinar.jpg',
    description:
      'In LookCloser Hub, webinars are interactive online sessions where educators, youth, and media experts come together to learn, share experiences, and explore best practices in Media and Information Literacy.',
  },
  {
    title: 'Blog',
    imageSrc: '/img/blog.jpg',
    description:
      'The blog is a space for sharing practical tips, insights, and ideas on Media and Information Literacy. It’s where community members can explore quick lessons, reflections, and helpful guides in an easy-to-read format.',
  },
];

function Feature({title, imageSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          src={imageSrc}
          className={styles.featureSvg}
          role="img"
          alt={translate({
            id: `homepage.feature.${title.toLowerCase()}.title`, // Use title as a key, but still static per item
            message: title,
            description: `The alt text for the ${title.toLowerCase()} feature image`,
          })}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Translate
            id={`homepage.feature.${title.toLowerCase()}.title`}
            description={`The title for the ${title.toLowerCase()} feature`}
          >
            {title}
          </Translate>
        </Heading>
        <p>
          <Translate
            id={`homepage.feature.${title.toLowerCase()}.description`}
            description={`The description for the ${title.toLowerCase()} feature`}
          >
            {description}
          </Translate>
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}







// import type {ReactNode} from 'react';
// import clsx from 'clsx';
// import Heading from '@theme/Heading';
// import styles from './styles.module.css';
// import Translate from '@docusaurus/Translate';


// type FeatureItem = {
//   title: string;
//   imageSrc: string;
//   description: ReactNode;
// };

// const FeatureList: FeatureItem[] = [
//   {
//     title: 'Resource',
//     imageSrc: '/img/resource.jpg',
//     description: (
//       <>
//         Resources are structured learning materials designed to build Media and Information Literacy skills. They include courses, guides, toolkits, and practical exercises that help educators, youth, and communities learn step by step and apply what they’ve learned.
//       </>
//     ),
//   },
//   {
//     title: 'Webinar',
//     imageSrc: '/img/webinar.jpg',
//     description: (
//       <>
//         In LookCloser Hub, webinars are interactive online sessions where educators, youth, and media experts come together to learn, share experiences, and explore best practices in Media and Information Literacy.
//       </>
//     ),
//   },
//   {
//     title: 'Blog',
//     imageSrc: '/img/blog.jpg',
//     description: (
//       <>
//         The blog is a space for sharing practical tips, insights, and ideas on Media and Information Literacy. It’s where community members can explore quick lessons, reflections, and helpful guides in an easy-to-read format.
//       </>
//     ),
//   },
// ];

// function Feature({title, imageSrc, description}: FeatureItem) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <img src={imageSrc} className={styles.featureSvg} role="img" alt={title} />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">
//             {title}
//           </Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures(): ReactNode {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
