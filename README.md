# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Requirements

Tauri depends on technologies like Rust. You must follow to their documentation before to have a ready environment to work with it.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Setting up the environment

- Make sure to open the project at the root level. The `.vscode` folder must be located at the root level of the workspace.
- Install the extensions recommended by VSCode. If you don't see them you will find out them opening the following file `/.vscode/extensions.json`
- Install the project dependencies
```sh
npm i
```

## Available scripts

### `npm run dev`

Runs the frontend side in development mode.

Open http://localhost:1420 to view it in the browser.

**Disclaimer**

Tauri communication will not work with this script.

### `npm run build`

Builds the frontend side to the `/dist` folder.

### `npm run preview`

Runs the frontend side in the production mode in your local machine. You must run `npm run build` before.

### `npm run tauri`

Runs the desktop App (React + Tauri) in development mode.

### `npm run start:web`

Runs the frontend side in development mode.

Open http://localhost:1420 to view it in the browser.

**Disclaimer**

Tauri communication will not work with this script.

### `npm run build:web`

Builds the frontend side to the `/dist` folder.

### `npm run preview:web`

Runs the frontend side in the production mode in your local machine. You must run `npm run build` before.

### `npm run start:desktop`

Runs the desktop App (React + Tauri) in development mode.

### `npm run build:desktop`

Builds the desktop App (React +  Tauri) in the production mode. You will find the generated files in `/src-tauri/target`.

### `npm run lint`

Runs the linter and displays errors of code formatting if they exist in the project.

### `npm run lint:fix`

Runs the linter like `npm run lint`. In addition the linter will try to fix problems if they exist.

## Using CSS of the future with postcss
- Using CSS of the future (stage 2) with postcss. Check out all [features available](https://preset-env.cssdb.org/features).

- Even using CSS features from stage 2 the project in addition supports [nesting](https://preset-env.cssdb.org/features/#nesting-rules).

- In order to import CSS files you must follow the pattern below:

  ```css
  @import url("./partial/button.css")
  ```

- Do not import globally CSS files that contains helpers like custom media queries. You must import them in each file where you need.
