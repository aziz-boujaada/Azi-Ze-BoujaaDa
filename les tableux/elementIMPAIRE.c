#include<stdio.h>
#include<stdlib.h>

int main(){

 int T[10];
 int nbr_element;

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

int impaire=0;
 printf("les nombres IMpaire est:\n");
  for(int i=0 ; i<nbr_element;i++){
    if(T[i] % 2 !=0){
    printf(" %d" ,T[i]);
    printf("|");
    impaire=1;
    }
    
  }
    if(!impaire){
        printf("pas des nombre paire dans tableux!");
    }


        
return 0;
}