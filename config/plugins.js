module.exports = ({ env }) => ({
  "strapi-csv-import-export": {
            config: {
              authorizedExports: ["api::machine.machine"],
              authorizedImports: ["api::machine.machine"]
    }
  }
});