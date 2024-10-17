#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#include<string.h>

int main(){

  srand((unsigned int)(time(NULL)));

int taille;
char nombre[]="0123456789";
char miniscule[]= "abcdefjhigklmnopqrstuvwxyz";
char majiscule[]= "ABCDEFJHIGKLMNOPQRSTUVWXYZ";
char password[16];

printf("entrer taille de votre mot de pass:");
scanf("%d" , &taille);

if(taille<=3){
    printf("la taiile de password short!");
    return 1;
}

password[0]=nombre[rand() % 10];
password[1]=miniscule[rand() % 26];
password[2]=majiscule[rand() % 26];

for(int i=0 ; i<taille ; i++){
   int randtype=rand() % 3;

   if(randtype==0){
    password[i] = nombre[rand() % 10];
   }
   else if(randtype==1){
    password[i]=miniscule[rand() % 26];
   }
   else if(randtype==2){
    password[i]=majiscule[rand() % 26];
   }
}
    password[taille] = '\0';
    printf("votre password est : %s" , password);
return 0;
}