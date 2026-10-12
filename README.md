# 7 Heaven

Jaipur property website built with Next.js.

## Form notification emails

The enquiry dialog, contact page, and property availability form send notifications through Amazon SES using a server-only `/api/notifications` endpoint. All emails go to `bishnoi11011@gmail.com` from `notification@ashishbuilds.in` in AWS region `ap-south-1` by default. The visitor's email is included in the message and used as Reply-To, never as a notification recipient.

Create `.env` from `.env.example` and fill in your AWS IAM access key and secret:

```dotenv
AWS_SES_REGION=ap-south-1
AWS_SES_ACCESS_KEY_ID=your_access_key
AWS_SES_SECRET_ACCESS_KEY=your_secret_key
SES_FROM_EMAIL=notification@ashishbuilds.in
SES_TO_EMAIL=bishnoi11011@gmail.com
```

Use AWS API credentials with the IAM permission `ses:SendEmail`, rather than SES SMTP credentials. These variables stay on the server; do not prefix them with `NEXT_PUBLIC_`. Restart the development server after changing `.env`, and configure the same variables in your production hosting environment.

SES must verify `notification@ashishbuilds.in` or its parent domain `ashishbuilds.in` in **ap-south-1**. Verifying only `notification.ashishbuilds.in` does not authorize the requested sender address, which belongs to `ashishbuilds.in`. If the SES account is in the sandbox, also verify the recipient `bishnoi11011@gmail.com` or request production access. See [SES identity verification](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html) and [SES sandbox restrictions](https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html).

Each form waits for SES acceptance before showing success. A failed send leaves the form available to retry. Availability notifications include the property name, dates, and guest count. Submissions are sent by email and are not stored in a database. SES acceptance is not a guarantee of inbox delivery.

Run `npm test` with Node.js 22.18+ to check validation, recipient routing, and SES failure handling. Tests mock SES and never send real emails.

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
