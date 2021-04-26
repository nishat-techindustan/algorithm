def compareTriplets(a, b):
    aCount = 0
    bCount = 0
    for i in range(0, len(a)):
        for h in range(0, len(b)):
          if (i == h):
            if(a[i] > b[h]):
              aCount += 1
            elif (a[i] == b[h]):
              continue
            else:
              bCount += 1
    return [aCount, bCount]

# print(compareTriplets([5, 6, 7],[3, 6, 10]))

def diagonalDifference(arr):
  sumLeft = 0 
  rightSum = 0
  for i in range(0, len(arr)):
    for j in range(0, len(arr[i])):
      if (i == j):
        sumLeft += arr[i][j]
      if(i + j == len(arr[i]) - 1):
        rightSum += arr[i][j]
  return abs(sumLeft - rightSum)

print(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))

def staircase(n):
  for i in range(1,n + 1):
    for j in range(n-i-1,-1, -1):
      print(" ",end="")
    for h in range(0, i):
      print ('#', end="")
    print("\t")

