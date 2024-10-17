#include <stdio.h>
#include<string.h>

int main() {
    char chaine[100]; 
    char caracter;
    int char_nbr=0;
     
    printf("Entrer une chaine de cararter : "); 
    scanf("%s" , &chaine);
    
    printf("Entrer une  cararter : "); 
    scanf(" %c" , &caracter); 
    
    for(int i=0 ; i<100 ; i++){
        if(chaine[i]== '\n'){
            chaine[i]='\0';
            break;
        }
    }
    for(int j=0 ; j<100 ; j++){
        if(chaine[j]==caracter){
            char_nbr++;
        }
           
        }
    
     
    printf("caracter repeter dans chaine: %d" , char_nbr);
    


    return 0;
}