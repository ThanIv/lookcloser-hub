import clsx from 'clsx';
import Layout from '@theme/Layout';
import './styles.module.css'; // Import the CSS file (adjust the path as needed)
import styles from './styles.module.css';

export default function LearnMore() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.comingSoonText}>
          We're Coming Soon!
        </h1>
      </div>
    </Layout>
  );
}