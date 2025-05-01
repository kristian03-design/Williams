const rowsPerPage = 10;
let currentPage = 1;
const totalRows = document.querySelectorAll("#transTable tbody tr").length;
const totalPages = Math.ceil(totalRows / rowsPerPage);

function updatePagination() {
  const rows = document.querySelectorAll("#transTable tbody tr");
  rows.forEach((row, index) => {
  row.style.display = (index >= (currentPage - 1) * rowsPerPage && index < currentPage * rowsPerPage) ? "" : "none";
  });

  document.getElementById("pagination-info").textContent = `Showing ${(currentPage - 1) * rowsPerPage + 1}-${Math.min(currentPage * rowsPerPage, totalRows)} of ${totalRows}`;
  document.getElementById("prev-btn").disabled = currentPage === 1;
  document.getElementById("next-btn").disabled = currentPage === totalPages;

  document.querySelectorAll(".page-btn").forEach((btn, index) => {
  btn.classList.toggle("active", index + 1 === currentPage);
  });
}

function changePage(action) {
  if (action === 'prev' && currentPage > 1) {
  currentPage--;
  } else if (action === 'next' && currentPage < totalPages) {
  currentPage++;
  } else if (typeof action === 'number') {
  currentPage = action;
  }
  updatePagination();
}