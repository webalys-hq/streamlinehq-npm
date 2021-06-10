# NPM package for Streamline icons and illustrations
This is a small library which downloads Streamline assets you have access to into your local folder so that they can be used in your Javascript project.
This is the only package you need to use Streamline assets, so please uninstall any old Streamline wrapper or private packages if you had them.

It works with any framework. You just need NPM and a build system like Webpack which will handle `.svg` files.

Check an example app in the `docs/latest` folder.

## Deprecation of previous packages
Warning, wrapper packages for React, Angular and Vue are deprecated and will be removed after August 1st 2021. Please use this new package instead, it provides a much better user experience.

Also, on that date images in production for package version < 3.0 will change. Please update your package to 3.0 (if you haven't done so) before that date and ensure that images in your application are rendered correctly, otherwise you might get unexpected results. 

## How to use
1. Ensure that you have an active Streamline subscription.
2. Fill your project's private `.env` file with `STREAMLINE_FAMILIES` and `STREAMLINE_SECRET` variables. Check `.env.example` file in `docs/latest/example-app` for an example.
  - `STREAMLINE_FAMILIES`: an array of strings with names of Streamline icons or illustrations families you own and which you want to include in your project. You can take the name from its url in Streamline. Eg a name of Brooklyn Illustrations from page https://app.streamlinehq.com/illustrations-brooklyn is `illustrations-brooklyn`.
  - `STREAMLINE_SECRET`: your private npm token which is taken from [Streamline developer page](https://app.streamlinehq.com/profile/developer). Don't share this with anybody and keep it out of any public repos.
3. Install the package in your project `npm install @streamlinehq/streamlinehq`. It will execute the `postinstall` script which will fetch the graphical assets. The requested images in a form of SVG files will be put in the package's `img` folder. 
4. Configure your project so that it can import any `svg` files as images and render them. It depends on your tech stack. For instance, in [create-react-app](https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs) this feature is enabled by default.
After this you will be able to import Streamline images as usual in your project, eg:
```jsx
import SatelliteSignal from '@streamlinehq/streamlinehq/img/streamline-regular/interface-essential/interface-essential/satellite-signal.svg'
```
Check `docs/latest/example-app` project for more examples.

## Q/A
### How to find a path to a Streamline image
1. Go to [Streamline website](https://app.streamlinehq.com)
2. Select a family you're interested in
3. Select an icon you're interested in and see the import path in the sidebar.

Another option is to use an IDE which suggests you to autocomplete a path to an image.

### How to change style, size, etc
Streamline images are just `.svg` files and the way to alter them depends on your build system. As a rule of thumb you should either render them as images and change the CSS styles of the `<img>` tag, either inline render them as a component and change styles by passing `stroke`/`fill` attributes. Check `docs/latest/example-app` project for more examples.
You can also change the color and size in Streamline app itself, download it as SVG and save it in your app as a static file.

### I cannot use `.env` file, which options do I have?
You can set `STREAMLINE_FAMILIES` and `STREAMLINE_SECRET` variables in your shell so that the script can take them from `process.env`.

Alternatively you can use `streamlinehq.json` secret file. Please check [1.0.4 README](https://github.com/webalys-hq/streamlinehq-npm/tree/1.0.4) for how to do that.

## Troubleshooting

In 80% of the cases you need to ensure that you have set up your env vars properly in your project and reinstall this package by removing it completely and then installing it again, eg with `rm -rf node_modules && npm i`.

Ensure that you have an active subscription for the Streamline family you want to download images from. Eg an error "You can not download XXX family in SVG" means that you don't have an active license for a XXX family. Please contact the Streamline team on support@webalys.com if you have purchased the valid license, and it still doesn't let you download the family's images.

[Before installing this package you need to have any previous Streamline configuration removed](https://github.com/webalys-hq/streamlinehq-npm/issues/5). If you had private Streamline packages installed you have most likely configured your npm/yarn to pass an npm token to Cloudsmith. This configuration isn't needed anymore, and it can prevent this package from being installed. Remove (or temporarily rename) your `.npmrc` file in your project and remove any Streamline configuration lines you might have added to yarn/npm config.

Make sure that you're using the package's latest version.

Note that because of fetching images installation might take longer than usual.

Before opening an issue double check that images have been installed in your `node_modules/@streamlinehq/streamlinehq/img` folder. If not - try reinstalling on a better internet connection or checking the error message.

Before opening an issue ensure that your project can build and render any other `.svg` files.

Please check the [issues list](https://github.com/webalys-hq/streamlinehq-npm/issues): maybe it has an answer for you. If there is none please open a new issue and describe the problem, we will respond shortly.

## How to dev
<details>
<summary>Click to expand</summary>

Pull requests and any suggestions are welcome!

1. Fork a project, clone it (as of now it will not fetch the images as there is no `.env` file in the parent folder, feel free to ignore the error). Work on new features or fixes in a separate branch.
2. Run `npm run dev` to compile a project on any code change.
3. Use an example app in `docs/latest/example-app` folder to experiment with this package. Alter it, so it uses a local version of the `@stremlinehq/streamlinehq` package. Read its README for more instructions.
4. Once done, open a pull request against `master` and wait for a review.
</details>

## How to publish on npm
<details>
<summary>Click to expand</summary>

Once you have made the changes, do the following:
1. Increment a version in `package.json`
2. Run `npm run build` to create a new build
3. Run `npm publish --access public`
4. Change the example app code in the next pull request to use the latest version of this package. Increment its version too.
</details>
