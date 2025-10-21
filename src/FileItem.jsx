import './Explorer.css'

function FileItem({ file }) {
    return (
        <>
            <div id="file"><p>{file.name}, {file.type}</p></div>
        </>
    )
}

export default FileItem