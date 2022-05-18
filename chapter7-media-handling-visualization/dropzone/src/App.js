import './App.css';
//call useCallback
import { useCallback } from 'react';
//call useDropzone
import {useDropzone} from 'react-dropzone'

function App() {
  //declare var onDrop that called useCallback
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  }, [])

  //declare variable that call useDropzone, should be accept image
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: ['image/jpeg', 'image/png', 'image/svg+xml', 'video/mp4'],
  });

  return (
    <div className="App">
      <div
        {...getRootProps({
          className: `dropzone
          ${isDragAccept && 'dropzoneAccept'}
          ${isDragReject && 'dropzoneReject'}`,
        })}
      >
        {/* Add input */}
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <button>Import</button>
    </div>
  );
}

export default App;