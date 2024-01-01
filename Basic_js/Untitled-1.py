def missingCharacters(s):
    num = [1,2,3,3,4,5,6,7,8,9]
    alphanum = num
    alpha = 'abcdefghijkhlmnopqrstuvwxyz'
    for i in alpha:
        alphanum.append(i)
    for i in s:
        alphanum.remove(i)
    return alphanum