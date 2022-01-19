import './CompCreateContainer.css';

const CompCreateContainer = () => {
  return (
    <div id='comp-create-box'>
      <form>
        <div id='inputs'>
          <input id='text-field' placeholder='Component Name...'></input>
          <div id='root-check'>
            <label name='check'>Root</label>
            <input type='checkbox' name="check"></input>
          </div>
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default CompCreateContainer;