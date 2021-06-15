//const path = require('path')
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");

const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withLess(
  withSass({
    env: {
      PUBLIC_URL: "",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
  })
);

// module.exports = withSass({
//   /* bydefault config  option Read For More Optios
//   here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
//   cssModules: true
//   })
//   module.exports = {
//   /* Add Your Scss File Folder Path Here */
//   sassOptions: {
//   includePaths: [path.join(__dirname, 'styles')],
//   },
//   }
