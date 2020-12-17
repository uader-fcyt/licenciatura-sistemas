// vector debe estar ordenado
#include <iostream>
using namespace std;
float mediana(<tipoDato> vec[], int muestra);

int main(int argc, char *argv[]) {

	return 0;
}

float mediana(<tipoDato> vec[], int muestra){
    float median;
    if(cant % 2 == 1) //si la muestra es impar
        median = vec[int(cant/2)];
    else{ //si la muestra es par
        int i = cant/2;
        median = (vec[i-1]+vec[i])/2;
    }
    return median;
}
