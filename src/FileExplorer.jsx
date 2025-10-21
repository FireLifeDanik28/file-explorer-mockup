import FileItem from "./FileItem"
import FolderItem from "./FolderItem"

function FileExplorer({ fileSystem }) {
  function display(x, depth = 0) {
    if (x.type === "folder") {
      return <FolderItem key={x.id} folder={x} display={display} depth={depth + 1} />;
    } else {
      return <FileItem key={x.id} file={x} depth={depth + 1} />;
    }
  }

  return (
    <>
      <tr className="folder">
        <td>📂</td>
        <td style={{ paddingLeft: "0px" }}>{fileSystem.name}</td>
        <td>{fileSystem.type}</td>
        <td></td>
      </tr>
      {fileSystem.children?.map((x) => display(x, 0))}
    </>
  );
}
export default FileExplorer;