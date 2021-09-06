/* <FeedbackOptions options={} onLeaveFeedback={}>. */
import shortid from 'shortid';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button
          key={shortid.generate()}
          type="button"
          className="TodoList__btn"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
