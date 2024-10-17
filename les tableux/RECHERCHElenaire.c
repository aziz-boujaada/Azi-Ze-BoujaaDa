#include<stdio.h>
#include<stdlib.h>

int main(){

int T[10];
int nbr_element;
int recherch;

printf("Entrer nombre elements :");
scanf("%d" , &nbr_element);

if(nbr_element>10){
    printf("la taiile de tableux grand!");
    return 1;
}

for(int i=0 ; i<nbr_element;i++){
    printf("elemnt %d:" , i+1);
    scanf("%d"  , &T[i]);
}

printf("ENTRER NOMBRE PAR RECHERCHE:");
    scanf("%d"  , &recherch);

    int found=0;

for(int j=0 ; j<nbr_element ; j++){
   if(recherch==T[j]){
    found=1;
    break;
   }
}
if(found){
    printf("votre nombre est trouver %d\n" , recherch);
}else{
    printf("votre nombre pas trouver!");
}
    return 0;
}