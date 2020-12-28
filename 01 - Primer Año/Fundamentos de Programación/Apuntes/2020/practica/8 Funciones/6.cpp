#include <iostream>
using namespace std;
float mediana(float vec[], int cant);

int main(int argc, char *argv[]) {
	int n = 5;
	float arr[] = {3, 6, 7, 8, 9};
	cout << mediana(arr, n);
	return 0;
}

float mediana(float vec[], int cant){
    float median;
    if(cant % 2 == 1)
        median = vec[int(cant/2)];
    else{
        int i = cant/2;
        median = (vec[i-1]+vec[i])/2;
    }
    return median;
}
