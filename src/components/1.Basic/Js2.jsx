import React from "react";

// Write a JavaScript program to print the current window contents.

function PrintPage() {
  return (
    <div>
      Click here to print current page content
      <button onClick={() => window.print()}>Print</button>
    </div>
  );
}

export default PrintPage;
