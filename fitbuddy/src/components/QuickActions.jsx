const QuickActions = ({ onSend }) => {
  const actions = [
    "Create workout plan",
    "Diet plan for weight loss",
    "Muscle gain routine",
    "Home workout plan",
  ];

  return (
    <div className="quick-actions">
      {actions.map((a, i) => (
        <button key={i} onClick={() => onSend(a)}>
          {a}
        </button>
      ))}
    </div>
  );
};

export default QuickActions;