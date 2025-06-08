import { useParams } from 'react-router-dom';

function Export() {
  const { projectId } = useParams();
  return <h1>Export Page - Project ID: {projectId}</h1>;
}

export default Export;