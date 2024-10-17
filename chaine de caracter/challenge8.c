#include <stdio.h>
#include<string.h>

int main() {
    char chaine[30]; 
  
  
     
    printf("Entrer une chaine de cararter : "); 
    scanf("%s" , &chaine);
    
   
    
    for(int i=0 ; i<30 ; i++){
        if(chaine[i]== '\n'){
            chaine[i]='\0';
            break;
        }
    }
   for(int j=0 ; j<30 ; j++){
       if(chaine[j]>='A' && chaine[j]<='Z'){
           chaine[j]= chaine[j]-('A'-'a');
       }
   }
     
    printf("chaine apre convertion a minscule: %s" , chaine);
    


    return 0;
}