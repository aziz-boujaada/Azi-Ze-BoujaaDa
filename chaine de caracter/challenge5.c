#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int main(){

char chaine[20];

printf("Entrer une chaine de caracter :");
scanf("%[^\n]" , &chaine);

for(int i=0; i<strlen(chaine) ; i++){
    if(chaine[i]=='\n'){
        chaine[i]='\0';
        break;
    }
}

for(int i=0; i<strlen(chaine) ; i++){
    for(int j=0; j<strlen(chaine)-i-1 ; j++){
        
        int cash=chaine[j];
        chaine[j]=chaine[j+1];
        chaine[j+1]=cash;

    }
    chaine[strlen(chaine)]='\0';


}
for(int i=0; i<strlen(chaine) ; i++)
   printf( "%c", chaine[i]);


    return  0;
}