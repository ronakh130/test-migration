import './CodeContainer.css';
import AceEditor from "react-ace";

const CodeContainer = () => {
  return (
    <div className="codeContainer">
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
    </div>
  )
}

export default CodeContainer;
