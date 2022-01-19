import ButtonContainer from './ButtonContainer/ButtonContainer.jsx';
import CompCreateContainer from './CompCreateContainer/CompCreateContainer.jsx';
import TagCreateContainer from './TagCreateContainer/TagCreateContainer.jsx';
import './DnDContainer.css';

const DnDContainer = () => {
  return (
    <div className="dndContainer">
      Drag & Drop
      <CompCreateContainer />
      <TagCreateContainer />
      <ButtonContainer />
    </div>
  )
}

export default DnDContainer;