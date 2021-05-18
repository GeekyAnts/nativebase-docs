'use strict';
const visit = require('unist-util-visit-parents');
const u = require('unist-builder');
const dedent = require('dedent');
const fs = require('fs');
const { getPropDetail } = require('../utils');
const { internalPropsMap, rnPropsMap, StylingPropsMap } = require('./propsMap');

const processNode = (node, parent, code, showStylingProps) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Generate Node for PropTable
      const snackPlayerDiv = u('html', {
        value: dedent`${propTable(code, showStylingProps)}
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

const templateGenerator = (componentDetails) => {
  const { displayName, props } = componentDetails;
  let propExists = false;

  const template = (propsObject) => {
    let temp = '';
    for (let prop in propsObject) {
      const { name, description, type, parent, defaultValue } =
        propsObject[prop];
      const MapValue =
        internalPropsMap[type.name] ||
        rnPropsMap[type.name] ||
        StylingPropsMap[type.name];
      let newType = type.name.replace(/\</g, '&lt;'); //for <
      newType = newType.replace(/\>/g, '&gt;'); //for >

      if (parent.name === `I${displayName}Props`) {
        propExists = true;
        temp =
          temp +
          `<tr>
        <td>
          ${name}
        </td>
        <td>
          ${MapValue ? `<a href="${MapValue.link}">${type.name}</a>` : newType}
        </td>
        <td>
          ${description || '-'}
        </td>
        <td>
          ${defaultValue ? defaultValue.value : '-'}
        </td>
      </tr>`;
      }
    }

    return temp;
  };

  const templateString = template(props);
  return propExists
    ? `
  <table>
    <tr>
      <th>
        Name
      </th>
      <th>
        Type
      </th>
      <th>
        Description
      </th>
      <th>
        Default
      </th>
    </tr>
    ${templateString}
  </table>
  `
    : '';
};

const propTable = (typesArray, showStylingProps) => {
  return typesArray.map((component) => {
    return `${templateGenerator(component)} ${implementSection(
      component,
      showStylingProps
    )}`;
  });
};

const implementsTemplateGenerator = (set) => {
  let temp = '';
  const arr = [...set];
  [...arr].map((item, i) => {
    temp = temp + item + (i === arr.length - 1 ? '' : ', ');
  });
  return temp;
};
const implementSection = (componentDetails, showStylingProps) => {
  const { displayName, props } = componentDetails;
  let implementsArray = new Set();
  for (let prop in props) {
    const { name, description, type, parent, defaultValue } = props[prop];
    const MapValue = showStylingProps
      ? internalPropsMap[parent.name] ||
        rnPropsMap[parent.name] ||
        StylingPropsMap[parent.name]
      : internalPropsMap[parent.name];

    if (MapValue && parent.name !== `I${displayName}Props`) {
      implementsArray.add(
        MapValue.link.startsWith('http')
          ? `<a href="${MapValue.link}"><code>${MapValue.name}</code></a>`
          : `<a href="${MapValue.link}">${MapValue.name}</a>`
      );
    }
  }

  const implementsTemplate = implementsTemplateGenerator(implementsArray);
  if (implementsTemplate) {
    return `<p>${componentDetails.displayName} implements ${implementsTemplate}</p>`;
  }

  return ``;
};

const ComponentPropTable = () => {
  return (tree) =>
    new Promise(async (resolve, reject) => {
      const nodesToProcess = [];
      // Parse all CodeBlocks
      visit(tree, 'code', (node, parent) => {
        if (node.lang == 'ComponentPropTable') {
          const [code, showStylingProps] = getPropDetail(node.meta);
          // NOTE: writing on code for testing
          // console.log('written on test2');
          // fs.writeFileSync('test2.json', JSON.stringify(code));
          nodesToProcess.push(
            processNode(node, parent, code, showStylingProps)
          );
        }
      });

      // Wait for all promises to be resolved
      Promise.all(nodesToProcess).then(resolve()).catch(reject());
    });
};

module.exports = ComponentPropTable;
