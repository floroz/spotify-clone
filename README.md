This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Setup Database Connection

This project has been setup with Heroku, where, in order to successfully connect and run migration with Prisma, you will need to setup two Postgresql Instances.

Add the URL to a `.env` file with the following keys:

```sh
DATABASE_URL=database1Url
SHADOW_DATABASE_URL=database2Url
```