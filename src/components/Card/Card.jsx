export default function Card({ children, styles }) {
  return (
    <article className={`bg-white rounded-lg ${styles}`}>{children}</article>
  );
}
