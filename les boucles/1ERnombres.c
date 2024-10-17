#include <stdio.h>
#include <stdio.h>

int main()
{

    int n;
    printf("Entrer un nombre :");
    scanf("%d", &n);

    if (n < 2)
    {
        printf("Nombre pas premier!");
    }
    else
    {
        printf("les nombres premier jusqu a %d est :\n" , n);

        for(int i = 2 ; i <= n ; i++ ){
        int nbr_premier=1;  
        for( int j=2 ; j*j<=i ; j++){
            if(i % j == 0){
                nbr_premier=0 ; 
                break;
            }
        }
            if(nbr_premier){
            printf("%d\n" , i);
            }

        }
    }
    return 0;
}