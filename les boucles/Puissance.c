#include <stdio.h>
// puissance
int main()
{

    int base, exposant, j = 1;
    printf("Entrer base : ");
    scanf("%d", &base);
    printf("Entrer exposant : ");
    scanf("%d", &exposant);

    if (exposant < 0)
    {
        printf("exposant est negative!");
        return 1;
    }

    int i = 0;
    while (i < exposant)
    {
        j = j * base;
        i++;
    }

    printf("%d\n", j);

    return 0;
}