## Examples of env files behavior in Next

First, rename .env.local.sample in .env.local (it is supposed to be .gitignore in real life).

Next, run :
- in dev mode, with `yarn dev`
- in production mode, with `yarn build && yarn start`

With your browser, you will see the accessible variables and the preceedence over a shared variables.
In the server console, you will see the resut server wise.

To sum up:

Use secrets in .env.local, and don't commit this file (make a .gitignore entry).
The others files (.env, .env.development and .env.production) are supposed to be in the git repo. So, the variables in theses files have not to be sensitive.

- .env.local > .env.developement  > .env
- .env.local > .env.production > .env

In other words, .env.local will overrides all other files if present.

