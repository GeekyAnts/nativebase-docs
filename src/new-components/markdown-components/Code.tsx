import React from "react";
export const Code = (props: any) => {
  return (
    <pre className="p-4 overflow-auto bg-gray-100 dark:text-white dark:bg-gray-900">
      {props.children}
    </pre>
  );
};
