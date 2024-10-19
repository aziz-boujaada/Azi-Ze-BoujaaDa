#include<stdio.h>
#include<stdlib.h> 


#define T_MAX 2
typedef struct 
{
  float loungauer;
  float largeure;


} Rectangle;


float Clcule_Aire_Rectangle( Rectangle rect ){
    return rect.loungauer*rect.largeure;

}
 int Les_valeur(float loungauer ,float largeure){
    return (loungauer>0 && largeure>0);
    
 }

int main(){
   Rectangle aire;
     
do{

    printf("entrer la loungeure de rectangle:");
    scanf("%f" , &aire.loungauer);

    printf("entrer la loungeure de rectangle:");
    scanf("%f" , &aire.largeure);

    if(!Les_valeur(aire.loungauer ,aire.largeure)){
    printf("les valeur negetif!\n");
    }
}while(!Les_valeur(aire.loungauer ,aire.largeure));
  
    float Aire_rectangle=Clcule_Aire_Rectangle(aire);
     printf("Aire De Rectongle est : %f" ,Aire_rectangle);
   
    return 0;
}



