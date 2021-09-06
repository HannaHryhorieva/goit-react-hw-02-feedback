/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */

// good, neutral, bad, total, positivePercentage;
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className="Statistics">
      <ul>
        <li>good : {good}</li>
        <li>neutral : {neutral}</li>
        <li>bad : {bad}</li>
        <li>total : {total}</li>
        <li>positivePercentage : {positivePercentage}%</li>
      </ul>
    </div>
  );
}
