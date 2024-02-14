// Function to generate CSV content
function generateCSV() {
    // Sample data for demonstration
    const data = [
        ['Name', 'Age', 'Country'],
        ['John', '25', 'USA'],
        ['Alice', '30', 'Canada'],
        ['Bob', '28', 'UK']
    ];

    // Convert data array to CSV format
    const csvContent = data.map(row => row.join(',')).join('\n');

    return csvContent;
}

// Function to send message to background script to initiate download
function downloadCSV() {
    const csvContent = generateCSV();
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    // Send message to background script to initiate download
    chrome.runtime.sendMessage({ action: 'downloadCSV', url: url });
}

// Call the downloadCSV function when needed
downloadCSV();