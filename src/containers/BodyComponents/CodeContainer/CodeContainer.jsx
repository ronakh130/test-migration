import './CodeContainer.css';
import AceEditor from "react-ace";

const CodeContainer = () => {
  return (
    <div className="codeContainer">
<<<<<<< HEAD
      <AceEditor
        mode="javascript"
        theme="monokai"
        width="100%"
        height="100%"
        name="Code_div"
        readOnly={false}
        fontSize={16}
        tabSize={2}
      />
=======
      <p>Code Editor</p>

      <button id='purple-electric-violet'>VIOLET</button>
      <button id='purple-900'>900</button>
      <button id='purple-700'>700</button>
      <button id='purple-600'>600</button>
      <button id='purple-500'>500</button>
      <button id='purple-400'>400</button>
      <button id='purple-300'>300</button>
      <button id='purple-200'>200</button>
      <button id='button-error'>ERROR</button>
      <br/>
      <button id='green-500'>500</button>
      <button id='green-400'>400</button>
      <button id='green-300'>300</button>
      <button id='green-200'>200</button>
      <button id='green-100'>100</button>
    
>>>>>>> 155061d (add color palette and theme toggle)
    </div>
  )
}

export default CodeContainer;
