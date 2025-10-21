import './Explorer.css'

function FileItem({ file, depth }) {
    return (
        <tr className="file">
            <td>📄</td>
            <td style={{ paddingLeft: `${depth * 25}px` }}>{file.name}</td>
            <td>{file.type}</td>
            <td>{file.size}</td>
        </tr>
    )
}

export default FileItem;