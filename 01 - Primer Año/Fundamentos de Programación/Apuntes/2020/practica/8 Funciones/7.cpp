#include <iostream>
using namespace std;
int moda(int vec[], int cant); 

int main(int argc, char *argv[]) {
	int arr[100], n;
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> arr[i];
	}
	cout << endl << moda(arr, n);
	return 0;
}

int moda(int vec[], int cant){
    int vecModa[100];
	for (int i=0; i<100;i++){
		vecModa[i]=0;
	}
	for (int i=0; i<cant; i++){
		vecModa[vec[i]]++;
	}
	int max=vecModa[0];
	int maxPos=0;
	for (int i=1; i<100; i++){
		if (max<vecModa[i]){
			max=vecModa[i];
			maxPos=i;
		}
	}
	return maxPos;
}
