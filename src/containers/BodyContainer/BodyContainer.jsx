import './BodyContainer.css';
import CanvasContainer from '../BodyComponents/CanvasContainer/CanvasContainer';
import CodeContainer from '../BodyComponents/CodeContainer/CodeContainer';
import CustomizationContainer from '../BodyComponents/CustomizationContainer/CustomizationContainer';
import DnDContainer from '../BodyComponents/DnDContainer/DnDContainer'
import PreviewContainer from '../BodyComponents/PreviewContainer/PreviewContainer'


const BodyContainer = () => {
  return (
    <div className="bodyContainer">
      <DnDContainer />
      <CanvasContainer />
      <PreviewContainer />
      <CustomizationContainer />
      <CodeContainer />
    </div>
  )
}

export default BodyContainer;