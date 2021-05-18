# An example app

It's created with create-react-app and uses streamlinehq npm package. Please read the package's README for more information.

## How to run

1. Copy `.env.example` into a file `.env`. Fill a `STREAMLINE_SECRET` value inside with an npm token taken from your [Streamline developer page](https://app.streamlinehq.com/profile/developer). 
2. Install dependencies with `npm i`
3. Run it with `npm start`

You can also temporarily change `package.json` to use/link a local copy of `@streamlinehq/streamlinehq` if you want to experiment with it.

![Alt text](screenshot.gif?raw=true "Example app screenshot")

## How to dev

1. Create `.env` file from `.env.example`. Ensure `STREAMLINE_SECRET` is correct.
2. Run `npm run reinstall:local` to install the local version.
3. `npm start`

Note that when working with hashed paths changing a database might break images and enforce you to temporarily change paths.
Note that if you have changed the package version you must change the reinstall command too.
