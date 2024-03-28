nums=[1,2,3,4,5]

s=0
e=len(nums)-1
key=4

while s<=e:
    mid=(s+e)//2
    if nums[mid]==key:
        print("Found at index: ",mid)
        break
    elif nums[mid]>key:
        e=mid-1
    else:
        s=mid+1

     

 