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
        if(chaine[j]>='a' && chaine[j]<='z'){
           chaine[j]=chaine[j]-('a' - 'A');
        }
           
        }
    
     
    printf("chaine apre convertion a MAJISCUL: %s" , chaine);
    


    return 0;
}
