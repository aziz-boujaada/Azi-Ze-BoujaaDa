#include <stdio.h>
#include <stdlib.h>
int main()
{

    int tableux[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int X, start, end, mill;

    printf("Entrer la valeure de X pour rechercher :");
    scanf("%d", &X);

    start = 0;
    end = 9;
    int trouver = 0;

    while(start <= end){
    
        mill = (start + end) / 2;

        if (tableux[mill] == X)
        {
            trouver = 1;
            printf("la position de votre nombre est %d", mill);
            break;
        }

        else if (tableux[mill] > X)
        {
            end = mill - 1;
        }
        else
        {
            start = mill + 1;
        }
    
 }
        if(trouver==0){
        printf("Le nombre X pas trouver dans le tableux !");
        }
    
    return 0;
}
