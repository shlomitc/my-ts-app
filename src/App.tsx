import React from 'react';
import "./App.scss";
import { Button, Tipseen, TipseenContent } from "monday-ui-react-core";

function App() {
  return (
    <div>
      <Tipseen content={<TipseenContent>The Tipseen content</TipseenContent>}>
        <Button kind={Button.kinds?.SECONDARY}>Target Element</Button>
      </Tipseen>
    </div>
  );
}

export default App;
