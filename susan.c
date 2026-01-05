#include<stdio.h>
int main(){
    int i,j,count,n;
    printf("enter the n:");
    scanf("%d",&n);
    int arr[n];
    printf("enter the elements:");
    for(i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    for(i=0;i<n-1;i++){
        count=0;
        for(j=0;j<n;j++){
            if(arr[i]==arr[j] && i!=j){
                count++;
                break;
            }
        }
        if(count==0){   
        printf("%d",arr[i]);
    }
    }
    
     return 0;
}