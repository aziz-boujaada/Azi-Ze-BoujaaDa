#include <stdio.h>
#include<string.h>

int main() {
    char chaine1[100]; 
    char chaine2[100]; 
    printf("Entrer une chaine de cararter 1: "); 
    scanf("%s" , &chaine1); 
    printf("Entrer une chaine de cararter 2: "); 
    scanf("%s" , &chaine2); 
    
    for(int i=0 ; i<100 ; i++){
        if(chaine1[i]&&chaine2[i] == '\n'){
            chaine1[i]='\0';
            chaine2[i]='\0';
            break;
        }
    }
     if(strcmp(chaine1,chaine2)==0){
         printf("les deux chaine sont egale");
     }else{
         printf("les deux chaine est different ");
     }
        
     

    return 0;
}
