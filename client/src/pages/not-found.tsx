import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Page not found.</p>
        <Link href="/">
          <a className="inline-block text-primary hover:underline">Go back home</a>
        </Link>
      </div>
    </div>
  );
}
