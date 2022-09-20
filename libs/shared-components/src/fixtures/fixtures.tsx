import styles from './fixtures.module.css';

/* eslint-disable-next-line */
export interface FixturesProps {}

export function Fixtures(props: FixturesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Fixtures!</h1>
    </div>
  );
}

export default Fixtures;
