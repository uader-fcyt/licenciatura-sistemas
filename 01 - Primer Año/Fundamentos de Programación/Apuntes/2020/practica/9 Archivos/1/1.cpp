#include <iostream>
#include <fstream>
#include <cstdlib>
using namespace std;
void funcion_cuadratica(double a, double b, double c, double y[1001]);

int main(){
    ofstream file;
    double a, b, c, y[1001];
    cout << "Ingrese coeficienteas a, b, c\n";
    cin >> a >> b >> c;
    file.open("./text.txt");
    if(file.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        funcion_cuadratica(a, b, c, y);
        for(int x = 1; x < 1001; x++){
            file << x << " " << y[x] << endl;
        }
        file.close();
    }
    return 0;
}

void funcion_cuadratica(double a, double b, double c, double y[1001]){
    for (int x = 1; x < 1001; x++) {
        y[x] = a*x*x + b*x + c;
    }
}
