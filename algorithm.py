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

# print(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))

def staircase(n):
  for i in range(1,n + 1):
    for j in range(n-i-1,-1, -1):
      print(" ",end="")
    for h in range(0, i):
      print ('#', end="")
    print("\t")


# print(staircase(8))

def birthdayCakeCandles(candles):
  maxCount = 0
  maxUnit = max(candles) 
  for i in range(0, len(candles)):
    if(maxUnit == candles[i]):
      maxCount += 1
  return maxCount

# print(birthdayCakeCandles([3, 2, 1, 3]))

def timeConversion(s):
  strArr = list(s)
  for i in range(0, len(strArr)):
    if(s[i] == 'P'):
      l = int(s[0] + s[1])
      if(l == 12):
        return ''.join(strArr)[0: len(s) - 2:]
      strArr[0] = str(int(s[0]) + 1) 
      strArr[1] = str(int(s[1]) + 2)
    if(s[i] == 'A'):
        l = int(s[0] + s[1])
        if(l == 12):
          strArr[0] = '0' 
          strArr[1] = '0'
  return ''.join(strArr)[0: len(s) - 2:]

# print(timeConversion('12:45:54PM'))

def starDiagonal(num):
  for i in range(0,num):
    for j in range(0, num):
      if( i == 0 or j == 0 or i == num - 1 or j == num -1):
        print('*', end='')
      elif (i == j):
        print('*', end='')
      elif (i + j == num - 1):
        print('*', end='')
      else:
        print(' ', end='')
    print('')
  
print(starDiagonal(9))

