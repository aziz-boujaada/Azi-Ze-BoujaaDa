#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int main(){

  char chaine[20];
  char sansespace[20];
  int j=0;

printf("Entrer une chaine de caracter:");
scanf("%[^\n]" , &chaine);

for(int i=0 ;chaine[i]!='\0' ;i++){
    if(chaine[i] != ' '){
        sansespace[j]=chaine[i];
        j++;
    }

}
sansespace[j] ='\0';
printf("votre chine de cacacrter est:%s" , sansespace);

    return 0;
}