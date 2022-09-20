import styles from './leaderboard-widget.module.css';

/* eslint-disable-next-line */
export interface LeaderboardWidgetProps {}

export function LeaderboardWidget(props: LeaderboardWidgetProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LeaderboardWidget!</h1>
    </div>
  );
}

export default LeaderboardWidget;
