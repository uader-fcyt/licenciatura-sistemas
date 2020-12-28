#include <iostream>
using namespace std;
float rendimiento(float producido, float cosechado);
void avg_all_prov(float localidad[][4], int cant_local[], float rendimiento_avg[], int i);
void  mejor_rendimiento(float rendimiento_avg[], int &top_rendimiento, int i);
float rendimiento_avg_er(float rendimiento, float rendimiento_ans);

int main(int argc, char *argv[]) {
    string nombre_prov[4] = {"", "Buenos Aires", "Entre Rios", "Tucuman"};
    int top_rendimiento = 0;
    int total_localidades = 0;
    float rendimiento_avg[4];
    int cod_prov, cant_local[4];
    float localidad[100][4]; //col: 0cod 1superficie 2toneladas 3rendimiento
    float ans_er[100][5]; //col: 0cod 1toneladas_anio_anterior 2superficie_cosechada_anio_anterior 3rendimiento 4rendimiento_avg_er
    
    for(int j = 0; j < 4; j++){
        rendimiento_avg[j] = 0;
        for(int i = 0; i < 100; i++){
            localidad[i][j] = 0;
            ans_er[i][j] = 0;
        }
    }
    
	for(int i = 1; i <= 3; i++){	
		cout << "Ingrese codigo de provincia (1: Buenos Aires 2: Entre Rios 3: Tucuman)\n";
		cin >> cod_prov;
		cout << "Ingrese cantidad de localidades\n";
		cin >> cant_local[cod_prov];
		for(int j = 0; j < cant_local[cod_prov]; j++){
            cout << "Ingrese codigo de localidad " << j+1 << "/" << cant_local[cod_prov] << endl;
			cin >> localidad[j][0];
			cout << "Ingrese superficie cosechada por localidad\n";
			cin >> localidad[j][1];
			cout << "Ingrese la produccion en toneladas del anio\n";
			cin >> localidad[j][2];
			localidad[j][3] = rendimiento(localidad[cod_prov][2], localidad[cod_prov][1]);
            total_localidades += 1;
		}
		if(cod_prov == 2){
			for(int j = 0; j < cant_local[2]; j++){
			    cout << "Ingrese codigo de localidad " << j+1 << "/" << cant_local[cod_prov] << endl;
			    cin >> ans_er[j][0];
			    cout << "Ingrese superficie cosechada por localidad del anio anterior\n";
			    cin >> ans_er[j][2];
			    cout << "Ingrese la produccion en toneladas del anio anterior\n";
			    cin >> ans_er[j][1];
                ans_er[j][3]= rendimiento(ans_er[j][1], ans_er[j][2]);
                ans_er[j][4] = rendimiento_avg_er(localidad[j][3], ans_er[j][3]);
			}
		}
        avg_all_prov(localidad, cant_local, rendimiento_avg, cod_prov);
        mejor_rendimiento(rendimiento_avg, top_rendimiento, cod_prov);
        cout << nombre_prov[cod_prov] << ":\n";
        for(int j = 0; j < cant_local[cod_prov]; j++){
            cout << "\tCOD: " << localidad[j][0] << "\t" << localidad[j][3] << "[kg/ha]\n";
            if(cod_prov == 2)
                cout << "Rendimiento AVG ER en localidad " << localidad[j][0] << ": " << ans_er[j][4] << endl;
        }
        cout << "AVG rendimiento " << nombre_prov[cod_prov] << ": " << rendimiento_avg[cod_prov] << endl;
	}
    cout << "Provincia de mejor rendimiento: " << nombre_prov[top_rendimiento] << endl;
	return 0;
}

float rendimiento(float producido, float cosechado){
    return producido/cosechado*1000;
}

void avg_all_prov(float localidad[][4], int cant_local[], float rendimiento_avg[], int i){
        for(int j = 0; j < cant_local[i]; j++){
            rendimiento_avg[i] += localidad[j][i];
        }
        rendimiento_avg[i] /= cant_local[i];
}

void  mejor_rendimiento(float rendimiento_avg[], int &top_rendimiento, int i){
    if(rendimiento_avg[i] > top_rendimiento)
        top_rendimiento = rendimiento_avg[i];
}

float rendimiento_avg_er(float rendimiento, float rendimiento_ans){
    return (rendimiento + rendimiento_ans)/2;
}
