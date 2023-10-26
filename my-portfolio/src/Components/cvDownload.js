import React from 'react';

function CVDownload() {
  // Your CV download logic here
  const pdfLink = 'https://docs.google.com/document/d/18bc2NqHthO7dV-7onN2RQL30auZCo5AK/edit?usp=drive_link&ouid=103433114653235685624&rtpof=true&sd=true';

  return (
    <div className='cvDownload'>
      
      <a href={pdfLink} target="_blank" rel="noopener noreferrer">
        Download CV
      </a>
    </div>
  );
}

export default CVDownload;