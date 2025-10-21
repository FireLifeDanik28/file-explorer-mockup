import './Explorer.css'

function FolderItem({ folder, display }) {
    return (
        <>
            <div id="folder"><p>{folder.name}, {folder.type}</p>
            {folder.children.map(
                (y) => display(y)
            )}
            </div>
        </>
    )
}

export default FolderItem;