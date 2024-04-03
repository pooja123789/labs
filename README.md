# Friday Night Films

This is the starting repository for the React Development course Films Project.

You will notice that the CSS has been broken up into separate CSS files for separate components:

- `FilmLibrary.css`
- `FilmDetail.css`
- `FilmRow.css`

You will also find a file called `TMDB.js` which contains a sample of movie data that mimics what's found in the actual TMDB API (we can swap it out for the real API data later).

## Material Icons

This app uses a set of icons called Material Icons. (The URL is imported from the `index.html` file).

It's used for a few icons in this app. This example uses the material-icons library to include an "Add to queue" icon and a "remove from queue" icon.

```html
<span className="material-icons">add_to_queue</span>
<span className="material-icons">remove_from_queue</span>
```

To find more icons see [The Material Icons](https://mui.com/material-ui/material-icons/).

**Note:** There's now a better way to include the latest version, using `yarn` and importing the icons in JavaScript. Feel free to update your app to use that!

## Poster URLS

The API data only contains the last part of the poster and backdrop image URLS.

For example, the poster URLS for the film 'Baby Driver'

```js
{
  "poster_path": "/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg",
  "backdrop_path": "/goCvLSUFz0p7k8R10Hv4CVh3EQv.jpg",
}
```

You can construct the full URL using a prefix, with the following base URLs:

```js
const posterURL = `https://image.tmdb.org/t/p/w780${poster_path}`;
const backdropURL = `https://image.tmdb.org/t/p/w1280${backdrop_path}`;
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
