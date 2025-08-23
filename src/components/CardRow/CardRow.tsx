import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { CardItem } from '@site/src/types';
import Translate from '@docusaurus/Translate';

interface CardProps {
  cardContents: CardItem[];
  heading: string;
}

export function CardRow({ cardContents, heading }: CardProps) {
  // Take only the first 5 items from cardContents
  const displayedContents = cardContents.slice(0, 5);

  return (
    <section className={clsx('padding--lg', styles.features)}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          <Translate id="cardRow.heading">
            {heading}
          </Translate>
        </Heading>
        <div className={styles.gridContainer}>
          {displayedContents.map((cardContent, index) => (
            <a
              key={index}
              href={cardContent.url}
              className={clsx(styles.gridItem, styles.card, styles.cardHover)}
              title={cardContent.title}
            >
              {cardContent.imageUrl && (
                <img
                  src={cardContent.imageUrl}
                  alt={cardContent.title}
                  className={styles.image}
                />
              )}
              <h3 className={clsx(styles.title, 'margin-bottom--sm')}>
                {cardContent.title}
              </h3>
              <div className={styles.tagContainer}>
                <span className={styles.tag}>
                  {cardContent.tag}
                </span>
              </div>
            </a>            
          ))}
        </div>
        <div className={clsx('text--center', 'margin-top--lg')}>
          <a href="/resource" className={clsx('button', styles.seeAllButton)}>
            <Translate id="cardRow.button">
              See all resources
            </Translate>
          </a>
        </div>
      </div>
    </section>
  );
}

