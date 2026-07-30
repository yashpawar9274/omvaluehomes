import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span className="eyebrow">404</span>
      <h1>This page has moved.</h1>
      <p>Return to BudgetHomes to explore verified Palghar property content.</p>
      <Link className="button button-primary" href="/">
        Go to homepage
      </Link>
    </main>
  );
}
