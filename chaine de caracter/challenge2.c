#include <stdio.h>
#include<string.h>

int main() {
    char chaine[100]; 
     int langeure=0;
     printf("entrer une chaine de caracter :"); 
     gets(c);
     for(int i=0 ; i<100 ; i++){
         if(chaine[i]== '\n'){
            chaine[i]= '\0';
            break;
         }
     }
     for( int j=0 ; j<chaine[langeure] ;j++){
       if(chaine[j] != '\0')
             langeure++; 
         }
     printf(" la langeure de votre chaine est : %d" , langeure);
     

    return 0;
}