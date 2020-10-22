import React from "react";

function MemoComp() {
  return (
    <div>
      <p>
        Just like Pure Component , the Memo Functional component does not
        re-render when the state is the same
      </p>
    </div>
  );
}

export default React.memo(MemoComp);
