#include <stdio.h>
int fac(int n)
{
    if (n <= 1)  return 1;
    return n * fac(n - 1);
}

int main()
{
    int a;
    printf("enter n:");
    scanf("%d", &a);

    for (int i = 0; i <= a; ++i)
    {
       
        for (int j = 1; j <= a - i; j++)
        {
            printf(" ");
        }
        for (int j = 0; j <= i; ++j)
        {
            int c = fac(i) / (fac(i - j) * fac(j));
            if(c>=100){

            printf("%d ", c);
            }else if(c>=10){
                printf("%d  ", c);

            }else{
                 printf("%d   ", c);
            }
        }
        printf("\n");
    }
}