function calculatePrice() {
  // Get input values
  const boardPrice = parseFloat(document.getElementById("boardPrice").value);
  const boardWidth = 240; // Fixed value
  const boardHeight = 120; // Fixed value
  const pieceWidth = parseFloat(document.getElementById("pieceWidth").value);
  const pieceHeight = parseFloat(document.getElementById("pieceHeight").value);

  // Input validation
  if (
    isNaN(boardPrice) ||
    isNaN(boardWidth) ||
    isNaN(boardHeight) ||
    isNaN(pieceWidth) ||
    isNaN(pieceHeight)
  ) {
    document.getElementById("result").textContent =
      "Please enter valid numbers";
    return;
  }

  // Calculate piece area and board area
  const pieceArea = pieceWidth * pieceHeight;
  const boardArea = boardWidth * boardHeight;

  // Calculate piece price
  const piecePrice = (boardPrice / boardArea) * pieceArea;

  // Display result
  document.getElementById(
    "result"
  ).textContent = `Piece price: ${piecePrice.toFixed(2)}`;
}
