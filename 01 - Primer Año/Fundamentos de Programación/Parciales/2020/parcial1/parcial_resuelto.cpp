#include <iostream>
#include <iomanip>
using namespace std;

int main(int argc, char *argv[]) {
	int nMat[17][3];        // matriz de enfermos x departamento
	string cDep[17];        // vector con nombres de los dptos.
	int nCod[17];           // vector con codigos de dptos.
	int nTotal[17];         // vector para totales x dptos.
	int nCodigo; 			// codigo de departamento
	int nCantidad=0;        // cantidad de enfermos 
	for (int i=0;i<17;i++){
		nTotal[i]=0;
		for (int j=0;j<3;j++)
			nMat[i][j]=0;  // porque tengo que contar
	}	
	for (int i=0; i<17; i++){
		cout << "Ingrese el código de dpto: ";
		cin >> nCodigo;
		cout << "Ingrese el nombre del departamento: ";
		getline(cin,cDep[ nCodigo-1 ]);  // uso el código como valor de índice
		nCod[ nCodigo-1 ]= nCodigo-1;  
	}
	int nMen13=0,nMuj80=0,nHom75=0;
	int nDNI,nEdad,nCond;
	char cSexo;
	cout << "Ingrese el DNI del enfermo: ";
	cin >> nDNI;
	while (nDNI!=0){
		cout << "Ingrese la edad: ";
		cin >> nEdad;
		cout << "Ingrese el sexo: (F o M) ";
		cin >> cSexo;
		cout << "Ingrese la condición de aislamiento: ";
		cin >> nCond;
		cout << "Ingrese el código de dpto: ";
		cin >> nCodigo;
		// cuento los enfermos x dpto.
		nMat[nCodigo-1][nCond-1]++;
		nTotal[nCodigo-1]++;
		if (nEdad<13){
			nMen13++;
		}
		if (cSexo=='F' && nEdad>80){
			nMuj80++;
		}
		if (cSexo=='M' && nEdad<75){
			nHom75++;
		}
		nCantidad++;
		cout << "Ingrese el DNI del enfermo: ";
		cin >> nDNI;
	}
	cout << "REPORTE DIARIO  COVID-19  ENTRE RÍOS"<<endl;
	cout <<setw(30)<< "DEPARTAMENTO"<<setw(10)<<"INTERNADO"<<setw(10)<<"AISLADO"<<setw(10)<<"DOMICILIO"<<endl;
	for (int i=0; i<17;i++){
		cout <<setw(30)<< cDep[i];
		cout <<setw(10)<<nMat[i][0];
		cout <<setw(10)<<nMat[i][1];
		cout <<setw(10)<<nMat[i][2]<<endl;
	}
	int nAux;
	string cAux;
	for (int i=0; i<16; i++){
		for (int j=i+1;j<17;j++){
			if (nTotal[i]<nTotal[j]){
				nAux=nTotal[i];
				nTotal[i]=nTotal[j];
				nTotal[j]=nAux;
				cAux=cDep[i];
				cDep[i]=cDep[j];
				cDep[j]=cAux;
				// como usé el codigo como índice al cambiar el orden pierdo la referencia del codigo
				// para eso declaré el vector nCod
				// no es necesario porque no lo vuelvo a usar
				nAux=nCod[i];
				nCod[i]=nCod[j];
				nCod[j]=nAux;
				// siendo puristas también habría que cambiar la matriz
			}
		}
	}
	cout <<setw(30)<< "Departamento"<<setw(10)<<"Total"<<endl;
	for (int i=0;i<17;i++){
		cout <<setw(30)<<cDep[i];
		cout <<setw(10)<<nTotal[i]<<endl;
	}
	float nPorc=nMen13/nCantidad*100.0;
	cout << "Porcentaje de menores de 13 años: "<<nPorc<<endl;
	cout << "Cantidad de mujeres mayores a 80 años: "<<nMuj80<<endl;
	cout << "Cantidad de hombres menores a 75 años: "<<nHom75<<endl;
	return 0;
}

