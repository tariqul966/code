function searchGoogle() {
  const query = document.getElementById('searchInput').value;
  if (query.trim() !== "") {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  }
}
