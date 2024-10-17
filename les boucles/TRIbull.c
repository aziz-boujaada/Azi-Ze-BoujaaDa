#include<stdio.h>
#include<stdlib.h>

int main(){
 int T[100];
 int nbr_element , element;
 
 printf("entrer nombre des element:");
 scanf("%d" , &nbr_element);

 for(int i=0 ;i<nbr_element ; i++){
    printf("element %d :" ,i+1);
    scanf("%d" , &T[i]);
 }
    printf("=======================\n");
 for(int i =0 ; i<nbr_element ; i++){
    for(int j=0 ; j<nbr_element-i-1 ; j++){
        if(T[j] > T[j+1]){
            int temp = T[j];
            T[j] = T[j+1];
            T[j+1] = temp;
        }
    }
 }
 printf("les elements apres trie \n");
 printf("____________________________\n");
    for(int i=0 ; i<nbr_element; i++){
        printf("%d" ,T[i]);
       
       printf("|");
                                    
    }
    return 0;

}