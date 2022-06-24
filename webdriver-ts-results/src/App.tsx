import * as React from 'react';
import './App.css';
import { FrameworkType, knownIssues } from './Common';
import ResultTable from './ResultTable';
import { SelectionBar } from './selection/SelectionBar';

const App = () => {
  // eslint-disable-next-line no-constant-condition
  const disclaimer = (false) ? (<div>
        <h2>Results for js web frameworks benchmark - official run</h2>
        <p>A description of the benchmark and the source code and can be found in the github <a href="https://github.com/krausest/js-framework-benchmark">repository</a>.</p>
      </div>) :
      (<p>Warning: These results are preliminary - use with caution.</p>);

    return (
      <div>
        {disclaimer}
         <SelectionBar/>
         <ResultTable type={FrameworkType.KEYED}/>
         <ResultTable type={FrameworkType.NON_KEYED}/>
      </div>)
}

export default App;