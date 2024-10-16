#include <stdio.h>
#include <stdlib.h>

int main()
{

  int nombre;
  int facteurs = 0;

  printf("Entrer voter nombre :");
  scanf("%d", &nombre);

  // for(int i=1 ; i<=nombre ; i++){
  //  facteurs*=i;
  //}
  // printf("le facteuriell de nombre %d est : %d" , nombre,facteurs);
  for (int j = 1; j <= nombre; j++)
  {
    int facteurs = 1;
    if (nombre % j == 0)
    {
      printf("%d\n", j);
    }
  }

  return 0;
}