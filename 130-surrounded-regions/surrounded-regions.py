class Solution:
    def solve(self, board: list[list[str]]) -> None:
        for i in range (len(board)): 
            helper(board, i , 0)
            helper(board, i, len(board[0]) - 1)

        for i in range (len(board[0])):
            helper(board, 0, i)
            helper(board, len(board) - 1, i)

        for i in range (len(board)):
            for j in range (len(board[0])):
                if (board[i][j] == 'V'):
                    board[i][j] = 'O'
                else: 
                    board[i][j] = 'X'

def helper (arr, Y_axes, X_axes):
    if (Y_axes < 0 or Y_axes >= len(arr) or X_axes < 0 or X_axes >= len(arr[0]) or arr[Y_axes][X_axes] != 'O'): 
        return 
    arr[Y_axes][X_axes] = 'V'
    x = [1,-1,0,0]
    y = [0,0,1,-1]
    for i in range(4): 
        helper(arr,Y_axes + y[i], X_axes + x[i])

