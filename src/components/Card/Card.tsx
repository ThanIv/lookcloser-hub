import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useState } from 'react';
import { CardItem } from '@site/src/types';
import Translate from '@docusaurus/Translate';

interface CardProps {
  cardContents: CardItem[];
  heading: string;
}

const ITEMS_PER_PAGE = 10

export function Card({ cardContents, heading }: CardProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cardContents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentContents = cardContents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className={clsx('padding--lg', styles.features)}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          {heading}
        </Heading>
        <div className={styles.gridContainer}>
          {currentContents.map((cardContent, index) => (
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
              {/* <p className={styles.textDescription}>
                {cardContent.description}
              </p> */}
              <div className={styles.tagContainer}>
                <span className={styles.tag}>
                  {cardContent.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
        {totalPages > 1 && (
          <div className={clsx('margin-top--lg', styles.pagination)}>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={clsx(
                'button button--secondary',
                currentPage === 1 ? styles.disabledButton : styles.activeButton
              )}
            >
              Previous
            </button>
            <span className={styles.pageInfo}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={clsx(
                'button button--secondary',
                currentPage === totalPages ? styles.disabledButton : styles.activeButton
              )}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
