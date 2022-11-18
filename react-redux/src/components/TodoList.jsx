export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(({ text }) => (
        <li>{text}</li>
      ))}
    </ul>
  );
}
