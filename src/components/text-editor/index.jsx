'use client'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <ReactQuill 
        theme="snow" 
        value={editorHtml}
        onChange={handleChange} 
        style={{
            border: '0px solid transparent',
            height: '245px'
        }}
      />
    </div>
  );
};

export default RichTextEditor;