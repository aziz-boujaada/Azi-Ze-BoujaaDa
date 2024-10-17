#include <stdio.h>
#include <stdlib.h>


int main(){

 int nbr_element1;
 int nbr_element2;



 

  //////// TABLEUX 1  ////////////////
 do{
printf("les elements de Tableux 1\n");
  printf("Entrer nombr element :");
  scanf("%d" , &nbr_element1);

  if(nbr_element1>10 || nbr_element1<=0){
    printf("taille plus grand ou plus petite!\n");
    
}
  }while(nbr_element1<=0 || nbr_element1>10);

     int T1[nbr_element1];
  for(int i=0 ;i<nbr_element1 ; i++){
    printf("Element %d:" , i+1);
    scanf("%d" , &T1[i]);
  }

      //////// TABLEUX 2  ////////////////
do{
  printf("les elements de Tableux 2\n");
  printf("Entrer nombr element :");
  scanf("%d" , &nbr_element2);

  if(nbr_element2>10 || nbr_element2<=0){
    printf("taille plus grand ou plus petite!\n");
    
}
  }while(nbr_element2<=0 || nbr_element2>10);

      int T2[nbr_element2];
  for(int i=0 ;i<nbr_element2 ; i++){
    printf("Element %d:" , i+1);
    scanf("%d" , &T2[i]);
  }

    int TF[nbr_element1+nbr_element2];
  for(int i=0 ;i<nbr_element1; i++ ){
    TF[i] = T1[i];
  }
  for(int i=0 ;i<nbr_element2; i++ ){
    TF[nbr_element1+i] = T2[i];
  }
  for(int i=0 ;i<nbr_element1+nbr_element2; i++ ){
    printf("%d " ,TF[i]);
  }
  


  

  return 0;
}