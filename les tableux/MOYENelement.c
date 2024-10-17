#include<stdio.h>
#include<stdlib.h>

int main(){

 int T[10];
 int nbr_element;
 int somme=0,moyen=0;
 do{

  printf("Entrer nombr element :");
  scanf("%d" , &nbr_element);

  if(nbr_element>10 || nbr_element<=0){
    printf("taille plus grand ou plus petite!\n");
    
}
  }while(nbr_element<=0 || nbr_element>10);

  for(int i=0 ;i<nbr_element ; i++){
    printf("Element %d:" , i+1);
    scanf("%d" , &T[i]);
  }

  for(int i=0 ; i<nbr_element ; i++){
    somme = somme+T[i];
    moyen = somme/nbr_element;
  }
  
    printf("la moyen des elements de tableux est %d:" ,moyen);
  


  return 0;
}