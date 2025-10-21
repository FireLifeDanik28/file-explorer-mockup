import './Explorer.css'

function FolderItem({ folder, display, depth }) {
    return (
        <>
            <tr className="folder">
                <td>📂</td>
                <td style={{ paddingLeft: `${depth * 25}px` }}>{folder.name}</td>
                <td>{folder.type}</td>
                <td></td>
            </tr>
            {folder.children.map((y) => display(y, depth))}
        </>
    )
}

export default FolderItem;