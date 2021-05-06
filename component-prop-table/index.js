'use strict';
const visit = require('unist-util-visit-parents');
const u = require('unist-builder');
const dedent = require('dedent');
const fs = require('fs');
const { getPropDetail } = require('../utils');

const processNode = (node, parent, code) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Generate Node for PropTable
      const snackPlayerDiv = u('html', {
        value: dedent`${propTable(code)}
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
  const template = (propsObject) => {
    let temp = '';
    for (let prop in propsObject) {
      const { name, description, type, defaultValue } = propsObject[prop];
      temp =
        temp +
        `<tr>
        <td>
          ${name}
        </td>
        <td>
          ${type.name}
        </td>
        <td>
          ${description || '-'}
        </td>
        <td>
          ${defaultValue || '-'}
        </td>
      </tr>`;
    }
    return temp;
  };

  return `
  <h3>${displayName}</h3>
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
    ${template(props)}
  </table>
  `;
};

const propTable = (typesArray) => {
  return typesArray.map((component) => templateGenerator(component));
};

const ComponentPropTable = () => {
  return (tree) =>
    new Promise(async (resolve, reject) => {
      const nodesToProcess = [];
      // Parse all CodeBlocks
      visit(tree, 'code', (node, parent) => {
        if (node.lang == 'ComponentPropTable') {
          const code = getPropDetail(...node.meta.split('path=')[1].split(','));
          // NOTE: writing on code for testing
          // console.log('written on test2');
          // fs.writeFileSync('test2.js', JSON.stringify(code));
          nodesToProcess.push(processNode(node, parent, code));
        }
      });

      // Wait for all promises to be resolved
      Promise.all(nodesToProcess).then(resolve()).catch(reject());
    });
};

module.exports = ComponentPropTable;
