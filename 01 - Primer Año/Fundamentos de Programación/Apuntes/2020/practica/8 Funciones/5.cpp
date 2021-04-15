#include <iostream>
using namespace std;

void order_arr(int arr[], int n);

int main(int argc, char *argv[]) {
	int vec[10] = {0, 4, 5, 8, 43, 75, 7686, 765, 5, 1};
	order_arr(vec, 10);
	return 0;
}

void order_arr(int arr[], int n){
	for(int i = 0; i < (10+1); i++){
		for(int j = i+1; j < 10; j++){
			if(arr[i] > arr[j]){
				int aux = arr[i];
				arr[i] = arr[j];
				arr[j] = aux;
			}
		}
	}
	
	for(int i = 0; i < 10; i++){
		cout << arr[i] << " ";
	}
}

