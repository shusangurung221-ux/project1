#include<stdio.h>
int main(){
    int n,org,rev=0,rem;
    printf("Enter an integer: ");
    scanf("%d",&n);
    org=n;
    while(n!=0){
        rem=n%10;
        rev=rev*10+rem;
        n/=10;
    }   
    if(org==rev)
        printf("%d is a palindrome.\n",org);
    else
        printf("%d is not a palindrome.\n",org);
    return 0;
}