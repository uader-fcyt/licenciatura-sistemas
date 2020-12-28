#include <iostream>
#include <cmath>
using namespace std;

int main(int argc, char *argv[]) {
	float hipot(float cateto_op, float cateto_ad);
	long long unsigned int facto(int n);
	int division_entera(int a, int b, int &r); //dividendo, divisor, resto
	void intercambio(char &x, char &y);
	int suma_vecto(int lista[], int largo);
	return 0;
}

float hipot(float cateto_op, float cateto_ad){
    return sqrt(cateto_op*cateto_op + cateto_ad*cateto_ad);
}

long long unsigned int facto(int n){
    long long unsigned int resultado = 1;
    for(int i = 1; i <= n; i++){
        resultado *= i;
    }
    return resultado;
}

int division_entera(int a, int b, int &r){
    r = a % b;
    return a / b;
}

void intercambio(char &x, char &y){
    char aux = x;
    x = y;
    y = aux;
}

int suma_vecto(int lista[], int largo){
    int suma = 0;
    for(int i = 0; i < largo; i++){
        suma += lista[i];
    }
    return suma;
}
