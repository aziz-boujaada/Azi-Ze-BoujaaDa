#include<stdio.h>
#include<stdlib.h>

typedef struct {
   
   int X ;
   int Y;
}pointPlan;

int main(){

pointPlan X ,Y ;
    pointPlan *p1 = &X , *p2 = &Y;
  
    printf("Entrer les valeurs de X et Y\n");
    printf("Valeur de X :");
    scanf("%d" ,&p1->X);
    printf("Valeur de Y :");
    scanf("%d" ,&p2->Y);

    printf("point dans un plan avec les champs x et y est: (%d ,%d)" ,p1->X ,p2->Y);

    return 0;
}
