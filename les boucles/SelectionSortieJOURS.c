#include <stdio.h>
#include <stdlib.h>

int main()
{

    // int jour = 7;

    // printf("Les jours de la semine :\n");
    // printf("======================\n");
    // printf("1-Lundi\n");
    // printf("2-Mardi\n");
    // printf("3-Mrcredi\n");
    // printf("4-Jeudi\n");
    // printf("5-Vendredi\n");
    // printf("6-samedi\n");
    // printf("7-Dimanche\n");
    // printf("======================\n");

    // printf("Entrer votre choix :");
    // scanf("%d", &jour);

    
    
            
    //     switch (jour)
    //     {
    //     case 1:
    //     {
    //         printf("Lundi\n");
    //         break;
    //     }
    //     case 2:
    //     {
    //         printf("Mardi\n");
    //         break;
    //     }
    //     case 3:
    //     {
    //         printf("Mercredi\n");
    //         break;
    //     }
    //     case 4:
    //     {
    //         printf("Jeudi\n");
    //         break;
    //     }
    //     case 5:
    //     {
    //         printf("Vendredi\n");
    //         break;
    //     }
    //     case 6:
    //     {
    //         printf("Samedi\n");
    //         break;
    //     }
    //     case 7:
    //     {
    //         printf("Dimanche\n");
    //         break;
    //     }
    //     default:
    //         printf("choix ivallide!");
    //         break;
        
    //     }
    //     for(int i=jour ; i<7 ;i++){
    //         switch(i+1){
    //             case 1 : printf("Lundi\n"); break;
    //             case 2 : printf("Mardi\n"); break;
    //             case 3 : printf("Mercredi\n"); break;
    //             case 4 : printf("Jeudi\n"); break;
    //             case 5 : printf("Vendredi\n"); break;
    //             case 6 : printf("Samedi\n"); break;
    //             case 7 : printf("Dimanche\n"); break;
    //         }
    //     }

     char jours[7][20]={"lundi", "Mardi", "Mercredi", "Jeudi", "vendredi", "Samedi", "Dimanche"};
    int choix ;

    for(int i=0 ; i<7 ; i++){
        printf("%d-%s\n" , i+1 ,jours[i]);
    }

     printf("Enter votre choix :");
     scanf("%d" , &choix);
     printf("*****************\n");

     if(choix<1 || choix>7){
        printf("choix invallide!");
     }else{
        printf("votre choix est: %s\n" , jours[choix-1]);
        printf("===================\n");

        printf("les jours suivant est :\n");
          printf("___________________\n");
        for(int i=choix ; i<7;i++){
            printf("%s\n" , jours[i]);
        }
     }
    

    return 0;
}