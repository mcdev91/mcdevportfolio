import React, { Component } from "react";
import "./styles.css";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class FullResume extends Component {
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    render() {
        const { pageNumber } = this.state;

        return (
            <Document
                id="docComponent"
                file="/mc.pdf"
                onLoadSuccess={this.onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
                <div id="downloadLink">
                    <a className="link" href="././public/mc1.pdf" download>DOWNLOAD PDF</a>
                </div>
            </Document>
        );
    }
}