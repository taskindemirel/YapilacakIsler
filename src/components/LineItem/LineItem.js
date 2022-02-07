import './LineItem.css'
import { TiDelete } from 'react-icons/ti'

const LineItem = ({item, handleCheck, handleDelete }) => {
  return (
    <li className='item'>
    <label
      onClick={() => handleCheck(item.id)}
      className={item.checked ? "lined" : null}
    >{item.item}</label>
    <TiDelete
      role='button'
      onClick={() => handleDelete(item.id)}
    />
  </li>
  );
};

export default LineItem;
