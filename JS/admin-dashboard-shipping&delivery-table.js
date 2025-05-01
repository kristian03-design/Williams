  // Example data for the shipping table
  const shippingData = [
    {
      trackNumber: "#JK982QW80",
      customer: "Rifat Zulfan",
      carrier: "Budi Sudarsono",
      shippedDate: "Mon, 17 June 2024, 07:01",
      status: "In Transit",
    },
    {
      trackNumber: "#AB123CD45",
      customer: "John Doe",
      carrier: "Jane Logistics",
      shippedDate: "Tue, 18 June 2024, 10:15",
      status: "Pending",
    },
    {
      trackNumber: "#XY789GH12",
      customer: "Alice Smith",
      carrier: "FastTrack",
      shippedDate: "Wed, 19 June 2024, 14:30",
      status: "Shipped",
    },
  ];

  // Function to populate the shipping table
  function populateShippingTable() {
    const tableBody = document.getElementById("shippingTableBody");
    tableBody.innerHTML = ""; // Clear existing rows

    shippingData.forEach((shipment) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${shipment.trackNumber}</td>
        <td>${shipment.customer}</td>
        <td>${shipment.carrier}</td>
        <td>${shipment.shippedDate}</td>
        <td><span class="status-label ${shipment.status.toLowerCase().replace(" ", "-")}">${shipment.status}</span></td>
        <td><button class="action-btn" onclick="viewShipment('${shipment.trackNumber}')">View</button></td>
      `;

      tableBody.appendChild(row);
    });
  }

  // Function to handle the "View" button click
  function viewShipment(trackNumber) {
    const shipment = shippingData.find((s) => s.trackNumber === trackNumber);
    if (shipment) {
      // You can open a modal or perform other actions here
      openModal();
    }
  }

  // Populate the table on page load
  document.addEventListener("DOMContentLoaded", populateShippingTable);