#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int main(){

char chainePrincipal[40];
char SousChaine[20];

printf("entrer le chiane principale :");
scanf("%[^\n]" ,&chainePrincipal);


 getchar();


printf("entrer le sous chiane :");
scanf(" %[^\n]" ,&SousChaine);


   int trouver=0;
  for(int i=0 ;i<=strlen(chainePrincipal)-strlen(SousChaine); i++){
        trouver=1;
    for(int j=0 ; j<strlen(SousChaine) ;j++){
      if(strcasecmp(&chainePrincipal[i+j] ,&SousChaine[j])!=0){
        trouver=0;
        break;
      }
    }
    if(trouver){
    break;

    }
  }

  if(trouver){
    printf("sous chaine '%s' touver dans principale chaine\n" ,SousChaine);
  }else{
    printf("sous chaine pas trouver dans principale chaine!");
  }
return 0;
}