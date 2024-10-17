#include<stdio.h>
#include<stdlib.h>

int main(){

    int nombre ; 
    printf("Entrer votre nombre :");
    scanf("%d" , &nombre); 

    while(nombre>0){

    int dernier_nombre = nombre % 10;
    printf("%d" , dernier_nombre );
    nombre = nombre/10;
    }

}