import styles from './fixtures-widget.module.css';

/* eslint-disable-next-line */
export interface FixturesWidgetProps {}

export function FixturesWidget(props: FixturesWidgetProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FixturesWidget!</h1>
    </div>
  );
}

export default FixturesWidget;
