import React from "react";

import TCDMAA2413 from './TCDMAA2413.pdf'

function EvAlgorithmsBlog2() {
  return (
    <div>
    <p> The following serves as context for some of input regarding some of the </p>

      <object data={TCDMAA2413} type="application/pdf" style={{ width: '100%', height: '800px' , minWidth: '888px', minHeight: '999px' }}  >
        <embed src={TCDMAA2413} type="application/pdf" width="100%" height="800px"  />
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://www.infoescola.com/wp-content/uploads/2012/12/Bernese-Mountain-Dog_553932688.jpg">Download PDF</a>.</p>
      </object>
    </div>
  );
}


export default EvAlgorithmsBlog2;
