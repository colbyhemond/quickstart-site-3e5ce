'use client'


import React, { useState, useEffect, useRef } from 'react';

const ArticleReader = ({ text, wordsPerMinute = 200 }) => {
    let readingTime = 0;

    const wordCount = text.split(/\s+/).length;
    readingTime = Math.ceil(wordCount / wordsPerMinute);
    
  return (
    <div className=''>{readingTime} minutes</div>
  );
};

export default ArticleReader;