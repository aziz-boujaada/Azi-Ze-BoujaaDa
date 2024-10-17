#include<stdio.h>
#include<stdlib.h>

int main(){

int nombre;
int somme_produit=0;

printf("entrer un nombre :");
scanf("%d" , &nombre);

for(int i=1 ; i<=10 ; i++){
    printf("%d x %d = %d\n" , nombre,i ,nombre*i);
    somme_produit = somme_produit+(nombre*i);
}
printf(" la somme produit est %d:" , somme_produit);

    return 0;
}