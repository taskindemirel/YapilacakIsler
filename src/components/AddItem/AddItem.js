import './AddItem.css'
import { IoMdAddCircle } from 'react-icons/io'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            {/* <label htmlFor="addItem">Bir iş ekleyin</label> */}
            <input
                type="text"
                autoFocus
                placeholder='Bir iş ekleyin'
                required
                id='addItem'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit">
                <IoMdAddCircle
                    className='addButton'
                />
            </button>

        </form>
    );
};

export default AddItem;
