const sudokuValidator = (grid: Array<Array<number>>) => {
  for (let i = 0; i < grid.length; i += 1) {
    const rowCheckSet = new Set();
    const colCheckSet = new Set();
    const gridCheckSet = new Set();
    const originX = (i % 3) * 3;
    const originY = Math.floor(i / 3) * 3;
    for (let j = 0; j < grid[i].length; j += 1) {
      const rowValue = grid[i][j];
      const colValue = grid[j][i];
      const gridValue = grid[originX + Math.floor(j / 3)][originY + (j % 3)];

      if (rowValue + colValue + gridValue > 2) {
        rowCheckSet.add(rowValue);
        colCheckSet.add(colValue);
        gridCheckSet.add(gridValue);
      } else {
        return false;
      }
    }
    if (rowCheckSet.size < 9 || colCheckSet.size < 9 || gridCheckSet.size < 9) {
      return false;
    }
  }
  return true;
};
console.log(
  sudokuValidator([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
console.log(
  sudokuValidator([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 2, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
