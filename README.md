This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Archivo, Source Serif 4 and IBM Plex Mono.

## Contact form setup

The `/contact` page sends submissions by email using [Resend](https://resend.com). It won't actually send anything until you configure it:

1. Copy `.env.example` to `.env.local`.
2. Create a Resend account and an API key at [resend.com/api-keys](https://resend.com/api-keys), then set `RESEND_API_KEY`.
3. Set `CONTACT_EMAIL_TO` to the real address that should receive project enquiries.
4. Verify a sending domain in Resend ([resend.com/domains](https://resend.com/domains)) and set `CONTACT_EMAIL_FROM` to an address on that domain (e.g. `FORGE <hello@yourdomain.com>`). The default `onboarding@resend.dev` sender only works for testing and only delivers to the email on your own Resend account.
5. Add the same three variables in your hosting provider's environment settings (e.g. Vercel project settings) before deploying — `.env.local` is not committed and won't exist in production.

Until all three variables are set, the form will show a clear error to the user instead of failing silently, and the server log will say exactly which variable is missing.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
