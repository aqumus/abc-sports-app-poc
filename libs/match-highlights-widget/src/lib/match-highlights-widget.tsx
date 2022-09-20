import styles from './match-highlights-widget.module.css';

/* eslint-disable-next-line */
export interface MatchHighlightsWidgetProps {}

export function MatchHighlightsWidget(props: MatchHighlightsWidgetProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MatchHighlightsWidget!</h1>
    </div>
  );
}

export default MatchHighlightsWidget;
