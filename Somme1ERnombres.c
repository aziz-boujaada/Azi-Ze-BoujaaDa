#include<stdio.h>
#include<stdlib.h>

int main(){

    int nombre ; 
    int somme = 0; 

    printf("Entrer un nombre :");
    scanf("%d" , &nombre); 

    for(int i=0 ; i<=nombre ; i++ ){
        somme+=i;
    }
    printf("la somme de premier%d nombre est %d " , nombre,somme);

return 0;
}