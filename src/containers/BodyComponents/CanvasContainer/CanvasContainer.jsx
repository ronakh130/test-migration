import './CanvasContainer.css';

const CanvasContainer = () => {
  return (
    <div className="canvasContainer">
      Canvas
      <br/>
      <br/>

      <br/>
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
      <div className='green-palette-container'>
        <button id='green-500'>500</button>
        <button id='green-400'>400</button>
        <button id='green-300'>300</button>
        <button id='green-200'>200</button>
        <button id='green-100'>100</button>
      </div>
    </div>
  )
}

export default CanvasContainer;