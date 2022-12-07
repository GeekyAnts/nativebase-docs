const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

export const getImportSpecifier = (name: any) => {
  return {
    type: "ImportSpecifier",
    imported: {
      type: "Identifier",
      loc: {
        identifierName: name,
      },
      name: name,
    },
    local: {
      type: "Identifier",
      loc: {
        identifierName: name,
      },
      name: name,
    },
  };
};

export function getParsedCode(code: any) {
  const ast = parse(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });
  traverse(ast, {
    enter(path: any) {
      if (path.node.type === "ImportDeclaration") {
        path.remove();
      }
      if (path.node?.type === "ExportNamedDeclaration") {
        const childDec = path.node.declaration;
        path.replaceWith(childDec);
      }
      if (
        path.node?.type === "VariableDeclaration" &&
        path.node?.declarations[0]?.init?.type === "MemberExpression" &&
        path.node?.declarations[0]?.init?.object.callee.name === "require"
      ) {
        path.remove();
      }
    },
  });

  const output = generate(ast);
  return output.code;
}

export function addExportsToCode(code: string, endingTemplate: string) {
  const ast = parse(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });
  traverse(ast, {
    ImportDeclaration({ node }: any) {
      let isCenterImported = false;
      let isProviderImported = false;
      if (node.source.value === "native-base") {
        node.specifiers.forEach((s: any) => {
          if (s.imported.name === "Center") {
            isCenterImported = true;
          } else if (s.imported.name === "NativeBaseProvider") {
            isProviderImported = true;
          }
        });
        if (!isCenterImported) {
          node.specifiers.push(getImportSpecifier("Center"));
        }
        if (!isProviderImported) {
          node.specifiers.push(getImportSpecifier("NativeBaseProvider"));
        }
      }
    },
    enter(path: any) {
      if (path.node?.type === "ExportNamedDeclaration") {
        // console.log(path.node.declaration.declarations);
        const childDec = path.node.declaration;
        path.replaceWith(childDec);
        // console.log(path.node);
      }
    },
  });
  const output = generate(ast);
  const finalTemplate = output.code + "\n" + endingTemplate;
  return finalTemplate;
}
