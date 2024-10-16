#include<stdio.h>
#include<stdlib.h>
int main(){


int N ;
printf("Enter un nombre : ");
scanf("%d" , &N); 

for(int i=10 ; i>=1 ; i--){
 
printf("\n%d x %d = %d" ,N ,i , N*i);
}
  return 0;
}