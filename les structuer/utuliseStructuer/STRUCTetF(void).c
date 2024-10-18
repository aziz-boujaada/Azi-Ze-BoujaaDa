#include<stdio.h>
#include<stdlib.h>
#include<string.h>


#define MAX_JOUEUR 10
#define MAX_NOM_LENGTH 20
#define MAX_POST_LENGTH 20

typedef struct{
    
    int nombre;
    char Nom[MAX_NOM_LENGTH];
    char Poste[MAX_POST_LENGTH];

}Joueur;

Joueur information[MAX_JOUEUR];
int nbr_joueur=0;


void AFFICHER(){
    if(nbr_joueur==0){
        printf("pas des jeueur!");
    }else{
        printf("====== Les Joueurs ========\n");

        for(int i=0 ; i<nbr_joueur ;i++){
            printf("Joueur %d\n" , i+1);

            printf("Nombre :%d\n" ,information[i].nombre);
            printf("Nom : %s\n" ,information[i].Nom);
            printf("poste : %s\n" ,information[i].Poste);

            printf("__________________________________\n");
        }
    }
}
void AJOUTER(){
 int ajout;

 printf("Entrer nombre des Joueurs pour ajout :");
 scanf("%d" , &ajout);
 printf("______________________________\n");
for(int i=0 ; i<nbr_joueur+ajout ; i++){

printf("Entrer le Nombre de Joueur :");
scanf("%d" ,&information[i].nombre);

printf("Entrer le Nom de Joueur :");
scanf( " %[^\n]" ,information[i].Nom);
  
printf("Entrer le poste de Joueur (Diffence , Millieur , Attaque) :\n");

 int choix_post;
    printf("==== les Post ====\n");
    printf("1-Attaquer\n");
    printf("2-:Millieur\n");
    printf("3-Diffance\n");

    printf("entrer votre POSTE :");
    scanf("%d" , &choix_post);
    printf("______________________________\n");

 switch(choix_post){

    case 1 :{
       strcpy(information[i].Poste ,"Attaquer");
    break;
    }
    case 2 :{
     strcpy(information[i].Poste ,"Millieur");
    break;
    }
    case 3 :{
        strcpy(information[i].Poste ,"Diffance");
    break;
    }
    default :
        printf("choix invalaide!");
    break;
    }
 }
   printf("______________________________\n");


   nbr_joueur+=ajout;
}


   int main(){
 int choix;
    do  {
       printf("1- Ajouter un Joueur\n"); 
       printf("2- Afficher list des Joueurs un Joueur\n"); 
       printf("Entrer votre choix :");
       scanf(" %d" ,&choix);
    

    switch(choix){
        case 1 :{
        system("cls");    
      AJOUTER();
       break;
        }

        case 2 :{
            system("cls");
           AFFICHER();
           break;
        }

        default :
        printf("choix invalaide!");
    }
    }while(choix<2);
    return 0;
   }