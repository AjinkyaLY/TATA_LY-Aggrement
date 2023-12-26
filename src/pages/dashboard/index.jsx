import { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import PDF from '../../assets/AggrementPdf.pdf';

import './Sample.css';
import PreviousNextButtons from '../../components/PreviousNextButtons';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 800;

export default function PDFViewer() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className='pdf-container'>
      <div className='Example__container__document' ref={setContainerRef}>
        <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess} options={options}>
          {/* {Array.from(new Array(numPages), (el, index) => ( */}
          <Page
            key={pageNumber}
            pageNumber={pageNumber}
            width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
          />
          {/* ))} */}
        </Document>
      </div>

      <div className='buttonContainer'>
        <div className='buttonSticky'>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <PreviousNextButtons
            disablePrevious={pageNumber === 1}
            disableNext={pageNumber === numPages}
            onPreviousClick={() => setPageNumber((prev) => (prev !== 1 ? prev - 1 : prev))}
            onNextClick={() => setPageNumber((prev) => (prev !== numPages ? prev + 1 : prev))}
          />
        </div>
      </div>
    </div>
  );
}
