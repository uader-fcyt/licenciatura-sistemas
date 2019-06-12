#include <iostream>
#include <stdlib.h>

using namespace std;
#define MAX 5
// Version: 20170419
// DEFINICI�N DE TIPOS.

struct nodo_pila
{
    int dato;
    struct nodo_pila* link;
};
typedef struct nodo_pila NPila;

struct NPilaE
{
    int tamanio;
    int dato[MAX];

    int tope;
};

struct NCola
{
    int dato;
    struct NCola* link;
};

struct ColaC
{
    int dato[MAX];
    int tamanio;
    int frente;
    int fondo;
    bool vacia;
    bool llena;
};

struct nodo_listase
{
    int dato;
    struct nodo_listase* link;
};
typedef struct nodo_listase NListaSE;


// DECLARACI�N DE FUNCIONES.

void pila_agregar (NPila* &pila, int ndato);
int pila_obtener (NPila* &pila);
bool pila_vacia (NPila* pila);
void pila_agregar_estatica(NPilaE &pila, int ndato);
int pila_obtener_estatica(NPilaE &pila);
bool pila_vacia_estatica(NPilaE pila);

void cola_agregar (NCola* &frente, NCola* &fondo, int ndato);
int cola_obtener (NCola* &frente, NCola* &fondo);
bool cola_vacia (NCola* frente, NCola* fondo);
void colaCircular_inicializar(ColaC &cola);
void colaCircular_agregar (ColaC &cola, int ndato);
int colaCircular_obtener (ColaC &cola);
bool colaCircular_vacia (ColaC cola);

void listase_mostrar (NListaSE* listase);
void listase_agregar_final (NListaSE* &listase, int ndato);
void listase_agregar_ordenado (NListaSE* &listase, int ndato);
bool listase_eliminar_ocurrencia (NListaSE* &listase, int datoe);
void listase_eliminar_ocurrencias (NListaSE* &listase, int datoe);

void menu_opcion1 (NListaSE* listase);
void menu_opcion2 (NListaSE* &listase);
void menu_opcion3 (NListaSE* &listase);
void menu_opcion4 (NListaSE* &listase);
void menu_opcion5 (NListaSE* &listase);


// DEFINICI�N DE FUNCIONES.

int main (void)
{
    int dato=0;
//    NPila* pila = NULL;
//    NPilaE pila;
//    pila.tamanio=1000; pila.tope=0;

//    NCola* cola_frente = NULL;
//    NCola* cola_fondo = NULL;
    ColaC cola;
    colaCircular_inicializar(cola);
//    NListaSE* listase = NULL;
    //*************PARA PILAS************
/*for( int i=0;i<5;i++){
    cout<<"Ingresar dato a la pila: ";
    cin>>dato;
    pila_agregar_estatica(pila, dato);
}
for(int i=0;i<5;i++){
    cout<<pila_obtener_estatica(pila)<<"->";
}
*/
// *********PARA COLAS***************
 /*   for( int i=0;i<5;i++){
        cout<<"Ingresar dato a la COLA: ";
        cin>>dato;
        cola_agregar(cola_frente,cola_fondo,dato);
    }
    for(int i=0;i<5;i++){
        cout<<cola_obtener(cola_frente,cola_fondo)<<"->";
    }*/
    for( int i=0;i<6;i++){
            cout<<"Ingresar dato a la COLA: ";
            cin>>dato;
            colaCircular_agregar(cola,dato);
        }
    for(int i=0;i<cola.tamanio;i++){
        cout<<colaCircular_obtener(cola)<<"->";
    }
//**********PARA LISTAS*************
/*    int opcion = 0;

    do {
        cout << "************Menu de Opciones************\n";
        cout << endl;
        cout << "****** Lista Simplemente Enlazada ******\n";
        cout << endl;
        cout << "1- Mostrar.\n";
        cout << "2- Insertar N elementos al final.\n";
        cout << "3- Insertar N elementos ordenados.\n";
        cout << "4- Elminar primer ocurrencia de N.\n";
        cout << "5- Elminar todas las ocurrencias de N.\n";
        cout << endl;
        cout << "    0- Salir\n";
        cout << endl;
        cout << "                        Ingrese opcion: ";
        cin >> opcion;
        cout << endl;
        cout << endl;

        switch(opcion)
        {
            case 1:
                menu_opcion1 (listase);
            break;
            case 2:
                menu_opcion2 (listase);
            break;
            case 3:
                menu_opcion3 (listase);
            break;
            case 4:
                menu_opcion4 (listase);
            break;
            case 5:
                menu_opcion5 (listase);
            break;
        }
    } while ( opcion != 0);
*/
    return 0;
}


void menu_opcion1 (NListaSE* listase)
{
    listase_mostrar (listase);
}

void menu_opcion2 (NListaSE* &listase)
{
    int nuevo_dato, cantidad;

    cout << "Cuantos datos aleatorios desea cargar?: ";
    cin >> cantidad;
    cout << endl;
    cout << "Lista de datos cargados:\n";
    cout << endl;
    for (int i=0; i<cantidad; i++)
    {
        nuevo_dato = (rand () % 100) + 1;
        listase_agregar_final (listase, nuevo_dato);
        cout << nuevo_dato << "  ";
    }
    cout << endl;
    cout << endl;
    cout << endl;
}

void menu_opcion3 (NListaSE* &listase)
{
    int nuevo_dato, cantidad;

    cout << "Cuantos datos aleatorios desea cargar?: ";
    cin >> cantidad;
    cout << endl;
    cout << "Lista de datos cargados:\n";
    cout << endl;
    for (int i=0; i<cantidad; i++)
    {
        nuevo_dato = (rand () % 100) + 1;
        listase_agregar_ordenado (listase, nuevo_dato);
        cout << nuevo_dato << "  ";
    }
    cout << endl;
    cout << endl;
    cout << endl;
}

void menu_opcion4 (NListaSE* &listase)
{
    int dato_eliminar;
    bool elimino;

    cout << "Que dato desea eliminar?: ";
    cin >> dato_eliminar;
    cout << endl;

    elimino = listase_eliminar_ocurrencia (listase, dato_eliminar);

    if (elimino)
        cout << "Fue encontrado y eliminado un dato.\n\n";
    else
        cout << "No fue encontrado el dato.\n\n";
    cout << endl;
}

void menu_opcion5 (NListaSE* &listase)
{
    int dato_eliminar;

    cout << "Que dato desea eliminar?: ";
    cin >> dato_eliminar;

    listase_eliminar_ocurrencias (listase, dato_eliminar);

    cout << endl;
    cout << endl;
}
//PILA DINAMICA:
void pila_agregar(NPila* &pila, int Ndato){
    NPila* aux=new NPila();
    aux->dato=Ndato;
    aux->link=pila;
    pila=aux;
}

int pila_obtener(NPila* &pila){
    int dato=0;
   if(!pila_vacia(pila)){
       dato=pila->dato;
       pila=pila->link;

    }
   return dato;
}

bool pila_vacia(NPila *pila){
    if(pila!= NULL) return false;
    else return true;
}
//PILA ESTATICA
void pila_agregar_estatica(NPilaE &pila, int ndato){
    if(pila.tope<pila.tamanio){
    pila.dato[pila.tope]=ndato;
    pila.tope++;
}
}
int pila_obtener_estatica(NPilaE &pila){
    int dato=0;
    if(!pila_vacia_estatica(pila)){
        pila.tope--;
        dato=pila.dato[pila.tope];
    }
    return dato;
}
bool pila_vacia_estatica(NPilaE pila){
    if(pila.tope!=0) return false;
       else return true;
}
//COLA DINAMICA:
void cola_agregar (NCola* &frente, NCola* &fondo, int ndato){
    NCola* aux=new NCola();
    aux->dato=ndato;
    aux->link=NULL;
    if(frente==NULL && fondo==NULL){
        frente=aux; fondo=aux;
    }else {
        fondo->link=aux;
        fondo=aux;
    }
}

int cola_obtener (NCola* &frente, NCola* &fondo){
    NCola*aux=frente;
    int dato=0;
    if(!cola_vacia(frente, fondo)){
        dato=frente->dato;
        frente=aux->link;
        delete aux;
    }
    return dato;
}

bool cola_vacia (NCola* frente, NCola* fondo){
    if(frente!=NULL && fondo!=NULL) return false;
    else return true;
}
//COLA CIRCULAR:

void colaCircular_inicializar(ColaC &cola){
    cola.frente=0;
    cola.fondo=0;
    cola.tamanio=MAX;
    cola.llena=false;
    cola.vacia=true;
}

void colaCircular_agregar(ColaC &cola, int ndato){
    cola.vacia=false;
    if (cola.llena){
        cout<<"cola llena, no se puede ingresar "<<ndato<<endl;
    }else {
        cola.dato[cola.fondo]=ndato;
        cola.fondo++;
        if (cola.fondo>=cola.tamanio)cola.fondo=0;
        if(cola.fondo==cola.frente)cola.llena=true;
    }
}
int colaCircular_obtener(ColaC &cola){
    cola.llena=false;
    int dato=0;
    if(cola.vacia) return 0;
    else{
        dato=cola.dato[cola.frente];
        cola.frente++;
        if (cola.frente==cola.fondo)cola.vacia=true;
        if(cola.frente==cola.tamanio)cola.frente=0;
    }
    return dato;
}


//LISTAS SIMPLEMENTE ENLAZADAS:
void listase_mostrar (NListaSE* listase)
{
    cout << "Lista Simplemente Enlazada:\n\n";
    while (listase != NULL)
    {
        cout << listase->dato << " -> ";
        listase = listase->link;
    }
    cout << "NULL\n";
    cout << endl;
    cout << endl;
}

void listase_agregar_final (NListaSE* &listase, int ndato)
{
    NListaSE* aux_lse = listase;
    NListaSE* nuevo_nodo = new (NListaSE);
    nuevo_nodo->dato = ndato;
    nuevo_nodo->link = NULL;

    if (aux_lse == NULL)
        listase = nuevo_nodo;
    else
    {
        while (aux_lse->link != NULL)
            aux_lse = aux_lse->link;
        aux_lse->link = nuevo_nodo;
    }
}

void listase_agregar_ordenado (NListaSE* &listase, int ndato)
{
    NListaSE* actual = listase;
    NListaSE* anterior = NULL;
    NListaSE* nuevo_nodo = new (NListaSE);
    nuevo_nodo->dato = ndato;

    while (actual != NULL && actual->dato < ndato)
    {
        anterior = actual;
        actual = actual->link;
    }

    if (anterior == NULL)
    {
        nuevo_nodo->link = listase;
        listase = nuevo_nodo;
    } else
    {
        nuevo_nodo->link = anterior->link;
        anterior->link = nuevo_nodo;
    }
}

bool listase_eliminar_ocurrencia (NListaSE* &listase, int datoe)
{
    NListaSE* actual = listase;
    NListaSE* anterior = NULL;
    NListaSE* aux = NULL;

    while ((actual != NULL) and (actual->dato != datoe))
    {
        anterior = actual;
        actual = actual->link;
    }

    if ((actual != NULL) and (anterior == NULL))
    {
        aux = actual;
        listase = listase->link;
        free (aux);
        return true;
    } else if ((actual != NULL) and (anterior != NULL))
    {
        aux = actual;
        anterior->link = actual->link;
        free (aux);
        return true;
    }

    return false;
}

void listase_eliminar_ocurrencias (NListaSE* &listase, int datoe)
{
    while (listase_eliminar_ocurrencia (listase, datoe));
}
