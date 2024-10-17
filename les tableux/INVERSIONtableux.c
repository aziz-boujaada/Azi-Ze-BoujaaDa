#include<stdio.h>
#include<stdlib.h>

int main(){

 int T[10];
 int nbr_element;

  printf("Entrer nombr element :");
  scanf("%d" , &nbr_element);

  if(nbr_element>10){
    printf("taille grand!");
    return 1;
  }

  for(int i=0 ;i<nbr_element ; i++){
    printf("Element %d:" , i+1);
    scanf("%d" , &T[i]);
  }

  for(int i=0 ; i<nbr_element;i++){
    for(int j=0 ; j<nbr_element-i-1;j++){
        int temp = T[j];
            T[j] = T[j+1];
          T[j+1] = temp;
    }
  }
  printf("votre tableux inverser\n");
  for(int i=0 ; i<nbr_element;i++){
    printf("%d" , T[i]);
  }

    return 0;
}