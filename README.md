### Configuring eslint and prettier


Add a eslint config

1. npm install eslint-config-standard
2. add to eslintrc.json config

{
  "extends": ["next/core-web-vitals", "standard"]
}

3. test

npm run lint


Add eslint for tailwindcss

1. npm install eslint-plugin-tailwindcss
2. add to eslint config

{
  "extends": ["next/core-web-vitals", 
              "standard",
              "plugin:tailwindcss/recommended"]
}


for prettier

1. npm install eslint-config-prettier
2. {
  "extends": ["next/core-web-vitals", 
              "standard",
              "plugin:tailwindcss/recommended",
              "prettier"]
}

3. npm install prettier



change vs config file

add in settings.json

"editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnType": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.addMissingImports": true
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },


ctrl + shift + p ---> then reload

save to fix the issues each time.