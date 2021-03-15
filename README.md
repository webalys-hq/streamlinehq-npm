# Universal NPM package for Streamline icons and illustrations

This is a small library which downloads Streamline assets you have access to into your local folder so that they can be used in your Javascript project.

## How to install

`yarn add XXX`

## How to use

1. Ensure that you have an active Streamline icons or illustrations subscription.
2. In your project folder create a special `streamlinehq.json` settings file. Fill it with two keys:
    - `families`: an array of strings with names of Streamline icons or illustrations families you want to include in your project.
    - `secret`: XXX
    
Example:
```json
{
  "families": ["streamline-regular", "streamline-light"],
  "secret": "MY.AUTHTOKEN"
}
```
3. Install your packages, eg with `yarn`

The package will run a script during installation which will fetch requested icons in a form of SVG files and put them in the package's `images` folder. After this you will be able to import those images as usual in your project.

If you have any questions please open an issue.
