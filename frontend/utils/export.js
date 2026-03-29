import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const handleExportPDF = (ticker, isDarkMode) => {
  const input = document.getElementById('ai-advice-content');

  if (!input) {
    console.error("Content not found for PDF export");
    return;
  }

  html2canvas(input, {
    scale: 2,
    useCORS: true,
    backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
    onclone: (clonedDoc) => {
      // Force white background for the actual PDF
      const el = clonedDoc.getElementById('ai-advice-content');
      el.style.background = 'white';
      el.style.color = 'black';
    }
  }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    // Header Branding
    pdf.setFontSize(18);
    pdf.setTextColor(11, 95, 255);
    pdf.text('MindSpark Hub - AI Stock Analysis', 10, 20);

    pdf.setFontSize(10);
    pdf.setTextColor(100);
    pdf.text(`Report Generated: ${new Date().toLocaleDateString()}`, 10, 28);
    pdf.text(`Ticker: ${ticker || 'Analysis'}`, 10, 34);

    pdf.addImage(imgData, 'PNG', 10, 40, pdfWidth - 20, pdfHeight - 20);
    pdf.save(`MindSpark_Report_${ticker || 'Report'}.pdf`);
  });
};