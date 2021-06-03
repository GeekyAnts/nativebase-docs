import React from 'react';
export default function TypographyTheme() {
  return (
    <div className="flex text-gray-900 w-full overflow-x-auto mt-10 flex-col space-y-1">
      <div className="text-xs whitespace-nowrap">(XS) The quick brown fox</div>
      <div className="text-sm whitespace-nowrap">(SM) The quick brown fox</div>
      <div className="text-md whitespace-nowrap">(LG) The quick brown fox</div>
      <div className="text-xl whitespace-nowrap">(XL) The quick brown fox</div>
      <div className="text-2xl whitespace-nowrap">
        (2XL) The quick brown fox
      </div>
      <div className="text-3xl whitespace-nowrap">
        (3XL) The quick brown fox
      </div>
      <div className="text-4xl whitespace-nowrap">
        (4XL) The quick brown fox
      </div>
    </div>
  );
}
