const env = ["prod", "dev"].includes(
  process.env.APP_ENV
)
  ? process.env.APP_ENV
  : "selfHost";
console.log(`next.config.js: starting with ${env} environment variables`);

require("dotenv").config({
  path: `config/.env.${env}`,
});

console.log({ env });