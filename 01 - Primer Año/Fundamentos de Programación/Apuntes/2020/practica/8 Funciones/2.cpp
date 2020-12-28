#include <iostream>
using namespace std;

float menor(float x, float y);

int main(int argc, char *argv[]) {
	float a, b, m;
	cout << "Ingrese 2 numeros: \n";
	cin >> a >> b;
	m = menor(a, b);
	cout << "El menor es: " << m << endl;
	return 0;
}

float menor(float x, float y){
	float min;
	if(x < y)
		min = x;
	else
		min = y;
	return min;
}

