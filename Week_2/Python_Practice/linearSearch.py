def getVal(arr,target):
    flag=False
    for i in arr:
        if target==i:
            flag=True
    return flag

arr=[4,1,9,3,2]
target=99

flag=getVal(arr,target)

if flag:
    print("Found")
else:
    print("Not found")