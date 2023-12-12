'use client'
import React, { useState } from 'react'
import copy from 'clipboard-copy';

const CopyToClip = ({ textToCopy }) => {
    const [isCopied, setIsCopied] = useState(false);
  
    const handleCopyClick = async () => {
      try {
        await copy(textToCopy);
        setIsCopied(true);
      } catch (err) {
        console.error('Error copying to clipboard', err);
      }
  
      // Reset the "Copied" state after a brief delay
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    };
  
    return (
        <button onClick={handleCopyClick} disabled={isCopied}>
            {isCopied ? 'Copied!' : textToCopy}
        </button>
    );
  };

export default CopyToClip