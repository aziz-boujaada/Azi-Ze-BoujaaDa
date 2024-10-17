#include<stdio.h>
#include<stdlib.h>

int main(){

   int Tableux[10];
   int nbr_element;
   int facteur;
 

   printf("Entrer nombre des element:");
   scanf("%d" ,&nbr_element);

   for(int i=0;i<nbr_element;i++){
    printf("element %d:" ,i+1);
    scanf("%d" ,&Tableux[i]);
   }

   printf("Entrer un facteur:");
   scanf("%d" , &facteur);

   if(facteur<=0){
    printf("facteur null ou negetive!");
    return 1;
   }
    
   for(int i=0 ;i<nbr_element;i++)
   printf("%d x %d = %d\n" ,Tableux[i],facteur, Tableux[i]*facteur);

    return 0; 
}