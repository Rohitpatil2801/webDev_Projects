nums=[9,11,1,45]
minVal=nums[0]

for i in nums:
    if i<minVal:
        minVal=i

print("Minimum: ",minVal)