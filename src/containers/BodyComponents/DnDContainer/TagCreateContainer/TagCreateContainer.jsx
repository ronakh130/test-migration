import './TagCreateContainer.css';

const TagCreateContainer = () => {
  return (
    <div>
      <label id="header">HTML Elements</label>
      <div id="tag-create-box">
        <div className='tag-duo'>
          <label className="tag-label">Tag:</label>
          <input className="tag-input"></input>
        </div>
        <div className='tag-duo' >
          <label className="tag-label">Class:</label>
          <input className="tag-input"></input>
        </div>
        <div  className='tag-duo'>
          <label className="tag-label">Id:</label>
          <input className="tag-input"></input>
        </div>
        <button id="add-element-btn">Add Element</button>
      </div>
    </div>
  )
}

export default TagCreateContainer;

// const CreateHTMLContainer = () => {
//   return (
//     <div id='html-create'>
//       <label>Add New Element:</label>
//       <br></br>
//       <label>Tag:</label>
//       <input></input>
//       <br></br>
//       <label>Class Name:</label>
//       <input></input>
//       <br></br>
//       <label>Id Name</label>
//       <input></input>
//       <br></br>
//       <button>Add Element</button>
//     </div>
//   );
// };