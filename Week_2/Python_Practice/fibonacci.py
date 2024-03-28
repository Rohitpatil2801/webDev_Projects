# 0,1,1,2,3,5...
n=10

a=0
b=1
while n>0:
    print(a," ")
    c=a+b
    a=b
    b=c
    n=n-1

