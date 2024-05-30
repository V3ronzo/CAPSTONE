import { useState } from 'react';

const checklistStyles = {
  container: {
    padding: '20px',
  },
  notesContainer: {
    border: '1px solid black',
    padding: '10px',
    marginBottom: '20px',
  },
  notes: {
    width: '100%',
    border: '1px solid black',
    padding: '5px',
    resize: 'none',
  },
  checklistContainer: {
    border: '1px solid black',
    padding: '10px',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '10px',
  },
  newItemInput: {
    border: '1px solid black',
    padding: '5px',
    flex: 1,
  },
  addButton: {
    marginLeft: '10px',
  },
};

const Checklist = () => {
  const [notes, setNotes] = useState('');
  const [checklistItems, setChecklistItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [savedChecklists, setSavedChecklists] = useState([]);

  const handleAddItem = () => {
    if (newItem.trim()) {
      setChecklistItems([...checklistItems, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleSaveChecklist = () => {
    setSavedChecklists([...savedChecklists, { notes, items: checklistItems }]);
    setNotes('');
    setChecklistItems([]);
  };

  return (
    <div style={checklistStyles.container}>
      <h1>My Checklist</h1>
      <div style={checklistStyles.notesContainer}>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter your notes here"
          rows={5}
          style={checklistStyles.notes}
        />
      </div>
      <div style={checklistStyles.checklistContainer}>
        <div style={checklistStyles.inputContainer}>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter a new checklist item"
            style={checklistStyles.newItemInput}
          />
          <button onClick={handleAddItem} style={checklistStyles.addButton}>
            Add Item
          </button>
        </div>
        <ul>
          {checklistItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleSaveChecklist}>Save Checklist</button>
      <div>
        <h2>Saved Checklists</h2>
        {savedChecklists.map((checklist, index) => (
          <div key={index}>
            <h3>Checklist {index + 1}</h3>
            <p>Notes: {checklist.notes}</p>
            <ul>
              {checklist.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checklist;