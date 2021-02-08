'use strict';
const visit = require('unist-util-visit-parents');
const u = require('unist-builder');
const dedent = require('dedent');
const fromEntries = require('object.fromentries');

const parseParams = (paramString = '') => {
  const params = fromEntries(new URLSearchParams(paramString));
  if (!params.platform) {
    params.platform = 'web';
  }

  return params;
};

const processNode = (node, parent) => {
  return new Promise(async (resolve, reject) => {
    try {
      const params = parseParams(node.meta);
      const NBversion = '3.0.0-next.22';
      // Gather necessary Params
      let name = params.name ? decodeURIComponent(params.name) : 'Example';
      const description = params.description
        ? decodeURIComponent(params.description)
        : 'Example usage';
      const sampleCode = node.value;
      const encodedSampleCode = encodeURIComponent(sampleCode);
      const platform = params.platform || 'web';
      const supportedPlatforms = params.supportedPlatforms || 'ios,android,web';
      const theme = params.theme || 'light';
      const preview = params.preview || 'true';
      const loading = params.loading || 'lazy';
      // Generate Node for SnackPlayer
      let dependencies = `react-is,expo-font,native-base@${NBversion},styled-system,expo-constants,react-native-web,react-native-svg,styled-components,@expo/vector-icons`;

      if (name.split(' ')[0] === 'Formik') {
        dependencies += ',@native-base/formik-ui,formik,yup';
      } else if (name.split(' ')[0] === 'ReactHookForms') {
        dependencies += ',react-hook-form';
      }
      const snackPlayerDiv = u('html', {
        value: dedent`
          <div
            class="snack-player"
            data-snack-name="${name}"
            data-snack-description="${description}"
            data-snack-code="${encodedSampleCode}"
            data-snack-platform="${platform}"
            data-snack-supported-platforms="${supportedPlatforms}"
            data-snack-theme="${theme}"
            data-snack-preview="${preview}"
            data-snack-loading="${loading}"
            data-snack-dependencies="${dependencies}"
          ></div>
          `,
      });

      // Replace code block with SnackPlayer Node
      const index = parent[0].children.indexOf(node);
      parent[0].children.splice(index, 1, snackPlayerDiv);
    } catch (e) {
      return reject(e);
    }
    resolve();
  });
};

const SnackPlayer = () => {
  return (tree) =>
    new Promise(async (resolve, reject) => {
      const nodesToProcess = [];
      // Parse all CodeBlocks
      visit(tree, 'code', (node, parent) => {
        // Add SnackPlayer CodeBlocks to processing queue
        if (node.lang == 'SnackPlayer') {
          nodesToProcess.push(processNode(node, parent));
        }
      });

      // Wait for all promises to be resolved
      Promise.all(nodesToProcess).then(resolve()).catch(reject());
    });
};

module.exports = SnackPlayer;

// https://snack.expo.io/?files=%7B%0A%20%20%2F%2F%20Inlined%20code%0A%20%20%27App.tsx%27%3A%20%7B%0A%20%20%20%20type%3A%20%27CODE%27%2C%0A%20%20%20%20contents%3A%20%27console.log(%22hello%20world!%22)%3B%27%0A%20%20%7D%2C%0A%20%20%2F%2F%20Externally%20hosted%20code%20(JavaScript%2C%20Markdown%2C%20JSON)%0A%20%20%27data%2Fdata.json%27%3A%20%7B%0A%20%20%20%20type%3A%20%27CODE%27%2C%0A%20%20%20%20url%3A%20%27https%3A%2F%2Fmysite%2Fdata.json%27%0A%20%20%7D%2C%0A%20%20%2F%2F%20Externally%20hosted%20assets%20(images%2C%20fonts)%0A%20%20%27assets%2Fimage.png%27%3A%20%7B%0A%20%20%20%20type%3A%20%27ASSET%27%2C%0A%20%20%20%20contents%3A%20%27https%3A%2F%2Fmysite%2Fimage.png%27%0A%20%20%7D%0A%7D
