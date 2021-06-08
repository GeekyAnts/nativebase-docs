import React from 'react';

export default function KitchenSinkIframe() {
  return (
    <div className="kichen-sink-iframe mx-auto">
      <svg class="kichen-sink-iframe-notch" viewBox="0 0 219 31">
        <path
          d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z"
          fill-rule="evenodd"
        ></path>
      </svg>
      <div className="kichen-sink-iframe-safe-aria"></div>
      <iframe
        loading="lazy"
        importance="low"
        frameBorder="0"
        className="kichen-sink-iframe-iframe"
        src="https://kitchen-sink.vercel.app/"
      ></iframe>
    </div>
  );
}
