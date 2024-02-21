import { SortableContainer } from 'react-sortable-hoc'
import DragAndDropListElement from './DragAndDropListElement';
interface SortableListProps {
    items: string[];
    index: number;
}

function DragAndDropList({items}: SortableListProps) {
    return (
        <ol className="list-group list-group-numbered" >
            {items.map((value, index) => 
                <DragAndDropListElement key={`item-${value}`} index={index} value={value}/>
            )}
        </ol>
    );
}

export default SortableContainer(DragAndDropList);