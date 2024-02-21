import { SortableElement } from 'react-sortable-hoc'

interface SortableItemProps {
    value: string;
  }

function DragAndDropListElement({value}: SortableItemProps) {
    return (
        <li className="list-group-item">{value}</li>
    );
}

export default SortableElement(DragAndDropListElement);