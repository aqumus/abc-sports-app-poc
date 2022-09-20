import styles from './match-highlights.module.css';

/* eslint-disable-next-line */
export interface MatchHighlightsProps {}

export function MatchHighlights(props: MatchHighlightsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MatchHighlights!</h1>
    </div>
  );
}

export default MatchHighlights;
