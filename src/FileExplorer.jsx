import FileItem from "./FileItem"
import FolderItem from "./FolderItem"

function FileExplorer({ fileSystem }) {
  function display(x) {
    if (x.type === "folder") {
      return <FolderItem key={x.name} folder={x} display={display} />;
    } else {
      return <FileItem key={x.name} file={x} />;
    }
  }

  return (
    <div>
      <p>{fileSystem.name}, {fileSystem.type}</p>
      {fileSystem.children?.map((x) => display(x))}
    </div>
  );
}
export default FileExplorer;