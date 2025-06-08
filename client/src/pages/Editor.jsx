import { useParams } from 'react-router-dom';

function Editor() {
  const { projectId } = useParams();
  return <h1>Editor Page - Project ID: {projectId}</h1>;
}

export default Editor;