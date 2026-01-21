import { Button } from '../components/ui/button.jsx';

export function About() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-5 pt-4">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">About Leap AI</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          We're building the future of AI-powered web experiences. Our platform enables developers to create fast,
          adaptive product sites with cutting-edge technology.
        </p>
      </section>

      <section className="grid gap-6 rounded-xl border border-border bg-muted/30 p-6 sm:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Our Mission</h3>
          <p className="text-sm text-muted-foreground">
            To democratize AI-powered web development and make it accessible to everyone, from startups to enterprises.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Our Vision</h3>
          <p className="text-sm text-muted-foreground">
            A world where building beautiful, intelligent web experiences is as simple as writing a few lines of code.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Choose Us</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2 rounded-lg border border-border p-4">
            <h3 className="font-semibold">Modern Stack</h3>
            <p className="text-sm text-muted-foreground">
              Built with React 19, Vite 7, and Tailwind 4 for the best developer experience.
            </p>
          </div>
          <div className="space-y-2 rounded-lg border border-border p-4">
            <h3 className="font-semibold">Fast Performance</h3>
            <p className="text-sm text-muted-foreground">
              Optimized builds and lazy loading ensure your site loads in milliseconds.
            </p>
          </div>
          <div className="space-y-2 rounded-lg border border-border p-4">
            <h3 className="font-semibold">Developer First</h3>
            <p className="text-sm text-muted-foreground">
              Intuitive APIs and comprehensive documentation to get you started quickly.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 rounded-xl border border-border bg-muted/30 p-8 text-center">
        <h2 className="text-2xl font-semibold">Ready to get started?</h2>
        <p className="text-muted-foreground">Join thousands of developers building with Leap AI.</p>
        <Button size="lg">Get Started</Button>
      </section>
    </div>
  );
}
