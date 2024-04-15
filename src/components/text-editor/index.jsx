import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');
  const [ReactQuill, setReactQuill] = useState(null);

  useEffect(() => {
    // Load ReactQuill dynamically in the client-side environment
    import('react-quill').then(module => {
      setReactQuill(module.default);
    });
  }, []);

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      {ReactQuill && typeof window !== 'undefined' && (
        <ReactQuill 
          theme="snow" 
          value={editorHtml}
          onChange={handleChange} 
          style={{
              border: '0px solid transparent',
              height: '245px'
          }}
        />
      )}
    </div>
  );
};

export default RichTextEditor;
