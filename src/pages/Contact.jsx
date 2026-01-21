import { Button } from '../components/ui/button.jsx';

export function Contact() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-5 pt-4">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Get in Touch</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </section>

      <section className="grid gap-8 rounded-xl border border-border bg-muted/30 p-6 sm:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:hello@leapai.com" className="hover:text-foreground">
                hello@leapai.com
              </a>
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:support@leapai.com" className="hover:text-foreground">
                support@leapai.com
              </a>
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Office Hours</h3>
            <p className="text-sm text-muted-foreground">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your message..."
            />
          </div>
          <Button className="w-full">Send Message</Button>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-muted/30 p-6">
        <h2 className="mb-4 text-xl font-semibold">Follow Us</h2>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Twitter
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            GitHub
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
