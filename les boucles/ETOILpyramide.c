#include<stdio.h>
#include<stdlib.h>

int main(){

int nbr_line; 

printf("Entrer nombre des line :");
scanf("%d" , &nbr_line);

for(int i=0 ; i<nbr_line ; i++){
for(int j=nbr_line-i ; j>=1; j--)
    printf(" ");
    for(int j=1 ;j<i+i+2 ;j++)


    printf("1");
    printf("\n");
    
}
                  

    return 0; 
}