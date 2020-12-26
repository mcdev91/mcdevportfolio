import React, { Component } from "react";
import "./ResumePage.css";
import { Document, Page, pdfjs } from "react-pdf";
import GetAppIcon from '@material-ui/icons/GetApp';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class FullResume extends Component {
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    // goToPrevPage = () =>
    //     this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    // goToNextPage = () =>
    //     this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

    render() {
        const { pageNumber } = this.state;

        return (
            <div>
                <Document
                    id="docComponent"
                    file="/mc.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                    <Page pageNumber={pageNumber + 1} />
                    <div id="downloadLink">
                        <a class="link" href="/mc.pdf" download>download .PDF</a>
                    </div>
                </Document>
            </div>
        );
    }
}