#include <stdio.h>
#include <stdlib.h>

int main()
{

    int T[10];
    int T1[10];
    int nbr_element;

    printf("Entree nombr element :");
    scanf("%d", &nbr_element);

    for (int i = 0; i < nbr_element; i++)
    {
        printf("element %d:", i + 1);
        scanf("%d", &T[i]);

        if (nbr_element > 10)
        {
            printf("taille grand!");
            return 1;
        }
    }
    for (int i = 0; i < nbr_element; i++)
    {
        T1[i] = T[i];
    }

    printf("le tableux original :\n");
    for (int i = 0; i < nbr_element; i++)
    {
        printf(" %d\t", T[i]);
        printf("|");
    }
    printf("\n");
    printf("le tableux copie :\n");
    for (int i = 0; i < nbr_element; i++)
    {
        printf(" %d\t", T1[i]);
        printf("|");
    }

    return 0;
}